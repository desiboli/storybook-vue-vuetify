import VButton from './VButton.vue';

export default {
  title: 'Example/Vuetify/Button',
  component: VButton,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { VButton },
  template: '<VButton @onClick="onClick" v-bind="$props" />',
});

export const VuetifyButton = Template.bind({});
VuetifyButton.args = {};
