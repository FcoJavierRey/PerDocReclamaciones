
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

 static verifyCierreSesion() {
    PerDocReclamacionesElements.CierreSesionOK.should('exist');
  } 
   static verifyPermisos() {
    PerDocReclamacionesElements.NoPermisos.should('exist');
  }  
}
