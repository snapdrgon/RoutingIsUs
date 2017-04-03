import { RoutingIsUsPage } from './app.po';

describe('routing-is-us App', function() {
  let page: RoutingIsUsPage;

  beforeEach(() => {
    page = new RoutingIsUsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
