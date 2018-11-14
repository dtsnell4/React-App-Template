import { setDefaults } from '@storybook/addon-info';
import { configure } from '@storybook/react';
setDefaults({
  header: true, // Toggles display of header with component name and description
});

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
