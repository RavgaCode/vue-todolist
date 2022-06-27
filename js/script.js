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
});
