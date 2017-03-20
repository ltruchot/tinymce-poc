import { Ng2TynimcePage } from './app.po';

describe('ng2-tynimce App', () => {
  let page: Ng2TynimcePage;

  beforeEach(() => {
    page = new Ng2TynimcePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
