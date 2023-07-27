import { useParams } from "react-router-dom";
import articlecontent from "./article-content";
import NotFound from "./PageNotFound";
import { useState, useEffect } from "react";
import axios from 'axios';
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";
import useUser from "../hooks/useUser";

const Article = () => {
    const {articleId} = useParams();
    let [articleInfo, setArticleInfo] = useState({upvotes: 0, comments: []});
    const {user, isLoading} = useUser();

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
    const upvoteArticle = async () =>
    {
        let response = await axios.put(`/api/articles/${articleId}/upvote`);
        let newArticleInfo = response.data;
        setArticleInfo(newArticleInfo);
    }

    if (!article)
    {
        return <NotFound/>
    }

    return (
        // empty tag Helper to return multiple tags (React Fragment)
        <> 
            <h1>{article.title}</h1>
            <div className="upvotes-section">
                {user ? 
                    <button onClick={upvoteArticle}>Upvote</button>
                    : <button>Login to upvote articles</button>
                }
                <p> This article has {articleInfo.upvotes} upvote(s)</p>
            </div>
            {article.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
            ))}
            {user ? 
                    <CommentForm articleId={articleId} onUpdatedArticle={updatedArticle => setArticleInfo(updatedArticle)} />
                    : <button>Login to comment on articles</button>
            }
            <CommentList comments={articleInfo.comments}/>
        </>
    );
}

export default Article;