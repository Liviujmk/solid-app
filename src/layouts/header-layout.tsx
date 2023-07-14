import { Title, Paper } from '@mantine/core';

export const HeaderLayout = () => {
  return (
    <Paper p="md" mb={'3rem'}>
      <Title align='center' order={1} fw={900}>SOLID BLOG</Title>
    </Paper>
  );
}