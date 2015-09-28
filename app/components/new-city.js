import Ember from 'ember';

export default Ember.Component.extend({
  addNewCity: false,
  actions: {
    cityFormShow() {
      this.set('addNewCity', true);
    },

    saveCity() {
      var params = {
        cityName: this.get('cityName'),
        country: this.get('country'),
        attractions: this.get('attractions'),
      };
      this.set('addNewCity', false),
      this.sendAction('saveCity', params);
    }
  }
});
