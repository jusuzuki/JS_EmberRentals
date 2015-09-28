import Ember from 'ember';

export default Ember.Component.extend({
  updateCityForm: false,
  actions: {
    updateCityForm() {
      this.set('updateCityForm', true);
    },
    updateCity(city) {
      var params = {
        cityName: this.get('cityName'),
        country: this.get('country'),
        attractions: this.get('attractions'),
      };
      this.set('updateCityForm', false);
      this.sendAction('updateCity', city, params);
    }
  }
});
