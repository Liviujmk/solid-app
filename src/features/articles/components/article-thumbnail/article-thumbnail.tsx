import { Card, Text, Button, Group } from '@mantine/core';
import { Article } from '../../types/article-types';
import { ArticleTags } from '../article-tags/article-tags';

interface Props {
  article: Article
}

export const ArticleThumbnail = ({ article }: Props) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group position="apart" mt="md" mb="xs">
        <Text weight={700} size="lg">{article.title}</Text>
        <ArticleTags tags={article.tags} />
      </Group>

      <Text size="sm" color="dimmed">
        {article.body}
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Edit article
      </Button>
    </Card>
  );
}