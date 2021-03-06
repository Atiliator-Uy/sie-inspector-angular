import { Component, OnInit } from '@angular/core';
import { ApiService } from './servicio/api.service';
import { Hojaruta  } from './modelo/hojaruta';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-hojaruta-aleatoria',
  templateUrl: './hojaruta-aleatoria.component.html',
  styleUrls: ['./hojaruta-aleatoria.component.sass']
})

export class HojarutaAleatoriaComponent implements OnInit {

  id = '';
  tipoInspecion = '';
  fecha = '';
  fechaHora = '';
  titulo = '';
  descripcion = '';
  prioridad = '';

  public hojasrutas: any = null;
  public errorEstatus: string;
  public errorEstatusText: string;
  public loginStatus: boolean = false;

  constructor(public apiService: ApiService) { 

    console.log('Atiliator!!! HojarutaAleatoriaComponent.constructor');
  }

  ngOnInit(): void {
  }

  getHojaRutaAleatoria() {

    console.log('Atiliator!!! solicitando... getHojaRutaAleatoria');

    this.apiService.getHojaRutaAleatoria().subscribe(
      hojasrutas => {
        this.hojasrutas = hojasrutas
        this.loginStatus = false;
        console.log('Atiliator!!!... hojasrutas     : ' + hojasrutas);
        console.log('Atiliator!!!... hojasrutas this: ' + this.hojasrutas);
      },
      (err: HttpErrorResponse) => {
        this.loginStatus = true;
        this.errorEstatus = err.status + ''
        this.errorEstatusText = err.statusText + ''
        console.log('Atiliator!!!... ERROR en getHojaRutaAleatoria: ' + err.message);
        console.log('Atiliator!!!... Estatus     : ' + err.status);
        console.log('Atiliator!!!... EstatusText : ' + err.statusText);
      },
      () => {
        console.log('Petición finalizada...');
      }
    );
  }

  getHojaRuta(id : string) {
    console.log('Atiliator!!! solicitando... getHojaRuta');
    this.apiService.getHojaRuta('1').subscribe(hojaruta => {
      console.log('Atiliator!!!... ' + hojaruta);
    });
  }

  createHojaRuta() {
    var hojaruta : Hojaruta;
    hojaruta.setTipoInspecion('Se implementa cliente API Rest');
    hojaruta.setTitulo('Hoja de Ruta de Prueba');
    hojaruta.setPrioridad('23');
    hojaruta.setFechaHora('23/08/2020');
    
    this.apiService.createHojaRuta(hojaruta).subscribe( nuevaHojaRuta=> {
      console.log('Atiliator!!!... ' + nuevaHojaRuta);
    });

  }  

  updateHojaRuta() {
    var hojaruta : Hojaruta;
    hojaruta.setId('2');
    hojaruta.setTipoInspecion('Se implementa cliente API Rest');
    hojaruta.setTitulo('Hoja de Ruta de Prueba');
    hojaruta.setPrioridad('23');
    hojaruta.setFechaHora('23/08/2020');
    
    this.apiService.createHojaRuta(hojaruta).subscribe( nuevaHojaRuta=> {
      console.log('Atiliator!!!... ' + nuevaHojaRuta);
    });

  }

  deleteHojaRuta(id : string) {
    console.log('Atiliator!!! solicitando... getHojaRuta');
    this.apiService.deleteHojaRuta('1').subscribe(hojaruta => {
      console.log('Atiliator!!!... ' + hojaruta);
    });
  }

  getId() {
    return this.id;
  }

  getTipoInspecion() {
    return this.tipoInspecion;
  }

  getFecha() {
    return this.fecha;
  }

  getFechaHora() {
    return this.fechaHora;
  }

  getTitulo() {
    return this.titulo;
  }

  getDescripcion() {
    return this.descripcion;
  }

  getPrioridad() {
    return this.prioridad;
  } 

}
