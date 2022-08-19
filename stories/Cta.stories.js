import ctaButton from './Cta.vue';
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { userEvent, waitFor, within } from '@storybook/testing-library';

export default {
  title: 'Example/Cta',
  component: ctaButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    ctaType: {
      control: { type: 'select' },
      options: ['bgPurple', 'bgBlack'],
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


storiesOf('Buttons', module)
  .add('button', () => {
    const label = text('Label', 'cta Button')
    const backgroundColor = color('Color', '#409eff')
    const height = number('height', 50)
    const width = number('width', 150)
    return {
      components: { ctaButton },
      template: `<Button
        @click.native="action"
        label="${label}"
        backGroundColor="${backgroundColor}"
        height="${height}px"
        width="${width}px"
      />`,
      methods: { action: action('button-clicked') },
    }
  })


const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ctaButton },
  template: '<cta-button @onClick="onClick" v-bind="$props" />',
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

const Submitted = Template.bind({});
Submitted.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByTestId('email'), 'hi@example.com');
  await userEvent.type(canvas.getByTestId('password'), 'supersecret');
  await userEvent.click(canvas.getByRole('button'));

  await waitFor(() => expect(args.onSubmit).toHaveBeenCalled());
};