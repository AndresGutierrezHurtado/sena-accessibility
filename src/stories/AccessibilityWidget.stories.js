import React from 'react';

import { AccessibilityWidget } from '../components/AccessibilityWidget.jsx';

export default {
  title: 'AccessibilityWidget',
  component: AccessibilityWidget,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Light = {
  args: {
    theme: "light",
  },
};

export const Dark = {
  args: {
    theme: "dark",
  },
};

