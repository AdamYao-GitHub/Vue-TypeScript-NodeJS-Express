<template>
<div class="fd-pagination">
  <span class="fd-pagination__total">30 items</span>
  <nav class="fd-pagination__nav">
    <a href="#" class="fd-pagination__link fd-pagination__link--previous" aria-label="Previous"
    aria-disabled="true"></a>
    <a href="#" class="fd-pagination__link" aria-selected="true">1</a>
    <a href="#" class="fd-pagination__link">2</a>
    <a href="#" class="fd-pagination__link">3</a>
    <a href="#" class="fd-pagination__link fd-pagination__link--next" aria-label="Next"
    aria-disabled="false"></a>
  </nav>
</div>
</tempalte>

<script>
  export default {
    name: 'Fiori3Pagination'
  }
</script>