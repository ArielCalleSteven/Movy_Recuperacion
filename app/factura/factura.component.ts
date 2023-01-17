import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent {
  constructor(private pri: Router ) { }
  ngOnInit(): void {
    this.adquiridos=localStorage.getItem('comprados')
  }

  adquiridos:any;
  
}
