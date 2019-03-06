<template>
  <div id="app">
    <Fiori3Shell/>
  </div>
</template>

<script>
import Fiori3Shell from './components/Fiori3Shell.vue'

export default {
  name: 'app',
  components: {
    Fiori3Shell
  }
}
</script>
<style lang='scss'>
@import './main.scss';
</style>