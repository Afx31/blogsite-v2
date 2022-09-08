import NextLink from 'next/link';
import styles from '../ViewPostPage.module.css';

const PostLinksMenu = ({ slug, heading, car }) => {
  return (
    <>
      <li>
        <NextLink
          href={`/viewpost/${car}/${slug}`}
          className={styles.postLinks}
          activeStyle={{ fontWeight: 'bold' }}
        >
          {heading}
        </NextLink>
      </li>
    </>
  );
};

export default PostLinksMenu;