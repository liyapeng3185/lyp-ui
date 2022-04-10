import Button from "./button.vue";
import CheckBoxGroup from "./checkbox-group.vue";
import CheckBox from "./checkbox.vue";
import Dialog from "./dialog.vue";
import FormItem from "./form-item.vue";
import Form from "./form.vue";
import Input from "./input.vue";
import RadioGroup from "./radio-group.vue";
import Radio from "./radio.vue";
import Swich from "./switch.vue";
import "./fonts/iconfont.css";
const components = [
  Button,
  Dialog,
  Input,
  Swich,
  Radio,
  RadioGroup,
  CheckBox,
  CheckBoxGroup,
  Form,
  FormItem,
];

const install = function (Vue) {
  components.forEach((com) => {
    Vue.component(com.name, com);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
};
