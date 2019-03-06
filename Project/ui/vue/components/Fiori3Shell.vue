<template>
  <div class="fd-shell fd-shell--fundamentals">
    <div class="fd-shell__header">fd-shell__header</div>
    <div class="fd-shell__app">
      <div class="fd-app">
        <main class="fd-app__main">fd-app__main</main>
      </div>
    </div>
    <div class="fd-shell__footer">fd-shell__footer</div>
  </div>
</template>

<script>
export default {
  name: 'Fiori3Shell',
  props: {
    msg: String
  }
}
</script>