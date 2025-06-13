
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
    Logger.verification("Verificar que se ha conectado como Supervisor correctamente");
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
    Logger.verification("Verificar que se ha conectado como Supervisor correctamente");
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

  it("Nueva Solicitud Supervisor", () => {
     Logger.stepNumber(1);
     Logger.step("Navegar a la página de inicio");
     PerDocReclamacionesMethods.navigatePerDocReclamaciones1();
    
    Logger.stepNumber(2);
    Logger.step("Iniciar Sesión en PerDocReclamaciones");
    LoginMethods.login(LoginData.SupervisorCredentials.username, LoginData.SupervisorCredentials.password )
    Logger.verification("Verificar que se ha conectado como Supervisor correctamente");
    LoginMethods.verifyUser();

    Logger.stepNumber(3);
    Logger.step("Introducir Nif Usuario y pulsar Entrar");
    PerDocReclamacionesMethods.navigatePerDocReclamaciones();
    LoginMethods.insertNifUsuario(LoginData.NifUsuariosample.NifUsuario)
    PerDocReclamacionesMethods.clicOnBotonEntrar();
    Logger.verification("Verificar que se muestra la página de Selección de Fases");
    cy.location('pathname').should('contains', 'educacion/PERDOC/PerDocReclamaciones/Fases');

    Logger.stepNumber(4);
    Logger.step("Crear Nueva Solicitud");
    PerDocReclamacionesMethods.clicOnSeleccionarNuevaSolicitud();
    Logger.verification("Verificar que se muestra la página de nueva Solicitud");
    // Si no se ha registrado ninguna solicitud:
    // cy.location('pathname').should('contains', 'PerDocReclamaciones/Formulario/NuevaSolicitud');
    // Si ya se ha registrado alguna solicitud:
    cy.location('pathname').should('contains', 'PERDOC/PerDocReclamaciones/Reclamaciones');

    Logger.stepNumber(5);
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
    Logger.subStep("Pantalla Presentar Solicitud");
    PerDocReclamacionesMethods.verConfirmarSolicitud();
    PerDocReclamacionesMethods.clicOnConfirmarSolicitud();
    Logger.verification("Verificar que se muestra la página de Solicitudes");
    cy.location('pathname').should('contains', '/PERDOC/PerDocReclamaciones/Formulario/NuevaSolicitud');
  
  });

   it("Generar PDF", () => {
     Logger.stepNumber(1);
     Logger.step("Navegar a la página de inicio");
     PerDocReclamacionesMethods.navigatePerDocReclamaciones1();
    
    Logger.stepNumber(2);
    Logger.step("Iniciar Sesión en PerDocReclamaciones");
    LoginMethods.login(LoginData.SupervisorCredentials.username, LoginData.SupervisorCredentials.password )
    Logger.verification("Verificar que se ha conectado como Supervisor correctamente");
    LoginMethods.verifyUser();

    Logger.stepNumber(3);
    Logger.step("Introducir Nif Usuario y pulsar Entrar");
    PerDocReclamacionesMethods.navigatePerDocReclamaciones();
    LoginMethods.insertNifUsuario(LoginData.NifUsuariosample.NifUsuario)
    PerDocReclamacionesMethods.clicOnBotonEntrar();
    Logger.verification("Verificar que se muestra la página de Selección de Fases");
    cy.location('pathname').should('contains', 'educacion/PERDOC/PerDocReclamaciones/Fases');

    Logger.stepNumber(4);
    Logger.step("Crear Nueva Solicitud");
    PerDocReclamacionesMethods.clicOnSeleccionarNuevaSolicitud();
    Logger.verification("Verificar que se muestra la página de Solicitudes");
    // Si no se ha registrado ninguna solicitud:
    //cy.location('pathname').should('contains', 'PerDocReclamaciones/Formulario/NuevaSolicitud');
    // Si ya se ha registrado alguna solicitud:
    cy.location('pathname').should('contains', 'PERDOC/PerDocReclamaciones/Reclamaciones');

    Logger.stepNumber(5);
    Logger.step("Generar PDF");
    Logger.subStep("Pulsar Nueva Solicitud");
     PerDocReclamacionesMethods.clicOnNuevaSolicitud();
    Logger.verification("Verificar que se muestra la pantalla de Nueva Solicitud");
    PerDocReclamacionesMethods.verPresentarSolicitud();
    Logger.subStep("Rellenar Motivo y Solicita");
    PerDocReclamacionesMethods.RellenarMotivo();
    PerDocReclamacionesMethods.RellenarSolicita();
     Logger.subStep("Pulsar Botón Generar PDF");
    PerDocReclamacionesMethods.clicOnGenerarPDF();
    Logger.verification("Verificar que se muestra la pantalla del PDF");
    cy.location('pathname').should('contains', 'educacion/PERDOC/PerDocReclamaciones/Formulario/GenerarPDF');
  
  });
 
     
  it("Supervisor/ Cerrar Sesión ", () => {
    Logger.stepNumber(1);
     Logger.step("Navegar a la página de inicio");
     PerDocReclamacionesMethods.navigatePerDocReclamaciones1();
    
    Logger.stepNumber(2);
    Logger.step("Iniciar Sesión en PerDocReclamaciones");
    LoginMethods.login(LoginData.SupervisorCredentials.username, LoginData.SupervisorCredentials.password )
    Logger.verification("Verificar que se ha conectado como Supervisor correctamente");
    LoginMethods.verifyUser();

    Logger.stepNumber(3);
    Logger.step("Introducir Nif Usuario y pulsar Entrar");
    PerDocReclamacionesMethods.navigatePerDocReclamaciones();
    LoginMethods.insertNifUsuario(LoginData.NifUsuariosample.NifUsuario)
    PerDocReclamacionesMethods.clicOnBotonEntrar();
    Logger.verification("Verificar que se muestra la página Selección de Fases");
    cy.location('pathname').should('contains', 'educacion/PERDOC/PerDocReclamaciones/Fases');

    Logger.stepNumber(4);
    Logger.step("Pulsar Cerrar Sesión");
    PerDocReclamacionesMethods.clicOnDesplegarSupervisor();
    PerDocReclamacionesMethods.clicOnCerrarSesion();
    Logger.verification("Verificar que se muestra la página de Cierre de sesión exitoso");
    PerDocReclamacionesMethods.verifyCierreSesion();
  });
    
});