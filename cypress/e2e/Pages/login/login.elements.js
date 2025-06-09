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
    return cy.contains('p', 'Credenciales inválidas. ');
  }

   static get validUser() {
       return cy.contains('h2', 'Inicio de sesión exitoso');
  }  

  static get validUrl() {
     return cy.contains('h2', 'Selección de fases');
  }
}

