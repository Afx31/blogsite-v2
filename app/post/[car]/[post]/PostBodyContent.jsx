import './PostContentBody.css';
import ReactMarkdown from 'react-markdown';

// import React, { useState, useEffect } from 'react';
// import './PostContentBody.css';
// import Moment from 'react-moment';
// import Spinner from '../../Layout/Spinner';
// import ReactMarkdown from 'react-markdown';

// const YouTubeEmbed = ({ src }) => {
//   return (
//     <iframe
//       style={{ display: 'block', margin: 'auto' }}
//       width='560'
//       height='315'
//       src={src}
//       frameBorder={0}
//       title='YouTube video player'
//       allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
//       allowFullScreen
//     />
//   );
// }

// export default function PostContentBody({ post }) {

//   return (
//     <div>
//       <ReactMarkdown>
//         {post.content}
//       </ReactMarkdown>
//     </div>
//   );
// }

//export default function PostContentBody({ post: {id, title, createdAt, content} }) {
export default function PostContentBody({ post: {slug, content} }) {
  var createdAt = '15 Apr 2020';

  // var newContent = content.replaceAll('  ', '  \n')
  // var slideIndex = 1;

  // useEffect(() => {
  //   if (id !== null) {
  //     carouselRender(slideIndex);
  //   }
  // }, [id]);

  // function currentSlide(n) {
  //   carouselRender(slideIndex = n)
  // }

  // function carouselRender(n) {
    // var slides = document.querySelectorAll(`[src*='carouselimg']`);
    // var dots = document.querySelectorAll(`[src*='carouseldot']`);
  
    // if (slides.length !== 0 && dots.length !== 0) {
    //   var i;

    //   dots.forEach((dot) => {
    //     const slideNum = dot.src[dot.src.length-1];
    //     dot.addEventListener('click', (e) => { currentSlide(slideNum) })
    //   });
  
    //   if (n > slides.length)
    //     slideIndex = 1
  
    //   if (n < 1)
    //     slideIndex = slides.length
  
    //   for (i = 0; i < slides.length; i++)
    //     slides[i].style.display = 'none';
  
    //   for (i = 0; i < dots.length; i++)
    //     dots[i].className = dots[i].className.replace(' active', '');
  
    //   slides[slideIndex-1].style.display = 'block';
    //   slides[slideIndex-1].style.marginBottom = '-30px';
    //   dots[slideIndex-1].className += ' active';
    // }
  // }

  return (
    <>
      <h1>{slug}</h1>
      <p className='postDate'>
        Posted on {createdAt}
      </p>
      {/* <div className='reactMarkdown'>
        <ReactMarkdown
          className='linebreak'
          components={{
            a: ({ node, inline, children, href, ...props }) => {
              const match = /^YouTube-Link$/.exec(children || "");
              return !inline && match ? (
                  <YouTubeEmbed src={href} />
              ) : (
                <a href={href} {...props}>
                  {children}
                </a>
              );
            },
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div> */}

      <div className='reactMarkdown'>
        <ReactMarkdown
          className='linebreak'
          components={{
            a: ({ node, inline, children, href, ...props }) => (
              <a href={href} {...props}>
                {children}
              </a>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>

      {/* <div className='reactMarkdown'>        
        <ReactMarkdown

        >
          {content}
        </ReactMarkdown>
      </div> */}
    </>
  );
}