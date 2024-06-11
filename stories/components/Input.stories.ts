import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@/components/ui/input";

const meta: Meta<typeof Input> = {
  title: "Components/ui/input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      control: "select",
      description: "Input variants",
      options: ["default", "search"],
    },
    disabled: {
      control: "boolean",
    },
    className: {
      control: "select",
      description: "Custom tailwind CSS classes to apply to the button",
      options: [
        "no-focus light-border-2 background-light900_dark300 text-dark300_light700 min-h-[56px] border",
        "paragraph-regular no-focus placeholder text-dark400_light700 border-none bg-transparent shadow-none outline-none",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Input Placeholder",
    className:
      "no-focus light-border-2 background-light900_dark300 text-dark300_light700 min-h-[56px] border",
  },
};

export const Search: Story = {
  args: {
    type: "text",
    placeholder: "Search for something",
    className:
      "paragraph-regular no-focus placeholder text-dark400_light700 border-none bg-transparent shadow-none outline-none",
  },
};
