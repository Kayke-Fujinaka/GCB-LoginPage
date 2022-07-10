import { Story, ComponentMeta } from "@storybook/react";
import { Content } from ".";

export default {
  title: "Containers/Content",
  component: Content,
  parameters: {
    backgrounds: {
      values: [
        {
          name: "desktop",
          value: "#FFEBD6",
        },
      ],
    },
  },
} as ComponentMeta<typeof Content>;

const Template: Story<typeof Content> = () => <Content />;

export const Default = Template.bind({});
Default.parameters = {
  backgrounds: { default: "desktop" },
};