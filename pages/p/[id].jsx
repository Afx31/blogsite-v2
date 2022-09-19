import styles from '../../styles/Post.module.css';
import React from 'react';
import Router from 'next/router';
import prisma from '../../lib/prisma';
import Layout from '../../components/Layout';
import NextLink from 'next/link';
import { makeSerializable } from '../../lib/util'
import PostContentBody from '../../components/PostComponents/PostContentBody/PostContentBody';
import Spinner from '../../components/Layout/Spinner';

const ViewPostPage = (props) => {
  const currentRouter = `/p/${props.post.id}`;

  return props === null || props === undefined ? (
    <Spinner />
  ) : (
    <>
    <Layout
      civicLink={props.navLinks[0].id}
      wagoLink={props.navLinks[1].id}
    >
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
                    <NextLink key={post.id} href={{ pathname: `/p/${post.id}`, query: { car: post.car } }}>
                      <a
                        className={`${styles.postLinks} ${currentRouter === `/p/${post.id}` ? `${styles.postLinksActive}` : ''} `}
                      >
                        {post.title}
                      </a>
                    </NextLink>
                  </li>
                </>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.vppPaneLeftMobile}>
          <h1>{props.post.car}</h1>
          <hr className={styles.dropdownDivider}/>
          <h5>RECENT POSTS</h5>
          <div className={styles.threadPostLinks}>
            <select className={styles.vppSelect} defaultValue={props.post.id} onChange={(e) => Router.push('/p/[id]', `/p/${e.target.value}`)}>
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
};

export const getServerSideProps = async (context) => {
  const post = await prisma.post.findUnique({
    where: { id: Number(context.params.id) }
  });

  const recentPostLinks = await prisma.post.findMany({
    where: {
      car: context.query.car
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