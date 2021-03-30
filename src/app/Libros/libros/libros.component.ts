import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
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

  Libro: Observable<Libros[]>;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private LibroService: LibroService, private router:Router) { }

  ngOnInit(){
    this.reloadData();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      search: true,
      paging: true
    };
  }

  reloadData(){
    this.LibroService.getLibrosList().subscribe(libros => {
      console.log(libros);
      this.Libro = libros;
      this.dtTrigger.next();
    })
  }

  libroPedir(id:number){
    this.router.navigate(['libros/pedirlibro',id]);
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
