import { ModuloClienteModule } from './modulo-cliente.module';

describe('ModuloClienteModule', () => {
  let moduloClienteModule: ModuloClienteModule;

  beforeEach(() => {
    moduloClienteModule = new ModuloClienteModule();
  });

  it('should create an instance', () => {
    expect(moduloClienteModule).toBeTruthy();
  });
});
