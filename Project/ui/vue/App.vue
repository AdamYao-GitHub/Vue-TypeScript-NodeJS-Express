<template>
  <div id="app">
    <Fiori3Shell/>
    <!-- <Fiori3ShellOverLay/> -->
  </div>
</template>

<script>
import Fiori3Shell from './components/Fiori3Shell'
// import Fiori3ShellOverLay from './components/shellOverLay'

export default {
  name: 'app',
  components: {
    Fiori3Shell
    // Fiori3ShellOverLay
  }
}
</script>
<style lang='scss'>
@import './main.scss';
</style>