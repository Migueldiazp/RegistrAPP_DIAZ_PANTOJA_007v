import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from 'src/app/services/registroservice.service';
import { Platform, ToastController, IonList } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ServicesdatosService } from 'src/app/services/servicesdatos.service';

ServicesdatosService

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  datos: Usuario[] = [];

  nombre: string;
  apellido:string;
  rut:string;
  correo:string;
  tipo:string;

  constructor(private menuController: MenuController,
    private servicesdatos : ServicesdatosService,
    // private navController: NavController,
    private registroService: RegistroserviceService,
    private toastController: ToastController) {

  }

  ngOnInit() {
    this.loadDatos();
  }

  //invocamos al método getDatos() 
  loadDatos() {
    this.registroService.getUsuarios().then(datos => {
      this.datos = datos;
      for (let obj of this.datos) {
        if (localStorage.getItem("email") == obj.correo) {
          this.nombre = obj.nombre;
          this.apellido = obj.apellido;
          this.rut = obj.rut;
          this.correo = obj.correo;
          this.tipo= obj.tipo;
        }


        //   this.usuarioActivo=obj;
        //   this.mm= this.usuarioActivo.nombre

        // }
        // this.nombre=obj.nombre;
        // this.apellido=obj.apellido;
      }

    });
  }

  //eliminar usuario
  // deleteDatos(dato: Datos){
  //   this.serviceDatos.deleteDatos(dato.id).then(item=>{
  //     this.showToast('Elemento eliminado');
  //     this.myList.closeSlidingItems();
  //     this.navController.navigateRoot('login');
  //     this.loadDatos();
  //   });
  // }

  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000
    })
    toast.present();
  }
}
