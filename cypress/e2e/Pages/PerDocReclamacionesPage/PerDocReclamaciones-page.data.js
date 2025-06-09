export class PerDocReclamacionesData {

static get url() {
    return "https://wwwpre.educacion.org/educacion/PERDOC/PerDocReclamaciones/Acceso/";
  };

static get urlRevision() {
    return "https://www3.gobiernodecanarias.org/educacion/cau_ce/cas/login";
  };

static get urlNuevaSolicitud() {
    return "https://wwwpre.educacion.org/educacion/PERDOC/PerDocReclamaciones/Formulario/NuevaSolicitud";
  };


 
static get testSuites() {
    return {
      registro: "Registro",
      autenticacion: "PerDocReclamaciones: Autenticación",
      SeleccionFases: "PerDocReclamaciones: Selección de Solicitudes",
      };
  }

  
}
