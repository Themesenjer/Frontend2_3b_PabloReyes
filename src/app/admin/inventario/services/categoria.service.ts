import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private baseUri = environment.urlServidor
  private http=inject(HttpClient)

  funListar(){
    return this.http.get(`${this.baseUri}/categoria`)
  }

  funGuardar(registro: any){
    return this.http.post(`${this.baseUri}/categoria`, registro)
  }
}
