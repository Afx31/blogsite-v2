import React from 'react';
import prisma from '../../lib/prisma';
import { makeSerializable } from '../../lib/util'
import styles from '../../styles/Post.module.css';
import NextLink from 'next/link';
import PostContentBody from '../../components/PostComponents/PostContentBody/PostContentBody';
import Spinner from '../../components/Layout/Spinner';
import Navbar from '../../components/Navbar/Navbar';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer/Footer';

const ViewPostPage = (props) => {

  return props === null || props === undefined ? (
    <Spinner />
  ) : (
    <>
    {/* <Layout> */}
    <div className={`App`}>
    <Navbar />
      <div className={styles.vppContainer}>
        <div className={styles.vppPaneLeft}>
          <h1>{props.post.car}</h1>
          <hr className={styles.dropdownDivider}/>
          <h5>RECENT POSTS</h5>
          <div className={styles.threadPostLinks}>
            <ul>
              {props.postLinks.map((post) => (
                <>
                  <li>
                    <NextLink
                      href={`/p/${post.id}`}
                      className={styles.postLinks}
                      activeStyle={{ fontWeight: 'bold' }}
                    >
                      {post.title}
                    </NextLink>
                  </li>
                </>
              ))}
            </ul>
          </div>
        </div>
        {/* <div className={styles.vppPaneLeftMobile}>
          <h1>{props.post.car}</h1>
          <hr className={styles.dropdownDivider}/>
          <h5>RECENT POSTS</h5>
          <div className={styles.threadPostLinks}>
            {currentPost && (
              <NextLink to={`/p/${currentPost}`} />
            )}
            <select className={styles.vppSelect} defaultValue=''>
              {postLinks.map((post) => {
                if (postLinks[0]._id === post._id)
                  return (<option key={post._id} value={post.slug}>{post.title}</option>)
                return <option key={post._id} value={post.slug}>{post.title}</option>
              })}
            </select>
          </div>
        </div> */}
        <div className={styles.vppPaneRight}>
          <PostContentBody post={props.post} />
        </div>
      </div>
      <Footer />
      </div>
     {/* </Layout> */}
    </>
  )
};

export const getServerSideProps = async (context) => {
  const post = await prisma.post.findUnique({
    where: { id: Number(context.params.id) }
  });

  const recentPostLinks = await prisma.post.findMany({
    where: {
      car: 'Civic'
    },
    orderBy: {
      id: 'desc'
    },
    select: {
      id: true,
      title: true,
      car: true
    }
  });
  
  return {
    props: { post: makeSerializable(post), postLinks: makeSerializable(recentPostLinks)}
  }
}

export default ViewPostPage;