import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setComments, addComment, deleteComment, setNewComment } from './store/index';

function App() {
  const dispatch = useDispatch();
  const { comments, commentsLoaded, newComment } = useSelector((state) => state.commentsData); // Get comments, commentsLoaded, and newComment (input field value)

  // Fetch comments only if they haven't been loaded yet
  useEffect(() => {
    if (!commentsLoaded) {
      fetch('https://dummyjson.com/comments')
        .then((response) => response.json())
        .then((data) => {
          dispatch(setComments(data.comments));
        })
        .catch((error) => {
          console.error('Error fetching comments:', error);
        });
    }
  }, [commentsLoaded, dispatch]);

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1, // Temporary ID
        body: newComment,
      };
      dispatch(addComment(comment));
      dispatch(setNewComment(''));  // Clear the input field after adding
    }
  };

  const handleDeleteComment = (id) => {
    dispatch(deleteComment(id));
  };

  const handleInputChange = (e) => {
    dispatch(setNewComment(e.target.value)); // Sync input value with Redux store
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Comments</h1>

      <ul className="space-y-4 mb-6">
        {comments.map((comment) => (
          <li key={comment.id} className="p-4 border-b flex justify-between items-center bg-white rounded shadow">
            <span>{comment.body}</span>
            <button
              onClick={() => handleDeleteComment(comment.id)}
              className="text-red-500 hover:text-red-700 font-semibold"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <div className="flex flex-col items-center space-y-4">
        <input
          type="text"
          value={newComment}
          onChange={handleInputChange}
          className="border p-3 w-full md:w-1/2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Add a new comment"
        />
        <button
          onClick={handleAddComment}
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-400"
        >
          Add Comment
        </button>
      </div>
    </div>
  );
}

export default App;
