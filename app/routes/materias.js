import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      { name: 'Estructura de datos', class_schedule: '21-22hs', days: 'Lunes y miercoles' },
      { name: 'Matematica II', class_schedule: '8-12hs', days: 'Viernes' },
      { name: 'Ingles I', class_schedule: '14-16hs', days: 'Jueves' },
      { name: 'Programación concurrente', class_schedule: '18-22hs', days: 'Martes' }
    ]
  }
});
