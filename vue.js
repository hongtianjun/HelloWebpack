
const Vue = require('vue');

const App = require('./app.vue')


new Vue({
  el: '#root',
  render: function(createElement) {
      return createElement(App)
    }
});
