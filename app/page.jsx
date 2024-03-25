import NextLink from 'next/link';
import './Home.css';
import CardDisplay from '../components/CardDisplay/CardDisplay';

const postObject = {
  car: 'civic',
  postId: 'civic-2',
  thumbnail: 'https://live.staticflickr.com/4337/36385314124_656c824873_b.jpg',
  title: 'The Civic Intro',
  description: ''
};

export default function Home() {
  return (
    <div className='container'>
      <div className='innerContainer'>
        <h1>Latest Posts</h1>
        {/* <NextLink href='/post/civic/civic-2.md'>Post 2</NextLink> */}
        {/* <NextLink href='/post/ef9/ef9-1.md'>Post 3</NextLink> */}
        <div className='cardContainer'>
          <CardDisplay
            key="1"
            post={postObject}
          />
          <CardDisplay
            key="1"
            post={postObject}
          />
          <CardDisplay
            key="1"
            post={postObject}
          />
        </div>
      </div>
    </div>
  );
}
