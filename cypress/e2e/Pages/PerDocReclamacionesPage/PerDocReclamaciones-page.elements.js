export class PerDocReclamacionesElements {
  static get Menu() {
    return {
      get  ActualizaDatos() {
           return cy.contains('a', 'Consulta y actualización de datos');
         },

       get  CambioIBAN() {
        return cy.contains('a', 'Modelo de solicitud de cambio de IBAN');
         },

      get  VerRetenciones() {
        return cy.get('input[value="Ver Retenciones"]');
         },

       get  VerNominilla() {
        return cy.get('input[name="ultima"]');
       },

      get  SeleccionarMes() {
        return cy.get('input[value="Seleccionar mes"]');
       },
       
       get  SolicitarCambio() {
        return cy.contains('a', 'Solicitar el cambio');
       },

       get  AccederDeclaracion() {
        return cy.contains('a', 'Acceder a la declaración');
       },
    };
  }
  
 static get NoPermisos(){
    return cy.contains('p', 'El usuario introducido no pertenece al perfil o funcionalidad especificada ');
  }
 static get signedUser() {
    return cy.contains('a', 'Inicio');
  }
 static get VerNominillaAnterior() {
    return cy.contains('td', 'Nominillas Disponibles');
  }
}
