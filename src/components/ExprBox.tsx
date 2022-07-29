import { Box, Center } from '@hope-ui/solid';
import { Component, createMemo } from 'solid-js';

export const ExprBox: Component<{ expr: string }> = (p) => {
  return (
    <Center borderWidth='2px' borderColor='$primary' borderRadius='$sm' height='$10'>
      <Box>{p.expr}</Box>
    </Center>
  );
};
