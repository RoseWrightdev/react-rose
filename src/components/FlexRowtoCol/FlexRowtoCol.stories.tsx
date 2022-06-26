import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FlexRowtoCol from './FlexRowtoCol';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'react-rose/FlexRowtoCol',
  component: FlexRowtoCol,
} as ComponentMeta<typeof FlexRowtoCol>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FlexRowtoCol> = () => <FlexRowtoCol />;

export const FlexColtoRowComponent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

