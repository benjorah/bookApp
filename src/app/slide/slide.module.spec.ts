import { SlideModule } from './slide.module';

describe('SlideModule', () => {
  let slideModule: SlideModule;

  beforeEach(() => {
    slideModule = new SlideModule();
  });

  it('should create an instance', () => {
    expect(slideModule).toBeTruthy();
  });
});
