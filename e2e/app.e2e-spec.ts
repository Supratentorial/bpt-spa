import { BptSpaPage } from './app.po';

describe('bpt-spa App', () => {
  let page: BptSpaPage;

  beforeEach(() => {
    page = new BptSpaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
