import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import Home from '@pages/index';

const mockStore = configureMockStore();

/* eslint-disable */
describe('HomeTest', () => {
  test('Check for Hello Text', () => {
    const store = mockStore()

    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(screen.getByText('Hello NextJS with CircleCI 👋')).toBeInTheDocument();
  });
});
