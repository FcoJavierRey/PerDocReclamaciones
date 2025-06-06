
import { PerDocReclamacionesData } from "../Pages/PerDocReclamaciones/PerDocReclamaciones-page.data";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../util/logger";

describe(PerDocReclamacionesData.testSuites.SeleccionFases, () => {

  it("Selección de Fases", () => {
    Logger.stepNumber(1);
    Logger.step("Navegar a la página de inicio");
    NominillasInterMethods.navigateToNominillasInter();
    
    Logger.stepNumber(2);
    Logger.step("Iniciar Sesión en NominillasInter");
    LoginMethods.login(LoginData.validCredentials.username, LoginData.validCredentials.password )
    Logger.verification("Verificar que se muestra la página de Consulta de Nóminas e IRPF");
    LoginMethods.verifyUser();

    Logger.stepNumber(3);
    Logger.step("Hacer clic en botón Ver Retenciones");
    NominillasInterMethods.clicOnVerRetenciones();
    Logger.verification("Verificar que se muestra la página de Certificado de Retenciones");
    NominillasInterMethods.navigateToCertificadoOk()
  });

});