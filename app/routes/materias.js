import Ember from 'ember';
import Config from 'ember-prototype/config/environment';

const host = Config.APP.BACKEND_URL;

export default Ember.Route.extend({
  model() { 
    return $.get(`${host}/surveys/new`).then(questions => {
      questions.forEach(question => question.answer = 'Todavia no voy a cursar');
      return questions
    })
  },
  actions: {
    confirmarIncripcion() {
      const answers = this.modelFor(this.routeName).map(question => { 
        return { name: question.name, answer: question.answer } 
      })

      $.post(
        `${host}/surveys`, JSON.stringify(answers)
      ).then(() => alert('Encuesta enviada'))
    }
  }
});
