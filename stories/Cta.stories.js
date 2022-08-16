import MyButton from './Cta.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Cta',
  component: MyButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    ctaType: {
      control: { type: 'select' },
      options: ['lineRed', 'navy', 'red'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button @onClick="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  primary: true,
  label: '버튼',
};

export const lineRed = Template.bind({});
lineRed.args = {
  ctaType: 'lineRed',
  label: '버튼',
};

export const navy = Template.bind({});
navy.args = {
  ctaType: 'navy',
  label: '버튼',
};

export const red = Template.bind({});
red.args = {
  ctaType: 'red',
  label: '버튼',
};
