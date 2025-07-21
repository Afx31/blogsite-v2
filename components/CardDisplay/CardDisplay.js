// import Router from 'next/router';
import NextLink from 'next/link';
import './CardDisplay.css';

export default function CardDisplay({ post: { car, id, title, description, thumbnail } }) {
  return (
    <div className='cdContainer'>
      <div className='cdLayer' />
      <img className='cdImg' src={thumbnail} alt='thumbnail' />
      <div className='cdContent'>
        <h1>{title}</h1>
        <p>{description}</p>
        <NextLink href={{ pathname: `/blog/${car}/${id}` }}>
          <button
            className='cdReadmoreBtn'
          >
            READ MORE
          </button>          
        </NextLink>
      </div>
    </div>
  );
}