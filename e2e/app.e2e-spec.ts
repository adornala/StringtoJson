import { StringtoJsonPage } from './app.po';

describe('stringto-json App', () => {
  let page: StringtoJsonPage;

  beforeEach(() => {
    page = new StringtoJsonPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
