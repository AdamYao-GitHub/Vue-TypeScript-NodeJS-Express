import Vue from "vue";

let v = new Vue({
  el: "#app",
  template: `
    <div>
        <div>Hello ADAM {{name}}!</div>
        Name: <input v-model="name" type="text">
    </div>`,
  data: {
    name: "World"
  }
});
