import Router from 'next/router';
import styles from './CardDisplay.module.css';

const CardDisplay = ({ post: { id, car, thumbnail, title, description } }) => (
  <div className={styles.container}>
    <div className={styles.layer} />
    <img className={styles.img} src={thumbnail} alt='thumbnail' />
    <div className={styles.content}>
      <h1>{title}</h1>
      <p>{description}</p>
      <button
        className={styles.readmoreBtn}
        onClick={() => Router.push({
          pathname: `/post/${id}`,
          query: { car: car }
        })}
      >
        READ MORE
      </button>
    </div>
  </div>
);

export default CardDisplay;