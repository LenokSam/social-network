import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Header} from '../../Header/Header';
import {Dialog} from './Dialog';
import {v1} from 'uuid';


export default {
  title: 'Dialog',
  component: Dialog
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  dialog:
    {
      id: v1(),
      name: 'Griz',
      text: 'Choose a job you love, and you will never have to work a day in your life.',
      avatar: 'https://mystickermania.com/cdn/stickers/cartoons/we-bare-bears-grizz-very-closely-512x512.png',
      login: 'griz'
    }
}

export const LongName = Template.bind({});
LongName.args = {
  dialog:
    {
      id: v1(),
      name: 'Griz Griz Griz Griz Griz Griz',
      text: 'Choose a job you love, and you will never have to work a day in your life.',
      avatar: 'https://mystickermania.com/cdn/stickers/cartoons/we-bare-bears-grizz-very-closely-512x512.png',
      login: 'griz'
    }
}
