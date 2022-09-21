import styles from '../styles/Home.module.css';
import prisma from '../lib/prisma';
import Layout from '../components/Layout';
import { makeSerializable } from '../lib/util'
import CardDisplay from '../components/CardDisplay/CardDisplay';

const Home = (props) => (
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
)

export const getServerSideProps = async () => {
  const posts = await prisma.post.findMany({
    orderBy: {
      id: 'desc'
    }
  })

  const navLinks = await prisma.$queryRaw
    `(
    select id
    from Post
    where car = 'Civic'
    order by id desc
    limit 1
    )
    UNION ALL
    (
    select id
    from Post
    where car = 'Wago'
    order by id desc
    limit 1
    )
    UNION ALL
    (
    select id
    from Post
    where car = 'Frogo'
    order by id desc
    limit 1
    )
    UNION ALL
    (
    select id
    from Post
    where car = 'EF9'
    order by id desc
    limit 1
    )`;
  
  return {
    props: {
      posts: makeSerializable(posts),
      navLinks:  makeSerializable(navLinks)
    }
  }
}

export default Home;