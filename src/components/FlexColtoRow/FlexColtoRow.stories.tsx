import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FlexColtoRow from './FlexColtoRow';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'react-rose/FlexColtoRow',
  component: FlexColtoRow,
} as ComponentMeta<typeof FlexColtoRow>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FlexColtoRow> = () => <FlexColtoRow />;

export const FlexColtoRowComponent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

