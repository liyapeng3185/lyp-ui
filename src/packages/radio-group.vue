<template>
  <div class="lyp-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "LypRadioGroup",
  provide () {
    return {
      radioGroup: this
    };
  },
  props: {
    value: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
</style>
