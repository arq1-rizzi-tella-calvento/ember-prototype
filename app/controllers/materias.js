import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    setAnswer(question, event) { question.answer = event.target.value; }
  }
});