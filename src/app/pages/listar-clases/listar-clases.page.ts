import { Component, OnInit } from '@angular/core';
import { LoadingController,InfiniteScrollCustomEvent } from '@ionic/angular';
import { SClasesService } from 'src/app/services/sclases.service';



@Component({
  selector: 'app-listar-clases',
  templateUrl: './listar-clases.page.html',
  styleUrls: ['./listar-clases.page.scss'],
})
export class ListarClasesPage implements OnInit {
  
  clases=[]

  constructor(private sClasesService :SClasesService, private loadCtrl:LoadingController) { }

  ngOnInit() {
    this.LoadClases();
  }

  async LoadClases(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadCtrl.create({
      message : "Cargando..",
      spinner : "bubbles"
    });
    await loading.present();

    this.sClasesService.listarClases().subscribe(
      (resp)=>{
        loading.dismiss();
        console.log(resp);
        let listString = JSON.stringify(resp)
        this.clases = JSON.parse(listString)
        event?.target.complete();
      },
      (err)=>{
        console.log(err.message)
        loading.dismiss();
      }
    )
  }
}
