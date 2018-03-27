// Functionalities I want in this project:
// - Show pending todos.

// Questions
// - Ask for help about how to delete todo when 'x' button is clicked
// - Ask for help with tenary operator

new Vue({
  el: '#app',
  data: {
    todo: '',
    search: '',
    todoList: []
  },
  computed: {
    dateTime() {
      const weekDay = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ];
      const today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth() + 1; //January is 0!
      let yyyy = today.getFullYear();
      let hh = today.getHours();
      let min = today.getMinutes();

      if (dd < 10) {
        dd = `0${dd}`;
      }

      if (mm < 10) {
        mm = `0${mm}`;
      }

      if (hh < 10) {
        hh = `0${hh}`;
      }

      if (min < 10) {
        min = `0${min}`;
      }

      // dd < 10 ? `0${dd}` : dd;
      // mm < 10 ? `0${mm}` : mm;
      // hh < 10 ? `0${hh}` : hh;
      // min < 10 ? `0${min}` : min;

      dateTime = {
        day: weekDay[today.getDay()],
        date: `${dd}-${mm}-${yyyy}`,
        time: `${hh}:${min}`
      };
      return dateTime;
    }
  },
  methods: {
    filterTodo(todo, value) {
      return todo.filter((todos) => {
        return todos.toLowerCase().indexOf(value) > -1;
      });
    },
    addTodo() {
      if (this.todo) {
        this.todoList.unshift(this.todo);
      }
      this.todo = '';
    },
    deleteTodo(e) {
      this.todoList.splice(this.todoList.indexOf(e.target), 1);
    },
    clearTodo() {
      this.todoList = [];
    }
  }
});