import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Libros } from '../../_services/Libros/model/Libros';
import { LibroService } from '../../_services/Libros/libro.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
    Libros:Observable<Libros[]>;

  constructor(private librosService: LibroService, private router:Router) { }

  ngOnInit(){
    this.reloadData();
  }

  reloadData(){
    this.Libros=this.librosService.getLibrosList();
  }

  libroDetalles(id:number){
    this.router.navigate(['libros/perfillibro',id]);
  }

}
