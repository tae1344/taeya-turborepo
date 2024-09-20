import type {Preview} from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        // 👇 Default values
        dark: {name: 'Dark', value: '#333'},
        light: {name: 'Light', value: '#FFF'},
        // 👇 Add your own
        maroon: {name: 'Maroon', value: '#400'},
      },
    }
  },
  initialGlobals: {
    backgrounds: {value: 'light'},
  }
};

export default preview;
