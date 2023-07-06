const CommentList = ({comments}) => (
    <>
        <h3>Comments: </h3>
        {comments.map((comment, i) => (
            <div className="comment" key={i}>
                <h4>{comment.author}</h4>
                <p>{comment.comment}</p>
            </div>
        ))
        }
    </>
)

export default CommentList;