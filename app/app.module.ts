import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CargarScriptsService } from 'src/cargar-scripts.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PaginaComponent } from './pagina/pagina.component';
import { FacturaComponent } from './factura/factura.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaginaComponent,
    FacturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
