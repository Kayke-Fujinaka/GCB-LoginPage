import { Story, ComponentMeta } from "@storybook/react";
import { Heading } from ".";

export default {
  title: "Components/Heading",
  component: Heading,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      values: [
        {
          name: "desktop",
          value: "#FFEBD6",
        },
      ],
    },
  },
} as ComponentMeta<typeof Heading>;

const Template: Story<typeof Heading> = () => <Heading />;

export const Default = Template.bind({});
Default.parameters = {
  backgrounds: { default: "desktop" },
};