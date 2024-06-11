import type { Meta, StoryObj } from "@storybook/react";
import { Sheet } from "@/components/ui/sheet";
// import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Sheet> = {
  title: "Components/Sheet",
  component: Sheet,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  // argTypes: {
  //   isOpen: {
  //     control: 'boolean',
  //     description: 'Whether the sheet is open',
  //   },
  //   onClose: {
  //     action: 'closed',
  //     description: 'Function called when the sheet is closed',
  //   },
  //   title: {
  //     control: 'text',
  //     description: 'Title of the sheet',
  //   },
  //   children: {
  //     control: 'text',
  //     description: 'Content to be displayed inside the sheet',
  //   },
  //   className: {
  //     control: 'text',
  //     description: 'Custom tailwind CSS classes to apply to the sheet',
  //   },
  // },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: false,
    children: "Content goes here",
  },
};
