import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import { makeSerializable } from '../lib/util'
import CardDisplay from '../components/CardDisplay/CardDisplay';

const Home = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1>Site under maintenance</h1>
      </div>
    </div>
    // <Layout
    //   civicLink={props.navLinks[0].id}
    //   ef9Link={props.navLinks[1].id}
    //   frogoLink={props.navLinks[2].id}
    //   wagoLink={props.navLinks[3].id}
    // >
    //   <div className={styles.container}>
    //     <div className={styles.innerContainer}>
    //       <h1>Latest Posts</h1>
    //       <div className={styles.cardContainer}>
    //         {props.posts.map((post) => (
    //           <CardDisplay
    //             key={post.id}
    //             post={post}
    //           />
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </Layout>
  )
}

export default Home;