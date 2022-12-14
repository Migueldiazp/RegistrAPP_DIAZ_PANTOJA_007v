import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IClases } from '../interfaces/iclases';
import { IClase } from '../interfaces/iclase';



@Injectable({
  providedIn: 'root'
})
export class SClasesService {

  constructor(private http: HttpClient) { }

  listarClases():Observable<IClases>{
    return this.http.get<IClases>(`${environment.apiURL}/clases`)
  }

  crearClase(newClase: IClase):Observable<IClase>{
    return this.http.post<IClase>(`${environment.apiURL}/clases`,newClase)
  }

}
