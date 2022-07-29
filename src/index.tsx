import { render } from 'solid-js/web';
import { HopeProvider } from '@hope-ui/solid';

import { Calculator } from './Calculator';

// HopeProvider antaa Hope-UIn käyttöön appissa.
render(
  () => (
    <HopeProvider>
      <Calculator />
    </HopeProvider>
  ),
  document.getElementById('root') || document.body
);
