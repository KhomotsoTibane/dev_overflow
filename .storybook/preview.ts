import "../app/globals.css";
import { globalDecorators } from "./decorators";
import type { Preview } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const preview: Preview = {
  parameters: {
    controls: {
      expanded:true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  decorators: globalDecorators,
};

export default preview;
