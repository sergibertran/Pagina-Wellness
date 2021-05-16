import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { CalendarioService } from "app/services/calendario.service";
import { Profile } from "../calendario.component";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Inject } from "@angular/core";
import { AuthService } from "app/services/auth.service";
import { first } from "rxjs/operators";
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
  datoFechas: FormGroup;
  filterData;
  addEventForm: FormGroup;
  selectControl: FormControl = new FormControl();
  selectControlDieta: FormControl = new FormControl();
  selectControlRutina: FormControl = new FormControl();
  selectControlComentarios: FormControl = new FormControl();
  resultadoSelectRutina = "";
  resultadoSelectDieta = "";
  resultadoSelect;

  fechaStart;
  fechaEnd;
  tipoUsuario;
  datoId;
  diasMaximo;
  myForm: FormGroup;
  fecha: Date;
  diasArray;
  TotaldiasArray = [];
  checked = true;
  dia = 1;
  myGroup: FormGroup;
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

    private calendarioService: CalendarioService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(this.data.dateStr);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  ngOnInit(): void {
    this.myGroup = new FormGroup({
      comentarios: new FormControl(),
    });

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

      console.log(this.filterData[0]["idDieta"]);
      this.datoId = this.fb.group({
        id: this.filterData[0]["idDieta"],
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
              idDieta: this.filterData[0]["idDieta"],
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
            idDieta: this.filterData[0]["idDieta"],
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

      console.log(this.filterData[0]["idRutina"]);
      this.datoId = this.fb.group({
        id: this.filterData[0]["idRutina"],
      });

      this.dia = 1;
      this.authService
        .obtenerDiasRutina(this.datoId.value)
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
              idrutina: this.filterData[0]["idRutina"],
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
            idrutina: this.filterData[0]["idRutina"],
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
            comentario: this.myGroup.controls.comentarios.value,
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
          comentario: this.myGroup.controls.comentarios.value,
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
        console.log(this.myGroup.controls.comentarios.value);
        
        this.TotaldiasArray.push({
          date: newDateStart,
          idUsuario: this.data.idUser,
          comentario: this.myGroup.controls.comentarios.value,
        });
        console.log(this.TotaldiasArray);

        this.authService
          .guardarComentarios(this.TotaldiasArray)
          .pipe(first())
          .subscribe((data) => {
            console.log(data);
          });
      }
    }
  }

  onChange(index) {
    this.lastChecked = index.checked;
  }

  mySelectHandlerDieta($event) {
    this.resultadoSelectDieta = $event;
  }
  mySelectHandlerRutina($event) {
    this.resultadoSelectRutina = $event;
  }

  mySelectHandler($event) {
    this.resultadoSelect = $event;

    if (this.resultadoSelect == "Dieta") {
      this.tipoUsuario = this.authService.getNpremium();
      console.log(this.tipoUsuario);

      if (this.tipoUsuario == 0) {
 
        console.log(this.data.idUser);
        this.authService
          .loadDietasUsuario(this.tipoUsuario)
          .pipe(first())
          .subscribe((data) => {
            console.log(data);

            this.filterData = data;
          });
      }else if (this.tipoUsuario == 1){
        this.authService
        .loadDietasUsuarioPremium(this.data.idUser)   
        .pipe(first())
        .subscribe((data) => {
          console.log(data);

          this.filterData = data;
        });

      }
    } else if (this.resultadoSelect == "Rutina") {
      this.tipoUsuario = this.authService.getNpremium();
      console.log(this.tipoUsuario);

      if (this.tipoUsuario == 0) {
        this.authService
          .loadRutinasUsuario(this.tipoUsuario)
          .pipe(first())
          .subscribe((data) => {
            console.log(data);
            this.filterData = data;
          });
      }
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
