import React from 'react';

import { AccessibilityWidget } from '../components/AccessibilityWidget';

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

