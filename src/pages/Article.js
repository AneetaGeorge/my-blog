import { useParams } from "react-router-dom";
import articlecontent from "./article-content";
import NotFound from "./PageNotFound";
import { useState, useEffect } from "react";
import axios from 'axios';

const Article = () => {
    const {articleId} = useParams();
    let [articleInfo, setArticleInfo] = useState({upvotes: 0, comments: []});

    useEffect(() => {
        //Cannot have async function as first argument in useEffect
        const loadArticleInfo = async () => {
            let response = await axios.get(`/api/articles/${articleId}`);
            let newArticleInfo = response.data;
            setArticleInfo(newArticleInfo);
        }

        loadArticleInfo();
    }, []);

    const article = articlecontent.find(article => article.name === articleId)

    if (!article)
    {
        return <NotFound/>
    }

    return (
        // empty tag Helper to return multiple tags (React Fragment)
        <> 
            <h1>{article.title}</h1>
            <p> This article has {articleInfo.upvotes} upvote(s)</p>
            {article.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
            ))}
        </>
    );
}

export default Article;