import { ClientQuestionGeneratorPage } from './app.po';

describe('client-question-generator App', () => {
  let page: ClientQuestionGeneratorPage;

  beforeEach(() => {
    page = new ClientQuestionGeneratorPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
