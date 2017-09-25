import { SamplemodelPage } from './app.po';

describe('samplemodel App', () => {
  let page: SamplemodelPage;

  beforeEach(() => {
    page = new SamplemodelPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
