import React, { useState, useEffect } from 'react';
import styles from './PostContentBody.module.css';
import Moment from 'react-moment';
import Spinner from '../../Layout/Spinner';
import ReactMarkdown from 'react-markdown';

function youtubeRender() {
  var itemToRender = document.querySelectorAll(`[src*='ytvid']`);
  itemToRender.forEach(oldItem => {
    var oldItemLink = oldItem.src.replace('#ytvid', '');
    var oldItemId = oldItem.src.alt;
    var newItem = document.createElement('iframe');
    newItem.style.width = '560px';
    newItem.style.height = '315px';
    newItem.setAttribute('id', oldItemId);
    newItem.setAttribute('src', oldItemLink);
    newItem.setAttribute('title', 'Temp title');
    newItem.setAttribute('frameborder', '0');
    newItem.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    oldItem.parentNode.replaceChild(newItem, oldItem);
  });
}

const PostContentBody = ({ post: {id, title, createdAt, content} }) => {
  var newContent = content.replaceAll('  ', '  \n')
  var slideIndex = 1;

  useEffect(() => {
    if (id !== null) {
      youtubeRender();
      carouselRender(slideIndex);
    }
  }, [id]);
  
  function currentSlide(n) {
    carouselRender(slideIndex = n)
  }

  function carouselRender(n) {
    var slides = document.querySelectorAll(`[src*='carouselimg']`);
    var dots = document.querySelectorAll(`[src*='carouseldot']`);
  
    if (slides.length !== 0 && dots.length !== 0) {
      var i;

      dots.forEach((dot) => {
        const slideNum = dot.src[dot.src.length-1];
        dot.addEventListener('click', (e) => { currentSlide(slideNum) })
      });
  
      if (n > slides.length)
        slideIndex = 1
  
      if (n < 1)
        slideIndex = slides.length
  
      for (i = 0; i < slides.length; i++)
        slides[i].style.display = 'none';
  
      for (i = 0; i < dots.length; i++)
        dots[i].className = dots[i].className.replace(' active', '');
  
      slides[slideIndex-1].style.display = 'block';
      dots[slideIndex-1].className += ' active';
    }
  }

  return id === null || id === undefined ? (
    <Spinner />
  ) : (
    <>
      <h1>{title}</h1>
      <p className={styles.postDate}>
        Posted on{' '}
        <Moment format='DD MMMM, YYYY' className={styles.postDateFormat}>
          {createdAt}
        </Moment>
      </p>
      <div className={styles.reactMarkdown}>
        <ReactMarkdown className={styles.linebreak}>
          {newContent}
        </ReactMarkdown>
      </div>
    </>
  )
}

export default PostContentBody;