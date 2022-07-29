import { render } from 'solid-js/web';
import { HopeProvider } from '@hope-ui/solid';

import { Calculator } from './Calculator';

render(
  () => (
    <HopeProvider>
      <Calculator />
    </HopeProvider>
  ),
  document.getElementById('root') || document.body
);
