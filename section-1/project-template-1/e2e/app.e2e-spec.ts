import { ProjectTemplatePage } from './app.po';

describe('project-template App', () => {
  let page: ProjectTemplatePage;

  beforeEach(() => {
    page = new ProjectTemplatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
