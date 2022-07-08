import { Story, ComponentMeta } from "@storybook/react";
import { Heading } from ".";

export default {
  title: "Components/Heading",
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: Story<typeof Heading> = (args) => <Heading />;

export const Default = Template.bind({});
