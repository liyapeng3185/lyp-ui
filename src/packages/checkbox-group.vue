<template>
  <div class="one-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "LypCheckboxGroup",
  provide () {
    return {
      CheckboxGroup: this
    };
  },
  props: {
    value: {
      type: Array
    }
  }
};
</script>
