import './Home.css';
import CardDisplay from '../components/CardDisplay/CardDisplay';

const latestPostsArray = [
  {
    car: 'civic',
    id: 'civic-112',
    title: 'Gearbox inspection',
    description: '',
    thumbnail: 'https://live.staticflickr.com/65535/53426176609_4a9036e3a9_b.jpg'
  },
  {
    car: 'civic',
    id: 'civic-111',
    title: 'Fixing many things',
    description: '',
    thumbnail: 'https://live.staticflickr.com/65535/53402995021_1a867697ab_b.jpg'
  },
  {
    car: 'civic',
    id: 'civic-110',
    title: 'Honda Nationals 2023',
    description: '',
    thumbnail: 'https://live.staticflickr.com/65535/53281772248_13cceb07fe_b.jpg'
  },
  {
    car: 'civic',
    id: 'civic-109',
    title: 'Honda Nationals Prep',
    description: '',
    thumbnail: 'https://live.staticflickr.com/65535/53281812219_404b503440_b.jpg'
  },
  {
    car: 'civic',
    id: 'civic-108',
    title: 'MWSCC - Morgan Park 2023',
    description: '',
    thumbnail: 'https://live.staticflickr.com/65535/53174948719_75ededca6f_b.jpg'
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
