import { Story, ComponentMeta } from "@storybook/react";
import { Paragraph } from ".";

export default {
  title: "Components/Paragraph",
  component: Paragraph,
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
} as ComponentMeta<typeof Paragraph>;

const Template: Story<typeof Paragraph> = (args) => <Paragraph />;

export const Default = Template.bind({});
Default.parameters = {
  backgrounds: { default: "desktop" },
};