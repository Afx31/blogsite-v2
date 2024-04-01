import './Post.css';
import React from 'react';
import NextLink from 'next/link';
import PostContentBody from './PostBodyContent';
import { getAllPostFileLinks, getCarsPostLinks, getPostData } from '../../../../lib/util';

export default async function Post({ params }) {
  var sortedPosts;
  const allCarPostLinks = await getCarsPostLinks(params.car);

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

  const sortPostLinksByMonth = (post) => {
    sortedPosts = post.reduce((acc, post) => {
      var strDateparts = post.date.split('/');
      var strDateformattedDate = strDateparts[2] + '-' + strDateparts[1] + '-' + strDateparts[0];

      var date = new Date(strDateformattedDate);
      var year = date.getFullYear();
      var month = date.getMonth() + 1; // Note: Month is 0-indexed, so we add 1 to get the actual month number
      var key = `${year}-${month}`;
      var group = acc.find((g) => g.key === key);

      if (group)
        group.posts.push(post);
      else
        acc.push({ key, posts: [post] });

      return acc;
    }, [])
      .map((g) => ({
        month: g.key.split("-")[1],
        year: g.key.split("-")[0],
        monthYearString: `${getMonthText(g.key.split("-")[1])} ${g.key.split("-")[0]}`,
        posts: g.posts.reverse()
      }));
    sortedPosts.reverse();
  }

  sortPostLinksByMonth(allCarPostLinks);

  return (
    <div className='pContainer'>
      <div className='pLeftPane'>
        <h1>{params.car.toUpperCase()}</h1>
        <hr className='dropdownDivider'/>
        <h5>RECENT POSTS</h5>
        <div className='threadPostLinks'>
          <ul className='groupedContent'>
            {sortedPosts.map((groupedPeriod) => (
              <li className='groupedHeading' key={groupedPeriod.monthYearString}>
                <h4>{groupedPeriod.monthYearString}</h4>
                <ul className='monthlyPostList'>
                  {groupedPeriod.posts.map((post) => (
                    <li key={post.id}>
                      <NextLink className='postLinks' href={{ pathname: `/post/${params.car}/${post.id}` }}>
                        {post.title}
                      </NextLink>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <div className='pLeftPaneMobile'>
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
      <div className='pRightPane'>
        <PostContentBody post={getPostData(params.car, params.post)} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const cars = ['civic', 'wago', 'frogo', 'ef9'];
  const allPosts = [];

  for (const car of cars) {
    try {
        const fileNames = await getAllPostFileLinks(car);
        const carPosts = fileNames.map(post => ({
          car: car,
          post: post.replace(/\.md$/, '')
        }))
        
        allPosts.push(...carPosts);
    } catch (error) {
        console.error('Error fetching file names for car:', car, 'Error:', error);
    }
  }

  return allPosts;
}