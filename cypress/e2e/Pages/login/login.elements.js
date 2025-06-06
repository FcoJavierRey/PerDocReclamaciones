export class LoginElements {
  static get textboxes() {
    return {
      get username() {
        return cy.get('input#username');
      },
      get password() {
        return cy.get('input#password');
      },
    };
  }

  static get buttons() {
    return {
      get login() {
        return cy.get('button#boton-login');
      },
  }
  }

  static get invalidUser() {
    return cy.contains('p', 'El usuario introducido no pertenece al perfil o funcionalidad especificada');
  }

   static get validUser() {
    return cy.contains('td', 'Consulta de Nóminas e IRPF');
  }  
}

