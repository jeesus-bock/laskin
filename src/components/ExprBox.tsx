import { Box, Center } from '@hope-ui/solid';
import { Component, createMemo } from 'solid-js';

// ExprBox-komponentti näyttää lausekkeen laatikossa.
// Se ottaa propseinaan expr:n joka on itse lauseke merkkijonona ja
// valid totuusarvon joka merkkaa onko lauseke laskettavissa.
export const ExprBox: Component<{ expr: string; valid: boolean }> = (p) => {
  return (
    <Center borderWidth='2px' borderColor='$primary' borderRadius='$sm' height='$10'>
      <Box color={p.valid ? '' : 'red'}>{p.expr}</Box>
    </Center>
  );
};
