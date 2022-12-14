import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IClase} from 'src/app/interfaces/iclase';
import { SClasesService } from 'src/app/services/sclases.service';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {
  qrCodeString="Debe Generar el QR antes de ver los resultados";
  scannedResult:any;
  newClase: IClase = {
    clase: "",
    fecha:""
    
  }

  constructor(private sClasesService : SClasesService, private router : Router) { }

usuario={
  nom:"",
}



  ngOnInit() {
  }
 GENERARsCAN(){
  this.qrCodeString=this.newClase.clase +" "+ this.newClase.fecha;}

  verScan(){
    this.scannedResult= this.qrCodeString;
  }

  crearClase(){
    this.sClasesService.crearClase(this.newClase).subscribe();
    
  }

}
