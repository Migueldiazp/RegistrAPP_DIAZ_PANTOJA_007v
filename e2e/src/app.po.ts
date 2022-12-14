import { browser, by, element } from 'protractor';

export class AppPage {

  navigateTo() {
    return browser.get('/');
  }
 
  // prueba 1 INICIAR SESÍON
  async getTitleButtonIniciar():Promise<string> {
    return element(by.css('app-root .buttonIniciar')).getText();
  }
  // prueba 2 Inicio TITLE
  async getTitle():Promise<string> {
    return element(by.css('app-root .title')).getText();
  }
  // prueba 3 Menu RegistrAPP
  async getTitleItemMenu():Promise<string> {
    return element(by.css('app-root .title1')).getText();
  }
  // prueba 4 Tu asistencia Facil
  async getTitleNuestraApp():Promise<string> {
    return element(by.css('app-root .titleNuestraApp')).getText();
  }
  // prueba 5 V.1.0 
  async getTitleversion():Promise<string> {
    return element(by.css('app-root .version')).getText();
  }

}
