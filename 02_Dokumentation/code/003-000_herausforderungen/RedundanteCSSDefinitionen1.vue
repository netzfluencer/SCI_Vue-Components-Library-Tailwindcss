<template>
  <section class="user-list-section">
    <ul class="user-list">
      <li v-for="n in 3" class="user-list__item">User {{n}}</li>
    </ul>
  </section>
</template>

<style lang="sass" scoped>
.user-list-section
  +make-container

.user-list
  +make-row
  &__item
    +make-col-ready
    +make-col(4)
    +md\-
      +make-col(6)
    +sm\-
      +make-col(12)
</style>