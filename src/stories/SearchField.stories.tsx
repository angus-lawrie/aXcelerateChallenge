import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SearchField } from '../components/SearchField/SearchField';
import { User } from '../components/SearchField/SearchField.types';

const meta: Meta<typeof SearchField> = {
  title: 'Components/SearchField',
  component: SearchField,
  tags: ['autodocs'], // 👈 enables auto-generated docs
  parameters: {
    docs: {
      description: {
        component:
          'The `SearchField` component lets users search and filter users by name, and view them grouped by attendance status. The component takes an array of Users as an arument, a boolean which toggles emails being displayed, and a desired width of the prop.',
      },
    },
  },
  argTypes: {
    users: {
      description: 'Array of user objects',
    },
    emailCheck: {
      control: 'boolean',
      description: 'If true, displays the user’s email address',
    },
    width: {
      control: 'text',
      description: 'Sets the component width (e.g., "500px", "100%")',
    },
  },
};

export default meta;

type Story = StoryObj<typeof SearchField>;


const mockUsers: User[] = [
  {
    id: '1',
    fullName: 'Waldo Picklefeet',
    email: 'waldo.picklefeet@wonky.biz',
    avatarUrl: 'https://robohash.org/waldo1',
    status: 'attended',
  },
  {
    id: '2',
    fullName: 'Binky Fiddlesticks',
    email: 'binky.fiddlesticks@noodle.net',
    avatarUrl: 'https://robohash.org/binky2',
    status: 'absent',
  },
  {
    id: '3',
    fullName: 'Zelda Noodlehorn',
    email: 'zelda.noodlehorn@sillymail.com',
    avatarUrl: 'https://robohash.org/zelda3',
    status: 'attended',
  },
  {
    id: '4',
    fullName: 'Milo Wobbleton',
    email: 'milo.wobbleton@pudding.org',
    avatarUrl: 'https://robohash.org/milo4',
    status: 'absent',
  },
  {
    id: '5',
    fullName: 'Snorky Wigglebottom',
    email: 'snorky.wiggle@funzone.co',
    avatarUrl: 'https://robohash.org/snorky5',
    status: 'attended',
  },
  {
    id: '6',
    fullName: 'Fizz Blunderbuss',
    email: 'fizz.blunder@banana.cat',
    avatarUrl: 'https://robohash.org/fizz6',
    status: 'absent',
  },
  {
    id: '7',
    fullName: 'Luna Bumblefritz',
    email: 'luna.bf@bloopmail.com',
    avatarUrl: 'https://robohash.org/luna7',
    status: 'attended',
  },
  {
    id: '8',
    fullName: 'Tofu McSprocket',
    email: 'tofu.sprocket@crayon.io',
    avatarUrl: 'https://robohash.org/tofu8',
    status: 'absent',
  },
  {
    id: '9',
    fullName: 'Wiggles McSnort',
    email: 'wiggles.snort@pigmail.biz',
    avatarUrl: 'https://robohash.org/wiggles9',
    status: 'attended',
  },
  {
    id: '10',
    fullName: 'Nugget Spatula',
    email: 'nugget.spat@grease.ly',
    avatarUrl: 'https://robohash.org/nugget10',
    status: 'absent',
  },

];

export const email = () => <SearchField users={mockUsers} emailCheck={true} width='400px' />;
export const noEmail = () => <SearchField users={mockUsers} emailCheck={false} width='400px' />;
