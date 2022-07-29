import { Component } from 'solid-js';
import { Button } from '@hope-ui/solid';

// CharButton-komponentti näyttää yksittäisen napin.
// Se ottaa propesinaan char merkin ja add funktion jota kutsutaan nappia painettaessa
// char-arvo parametrinaan.
export const CharButton: Component<{ char: string; add: (char: string) => void }> = (p) => {
  return (
    <Button width='$full' onClick={() => p.add(p.char)}>
      {p.char}
    </Button>
  );
};
