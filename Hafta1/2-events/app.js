const app = Vue.createApp({
    data() {
        return {
            fullName:"Vue binds",
        }
    },
  methods: {
    updateValue(event) {
        this.fullName=event.target.value;
      //console.log(event.target.value);
    },
  },
}).mount("#app");
