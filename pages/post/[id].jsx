import styles from '../../styles/Post.module.css';
import Router from 'next/router';
import prisma from '../../lib/prisma';
import Layout from '../../components/Layout';
import NextLink from 'next/link';
import { makeSerializable } from '../../lib/util'
import PostContentBody from '../../components/PostComponents/PostContentBody/PostContentBody';
import Spinner from '../../components/Layout/Spinner';

const ViewPostPage = (props) => {
  const currentRouter = `/post/${props.post.id}`;

  return props === null || props === undefined ? (
    <Spinner />
  ) : (
    <>
    <Layout
      civicLink={props.navLinks[0].id}
      wagoLink={props.navLinks[1].id}
      frogoLink={props.navLinks[2].id}
      ef9Link={props.navLinks[3].id}
    >
      <div className={styles.vppContainer}>
        <div className={styles.vppPaneLeft}>
          <h1>{props.post.car}</h1>
          <hr className={styles.dropdownDivider}/>
          <h5>RECENT POSTS</h5>
          <div className={styles.threadPostLinks}>
            <ul>
              {props.postLinks.map((post) => (
                <li key={post.id}>
                  <NextLink key={post.id} href={{ pathname: `/post/${post.id}`, query: { car: post.car } }}>
                    <a
                      className={`${styles.postLinks} ${currentRouter === `/post/${post.id}` ? `${styles.postLinksActive}` : ''} `}
                    >
                      {post.title}
                    </a>
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.vppPaneLeftMobile}>
          <h1>{props.post.car}</h1>
          <hr className={styles.dropdownDivider}/>
          <h5>RECENT POSTS</h5>
          <div className={styles.threadPostLinks}>
            <select className={styles.vppSelect} defaultValue={props.post.id} onChange={(e) => Router.push('/post/[id]', `/post/${e.target.value}`)}>
              {props.postLinks.map((post) => {
                return <option key={post.id} value={post.id}>{post.title}</option>
              })}
            </select>
          </div>
        </div>
        <div className={styles.vppPaneRight}>
          <PostContentBody post={props.post} />
        </div>
      </div>
     </Layout>
    </>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await await prisma.post.findMany()
  const posts = await makeSerializable(res)

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
    query: { car: post.car }
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params, query }) => {
  const post = await prisma.post.findUnique({
    where: { id: Number(params.id) }
  })
  
  const recentPostLinks = await prisma.post.findMany({
    where: {
      car: query.car
    },
    orderBy: {
      id: 'desc'
    },
    select: {
      id: true,
      title: true,
      car: true
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
      post: makeSerializable(post),
      postLinks: makeSerializable(recentPostLinks),
      navLinks: makeSerializable(navLinks)
    }
  }
}

export default ViewPostPage;