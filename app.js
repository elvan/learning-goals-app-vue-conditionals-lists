const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: '',
      goals: []
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
