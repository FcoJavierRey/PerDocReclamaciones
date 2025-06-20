export class PerDocReclamacionesElements {
  static get Menu() {
    return {   

      get  VerSeleccionFases() {
        return cy.get('form[action="/educacion/PERDOC/PerDocReclamaciones/Fases/SelectFase"] p');
         },

      get  DesplegarUsuario() {
        return cy.get('a[data-toggle="dropdown"]');
         },

       get  SeleccionarNuevaSolicitud() {
        return cy.get('h5.card-title').eq(0);
         },
    
      get  DesplegarSupervisor() {
        return cy.get('a[role="button"] span');
         },   

       get  CerrarSesion() {
        return  cy.get('a[href="/educacion/PERDOC/PerDocReclamaciones/Acceso/SignOut"]');
         },

       get  BotonAdministracion() {
        return  cy.get('a[href="/educacion/PERDOC/PerDocReclamaciones/Administrador"]');
         },

       get  Solicitudes() {
        return  cy.contains('text', 'Solicitudes');
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


 static get PresentarSolicitud() {
    return cy.get('button[id="btn-presentar"] div');
 }


  static get NuevaSolicitud() {
    return cy.get('button#addReclamacion');
 }

  static get  Motivo() {
        return  cy.get('select#IdMotivo');
  }

  static get  Solicita() {
        return  cy.get('textarea#Solicita');
    }

  static get  BotonEntrar() {
        return  cy.get('button[type="submit"]');
    }  
    
  static get  ConfirmarSolicitud() {
        return  cy.get('div.modal-footer button').eq(0);
         };    
  
  static get  BotonGenerarPDF() {
        return  cy.contains('a', 'Generar PDF');
    }     

       
  }       

