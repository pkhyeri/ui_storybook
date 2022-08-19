import ctaButton from './Cta.vue';
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Design System/Atoms',
  component: ctaButton,
  argTypes: {
    //backgroundColor: { control: 'color' },
    ctaType: {
      control: { type: 'select' },
      options: ['bgPurple', 'bgBlack', 'bgRed'],
    },
  },
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/XZmQKqNVAqSXTJS1CAsXu1/Untitled?node-id=0%3A1",
    },
  },
};


const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ctaButton },
  template: '<cta-button @onClick="onClick" @mouseover="onMouseover" v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};


export const bgPurple = Template.bind({});
bgPurple.args = {
  ctaType: 'bgPurple',
  label: 'Button',
};

export const bgBlack = Template.bind({});
bgBlack.args = {
  ctaType: 'bgBlack',
  label: 'Button',
};

export const bgRed = Template.bind({});
bgRed.args = {
  ctaType: 'bgRed',
  label: 'Button',
};