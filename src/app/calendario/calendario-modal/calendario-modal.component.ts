import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { CalendarioService } from "app/services/calendario.service";
import { Profile } from "../calendario.component";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Inject } from "@angular/core";
import { AuthService } from "app/services/auth.service";
import { first } from "rxjs/operators";
import Swal from "sweetalert2";
@Component({
  selector: "app-calendario-modal",
  templateUrl: "./calendario-modal.component.html",
  styleUrls: ["./calendario-modal.component.css"],
})
export class CalendarioModalComponent implements OnInit {
  range = new FormGroup({
    start: new FormControl("2021-05-12T22:00:00.000Z"),
    end: new FormControl(),
  });

  dieta = false;
  rutina = false;
  minDate: Date;
  maxDate: Date;
  posicion1;

  filterData;
  addEventForm: FormGroup;
  selectControl: FormControl = new FormControl();
  selectControlDieta: FormControl = new FormControl();
  selectControlRutina: FormControl = new FormControl();
 
  resultadoSelectRutina = "";
  resultadoSelectDieta = "";
  resultadoSelect;
  ComentariosControl: FormControl = new FormControl('', [ Validators.required]);
  fechaStart;
  fechaEnd;
  tipoUsuario;
  imagen;
  datoId;
  diasMaximo;

  fecha: Date;
  diasArray;
  TotaldiasArray = [];
  checked = true;
  dia = 1;
  posicion;

  lastChecked = false;
  selectedDay: string = "";
  allProfiles = [
    new Profile("Dieta"),
    new Profile("Rutina"),
    new Profile("Comentarios"),
  ];
  successdata: Response;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private authService: AuthService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CalendarioModalComponent>,

    private calendarioService: CalendarioService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(this.data.dateStr);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  ngOnInit(): void {
  
    console.log(this.data);
    console.log(this.data.idUser);

    this.range = new FormGroup({
      start: new FormControl(this.data.dateStr + "T22:00:00.000Z"),
      end: new FormControl(),
    });
  }

  onSubmit(): void {
   
    console.log("test");

    console.log(this.resultadoSelect);

    function convertend(str) {
      var date = new Date(str),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
      return [date.getFullYear(), mnth, day].join("-");
    }

    if (this.resultadoSelect == "Dieta") {
      this.fechaEnd = convertend(this.range.controls.end.value);
      this.fechaStart = this.range.controls.start.value.split("T")[0];

      let newDateStart = new Date(this.fechaStart);
      let newDateEnd = new Date(this.fechaEnd);

      console.log(newDateStart);
      console.log(newDateEnd);
      console.log(this.filterData);
      if(this.selectControlDieta.value==null){
        this.posicion=0;
     
      }else{
        this.posicion=this.selectControlDieta.value;
      }
      console.log(this.posicion);
      console.log(this.filterData);
      
      console.log(this.filterData[this.posicion]["idDieta"]);
      this.datoId = this.fb.group({
        id: this.filterData[this.posicion]["idDieta"],
      });

      this.dia = 1;
      this.authService
        .obtenerDias(this.datoId.value)
        .pipe(first())
        .subscribe((data) => {
          this.diasMaximo = Object.keys(data).length;
          console.log(this.diasMaximo);

          this.TotaldiasArray = [];

          while (
            newDateStart.getMonth() != newDateEnd.getMonth() ||
            newDateStart.getDate() != newDateEnd.getDate() ||
            newDateStart.getFullYear() != newDateEnd.getFullYear()
          ) {
            if (this.dia > this.diasMaximo) {
              this.dia = 1;
            }

            this.TotaldiasArray.push({
              date: newDateStart,
              nDia: this.dia,
              idUsuario: this.data.idUser,
              idDieta: this.filterData[this.posicion]["idDieta"],
            });
            newDateStart = new Date(newDateStart);
            newDateStart.setDate(newDateStart.getDate() + 1);
            this.dia++;
          }
          if (this.dia > this.diasMaximo) {
            this.dia = 1;
          }

          this.TotaldiasArray.push({
            date: newDateStart,
            nDia: this.dia,
            idUsuario: this.data.idUser,
            idDieta: this.filterData[this.posicion]["idDieta"],
          });
          newDateStart = new Date(newDateStart);
          newDateStart.setDate(newDateStart.getDate() + 1);
          this.dia++;
          console.log(this.TotaldiasArray);

          this.dia = 0;

          this.authService
            .comprovarDietasEnDias(this.TotaldiasArray)
            .pipe(first())
            .subscribe((data) => {
              console.log(data);
              this.dialogRef.close('Pizza!');

              if (data!='works') {
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'No se permite mas de una dieta en el mismo dia!',
                 
                })
              }else if (data=='works') {
                Swal.fire(
                  'Buen trabajo!',
                  'Rutina insertada correctamente!',
                  'success'
                )
                
              }
             
            });
        });
    } else if (this.resultadoSelect == "Rutina") {
      this.fechaEnd = convertend(this.range.controls.end.value);
      this.fechaStart = this.range.controls.start.value.split("T")[0];
      this.TotaldiasArray = [];
      let newDateStart = new Date(this.fechaStart);
      let newDateEnd = new Date(this.fechaEnd);

      console.log(newDateStart);
      console.log(newDateEnd);
      console.log(this.selectControlRutina.value);
      if(this.selectControlRutina.value==null){
        this.posicion=0;
     
      }else{
        this.posicion=this.selectControlRutina.value;
      }
      console.log(this.posicion);
      console.log(this.filterData);
      
      console.log(this.filterData[this.posicion]["idRutina"]);
      this.datoId = this.fb.group({
        id: this.filterData[this.posicion]["idRutina"],
      });

      this.dia = 1;
      this.authService
        .obtenerDiasRutina(this.datoId.value)
        .pipe(first())
        .subscribe((data) => {
          console.log(data);
          
          this.diasMaximo = Object.keys(data).length;
          console.log(this.diasMaximo);

          this.TotaldiasArray = [];

          while (
            newDateStart.getMonth() != newDateEnd.getMonth() ||
            newDateStart.getDate() != newDateEnd.getDate() ||
            newDateStart.getFullYear() != newDateEnd.getFullYear()
          ) {
            if (this.dia > this.diasMaximo) {
              this.dia = 1;
            }

            this.TotaldiasArray.push({
              date: newDateStart,
              nDia: this.dia,
              idUsuario: this.data.idUser,
              idrutina: this.filterData[this.posicion]["idRutina"],
            });
            newDateStart = new Date(newDateStart);
            newDateStart.setDate(newDateStart.getDate() + 1);
            this.dia++;
          }
          if (this.dia > this.diasMaximo) {
            this.dia = 1;
          }

          this.TotaldiasArray.push({
            date: newDateStart,
            nDia: this.dia,
            idUsuario: this.data.idUser,
            idrutina: this.filterData[this.posicion]["idRutina"],
          });
          newDateStart = new Date(newDateStart);
          newDateStart.setDate(newDateStart.getDate() + 1);
          this.dia++;
          console.log(this.TotaldiasArray);

          this.dia = 0;

          this.authService
            .comprovarRutinasEnDias(this.TotaldiasArray)
            .pipe(first())
            .subscribe((data) => {
              console.log(data);
              this.dialogRef.close('Pizza!');

              
              if (data!='works') {
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'No se permite mas de una rutina en el mismo dia!',
                 
                })
              }else if (data=='works') {
                Swal.fire(
                  'Buen trabajo!',
                  'Rutina insertada correctamente!',
                  'success'
                )
                
              }
             
            });
        });
    } else if (this.resultadoSelect == "Comentarios") {
      this.fechaStart = this.range.controls.start.value.split("T")[0];
      let newDateStart = new Date(this.fechaStart);
      this.TotaldiasArray = [];
      if (this.lastChecked == true && this.range.controls.end.value != null) {
        console.log("true");

        this.fechaEnd = convertend(this.range.controls.end.value);

        let newDateEnd = new Date(this.fechaEnd);

        while (
          newDateStart.getMonth() != newDateEnd.getMonth() ||
          newDateStart.getDate() != newDateEnd.getDate() ||
          newDateStart.getFullYear() != newDateEnd.getFullYear()
        ) {
          if (this.dia > this.diasMaximo) {
            this.dia = 1;
          }

          this.TotaldiasArray.push({
            date: newDateStart,
            comentario: this.ComentariosControl.value,
            idUsuario: this.data.idUser,
          });
          newDateStart = new Date(newDateStart);
          newDateStart.setDate(newDateStart.getDate() + 1);
          this.dia++;
        }
        if (this.dia > this.diasMaximo) {
          this.dia = 1;
        }

        this.TotaldiasArray.push({
          date: newDateStart,
          comentario: this.ComentariosControl.value,
          idUsuario: this.data.idUser,
        });
        newDateStart = new Date(newDateStart);
        newDateStart.setDate(newDateStart.getDate() + 1);
        this.dia++;
        console.log(this.TotaldiasArray);

        this.dia = 0;

        this.authService
          .guardarComentarios(this.TotaldiasArray)
          .pipe(first())
          .subscribe((data) => {
            console.log(data);
          });

         
      } else {
        console.log(this.ComentariosControl.value);
        
        this.TotaldiasArray.push({
          date: newDateStart,
          idUsuario: this.data.idUser,
          comentario: this.ComentariosControl.value,
        });
        console.log(this.TotaldiasArray);

        this.authService
          .guardarComentarios(this.TotaldiasArray)
          .pipe(first())
          .subscribe((data) => {
            console.log(data);
            this.dialogRef.close('Pizza!');

             if (data=='works') {
              Swal.fire(
                'Buen trabajo!',
                'Comentario insertado correctamente!',
                'success'
              )
              
            }
          });
      }
    }

    this.imagen=null;
  }

  onChange(index) {
    this.lastChecked = index.checked;
  }

  mySelectHandlerDieta($event) {
    console.log($event);

   
    if($event==null){
      this.posicion1=0;
      this.resultadoSelectDieta='0';
    }else{
      this.posicion1=$event;
      this.resultadoSelectDieta=$event+'';
    }
  console.log(this.filterData[this.posicion1].Imagen);
  
        this.imagen=this.filterData[this.posicion1].Imagen;
    

  }
  mySelectHandlerRutina($event) {
console.log($event);

   
    if($event==null){
      this.posicion1=0;
      this.resultadoSelectRutina='0';
    }else{
      this.posicion1=$event;
      this.resultadoSelectRutina=$event+'';
    }

console.log(this.filterData);

  
        this.imagen=this.filterData[this.posicion1].imagen;
   
    
    
  }

  mySelectHandler($event) {
    this.resultadoSelect = $event;
    this.imagen=null;
    if (this.resultadoSelect == "Dieta") {
      this.tipoUsuario = this.authService.getNpremium();
      console.log(this.tipoUsuario);
    
     
 
        console.log(this.data.idUser);
        this.authService
          .loadDietasUsuario(this.tipoUsuario)
          .pipe(first())
          .subscribe((data) => {
            console.log(data);
          
            this.filterData = data;
          });
      
    } else if (this.resultadoSelect == "Rutina") {
      this.tipoUsuario = this.authService.getNpremium();
      console.log(this.tipoUsuario);

      
        this.authService
          .loadRutinasUsuario(this.tipoUsuario)
          .pipe(first())
          .subscribe((data) => {
           
            console.log(data);
            this.filterData = data;
          });
      
    } else if (this.resultadoSelect == "Comentarios") {
    }
  }
  selectChangeHandler(event: any) {
    //update the ui
    this.selectedDay = event.target.value;

    this.Tipos();
  }

  Tipos() {
    if ((this.selectedDay = "Dieta")) {
      this.dieta = true;
    } else if ((this.selectedDay = "Rutina")) {
      this.rutina = true;
      this.dieta = false;
    } else if ((this.selectedDay = "Comentarios")) {
      this.rutina = false;
      this.dieta = false;
    }
  }
}
