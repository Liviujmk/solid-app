import { Badge, Paper } from "@mantine/core";

interface Props {
  tags: string[];
}

export const ArticleTags = (
  { tags }: Props
) => {
  return (
    <Paper>
      {tags.map((tag) => (
        <Badge key={tag} mr={5} mb={1.5}>{tag}</Badge>
      ))}
    </Paper>
  );
};