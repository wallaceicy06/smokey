import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  cards: DS.hasMany('card', { async: true })
});
