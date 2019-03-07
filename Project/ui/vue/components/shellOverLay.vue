<template>
  <div class="fd-modal" role="dialog">
    <div class="fd-modal__content" role="document">
      <header class="fd-modal__header">
        <h1 class="fd-modal__title">fd-modal__header</h1>
        <button class="fd-button--light fd-modal__close"></button>
      </header>
      <div class="fd-modal__body">fd-modal__body</div>
      <footer class="fd-modal__footer">
        <div class="fd-modal__actions">
          <button class="fd-button--light">fd-modal__action</button>
          <button class="fd-button">fd-modal__action</button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Fiori3ShellOverLay'
}
</script>