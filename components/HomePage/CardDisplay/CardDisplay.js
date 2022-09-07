import NextLink from 'next/link';
import './CardDisplay.module.css';
import { Button } from 'rixun-ui';

const CardDisplay = ({ id, car, thumbnail, heading, description }) => {
  return (
    <>
      <div className='card-container'>
        <div className='layer' />
        <img className='card-img' src={thumbnail} alt='thumbnail' />
        <div className='card-content'>
          <h1>{heading}</h1>
          <p>{description}</p>
          <NextLink href={`/viewpost/${car}/${id}`}>
            <Button
              className='btn-readmore'
              name={`READ MORE`}
              type='outline'
            />
          </NextLink>
        </div>
      </div>
    </>
  )
};

export default CardDisplay;