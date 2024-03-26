import NextLink from 'next/link';
import './Home.css';
import CardDisplay from '../components/CardDisplay/CardDisplay';

const latestPostsArray = [
  {
    car: 'civic',
    id: 'civic-1',
    title: 'The Civic Intro',
    description: '',
    thumbnail: 'https://live.staticflickr.com/4337/36385314124_656c824873_b.jpg'
  },
  {
    car: 'ef9',
    id: 'ef9-1',
    title: 'The EF9 Intro',
    description: '',
    thumbnail: 'https://live.staticflickr.com/65535/50266902046_b69494a503_b.jpg'
  },
  {
    car: 'wago',
    id: 'wago-1',
    title: 'The Wago Intro',
    description: '',
    thumbnail: 'https://live.staticflickr.com/4654/40240471031_20ae76315c_b.jpg'
  },
  {
    car: 'civic',
    id: 'civic-1',
    title: 'The Civic Intro',
    description: '',
    thumbnail: 'https://live.staticflickr.com/4337/36385314124_656c824873_b.jpg'
  },
  {
    car: 'ef9',
    id: 'ef9-1',
    title: 'The EF9 Intro',
    description: '',
    thumbnail: 'https://live.staticflickr.com/65535/50266902046_b69494a503_b.jpg'
  },
  {
    car: 'wago',
    id: 'wago-1',
    title: 'The Wago Intro',
    description: '',
    thumbnail: 'https://live.staticflickr.com/4654/40240471031_20ae76315c_b.jpg'
  }
]

export default function Home() {
  return (
    <div className='hContainer'>
      <div className='hInnerContainer'>
        <h1>Latest Posts</h1>
        <div className='hCardContainer'>
          {latestPostsArray.map((post) => (
            <CardDisplay
              key={post.id}
              post={post}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
