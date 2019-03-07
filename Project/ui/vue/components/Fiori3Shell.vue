<template>
  <div class="fd-shell fd-shell--fundamentals">
    <div class="fd-shell__header">
      <Fiori3SHellBar/>
    </div>
    <div class="fd-shell__app">
      <div class="fd-app">
        <main class="fd-app__main">
          <Firoi3Panel/>
        </main>
      </div>
    </div>
    <div class="fd-shell__footer">fd-shell__footer</div>
    <div class="fd-shell__overlay fd-overlay fd-overlay--alert" aria-hidden="false">
      <div class="fd-alert fd-alert--warning fd-alert--dismissible" role="alert" id="4Nolz351">
        <button class="fd-alert__close" aria-controls="4Nolz351" aria-label="Close"></button>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </div>
    </div>
  </div>
</template>

<script>
import Fiori3SHellBar from './shellBar'
import Firoi3Panel from './panel'

export default {
  name: 'Fiori3Shell',
  components: { Fiori3SHellBar, Firoi3Panel }
}
</script>