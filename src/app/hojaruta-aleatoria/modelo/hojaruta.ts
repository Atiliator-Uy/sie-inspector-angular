export class Hojaruta {

    id : string;
    tipoInspecion : string;
    fecha : string;
    fechaHora : string;
    titulo : string;
    descripcion : string;
    prioridad : string;

    /* GETTER */
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

      /* SETTER */
      setId(id : string) {
        this.id = id;
      }
    
      setTipoInspecion(tipoInspecion : string) {
        this.tipoInspecion = tipoInspecion;
      }
    
      setFecha(fecha : string) {
        this.fecha = fecha;
      }
    
      setFechaHora(fechaHora : string) {
        this.fechaHora = fechaHora;
      }
    
      setTitulo(titulo : string) {
        this.titulo = titulo;
      }
    
      setDescripcion(descripcion : string) {
        this.descripcion = descripcion;
      }
    
      setPrioridad(prioridad : string) {
        this.prioridad = prioridad;
      } 
      
}
