<template>
  <label class="lyp-radio" :class="{ 'is-checked': label == model }">
    <span class="lyp-radio_input">
      <span class="lyp-radio_inner"></span>
      <input
        type="radio"
        class="lyp-radio_original"
        :value="label"
        v-model="model"
      />
    </span>
    <span class="lyp-radio_label">
      <slot></slot>
      <!-- 如果没有传值，就把label作为文本显示 -->
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>
<script>
export default {
  name: "LypRadio",
  inject: {
    radioGroup: {
      default: ""
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    }
  },
  computed: {
    model: {
      get () {
        // return this.value
        return this.isGroup ? this.radioGroup.value : this.value;
      },
      set (newVal) {
        // this.$emit("input", newVal);
        this.isGroup
          ? this.radioGroup.$emit("input", newVal)
          : this.$emit("input", newVal);
      }
    },
    isGroup () {
      return !!this.radioGroup;
    }
  }
};
</script>
<style lang="scss" scoped>
.lyp-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  .lyp-radio_input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .lyp-radio_inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .lyp-radio_original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .lyp-radio_label {
    font-size: 14px;
    padding-left: 10px;
  }
}
// 选中的样式
.lyp-radio.is-checked {
  .lyp-radio_input {
    .lyp-radio_inner {
      border-color: #409eff;
      background-color: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .lyp-radio_label {
    color: #409eff;
  }
}
</style>
