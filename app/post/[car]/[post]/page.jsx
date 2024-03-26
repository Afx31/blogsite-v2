import React from 'react';
import PostContentBody from './PostBodyContent';
import { getPostData, getPostsFiles } from '../../../../lib/util';

export default function Post({ params }) {
  var sortedPosts;

  // const test123 = () => {
  //   const posts = getPostsFiles(params.car);

  //   return posts.map((post) => ({
  //     post: post,
  //   }));
  // }

  
  console.log('POST2: ', getPostsFiles(params.car))
  //console.log('POST: ', params)

  const getMonthText = (month) => {
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
    // sortedPosts = props.postLinks.reduce((acc, post) => {
    //   var date = new Date(post.createdAt);
    //   var year = date.getFullYear();
    //   var month = date.getMonth() + 1; // Note: Month is 0-indexed, so we add 1 to get the actual month number
    //   var key = `${year}-${month}`;
    //   var group = acc.find((g) => g.key === key);

    //   if (group) {
    //     group.posts.push(post);
    //   } else {
    //     acc.push({ key, posts: [post] });
    //   }

    //   return acc;
    // }, [])
    //   .map((g) => ({
    //     month: g.key.split("-")[1],
    //     year: g.key.split("-")[0],
    //     monthYearString: `${GetMonthText(g.key.split("-")[1])} ${g.key.split("-")[0]}`,
    //     posts: g.posts
    //   }));
  }  
  //SortPostLinksByMonth();

  // return (
  //   <>
  //     <PostContentBody post={getPostData(params.car, params.post)} />
  //   </>
  // );

  return (
    <div className='vppContainer'>
      <div className='vppPaneLeft'>
        <h1>{params.car.toUpperCase()}</h1>
        <hr className='dropdownDivider'/>
        <h5>RECENT POSTS</h5>
        {/* <div className='threadPostLinks'>
          <ul className='groupedContent'>
            {sortedPosts.map((groupedPeriod) => (
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
            ))}
          </ul>
        </div> */}
      </div>
      {/* <div className='vppPaneLeftMobile'>
        <h1>{props.post.car}</h1>
        <hr className='dropdownDivider'/>
        <h5>RECENT POSTS</h5>
        <div className='threadPostLinks'>
          <select className='vppSelect' defaultValue={props.post.id} onChange={(e) => Router.push('/post/[id]', `/post/${e.target.value}`)}>
            {props.postLinks.map((post) => {
              return <option key={post.id} value={post.id}>{post.title}</option>
            })}
          </select>
        </div>
      </div> */}
      <div className='vppPaneRight'>
        {/* <PostContentBody post={props.post} /> */}
        <PostContentBody post={getPostData(params.car, params.post)} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = getPostsFiles();

  return posts.map((post) => ({
    post: post,
  }));
}