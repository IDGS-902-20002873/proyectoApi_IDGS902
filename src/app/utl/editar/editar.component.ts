import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnosUtl } from 'src/app/interfaces/utl.interface';
import { ProyectoApiService } from 'src/app/proyecto-api.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  // Editar el registro de un alumno
  regAlumno:AlumnosUtl={
    id:0,
    nombre:'',
    edad:0,
    correo:''
  }

  constructor(private alumnosutl:ProyectoApiService, private router:Router){}
  
  editar(){
    this.alumnosutl.editarAlumno(this.regAlumno).subscribe({
      next:()=>console.log(),
      error:(e)=> console.error(e),
      complete:()=>console.info()})

      this.regAlumno={
        id:0,
        nombre:'',
        edad:0,
        correo:''
      }

      this.router.navigate(['verAlumnos'])

  }

  
}
