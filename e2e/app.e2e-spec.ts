import { TjachPage } from './app.po';

describe('tjach App', () => {
  let page: TjachPage;

  beforeEach(() => {
    page = new TjachPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
