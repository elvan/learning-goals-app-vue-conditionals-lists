const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: '',
      goals: [
        'Learn HTML and CSS',
        'Learn JavaScript',
        'Learn Vue.js',
        'Learn Nuxt.js'
      ]
    };
  },

  methods: {
    addGoal() {
      console.log(this.enteredGoalValue);
      this.goals.push(this.enteredGoalValue);
      this.enteredGoalValue = '';
    }
  }
});

app.mount('#user-goals');
