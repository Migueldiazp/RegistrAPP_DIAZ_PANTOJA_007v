import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ServicesdatosService}  from '../../services//servicesdatos.service';
import { RegistroserviceService, Usuario } from 'src/app/services/registroservice.service';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  datos : Usuario []=[];
  usuarioActivo : Usuario;
  codigo: any;

  constructor(private barcodeScanner: BarcodeScanner, private navController:NavController,private servicesdatosService:ServicesdatosService,
    private registroService: RegistroserviceService) { }

  ngOnInit() {
    this.loadDatos();
  }

  scanear(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.codigo = barcodeData.text;
      console.log('Barcode data', this.codigo);
     }).catch(err => {
         console.log('Error', err);
     });
  }

  cerrarSesion(){
    localStorage.removeItem('ingresado');
    localStorage.removeItem('tip');
    localStorage.removeItem('email');
    
    this.navController.navigateRoot('login');
    
  }
  //invocamos al método getDatos() del servicio
  loadDatos(){
    this.registroService.getUsuarios().then(datos=>{ 
      this.datos = datos;

      for (let obj of this.datos){
        
        if (localStorage.getItem("email") == obj.correo){
          this.usuarioActivo=obj;
        }

        }
        
    })
  }

}
