import { useState } from "react";
import axios from 'axios';

const CommentForm = ({articleId, onUpdatedArticle}) => {
    let [author, setAuthor] = useState("");
    let [comment, setComment] = useState("");

    let addComment = async () => {
        let response = await axios.post(`/api/articles/${articleId}/comments`, 
        {
            author: author,
            comment: comment
        });
        
        let updatedArticle = response.data;
        onUpdatedArticle(updatedArticle);

        setAuthor("");
        setComment("");
    };

    return (
        <div className="add-comment-form">
            <h3>Add a comment</h3>
            <label>
                Name:
                <input 
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    type="text" 
                />
            </label>
            <label>
                Comment:
                <textarea
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    rows="4" 
                    cols="50"
                />
            </label>
            <button onClick={addComment}>Add Comment</button>
        </div>
    )
};

export default CommentForm;
