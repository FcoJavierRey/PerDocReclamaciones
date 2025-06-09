export class PerDocReclamacionesElements {
  static get Menu() {
    return {   

      get  VerSeleccionFases() {
        return cy.get('form[action="/educacion/PERDOC/PerDocReclamaciones/Fases/SelectFase"] p');
         },

      get  DesplegarUsuario() {
        return cy.get('a[data-toggle="dropdown"]');
         },

       get  CerrarSesion() {
        return  cy.get('a[href="/educacion/PERDOC/PerDocReclamaciones/Acceso/SignOut"]');
         },

    };
  }
  
 static get NoPermisos(){
    return cy.contains('p', 'El usuario introducido no pertenece al perfil o funcionalidad especificada ');
  }
 static get signedUser() {
    return cy.contains('a', 'Inicio');
  }

   static get CierreSesionOK() {
    return cy.contains('h2', 'Cierre de sesión exitoso');
  }

}
