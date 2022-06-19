import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FlexCol from './FlexCol';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'react-rose/FlexCol',
  component: FlexCol,
} as ComponentMeta<typeof FlexCol>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FlexCol> = () => <FlexCol />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

