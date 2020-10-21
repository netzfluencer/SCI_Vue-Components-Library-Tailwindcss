<template>
  <header class="main-header">
    <ul class="site-nav">
      <li v-for="n in 3" class="site-nav__item">Icon {{n}}</li>
    </ul>
  </header>
</template>

<style lang="sass" scoped>
.main-header
  +make-container

.site-nav
  +make-row
  &__item
    +make-col-ready
    +make-col(4)
</style>