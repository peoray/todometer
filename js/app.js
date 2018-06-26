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

      dd = dd < 10 ? `0${dd}` : `${dd}`;
      mm = mm < 10 ? `0${mm}` : `${mm}`;
      hh = hh < 10 ? `0${hh}` : `${hh}`;
      min = min < 10 ? `0${min}` : `${min}`;

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
      return todo.filter(todos => {
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
