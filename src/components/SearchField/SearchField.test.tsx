import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SearchField } from './SearchField';
import '@testing-library/jest-dom';
import { User } from './SearchField.types';

const mockUsers: User[] = [
  {
    id: '1',
    fullName: 'Johny Boy',
    email: 'johnsemail@gmail.com',
    avatarUrl: 'https://via.placeholder.com/40',
    status: 'attended',
  },
  {
    id: '2',
    fullName: 'Janey Girl',
    email: 'janesemail@hotmail.com',
    avatarUrl: 'https://via.placeholder.com/40',
    status: 'absent',
  },
];


test('filters users by search input', () => {
  render(<SearchField users={mockUsers} emailCheck={true} width='400px'/>);
  fireEvent.change(screen.getByPlaceholderText(/search/i), {
    target: { value: 'Jane' },
  });
  expect(screen.getByText('Janey Girl')).toBeInTheDocument();
  expect(screen.queryByText('Johny Boy')).not.toBeInTheDocument();
});
