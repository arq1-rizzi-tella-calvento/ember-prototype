import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      { name: 'Estructura de datos',
        commission:[
          { name: 'C1', class_schedule: '21-22hs', days: 'Lunes y miercoles'},
          { name: 'C2', class_schedule: '21-22hs', days: 'Jueves y Viernes'}
        ]
      },
      { name: 'Matematica II',
        commission:[
          { name: 'C1', class_schedule: '8-12hs', days: 'Viernes'},
          { name: 'C2', class_schedule: '8-12hs', days: 'Lunes'}
        ]
      },
      { name: 'Ingles I',
        commission:[
          { name: 'C1', class_schedule: '14-16hs', days: 'Jueves'},
          { name: 'C2', class_schedule: '14-16hs', days: 'Martes'}
        ]
      },
      { name: 'Programación concurrente',
        commission:[
          { name: 'C1', class_schedule: '18-22hs', days: 'Martes' },
          { name: 'C2',  class_schedule: '18-22hs', days: 'Viernes' }
        ]
      },
    ]
  },
  actions: {
    confirmarIncripcion() {
      alert('Inscripcion confirmada');
      $('#materias').hide();
    }
  }
});
