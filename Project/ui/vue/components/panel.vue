<template>
  <section class="fd-section">
    <div class="fd-section__header">
      <h1 class="fd-section__title">Section title</h1>
    </div>
    <div class="fd-panel">
      <div class="fd-panel__header">
        <div class="fd-panel__head">
          <h1 class="fd-panel__title">Title 1</h1>
          <p class="fd-panel__description">Description 1</p>
        </div>
        <div class="fd-panel__actions">Actions</div>
      </div>
      <div class="fd-panel__filters" id>Filters</div>
      <div class="fd-panel__body">
        <Fiori3Table/>
      </div>
      <div class="fd-panel__footer">
        <Fiori3Pagination/>
      </div>
    </div>
  </section>
</template>

<script>
import Fiori3Table from './table'
import Fiori3Pagination from './paging'
export default {
  name: 'Firoi3Panel',
  components: {
    Fiori3Table,
    Fiori3Pagination
  }
}
</script>