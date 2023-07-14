import { MantineProvider } from '@mantine/core';
import { Router } from './router/router';


export function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router />
    </MantineProvider>
  );
}