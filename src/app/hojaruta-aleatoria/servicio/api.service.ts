import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Hojaruta  } from './../modelo/hojaruta';

/**
 * Servicio para el manejo de las Hojas de Ruta de Inspección
 */

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = "http://127.0.1.1:8080/services/inspeccion/api/obtenerHojaRutaAleatoria"; // URL to web api
  private dominio = "http://127.0.1.1:8080/services/inspeccion/api";

  constructor(private http: HttpClient) { }

  getJson(url: string) { 
    return this.http.get(url);
  }

  getUrl() { 
    return this.apiUrl;
  }

  getHojaRutaAleatoria() {
    const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTU4NzY0OTE4MH0.95eAUJCzcZpK1O76FNQxQzBi8d_YU6kLVPzCSjhMieQ5Dk2uFWXENSNLp3z9I5wlXy2SGFZc0UnbJyzXmWcO5A";
    //const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTU4NzY0OTE4MH0.95eAUJCzcZpK1O76FNQxQzBi8d_YU6kLVPzCSjhMieQ5Dk2uFWXENSNLp3z9I5wlXy2SGFZc0UnbJyzXmWcO5";
    const path = `${this.dominio}/obtenerHojaRutaAleatoria`;

    const headers = new HttpHeaders().append("Authorization", "Bearer " + token);
    /*headers.append("Content-Type","application/json");*/
    return this.http.get<Hojaruta[]>(path, { headers });
  }
  
  getHojaRuta(id : string) {
    const path = `${this.dominio}/hoja-rutas/${id}`;
    return this.http.get<Hojaruta>(path);
  }

  createHojaRuta(hojaruta : Hojaruta) {
    const path = `${this.dominio}/hoja-rutas`;
    return this.http.post(path, hojaruta);
  }

  updateHojaRuta(hojaruta : Hojaruta) {
    const path = `${this.dominio}/hoja-rutas`;
    return this.http.put(path, hojaruta);
  }

  deleteHojaRuta(id : string) {
    const path = `${this.dominio}/hoja-rutas/${id}`;
    return this.http.delete<Hojaruta>(path);
  }
  
}
