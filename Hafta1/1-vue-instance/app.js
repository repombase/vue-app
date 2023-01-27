const app = Vue.createApp({
  data() {
    return {
      title: "İlk gün Uygulaması",
      content: "İçerik alanı....",
      coords: {
        x: 0,
        y: 0,
      },
      eduflow: {
        title: "Müfredat ve açıklamalar içinnnn",
        target: "_blank",
        url: "https://eduflow.kablosuzkedi.com",
        alt: "mufredat-kablosuzkedi-vue",
      },
    };
  },
  methods: {
    changeTitle(baslik) {
      this.title = baslik;
    },
    updateCoords(event) {
      this.coords = {
        x: event.x,
        y: event.y,
      };
    },
  },
}).mount("#app");
