import { Component, OnInit } from '@angular/core';
import { CalendarioService } from 'src/app/services/calendario.service';
import { datosFeriados } from 'src/app/interfaces/interfaz';

@Component({
  selector: 'app-feriados-api',
  templateUrl: './feriados-api.page.html',
  styleUrls: ['./feriados-api.page.scss'],
})
export class FeriadosAPIPage  implements OnInit {

  dias:datosFeriados [] = [];

  constructor(private calendarioService:CalendarioService) { }

  ngOnInit() {
    this.calendarioService.getCalendarioFeriado().subscribe(resp =>{
      this.dias.push(...resp.data);
    })
  }

}
