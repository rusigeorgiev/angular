import { AppNgForPage } from './app.po';

describe('app-ng-for App', () => {
  let page: AppNgForPage;

  beforeEach(() => {
    page = new AppNgForPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
