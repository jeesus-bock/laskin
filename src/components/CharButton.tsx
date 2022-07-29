import { Component } from 'solid-js';
import { Button } from '@hope-ui/solid';

export const CharButton: Component<{ char: string; add: (char: string) => void }> = (p) => {
  return (
    <Button width='$full' onClick={() => p.add(p.char)}>
      {p.char}
    </Button>
  );
};
