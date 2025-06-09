
import { PerDocReclamacionesData } from "../Pages/PerDocReclamacionesPage/PerDocReclamaciones-page.data";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../util/logger";
import { PerDocReclamacionesMethods } from "../Pages/PerDocReclamacionesPage/PerDocReclamaciones-page.methods";

describe(PerDocReclamacionesData.testSuites.SeleccionFases, () => {

it("PerdocReclamaciones: Cerrar sesión SUA", () => {
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


  it("Selección de Fases", () => {
    Logger.stepNumber(1);
     Logger.step("Navegar a la página de inicio");
     PerDocReclamacionesMethods.navigatePerDocReclamaciones1();
    
    Logger.stepNumber(2);
    Logger.step("Iniciar Sesión en PerDocReclamaciones");
    LoginMethods.login(LoginData.validCredentials.username, LoginData.validCredentials.password )
    Logger.verification("Verificar que se ha logueado en SUA correctamente");
    LoginMethods.verifyUser();

    Logger.stepNumber(3);
    Logger.step("Selección de Fases");
    PerDocReclamacionesMethods.navigatePerDocReclamaciones();
    PerDocReclamacionesMethods.clicOnSeleccionFases();
    Logger.verification("Verificar que se muestra la página de Selección de Fases");
    cy.location('pathname').should('contains', 'PerDocReclamaciones/Formulario/NuevaSolicitud');
    
     });

});