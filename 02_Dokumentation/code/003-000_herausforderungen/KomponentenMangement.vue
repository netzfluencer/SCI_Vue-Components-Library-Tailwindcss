<template>
  <nav>
    <nav-tab v-show="showTab" />
    <nav-tab-button @click="showTab = !showTab">Toggle</nav-tab-button>
  </nav>
</template>

<script>
// Für eine bessere Lesbarkeit wurde die Navbar.vue modularisiert
// Die importierten Komponenten werden jedoch nur von dieser Datei benötigt.
import NavTab from '../../molecules/Navigation/NavTab.vue'
import NavTabButton from '../../molecules/Navigation/NavTabButton.vue'
// Allerdings werden die Komponenten in den Molekül-Ordner übergeordnet, was die Übersichtlichkeit des Ordners im Hinblick auf alle weiteren Komponenten negativ beeinflußt

export default {
  data() {
    return {
      showTab: false
    }
  },
  components: {
    NavTab,
    NavTabButton
  }
}
</script>