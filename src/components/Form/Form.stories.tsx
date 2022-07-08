import { Story, ComponentMeta } from "@storybook/react";
import { Form, FormProps } from ".";

export default {
  title: "Components/Form",
  component: Form,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Form>;

const Template: Story<FormProps> = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.decorators = [
  (Story) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1rem",
          alignItems: "center",
        }}
      >
        <Story />
      </div>
    );
  },
];
