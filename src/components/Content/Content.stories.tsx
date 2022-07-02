import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Content } from ".";

export default {
  title: "Contents/Content",
  component: Content,
} as ComponentMeta<typeof Content>;

const Template: ComponentStory<typeof Content> = (args) => <Content />;

export const ContentDesktop = Template.bind({});
