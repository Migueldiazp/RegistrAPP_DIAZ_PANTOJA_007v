import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../../services/registroservice.service';
import { ToastController } from '@ionic/angular';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {


  formularioRegistro: FormGroup;
  newUser: Usuario = <Usuario>{};
  usuarios: Usuario[] = [];


  constructor(private fb: FormBuilder,
    private alertController: AlertController,
    private toastController: ToastController,
    private registroserviceService: RegistroserviceService,
    private navController: NavController

  ) {

    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'apellido': new FormControl("", Validators.required),
      'rut': new FormControl("", Validators.required),
      'correo': new FormControl("", [Validators.required, Validators.email]),
      'tipo': new FormControl("", Validators.required),
      'contraseña': new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(6),

      ])),


    });

  }

  ngOnInit() {
  }

  async CrearUser() {
    var fm = this.formularioRegistro.value;
    var existe = 0;

    if (this.formularioRegistro.invalid) {
      this.alertFaltaDato();
    }
    else {
      this.newUser.nombre = fm.nombre;
      this.newUser.apellido = fm.apellido;
      this.newUser.rut = fm.rut;
      this.newUser.correo = fm.correo;
      this.newUser.contraseña = fm.contraseña;
      this.newUser.tipo = fm.tipo;

      this.registroserviceService.getUsuarios().then(datos => {
        this.usuarios = datos;

        if (!datos || datos.length == 0) {
          this.registroserviceService.addUsuario(this.newUser).then(dato => {
            this.newUser = <Usuario>{};
            this.creado();

          })
          this.formularioRegistro.reset();
          this.navController.navigateRoot('login');
        }
        else {
          for (let obj of this.usuarios) {
            if (this.newUser.correo == obj.correo) {
              existe = 1;
            }
          }// fin for 

          if (existe == 1) {
            this.alertUsuarioExiste();
            this.formularioRegistro.reset();
          }
          else {
            this.registroserviceService.addUsuario(this.newUser).then(dato => {
              this.newUser = <Usuario>{};
              this.creado();
            });
            this.formularioRegistro.reset();
            this.navController.navigateRoot('login');
          }
        }
      })
    }//fin else validacion formulario!
  }//FIN DE METODO PARA CREAR USUARIO

  async creado() {
    const alert = await this.alertController.create({
      message: ' Usuario Registrado de Manera Exitosa',
      buttons: ['Continuar']
    });
    await alert.present();
  }

  async alertFaltaDato() {
    const alert = await this.alertController.create({
      header: '¡FALTAN DATOS!',
      message: 'Debe ingresar todos los datos solicitados',
      buttons: ['Continuar']
    });
    await alert.present();
  }

  async alertUsuarioExiste() {
    const alert = await this.alertController.create({
      header: '¡Usuario Registrado!',
      message: 'El correo ingresado esta registrado',
      buttons: ['Aceptar']
    })
    await alert.present();
  }

}
