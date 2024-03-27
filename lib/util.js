import fs from 'fs';
import path from 'path';

export function getPostsFiles(car) {
  const postsDirectory = path.join(process.cwd(), 'posts', car);
  return fs.readdirSync(postsDirectory);
}

export function getPostData(car, filename) {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const postSlug = filename.replace(/\.md/, '');
  const filePath = path.join(postsDirectory, `${car}/${postSlug}.md`);
  const content = fs.readFileSync(filePath, 'utf-8');

  const postData = {
    slug: postSlug,
    content
  };

  return postData;
}

/* 
 * - Make a object serialisable to JSON
 * - Useful to convert an object which may contain non-serialisable data such as 'Dates' to a object which doesn't
 */
export function makeSerializable (o) {
  return JSON.parse(JSON.stringify(o))
}
