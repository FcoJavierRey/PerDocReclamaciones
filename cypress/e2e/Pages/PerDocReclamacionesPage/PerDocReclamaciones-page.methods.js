
import { PerDocReclamacionesData } from "./PerDocReclamaciones-page.data";
import { PerDocReclamacionesElements } from "./PerDocReclamaciones-page.elements";

export class PerDocReclamacionesMethods {
  static navigatePerDocReclamaciones() {
    cy.clearAllCookies();
    cy.clearLocalStorage()
    cy.visit(PerDocReclamacionesData.url);
 }

static clicOnActualizaDatos() {
    NominillasInterElements.Menu.ActualizaDatos.click();
  }

  static clicOnCambioIBAN() {
    NominillasInterElements.Menu.CambioIBAN.click();
  }

  static clicOnVerRetenciones() {
    NominillasInterElements.Menu.VerRetenciones.click();
  }

  static clicOnVerNominilla() {
    NominillasInterElements.Menu.VerNominilla.click();
  }

   static clicOnSeleccionarMes() {
    NominillasInterElements.Menu.SeleccionarMes.click();
  }

  static clicOnSolicitarCambio() {
    NominillasInterElements.Menu.SolicitarCambio.click();
  }

  static clicOnAccederDeclaracion() {
    NominillasInterElements.Menu.AccederDeclaracion.click();
  }


  static verifySignedUser(username) {
    NominillasInterElements.signedUser.should('exist');
  }  

  static verifyPermisos() {
    PerDocReclamacionesElements.NoPermisos.should('exist');
  }  
}
