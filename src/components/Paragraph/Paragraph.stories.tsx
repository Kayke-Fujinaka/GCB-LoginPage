import { Story, ComponentMeta } from "@storybook/react";
import { Paragraph } from ".";

export default {
  title: "Components/Paragraph",
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>;

const Template: Story<typeof Paragraph> = (args) => <Paragraph />;

export const Default = Template.bind({});
