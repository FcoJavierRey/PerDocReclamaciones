
import { PerDocReclamacionesData } from "../Pages/PerDocReclamacionesPage/PerDocReclamaciones-page.data";
import { LoginData } from "../Pages/login/login.data";
import { LoginMethods } from "../Pages/login/login.methods";
import { Logger } from "../util/logger";
import { PerDocReclamacionesMethods } from "../Pages/PerDocReclamacionesPage/PerDocReclamaciones-page.methods";

describe(PerDocReclamacionesData.testSuites.SeleccionFases, () => {

  it("Inicio Sesión Supervisor", () => {
    Logger.stepNumber(1);
     Logger.step("Navegar a la página de inicio");
     PerDocReclamacionesMethods.navigatePerDocReclamaciones1();
    
    Logger.stepNumber(2);
    Logger.step("Iniciar Sesión en PerDocReclamaciones");
    LoginMethods.login(LoginData.SupervisorCredentials.username, LoginData.SupervisorCredentials.password )
    Logger.verification("Verificar que se ha logueado como Supervisor correctamente");
    LoginMethods.verifyUser();

    Logger.stepNumber(3);
    Logger.step("Introducir Nif Usuario y pulsar Entrar");
    PerDocReclamacionesMethods.navigatePerDocReclamaciones();
    LoginMethods.insertNifUsuario(LoginData.NifUsuariosample.NifUsuario)
    PerDocReclamacionesMethods.clicOnBotonEntrar();
    Logger.verification("Verificar que se muestra la página de Selección de Fases");
    cy.location('pathname').should('contains', 'educacion/PERDOC/PerDocReclamaciones/Fases');
  });

  it("Supervisor/ Administración ", () => {
    Logger.stepNumber(1);
     Logger.step("Navegar a la página de inicio");
     PerDocReclamacionesMethods.navigatePerDocReclamaciones1();
    
    Logger.stepNumber(2);
    Logger.step("Iniciar Sesión en PerDocReclamaciones");
    LoginMethods.login(LoginData.SupervisorCredentials.username, LoginData.SupervisorCredentials.password )
    Logger.verification("Verificar que se ha logueado como Supervisor correctamente");
    LoginMethods.verifyUser();

    Logger.stepNumber(3);
    Logger.step("Introducir Nif Usuario y pulsar Entrar");
    PerDocReclamacionesMethods.navigatePerDocReclamaciones();
    LoginMethods.insertNifUsuario(LoginData.NifUsuariosample.NifUsuario)
    PerDocReclamacionesMethods.clicOnBotonEntrar();
    Logger.verification("Verificar que se muestra la página de Selección de Fases");
    cy.location('pathname').should('contains', 'educacion/PERDOC/PerDocReclamaciones/Fases');

    Logger.stepNumber(4);
    Logger.step("Pulsar botón Administración");
    PerDocReclamacionesMethods.clicOnDesplegarSupervisor();
    PerDocReclamacionesMethods.clicOnBotonAdministracion();
    Logger.verification("Verificar que se redirige a la pantalla de Administración");
    cy.location('pathname').should('contains', 'educacion/PERDOC/PerDocReclamaciones/Fases');
  });

  it("Supervisor/ Cerrar Sesión ", () => {
    Logger.stepNumber(1);
     Logger.step("Navegar a la página de inicio");
     PerDocReclamacionesMethods.navigatePerDocReclamaciones1();
    
    Logger.stepNumber(2);
    Logger.step("Iniciar Sesión en PerDocReclamaciones");
    LoginMethods.login(LoginData.SupervisorCredentials.username, LoginData.SupervisorCredentials.password )
    Logger.verification("Verificar que se ha logueado como Supervisor correctamente");
    LoginMethods.verifyUser();

    Logger.stepNumber(3);
    Logger.step("Introducir Nif Usuario y pulsar Entrar");
    PerDocReclamacionesMethods.navigatePerDocReclamaciones();
    LoginMethods.insertNifUsuario(LoginData.NifUsuariosample.NifUsuario)
    PerDocReclamacionesMethods.clicOnBotonEntrar();
    Logger.verification("Verificar que se muestra la página de Selección de Fases");
    cy.location('pathname').should('contains', 'educacion/PERDOC/PerDocReclamaciones/Fases');

    Logger.stepNumber(4);
    Logger.step("Pulsar Cerrar Sesión");
    PerDocReclamacionesMethods.clicOnDesplegarSupervisor();
    PerDocReclamacionesMethods.clicOnCerrarSesion();
    Logger.verification("Verificar que se muestra la página de Cierre de sesión exitoso");
    PerDocReclamacionesMethods.verifyCierreSesion();
  });
    
});