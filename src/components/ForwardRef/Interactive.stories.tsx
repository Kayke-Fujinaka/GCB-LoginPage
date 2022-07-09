import { Story, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ForwardRef, ForwardRefProps } from ".";

export default {
  title: "Components/ForwardRef",
  component: ForwardRef,
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    backgrounds: {
      values: [
        {
          name: "desktop",
          value: "#FFEBD6",
        },
        {
          name: "mobile",
          value: "#423B32",
        },
      ],
    },
  },
} as ComponentMeta<typeof ForwardRef>;

const Template: Story<ForwardRefProps> = (args) => <ForwardRef {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Você já tem uma conta? ",
  link: "#",
  hyperLink: "Entre já!",
};
Default.parameters = {
  backgrounds: { default: "desktop" },
};

export const Mobile = Template.bind({});
Mobile.args = {
  text: "Você já tem uma conta? ",
  link: "#",
  hyperLink: "Entre já!",
};
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
  backgrounds: { default: "mobile" },
};
