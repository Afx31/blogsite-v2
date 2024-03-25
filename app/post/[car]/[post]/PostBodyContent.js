import ReactMarkdown from 'react-markdown';

const PostContentBody = ({ post }) => {
  return (
    <div>
      <ReactMarkdown>
        {post.content}
      </ReactMarkdown>
    </div>
  )
}

export default PostContentBody;