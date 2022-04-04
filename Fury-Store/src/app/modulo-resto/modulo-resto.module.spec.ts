import { ModuloRestoModule } from './modulo-resto.module';

describe('ModuloRestoModule', () => {
  let moduloRestoModule: ModuloRestoModule;

  beforeEach(() => {
    moduloRestoModule = new ModuloRestoModule();
  });

  it('should create an instance', () => {
    expect(moduloRestoModule).toBeTruthy();
  });
});
