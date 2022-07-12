import { Story, ComponentMeta } from "@storybook/react";
import { Modal } from ".";

export default {
  title: "Components/Modal",
  component: Modal,
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
} as ComponentMeta<typeof Modal>;

const Template: Story<typeof Modal> = () => <Modal />;

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
          alignItems: "center",
        }}
      >
        <Story />
      </div>
    );
  },
];
