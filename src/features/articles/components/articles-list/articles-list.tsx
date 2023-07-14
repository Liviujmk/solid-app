import { SimpleGrid } from "@mantine/core"
import { useGetArticlesQuery } from "../../api/articles-api"
import { ArticleThumbnail } from "../article-thumbnail/article-thumbnail"

export const ArticlesList = () => {
  const {data: articles, isLoading, isError} = useGetArticlesQuery()
  
  if (isLoading) {
    return <div>Loading...</div>
  }
  
  if (isError) {
    return <div>Error</div>
  }
  return (
    <SimpleGrid cols={3} spacing="xl" verticalSpacing="lg">
      {articles?.map((article) => (
        <ArticleThumbnail key={article.id} article={article} /> 
      ))}
    </SimpleGrid>
  )
}
