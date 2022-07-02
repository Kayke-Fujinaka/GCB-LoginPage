import { Story, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { InteractiveText, InteractiveTextProps } from ".";

export default {
  title: "InteractiveTexts/InteractiveText",
  component: InteractiveText,
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
} as ComponentMeta<typeof InteractiveText>;

const Template: Story<InteractiveTextProps> = (args) => (
  <InteractiveText {...args} />
);

export const InteractiveTextDesktop = Template.bind({});
InteractiveTextDesktop.args = {
  text: "Você já tem uma conta? ",
  link: "#",
  hyperlink: "Entre já!",
};
InteractiveTextDesktop.parameters = {
  backgrounds: { default: "desktop" },
};

export const InteractiveTextMobile = Template.bind({});
InteractiveTextMobile.args = {
  text: "Você já tem uma conta? ",
  link: "#",
  hyperlink: "Entre já!",
};
InteractiveTextMobile.parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
  backgrounds: { default: "mobile" },
};
