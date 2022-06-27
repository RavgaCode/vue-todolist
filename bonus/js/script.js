var app = new Vue({
  el: "#app",
  data: {
    newTaskText: "",
    newTask: "",
    doList: [
      {
        text: "Fare la spesa",
        done: true,
      },
      {
        text: "Chiamare nonna",
        done: false,
      },
      {
        text: "Fissare appuntamento dentista",
        done: false,
      },
    ],
  },
  methods: {
    addNewTask() {
      this.newTask = {
        text: this.newTaskText,
        done: false,
      };
      this.doList.push(this.newTask);
      this.newTaskText = "";
    },
    removeTask(index) {
      // Elimino l'elemento nell'array all'index specifico
      this.doList.splice(index, 1);
    },
    changeStatus(index) {
      this.doList[index].done = !this.doList[index].done;
    },
  },
});
