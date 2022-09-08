import NextLink from 'next/link';

const PostLinksMenuMobile = ({ slug, heading, car }) => {
  return (
    <>
      <option>
        <NextLink to={`/viewpost/${car}/${slug}`}>{heading}</NextLink>
      </option>
    </>
  );
};

export default PostLinksMenuMobile;