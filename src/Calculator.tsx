import { Center, Grid, GridItem } from '@hope-ui/solid';
import { Component, createMemo, createSignal } from 'solid-js';
import { CharButton } from './components/CharButton';
import { ExprBox } from './components/ExprBox';

// Laskin-komponetti
export const Calculator: Component = () => {
  // Luodaan signaali joka sisältää lausekkeen merkkijonona.
  // Aloitusarvo on tyhjä merkkijono.
  const [expr, setExpr] = createSignal('');

  // addChar lisää yhden merkin lausekkeeseen.
  const addChar = (char: string) => {
    // lauseke = lauseke + uusi merkki
    setExpr(expr() + char);
  };

  // delChar poistaa lausekkeen viimeisen merkin.
  // Käytetään C-napin kanssa.
  const delChar = () => {
    // Jos merkkijono on tyhjä, poistoa ei tapahdu.
    if (expr().length > 0) {
      setExpr(expr().slice(0, -1));
    }
  };
  // evaluate laskee lausekkeen arvon ja asettaa sen lausekkeeksi.
  // Käytetään =-napin kanssa
  const evaluate = () => {
    // Tarkistetaan että lauseke on ylipäänsä laskettavissa.
    if (!isValid()) {
      return;
    }
    // Ja otetaan tulos JSn eval() funktiota käyttäen.
    setExpr(eval(expr()));
  };

  // isValid memo palauttaa boolean totuusarvon onko lauseke on laskettavissa.
  const isValid = createMemo(() => {
    // eval() funktio heittää poikkeuksen epäonnistuessaan.
    try {
      eval(expr());
      // Jos kaikki meni ok, palautetaan true.
      return true;
    } catch (e) {
      // Minkä tahansa virheen sattuessa palautetaan false.
      return false;
    }
  });
  return (
    <Center height='$full'>
      <Grid templateColumns='repeat(1fr, 4)' gap='$4' borderRadius='$md' borderWidth='2px' borderColor='$info10' padding='$4'>
        <GridItem colSpan={4}>
          <ExprBox expr={expr()} valid={isValid()} />
        </GridItem>
        <CharButton char='1' add={addChar} />
        <CharButton char='2' add={addChar} />
        <CharButton char='3' add={addChar} />
        <CharButton char='(' add={addChar} />

        <CharButton char='4' add={addChar} />
        <CharButton char='5' add={addChar} />
        <CharButton char='6' add={addChar} />
        <CharButton char=')' add={addChar} />

        <CharButton char='7' add={addChar} />
        <CharButton char='8' add={addChar} />
        <CharButton char='9' add={addChar} />
        <CharButton char='.' add={addChar} />

        <CharButton char='+' add={addChar} />
        <CharButton char='0' add={addChar} />
        <CharButton char='-' add={addChar} />
        <CharButton char='*' add={addChar} />

        <CharButton char='/' add={addChar} />
        <CharButton char='C' add={delChar} />
        <GridItem colSpan={2}>
          <CharButton char='=' add={evaluate} />
        </GridItem>
      </Grid>
    </Center>
  );
};
