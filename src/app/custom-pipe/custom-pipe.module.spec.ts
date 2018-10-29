import { CustomPipeModule } from './custom-pipe.module';

describe('CustomPipeModule', () => {
  let customPipeModule: CustomPipeModule;

  beforeEach(() => {
    customPipeModule = new CustomPipeModule();
  });

  it('should create an instance', () => {
    expect(customPipeModule).toBeTruthy();
  });
});
