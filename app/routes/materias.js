import Ember from 'ember';

export default Ember.Route.extend({
  model() { 
    return $.get('http://localhost:3000/surveys/new').then(questions => {
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
        'http://localhost:3000/surveys', JSON.stringify(answers)
      ).then(() => alert('Encuesta enviada'))
    }
  }
});
