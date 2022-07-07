import React ,{useState}from 'react'

export default function Buttons({vid}) {
    const [upvotes, setUpvotes] = useState(vid.upvotes);
    const [downvotes, setDownvotes] = useState(vid.downvotes);
    const [comments, setComments] = useState(false);


    const handleUpvote = (event)=>{
        event.currentTarget.disabled = true;
        setUpvotes(upvotes+1);
      }
      const handleDownvote = (event)=>{
        event.currentTarget.disabled = true;
        setDownvotes(downvotes-1);
      }

      function handleComments() {
        setComments(!comments);
      }

  return (
    <div>

<button 
      style={{textAlign:"center"}}
      onClick={handleUpvote}>
        👍{upvotes} upvotes</button>
      <button 
      style={{textAlign:"center"}}
      onClick={handleDownvote}>
        👎{downvotes} downvotes</button>

        <p style={{textAlign:"center"}}>{vid.comments.length} comments</p>

        <hr></hr>
      <button  onClick={handleComments}>
        {comments ? "Hide Comments" : "Show Comments"}
      </button>
        {comments && (
          <div>
            <p>
              {vid.comments.map((comment) => (
                <div key={comment.id}>
                  <p>
                    <strong>{comment.user}</strong> commented:<hr></hr> {comment.comment}
                  </p>
                </div>
              ))}
            </p>
          </div>
        )}

     

    </div>
  )
}
