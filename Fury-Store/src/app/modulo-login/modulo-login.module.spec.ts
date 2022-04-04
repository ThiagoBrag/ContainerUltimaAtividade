import { ModuloLoginModule } from './modulo-login.module';

describe('ModuloLoginModule', () => {
  let moduloLoginModule: ModuloLoginModule;

  beforeEach(() => {
    moduloLoginModule = new ModuloLoginModule();
  });

  it('should create an instance', () => {
    expect(moduloLoginModule).toBeTruthy();
  });
});
