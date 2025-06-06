import { NominillasInterData } from "./PerDocReclamaciones-page.data";
import { NominillasInterElements } from "./PerDocReclamaciones-page.elements";

export class PerDocReclamacionesMethods {
  static navigateToNominillasInter() {
    cy.clearAllCookies();
    cy.clearLocalStorage()
    cy.visit(NominillasInterData.url);
 }

static navigateToAutenticarOk() {
    cy.visit(NominillasInterData.url);
 } 

static navigateToRevisionOk() {
      cy.url().should('include',NominillasInterData.urlRevision);
   } 

static navigateToCambioIBANOk() {
      cy.url().should('include',NominillasInterData.urlCambioIBAN);
   } 

static navigateToCertificadoOk() {
      cy.url().should('include',NominillasInterData.urlCertificado);
   } 

static navigateToNominillaOk() {
      cy.url().should('include',NominillasInterData.urlNominilla);
   } 

static navigateToNominillaAnteriorOk() {
      NominillasInterElements.VerNominillaAnterior.should('exist');
   } 

static navigateToCambioDireccionOk() {
      cy.url().should('include',NominillasInterData.urlRevision);
   } 

static navigateToResidenciaHabitual() {
      cy.url().should('include',NominillasInterData.urlRevision);
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
    NominillasInterElements.NoPermisos.should('exist');
  }  
}
