import styles from '../styles/Home.module.css';
import prisma from '../lib/prisma';
import Layout from '../components/Layout';
import { makeSerializable } from '../lib/util'
import CardDisplay from '../components/CardDisplay/CardDisplay';

const Home = (props) => {
console.log(props)
return (
  <Layout
    civicLink={props.navLinks[0].id}
    wagoLink={props.navLinks[1].id}
    frogoLink={props.navLinks[2].id}
    ef9Link={props.navLinks[3].id}
  >
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1>Latest Posts</h1>
        <div className={styles.cardContainer}>
          {props.posts.map((post) => (
            <CardDisplay
              key={post.id}
              post={post}
            />
          ))}
        </div>
      </div>
    </div>
  </Layout>
)}

export const getServerSideProps = async () => {
  const posts = await prisma.$queryRaw
  `
    SELECT *
    FROM Post
    ORDER BY id DESC
    LIMIT 10
  `;

  const navLinks = await prisma.$queryRaw
  `
    (
    SELECT id
    FROM Post
    WHERE car = 'Civic'
    ORDER BY id DESC
    LIMIT 1
    )
    UNION ALL
    (
    SELECT id
    FROM Post
    WHERE car = 'Wago'
    ORDER BY id DESC
    LIMIT 1
    )
    UNION ALL
    (
    SELECT id
    FROM Post
    WHERE car = 'Frogo'
    ORDER BY id DESC
    LIMIT 1
    )
    UNION ALL
    (
    SELECT id
    FROM Post
    WHERE car = 'EF9'
    ORDER BY id DESC
    LIMIT 1
    )
  `;
  
  return {
    props: {
      posts: makeSerializable(posts),
      navLinks:  makeSerializable(navLinks)
    }
  }
}

export default Home;