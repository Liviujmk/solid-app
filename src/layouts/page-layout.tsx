import { Container } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { HeaderLayout } from './header-layout';

export const PageLayout = () => {
  return (
    <Container>
      <HeaderLayout />
      <Outlet />
    </Container>
  );
}