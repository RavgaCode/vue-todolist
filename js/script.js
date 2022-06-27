var app = new Vue({
  el: "#app",
  data: {
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
    removeTodo(index) {
      // Elimino l'elemento nell'array all'index specifico
      this.doList.splice(index, 1);
    },
  },
});
