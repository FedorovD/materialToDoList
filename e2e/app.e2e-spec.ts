import { MaterialToDoListPage } from './app.po';

describe('material-to-do-list App', () => {
  let page: MaterialToDoListPage;

  beforeEach(() => {
    page = new MaterialToDoListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
