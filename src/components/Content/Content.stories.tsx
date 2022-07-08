import { Story, ComponentMeta } from "@storybook/react";
import { Content } from ".";

export default {
  title: "Containers/Content",
  component: Content,
} as ComponentMeta<typeof Content>;

const Template: Story<typeof Content> = (args) => <Content />;

export const Default = Template.bind({});
