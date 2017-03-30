import { DrupalTestPage } from './app.po';

describe('drupal-test App', function() {
  let page: DrupalTestPage;

  beforeEach(() => {
    page = new DrupalTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
