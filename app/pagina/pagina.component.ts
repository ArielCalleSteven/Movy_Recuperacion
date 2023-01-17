import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CargarScriptsService } from 'src/cargar-scripts.service';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent {
  constructor(private _CargaScripts: CargarScriptsService ) { 
     _CargaScripts.Carga(["Carrito/node"]);
  }
  ngOnInit(): void {
  }

  

}
