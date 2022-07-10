import { Story, ComponentMeta } from "@storybook/react";
import { Form, FormProps } from ".";

export default {
  title: "Components/Form",
  component: Form,
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
} as ComponentMeta<typeof Form>;

const Template: Story<FormProps> = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  backgrounds: { default: "desktop" },
};
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
