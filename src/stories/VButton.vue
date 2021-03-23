<template>
  <v-btn color="primary" @click="onClick">
    <v-icon>mdi-lock</v-icon>
    vuetify button
  </v-btn>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { VBtn, VIcon } from "vuetify/lib";

@Component({
  name: "VButton",
  components: {
    VBtn,
    VIcon,
  },
})
export default class VButton extends Vue {
  onClick() {
    this.$emit("onClick");
  }
}
</script>

<style lang="scss" scoped>
// Just an example to show that the deep selector works!
::v-deep.v-btn:not(.v-btn--round).v-size--default {
  height: 80px;
}
</style>
