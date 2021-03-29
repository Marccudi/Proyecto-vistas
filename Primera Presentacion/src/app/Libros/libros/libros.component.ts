import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Ejemplar } from '../../_services/Ejemplar/model/Ejemplar';
import { EjemplarService } from '../../_services/Ejemplar/ejemplar.service';
import { LibroService } from "../../_services/Libros/libro.service";
import { Libros } from "../../_services/Libros/model/Libros";

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
  Libro:Observable<Libros[]>;

  constructor(private LibroService: LibroService, private router:Router) { }

  ngOnInit(){
    this.reloadData();
  }

  reloadData(){
    this.Libro=this.LibroService.getLibrosList();
  }

  libroPedir(id:number){
    this.router.navigate(['libros/pedirlibro',id]);
  }



}
