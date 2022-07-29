import { describe, expect, test, vi } from 'vitest';

import { render, fireEvent } from 'solid-testing-library';

import { CharButton } from './CharButton';

describe('<CharButton />', () => {
  test('it will render a button', () => {
    const add = vi.fn();
    const { getByText, unmount } = render(() => <CharButton char='1' add={add} />);
    expect(getByText('1')).toBeInTheDocument();
    unmount();
  });
});
