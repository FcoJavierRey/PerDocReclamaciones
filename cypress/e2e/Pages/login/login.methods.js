import { Logger } from '../../util/logger';
import { LoginElements } from './login.elements';


export class LoginMethods{
    static insertUsername(username){
        LoginElements.textboxes.username.invoke('val', username)
    }

    static insertPassword(password){
        LoginElements.textboxes.password.invoke('val', password)
    }

    static clickOnLoginButton(){
        LoginElements.buttons.login.click()
    }

    static login(username, password){
        Logger.subStep('Introducir usuario')
        this.insertUsername(username)
        Logger.subStep('Introducir contraseña')
        this.insertPassword(password)
        Logger.subStep('Hacer click en botón Conectar')
        this.clickOnLoginButton()
    }

    static verifyAlert() {
    LoginElements.invalidUser.should('exist');
    }

    static verifyUser() {
    LoginElements.validUser.should('exist');
   
  }
  
}