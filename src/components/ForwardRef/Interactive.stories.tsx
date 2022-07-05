import { Story, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ForwardRef, ForwardRefProps } from ".";

export default {
  title: "ForwardRefs/ForwardRef",
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

const Template: Story<ForwardRefProps> = (args) => (
  <ForwardRef {...args} />
);

export const ForwardRefDesktop = Template.bind({});
ForwardRefDesktop.args = {
  text: "Você já tem uma conta? ",
  link: "#",
  hyperlink: "Entre já!",
};
ForwardRefDesktop.parameters = {
  backgrounds: { default: "desktop" },
};

export const ForwardRefMobile = Template.bind({});
ForwardRefMobile.args = {
  text: "Você já tem uma conta? ",
  link: "#",
  hyperlink: "Entre já!",
};
ForwardRefMobile.parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
  backgrounds: { default: "mobile" },
};
