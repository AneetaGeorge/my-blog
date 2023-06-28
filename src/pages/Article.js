import { useParams } from "react-router-dom";
import articlecontent from "./article-content";
import NotFound from "./PageNotFound";

const Article = () => {
    const params = useParams();
    const articleId = params.articleId;
    const article = articlecontent.find(article => article.name === articleId)

    //Or say const {articleID} = useParams();

    if (!article)
    {
        return <NotFound/>
    }

    return (
        // empty tag Helper to return multiple tags (React Fragment)
        <> 
            <h1>{article.title}</h1>
            {article.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
            ))}
        </>
    );
}

export default Article;