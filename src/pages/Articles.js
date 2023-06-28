import articlecontent from "./article-content";
import ArticleList from "../components/ArticleList";

const Articles = () => {
    return (
        <>
            <h1>Articles</h1>
            <ArticleList articles={articlecontent}/>
        </>
    );
}

export default Articles;