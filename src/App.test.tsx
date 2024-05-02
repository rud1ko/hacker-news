import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import {Button} from "@vkontakte/vkui";
import {LastNews} from "./pages/lastNews";

afterEach(cleanup);


describe('Test App', () => {
  test('just btn render', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
        <Button onClick={handleClick}>Click me</Button>
    );
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const button = getByText('Click me');
    fireEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(handleClick).toHaveBeenCalled();
  });
})
