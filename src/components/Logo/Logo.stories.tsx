import { Story, ComponentMeta } from "@storybook/react";
import { Logo, LogoProps } from ".";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export default {
  title: "Logos/Logos",
  component: Logo,
  argTypes: {
    checked: {
      control: "boolean",
    },
  },
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
} as ComponentMeta<typeof Logo>;

const Template: Story<LogoProps> = (args) => <Logo {...args} />;

export const LogoDesktop = Template.bind({});
LogoDesktop.args = {
  src: "/logo_desktop.svg",
  alt: "Logo GCB Desktop",
  height: 120,
  width: 420,
};
LogoDesktop.parameters = {
  backgrounds: { default: "desktop" },
};

export const LogoMobile = Template.bind({});
LogoMobile.args = {
  src: "/logo_desktop.svg",
  alt: "Logo GCB Mobile",
  height: 120,
  width: 420,
};
LogoMobile.parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
  backgrounds: { default: "mobile" },
};
