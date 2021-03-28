import { Autor } from "../../Autor/Model/Autor";
import { Idioma } from "../../Idioma/Model/Idioma";
import { Editorial } from "../../Editorial/Model/Editorial";
import { AutorService } from "../../Autor/Autor.service";
import { EditorialService } from "../../Editorial/editorial.service";
import { IdiomaService } from "../../Idioma/idioma.service";
export class Libros{

  id: number;
  genero: String;
  titulo: String;
  fecha: String;
  isbn: String;
  autor: AutorService['getAutor'];
  editorial: EditorialService['getEditorial'];
  idioma: IdiomaService['getIdioma'];


}
