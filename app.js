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
      this.goals.push(this.enteredGoalValue);
      this.enteredGoalValue = '';
    },

    removeGoal(index) {
      this.goals.splice(index, 1);
    }
  }
});

app.mount('#user-goals');
