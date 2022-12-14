import { AppPage } from './app.po';

describe('Ejemplos de pruebas', () => {
  let page: AppPage;

  //configuración del testing 
  beforeEach(() => {
    page = new AppPage();
  });

  //testing a unidades de codigo
  // it('Prueba 1', async () => {
  //   await page.navigateTo();
  //   expect(await page.getTitleText()).toEqual('Correo:');
  // });

  it('Prueba 1', async () => {
    await page.navigateTo();
    expect(await page.getTitleButtonIniciar()).toEqual('INICIAR SESÍON');
  });

  it('Prueba 2', async () => {
    await page.navigateTo();
    expect(await page.getTitle()).toEqual('Inicio de Sesión');
  });

  it('Prueba 3', async () => {
    await page.navigateTo();
    expect(await page.getTitleItemMenu()).toEqual('Menu RegistrAPP');
  });

  it('Prueba 4', async () => {
    await page.navigateTo();
    expect(await page.getTitleNuestraApp()).toEqual('Tu asistencia Facil');
  });

  it('Prueba 5', async () => {
    await page.navigateTo();
    expect(await page.getTitleversion()).toEqual('V.1.0');
  });







});
