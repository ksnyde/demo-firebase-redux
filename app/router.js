import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('diet');
  this.route('studies');
  this.route('team');
  this.route('blog');
  this.route('feedback');
  this.route('donate');
  this.route('diets');
});

export default Router;
