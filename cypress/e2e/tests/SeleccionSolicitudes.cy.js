
import { PerDocReclamacionesData } from "../Pages/PerDocReclamacionesPage/PerDocReclamaciones-page.data";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../util/logger";
import { PerDocReclamacionesMethods } from "../Pages/PerDocReclamacionesPage/PerDocReclamaciones-page.methods";

describe(PerDocReclamacionesData.testSuites.SeleccionFases, () => {

  it("Nueva Solicitud", () => {
    Logger.stepNumber(1);
     Logger.step("Navegar a la página de inicio");
     PerDocReclamacionesMethods.navigatePerDocReclamaciones1();
    
    Logger.stepNumber(2);
    Logger.step("Iniciar Sesión en PerDocReclamaciones");
    LoginMethods.login(LoginData.validCredentials.username, LoginData.validCredentials.password )
    Logger.verification("Verificar que se ha logueado en SUA correctamente");
    LoginMethods.verifyUser();

    Logger.stepNumber(3);
    Logger.step("Crear Nueva Solicitud");
    PerDocReclamacionesMethods.navigatePerDocReclamaciones();
    PerDocReclamacionesMethods.clicOnSeleccionFases();
    Logger.verification("Verificar que se muestra la página de nueva Solicitud");
    // Si no se ha registrado ninguna solicitud:
    // cy.location('pathname').should('contains', 'PerDocReclamaciones/Formulario/NuevaSolicitud');
    // Si ya se ha registrado alguna solicitud:
    cy.location('pathname').should('contains', 'PERDOC/PerDocReclamaciones/Reclamaciones');

    Logger.stepNumber(4);
    Logger.step("Presentar Solicitud");
    Logger.subStep("Pulsar Nueva Solicitud");
    PerDocReclamacionesMethods.clicOnNuevaSolicitud();
    Logger.verification("Verificar que se muestra la página Nueva Solicitud");
    PerDocReclamacionesMethods.verPresentarSolicitud();
    Logger.subStep("Rellenar Motivo y Solicita");
    PerDocReclamacionesMethods.RellenarMotivo();
    PerDocReclamacionesMethods.RellenarSolicita();
    Logger.subStep("Pulsar Presentar Solicitud");
    PerDocReclamacionesMethods.clicOnPresentarSolicitud();
    Logger.subStep("Pantalla Confirmar Solicitud");
    PerDocReclamacionesMethods.verConfirmarSolicitud();
    PerDocReclamacionesMethods.clicOnConfirmarSolicitud();
    Logger.verification("Verificar que se muestra la página de Solicitudes");
      cy.location('pathname').should('contains', '/PERDOC/PerDocReclamaciones/Formulario/NuevaSolicitud');
  
     });

  it("Pantalla de Solicitudes", () => {
    Logger.stepNumber(1);
     Logger.step("Navegar a la página de inicio");
     PerDocReclamacionesMethods.navigatePerDocReclamaciones1();
    
    Logger.stepNumber(2);
    Logger.step("Iniciar Sesión en PerDocReclamaciones");
    LoginMethods.login(LoginData.validCredentials.username, LoginData.validCredentials.password )
    Logger.verification("Verificar que se ha logueado en SUA correctamente");
    LoginMethods.verifyUser();

    Logger.stepNumber(3);
    Logger.step("Selección de Solicitudes");
    PerDocReclamacionesMethods.navigatePerDocReclamaciones();
    PerDocReclamacionesMethods.clicOnSeleccionFases();
    PerDocReclamacionesMethods.clicOnSolicitudes();
    Logger.verification("Verificar que se muestra la página de Solicitudes");
    cy.location('pathname').should('contains', 'PERDOC/PerDocReclamaciones/Reclamaciones');
     });

  it("Cerrar sesión SUA", () => {
    Logger.stepNumber(1);
     Logger.step("Navegar a la página de inicio");
     PerDocReclamacionesMethods.navigatePerDocReclamaciones1();
    
    Logger.stepNumber(2);
    Logger.step("Iniciar Sesión en PerDocReclamaciones");
    LoginMethods.login(LoginData.validCredentials.username, LoginData.validCredentials.password )
    Logger.verification("Verificar que se ha logueado en SUA correctamente");
    LoginMethods.verifyUser();

    Logger.stepNumber(4);
    Logger.step("Cerrar sesión");
    PerDocReclamacionesMethods.navigatePerDocReclamaciones();
    PerDocReclamacionesMethods.clicOnDesplegarUsuario();
    PerDocReclamacionesMethods.clicOnCerrarSesion();
    Logger.verification("Verificar que se muestra la página de Cierre de sesión exitoso");
    PerDocReclamacionesMethods.verifyCierreSesion();
    
     });

});