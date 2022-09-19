import Head from 'next/head';
import styles from '../styles/Home.module.css';
import prisma from '../lib/prisma';
import { makeSerializable } from '../lib/util'
import Navbar from '../components/Navbar/Navbar';
import CardDisplay from '../components/CardDisplay/CardDisplay';
import Footer from '../components/Footer/Footer';

import Layout from '../components/Layout';

// const Home = (props) => {
//   return (
//     <Layout>
//       <div className={styles.container}>
//         <div className={styles.innerContainer}>
//           <h1>Latest Posts</h1>
//           <div className={styles.cardContainer}>
//             {props.posts.map((post) => (
//               <CardDisplay
//                 key={post.id}
//                 post={post}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </Layout>
//   )
// }

const Home = (props) => {
  var civicId = props.postLinks[0].id;
  var wagoId = props.postLinks[1].id;
  // var frogoId = props.postLinks[2].id;
  // var EF9Id = props.postLinks[3].id;

  return (
    <div className={`App`}>
      <Head>
        <title>Blogsite</title>
        <meta name="description" content="Created by Afx31" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Navbar civicLink={civicId} wagoLink={wagoId} />
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
      <Footer />
    </div>
  )
}

export const getServerSideProps = async () => {
  const posts = await prisma.post.findMany({
    orderBy: {
      id: 'desc'
    }
  });

  const postLinks = await prisma.$queryRaw
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
    order by id desc
    limit 1
    )`;
  
  return {
    props: { posts: makeSerializable(posts), postLinks:  makeSerializable(postLinks)}
  }
}

export default Home;
