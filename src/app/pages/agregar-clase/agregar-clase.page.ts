import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonDatetime } from '@ionic/angular';
import { IClase} from 'src/app/interfaces/iclase';
import { SClasesService } from 'src/app/services/sclases.service';

@Component({
  selector: 'app-agregar-clase',
  templateUrl: './agregar-clase.page.html',
  styleUrls: ['./agregar-clase.page.scss'],
})
export class AgregarClasePage implements OnInit {

  newClase: IClase = {
    clase: "",
    fecha:""
    
  }

  constructor( private sClasesService : SClasesService, private router : Router) { }

  ngOnInit() {
  }

  crearClase(){
    this.sClasesService.crearClase(this.newClase).subscribe();
    this.router.navigateByUrl("/listar-clases");
  }

}
