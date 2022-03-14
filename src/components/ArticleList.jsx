import Article from "./Article";

const ArticleList = ({ posts }) => (
  <main>
    {posts.map((post) => (
      <Article
        title={post.title}
        date={post.date}
        preview={post.preview}
        minutes={post.minutes}
        key={post.id}
      />
    ))}
  </main>
);

export default ArticleList;