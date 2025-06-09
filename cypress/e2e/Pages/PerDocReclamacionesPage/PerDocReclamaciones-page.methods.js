
import { PerDocReclamacionesData } from "./PerDocReclamaciones-page.data";
import { PerDocReclamacionesElements } from "./PerDocReclamaciones-page.elements";

export class PerDocReclamacionesMethods {
  static navigatePerDocReclamaciones1() {
    cy.clearAllCookies();
    cy.clearLocalStorage()
    cy.visit(PerDocReclamacionesData.url);
 }

   static navigatePerDocReclamaciones() {
    cy.visit(PerDocReclamacionesData.url);
 }

static clicOnSeleccionFases() {
    PerDocReclamacionesElements.Menu.VerSeleccionFases.click();
  }

  static clicOnDesplegarUsuario() {
    PerDocReclamacionesElements.Menu.DesplegarUsuario.click();
  }

  static clicOnCerrarSesion() {
    PerDocReclamacionesElements.Menu.CerrarSesion.click();
  }

  static clicOnSolicitudes() {
    PerDocReclamacionesElements.Menu.Solicitudes.click();
  }

   static clicOnPresentarSolicitud() {
    PerDocReclamacionesElements.PresentarSolicitud.click();
  }

    static clicOnNuevaSolicitud() {
    PerDocReclamacionesElements.NuevaSolicitud.click();
  }

    static clicOnConfirmarSolicitud() {
    PerDocReclamacionesElements.ConfirmarSolicitud.click();
  }

 static verifyCierreSesion() {
    PerDocReclamacionesElements.CierreSesionOK.should('exist');
  } 
   static verifyPermisos() {
    PerDocReclamacionesElements.NoPermisos.should('exist');
  }  
  static verPresentarSolicitud() {
    PerDocReclamacionesElements.PresentarSolicitud.should('exist');
  }  
static verConfirmarSolicitud() {
    PerDocReclamacionesElements.ConfirmarSolicitud.should('exist');
  }  
  

   static clicOnNuevaSolicitud() {
    PerDocReclamacionesElements.NuevaSolicitud.click();
  }

  static RellenarMotivo() {
    PerDocReclamacionesElements.Motivo.invoke('val', "Motivo")
  }  

   static RellenarSolicita() {
    PerDocReclamacionesElements.Solicita.invoke('val', "Solicita")
  } 
  
}
