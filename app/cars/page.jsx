import './Home.css';
import CardDisplay from '../../components/CardDisplay/CardDisplay';

const latestPostsArray = [
  {
    car: 'civic',
    id: 'civic-125',
    title: 'ARDC - SMSP Brabham - Last one for the year!',
    description: '',
    thumbnail: 'https://live.staticflickr.com/65535/54252100529_af16cdcf4f_b.jpg'
  },
  {
    car: 'civic',
    id: 'civic-124',
    title: 'MWSCC - Morgan Park 2024',
    description: '',
    thumbnail: 'https://live.staticflickr.com/65535/54104608828_61bba97e7f_b.jpg'
  },
  {
    car: 'civic',
    id: 'civic-123',
    title: 'Fixing the coilover setup',
    description: '',
    thumbnail: 'https://live.staticflickr.com/65535/54104609553_9238a5ffe0_b.jpg'
  },
  {
    car: 'civic',
    id: 'civic-122',
    title: 'Trying to fit the 9 inch 6ULs',
    description: '',
    thumbnail: 'https://live.staticflickr.com/65535/54103489807_77e292a195_b.jpg'
  },
  {
    car: 'civic',
    id: 'civic-121',
    title: '10-years-with-the-civic',
    description: '',
    thumbnail: 'https://live.staticflickr.com/65535/54104806640_0187a6cb6e_b.jpg'
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
