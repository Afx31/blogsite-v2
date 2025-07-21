import './Post.css';
import React from 'react';
import NextLink from 'next/link';
import PostContentBody from './PostBodyContent';
import { getAllPostFileLinks, getCarsPostLinks, getPostData } from '../../../../lib/util';
import postsLinkList from '../../../../lib/postsLinkList.json';

export default async function Post({ params }) {
  const {car, post} = await params
  var sortedPosts
  
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

  const sortPostLinksByMonth = (postLinkList) => {
    sortedPosts = postLinkList[car].reduce((acc, post) => {
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

  //sortPostLinksByMonth(await getCarsPostLinks(car));
  sortPostLinksByMonth(postsLinkList);

  return (
    <div className='pContainer'>
      <div className='pRightPaneMobile'>
        <h1>{car}</h1>
        <hr className='dropdownDivider'/>
        <h5>RECENT POSTS</h5>
        <div className='threadPostLinks'>
        {/* onChange={(e) => Router.push(`/blog/${car}/[id]`, `/blog/${e.target.value}`)} */}
          <select className='pSelect' defaultValue={post} > 
            {postsLinkList[car].map((post, index) => {
              return <option key={`${post.id}-${index}`} value={post.id}>{post.title.replace(/'/g, '')}</option>
            })}
          </select>
        </div>
      </div>
      <div className='pLeftPane'>
        <PostContentBody post={getPostData(car, post)} />
      </div>
      <div className='pRightPane'>
        <h1>{car.toUpperCase()}</h1>
        <hr className='dropdownDivider'/>
        <h5>RECENT POSTS</h5>
        <div className='threadPostLinks'>
          <ul className='groupedContent'>
            {sortedPosts.map((groupedPeriod) => (
              <li className='groupedHeading' key={groupedPeriod.monthYearString}>
                <h4>{groupedPeriod.monthYearString}</h4>
                <ul className='monthlyPostList'>
                  {groupedPeriod.posts.map((post, index) => (
                    <li key={`${post.id}-${index}`}>
                      {/* <NextLink className={`postLinks ${router.asPath === `/blog/${car}/>${post.id}` ? 'postLinksActive' : ''}`} href={{ pathname: `/blog/${car}/${post.id}` }}> */}
                      <NextLink className={'postLinks'} href={{ pathname: `/blog/${car}/${post.id}` }}>
                        {post.title !== undefined && post.title !== null ? post.title.replace(/'/g, '') : ''}
                      </NextLink>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// export async function generateStaticParams() {
//   //const cars = ['civic', 'wago', 'frogo', 'ef9'];
//   const allPosts = [];

//   for (const car of cars) {
//     try {
//         const fileNames = await getAllPostFileLinks(car);
//         const carPosts = fileNames.map(post => ({
//           car: car,
//           post: post.replace(/\.md$/, '')
//         }))
        
//         allPosts.push(...carPosts);
//     } catch (error) {
//         console.error('Error fetching file names for car:', car, 'Error:', error);
//     }
//   }

//   return allPosts;
// }