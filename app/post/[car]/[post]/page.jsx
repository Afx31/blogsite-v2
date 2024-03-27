import './Post.css';
import React from 'react';
import NextLink from 'next/link';
import PostContentBody from './PostBodyContent';
import { getPostData, getPostsFiles } from '../../../../lib/util';

export default function Post({ params }) {
  var sortedPosts;
  const postLinks = getPostsFiles(params.car);

  postLinks.map((post) => {
    console.log('TEST:: ', post)
  })

  const getMonthText = (month) => {
    switch(month) {
      case '1':
        return 'January';
      case '2':
        return 'Febuary';
      case '3':
        return 'March';
      case '4':
        return 'April';
      case '5':
        return 'May';
      case '6':
        return 'June';
      case '7':
        return 'July';
      case '8':
        return 'August';
      case '9':
        return 'September';
      case '10':
        return 'October';
      case '11':
        return 'November';
      case '12':
        return 'December';
    }
  }

  // const sortPostLinksByMonth = (car) => {
  //   const postLinks = getPostsFiles(car);

  //   sortedPosts = postLinks.reduce((acc, post) => {
  //     var date = new Date(post.createdAt);
  //     var year = date.getFullYear();
  //     var month = date.getMonth() + 1; // Note: Month is 0-indexed, so we add 1 to get the actual month number
  //     var key = `${year}-${month}`;
  //     var group = acc.find((g) => g.key === key);

  //     if (group)
  //       group.posts.push(post);
  //     else
  //       acc.push({ key, posts: [post] });

  //     return acc;
  //   }, [])
  //     .map((g) => ({
  //       month: g.key.split("-")[1],
  //       year: g.key.split("-")[0],
  //       monthYearString: `${getMonthText(g.key.split("-")[1])} ${g.key.split("-")[0]}`,
  //       posts: g.posts
  //     }));
  // }  
  // sortPostLinksByMonth(params.car);

  // return (
  //   <>
  //     <PostContentBody post={getPostData(params.car, params.post)} />
  //   </>
  // );

  return (
    <div className='pContainer'>
      <div className='pPaneLeft'>
        <h1>{params.car.toUpperCase()}</h1>
        <hr className='dropdownDivider'/>
        <h5>RECENT POSTS</h5>
        <div className='threadPostLinks'>
          <ul className='groupedContent'>
            {/* {sortedPosts.map((groupedPeriod) => (
              <li className='groupedHeading' key={groupedPeriod.monthYearString}>
                <h4>{groupedPeriod.monthYearString}</h4>
                <ul className='monthlyPostList'>
                  {groupedPeriod.posts.map((post) => (
                    <li key={post.id}>
                      <NextLink key={post.id} href={{ pathname: `/post/${post.id}` }}>
                        <a
                          className={`$'postLinks' ${router.asPath === `/post/${post.id}` ? `${postLinksActive}` : ''} `}
                        >
                          {post.title}
                        </a>
                      </NextLink>
                  </li>
                  ))}
                </ul>
              </li>
            ))} */}
            {/* {sortedPosts.map((groupedPeriod) => (
              <li className='groupedHeading' key={groupedPeriod.monthYearString}>
                <h4>{groupedPeriod.monthYearString}</h4>
                <ul className='monthlyPostList'> */}
                  {postLinks.map((post) => (
                    <li key={post}>
                      <NextLink className='postLinks' href={{ pathname: `/post/${params.car}/${post}` }}>
                        {/* className={`$'postLinks' ${router.asPath === `/post/${post.id}` ? `${postLinksActive}` : ''} `} */}
                        {post}
                      </NextLink>
                  </li>
                  ))}
                {/* </ul>
              </li>
            ))} */}
          </ul>
        </div>
      </div>
      {/* <div className='pPaneLeftMobile'>
        <h1>{props.post.car}</h1>
        <hr className='dropdownDivider'/>
        <h5>RECENT POSTS</h5>
        <div className='threadPostLinks'>
          <select className='pSelect' defaultValue={props.post.id} onChange={(e) => Router.push('/post/[id]', `/post/${e.target.value}`)}>
            {props.postLinks.map((post) => {
              return <option key={post.id} value={post.id}>{post.title}</option>
            })}
          </select>
        </div>
      </div> */}
      <div className='pPaneRight'>
        {/* <PostContentBody post={props.post} /> */}
        <PostContentBody post={getPostData(params.car, params.post)} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const cars = ['civic', 'wago', 'frogo', 'ef9'];
  const allPosts = [];

  for (var car of cars) {
    const posts = getPostsFiles(car);

    const carPosts = posts.map((post) => ({
      car: car,
      post: post
    }));

    allPosts.push(...carPosts);
  }

  return allPosts;
}