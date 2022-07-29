import { Center, Grid, GridItem } from '@hope-ui/solid';
import { Component, createSignal } from 'solid-js';
import { CharButton } from './components/CharButton';
import { ExprBox } from './components/ExprBox';

export const Calculator: Component = () => {
  const [expr, setExpr] = createSignal('');
  const addChar = (char: string) => {
    setExpr(expr() + char);
  };
  const delChar = () => {
    setExpr(expr().slice(0, -1));
  };
  const evaluate = () => {
    setExpr(eval(expr()));
  };
  return (
    <Center height='$full'>
      <Grid templateColumns='repeat(1fr, 4)' gap='$4' borderRadius='$md' borderWidth='2px' borderColor='$info10' padding='$4'>
        <GridItem colSpan={4}>
          <ExprBox expr={expr()} />
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
