import styles from '../../styles/Post.module.css';
import Router from 'next/router';
import prisma from '../../lib/prisma';
import Layout from '../../components/Layout';
import NextLink from 'next/link';
import { useRouter } from 'next/router'
import { makeSerializable } from '../../lib/util'
import PostContentBody from '../../components/PostComponents/PostContentBody/PostContentBody';
import Spinner from '../../components/Layout/Spinner';

const Post = (props) => {
  const router = useRouter();
  var sortedPosts;

  const GetMonthText = (month) => {
    var result;

    switch(month) {
      case '1':
        result = 'January';
        break;
      case '2':
        result = 'Febuary';
        break;
      case '3':
        result = 'March';
        break;
      case '4':
        result = 'April';
        break;
      case '5':
        result = 'May';
        break;
      case '6':
        result = 'June';
        break;
      case '7':
        result = 'July';
        break;
      case '8':
        result = 'August';
        break;
      case '9':
        result = 'September';
        break;
      case '10':
        result = 'October';
        break;
      case '11':
        result = 'November';
        break;
      case '12':
        result = 'December';
        break;
    }

    return result;
  }

  const SortPostLinksByMonth = () => {
    sortedPosts = props.postLinks.reduce((acc, post) => {
      var date = new Date(post.createdAt);
      var year = date.getFullYear();
      var month = date.getMonth() + 1; // Note: Month is 0-indexed, so we add 1 to get the actual month number
      var key = `${year}-${month}`;
      var group = acc.find((g) => g.key === key);

      if (group) {
        group.posts.push(post);
      } else {
        acc.push({ key, posts: [post] });
      }

      return acc;
    }, [])
      .map((g) => ({
        month: g.key.split("-")[1],
        year: g.key.split("-")[0],
        monthYearString: `${GetMonthText(g.key.split("-")[1])} ${g.key.split("-")[0]}`,
        posts: g.posts
      }));
  }
  
  SortPostLinksByMonth();

  return router.isFallback ? (
    <Spinner />
  ) : (
    <>
    <Layout
      civicLink={props.navLinks[0].id}
      ef9Link={props.navLinks[1].id}
      frogoLink={props.navLinks[2].id}
      wagoLink={props.navLinks[3].id}
    >
      <div className={styles.vppContainer}>
        <div className={styles.vppPaneLeft}>
          <h1>{props.post.car}</h1>
          <hr className={styles.dropdownDivider}/>
          <h5>RECENT POSTS</h5>
          <div className={styles.threadPostLinks}>
            <ul className={styles.groupedContent}>
              {sortedPosts.map((groupedPeriod) => (
                <li className={styles.groupedHeading} key={groupedPeriod.key}>
                  <h4>{groupedPeriod.monthYearString}</h4>
                  <ul className={styles.monthlyPostList}>
                    {groupedPeriod.posts.map((post) => (
                      <li key={post.id}>
                        <NextLink key={post.id} href={{ pathname: `/post/${post.id}` }}>
                          <a
                            className={`${styles.postLinks} ${router.asPath === `/post/${post.id}` ? `${styles.postLinksActive}` : ''} `}
                          >
                            {post.title}
                          </a>
                        </NextLink>
                    </li>
                    ))}
                  </ul>
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
  const res = await prisma.post.findMany();
  const posts = await makeSerializable(res);
  
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() }
  }));

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const post = await prisma.post.findUnique({
    where: { id: Number(params.id) }
  })
  
  const recentPostLinks = await prisma.post.findMany({
    where: {
      car: post.car
    },
    orderBy: {
      id: 'desc'
    },
    select: {
      id: true,
      title: true,
      car: true,
      createdAt: true
    }
  })

  const navLinks = await prisma.$queryRaw
  `
    SELECT car, max(id) as id
    FROM Post
    GROUP BY car
    ORDER BY car;
  `;

  return {
    props: {
      post: makeSerializable(post),
      postLinks: makeSerializable(recentPostLinks),
      navLinks: makeSerializable(navLinks)
    },
    revalidate: 600 // In seconds
  }
}

export default Post;