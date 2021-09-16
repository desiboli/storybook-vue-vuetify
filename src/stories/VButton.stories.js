import vuetify from "@/plugins/vuetify";
import VButton from "./VButton.vue";

export default {
  title: "Example/Vuetify/Button",
  component: VButton,
};

const Template = (args, { argTypes }) => ({
  vuetify,
  props: Object.keys(argTypes),
  components: { VButton },
  template: '<VButton @onClick="onClick" v-bind="$props" />',
});

export const Button = Template.bind({});
Button.args = {};
