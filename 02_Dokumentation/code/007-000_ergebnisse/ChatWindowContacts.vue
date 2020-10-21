<template>
  <div>
    <entity v-for="(contact, i) in contacts" :key="i" :class="[roundedClass]">
      <template #image>
        <portal-avatar :imageName="contact.image">
          <template #badge v-if="contact.unreadMessages > 0">
            <badge>{{ contact.unreadMessages }}</badge>
          </template>
        </portal-avatar>
      </template>
      <template #caption>{{ contact.name }}</template>
      <template #description>{{ contact.lastMessage}}</template>
    </entity>
  </div>
</template>

<script>
export default {
  props: {
    roundedClass: {
      type: [String, Object, Array],
      default: 'rounded'
    }
  }
  // API Calls and more
}
</script>