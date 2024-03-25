// import Router from 'next/router';
import NextLink from 'next/link';
import './CardDisplay.css';

export default function CardDisplay({ post: { car, postId, thumbnail, title, description } }) {
  return (
    <div className='container'>
      <div className='layer' />
      <img className='img' src={thumbnail} alt='thumbnail' />
      <div className='content'>
        <h1>{title}</h1>
        <p>{description}</p>
        {/* <button
          className='readmoreBtn'
          onClick={() => Router.push({ pathname: `/post/${car}/${postId}` })}
        >
          READ MORE
        </button> */}
        <NextLink href={`/post/${car}/${postId}`}>Button</NextLink>
      </div>
    </div>
  );
}