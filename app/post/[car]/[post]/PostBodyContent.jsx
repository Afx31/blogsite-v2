import './PostContentBody.css';
import ReactMarkdown from 'react-markdown';

const YouTubeEmbed = ({ src }) => {
  return (
    <iframe
      style={{ display: 'block', margin: 'auto' }}
      width='560'
      height='315'
      src={src}
      frameBorder={0}
      title='YouTube video player'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    />
  );
}

export default async function PostContentBody({ post }) {
  // var newContent = content.replaceAll('  ', '  \n');    // Still no idea what this was for
  // var slideIndex = 1;
  post = await post;
  const { frontmatter, content } = post;

  // useEffect(() => {
  //   if (id !== null) {
  //     carouselRender(slideIndex);
  //   }
  // }, [id]);
  
  // function currentSlide(n) {
  //   carouselRender(slideIndex = n)
  // }

  // function carouselRender(n) {    
  //   var slides = document.querySelectorAll(`[src*='carouselimg']`);
  //   var dots = document.querySelectorAll(`[src*='carouseldot']`);
  
  //   if (slides.length !== 0 && dots.length !== 0) {
  //     var i;

  //     dots.forEach((dot) => {
  //       const slideNum = dot.src[dot.src.length-1];
  //       dot.addEventListener('click', (e) => { currentSlide(slideNum) })
  //     });
  
  //     if (n > slides.length)
  //       slideIndex = 1
  
  //     if (n < 1)
  //       slideIndex = slides.length
  
  //     for (i = 0; i < slides.length; i++)
  //       slides[i].style.display = 'none';
  
  //     for (i = 0; i < dots.length; i++)
  //       dots[i].className = dots[i].className.replace(' active', '');
  
  //     slides[slideIndex-1].style.display = 'block';
  //     slides[slideIndex-1].style.marginBottom = '-30px';
  //     dots[slideIndex-1].className += ' active';
  //   }
  // }
  
  return (
    <>
      <h1>{frontmatter.title !== undefined && frontmatter.title !== null ? frontmatter.title.replace(/'/g, '') : ''}</h1>
      <p className='postDate'>
        Posted on {frontmatter.date}
      </p>
      <div className='reactMarkdown'>
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
            }
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </>
  );
}