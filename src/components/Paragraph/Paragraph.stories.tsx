import { Story, ComponentMeta } from "@storybook/react";
import { Paragraph } from ".";

export default {
  title: "Paragraphs/Paragraph",
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>;

const Template: Story<typeof Paragraph> = (args) => <Paragraph />;

export const ParagraphDesktop = Template.bind({});
