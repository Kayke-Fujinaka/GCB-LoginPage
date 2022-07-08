import { Story, ComponentMeta } from "@storybook/react";
import { Container, ContainerProps } from ".";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export default {
  title: "Containers/Container",
  component: Container,
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
} as ComponentMeta<typeof Container>;

const Template: Story<ContainerProps> = (args) => <Container {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  backgrounds: { default: "desktop" },
};

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
  backgrounds: { default: "mobile" },
};
