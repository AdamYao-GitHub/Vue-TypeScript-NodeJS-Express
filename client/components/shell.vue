<template lang="pug">
  div(class="MainShell")
    div(class="firstColumn")
      slot(name="firstColumn")
    div(class="secondColumn")
      slot(name="secondColumn")
    div(class="thirdColunm")
      slot(name="thirdColunm")
</template>
<script>
export default {
  name: "ShellComponent",
  methods: {
    firstColumnFullScreen() {},
    secondColumnFullScreen() {},
    thirdColumnFullScreen() {}
  },
  data: () => ({}),
  props: {},
  mounted() {}
};
</script>