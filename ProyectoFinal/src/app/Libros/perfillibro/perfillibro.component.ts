import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibroService } from 'src/app/_services/Libros/libro.service';
import { Libros } from "../../_services/Libros/model/Libros";

@Component({
  selector: 'app-perfillibro',
  templateUrl: './perfillibro.component.html',
  styleUrls: ['./perfillibro.component.css']
})
export class PerfillibroComponent implements OnInit {
  id:number;
  libro:Libros;

  constructor(private route: ActivatedRoute, private router:Router, private libroService:LibroService) { }

  ngOnInit(): void {
    this.libro=new Libros();

    this.id=this.route.snapshot.params['id'];

    this.libroService.getLibro(this.id).subscribe(data=>{
      console.log(data)
      this.libro=data;
    },error => console.log(error));
  }

  updateLibro(){
    this.libroService.updateLibro(this.id, this.libro).subscribe(data =>{
      console.log(data);
      this.libro=new Libros();
      this.gotoList();
    },error => console.log(error));
  }

  onSubmit(){
    this.updateLibro();
  }

  gotoList(){
    this.router.navigate(['/libros']);
  }

}
