import { ModuloCadastroModule } from './modulo-cadastro.module';

describe('ModuloCadastroModule', () => {
  let moduloCadastroModule: ModuloCadastroModule;

  beforeEach(() => {
    moduloCadastroModule = new ModuloCadastroModule();
  });

  it('should create an instance', () => {
    expect(moduloCadastroModule).toBeTruthy();
  });
});
