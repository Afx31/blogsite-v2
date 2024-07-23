import './Home.css';
import CardDisplay from '../components/CardDisplay/CardDisplay';

const latestPostsArray = [
  {
    car: 'civic',
    id: 'civic-118',
    title: 'SMSP GP: Benchmark - 1.49.37 (PB)',
    description: '',
    thumbnail: 'https://live.staticflickr.com/65535/53873487470_3286c4ec61_b.jpg'
  },
  {
    car: 'civic',
    id: 'civic-117',
    title: 'SMSP GP: First proper outing - 1.51.53 (PB)',
    description: '',
    thumbnail: 'https://live.staticflickr.com/65535/53872169172_3905e553d1_b.jpg'
  },
  {
    car: 'civic',
    id: 'civic-116',
    title: 'Marulan Raceway + New parts',
    description: '',
    thumbnail: 'https://live.staticflickr.com/65535/53760885899_e0a641c918_b.jpg'
  },
  {
    car: 'civic',
    id: 'civic-115',
    title: 'Send It Sydney - SMSP GP + broken driveshaft',
    description: '',
    thumbnail: 'https://live.staticflickr.com/65535/53738650046_3aaa8c7838_b.jpg'
  },
  {
    car: 'civic',
    id: 'civic-114',
    title: 'SMSP GP Prep',
    description: '',
    thumbnail: 'https://live.staticflickr.com/65535/53738844528_3a7e370e03_b.jpg'
  },
  {
    car: 'wago',
    id: 'wago-35',
    title: 'Lowering + Zender Turbos for the maroon wagon!',
    description: '',
    thumbnail: 'https://live.staticflickr.com/65535/52690712083_2ce9831c93_b.jpg'
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
