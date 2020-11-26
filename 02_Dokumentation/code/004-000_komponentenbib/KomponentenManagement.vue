<template>
  <nav>
    <navbar-tab v-show="showTab" />
    <navbar-tab-button @click="showTab = !showTab">Toggle</nav-tab-button>
  </nav>
</template>

<script>
import NavbarTab from './_components/NavbarTab.vue'
import NavbarTabButton from './_components/NavbarTabButton.vue'

export default {
  data() {
    return {
      showTab: false
    }
  },
  components: {
    NavbarTab,
    NavbarTabButton
  }
}
</script>