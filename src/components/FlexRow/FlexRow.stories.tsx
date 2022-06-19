import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FlexRow from './FlexRow';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'react-rose/FlexRow',
  component: FlexRow,
} as ComponentMeta<typeof FlexRow>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FlexRow> = () => <FlexRow />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

