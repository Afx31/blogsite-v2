import fs from 'fs';
import path from 'path';

export function getAllPostFileLinks(car) {
  const postsDirectory = path.join(process.cwd(), 'posts', car);
  return fs.readdirSync(postsDirectory);
}

export function getAllPostFrontmatter(car) {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const postsCarDirectory = path.join(process.cwd(), 'posts', car);
  const postFileNames = fs.readdirSync(postsCarDirectory);
  const allFrontmatter = [];   

  for (var postFileName of postFileNames) {
    const filePath = path.join(postsDirectory, `${car}/${postFileName}`);
    const markdownFile = fs.readFileSync(filePath, 'utf-8');

    let frontmatter = {};
    // let title = '';
    // let slug = ''; 
    let parsingFrontmatterStart = false;
    let parsingFrontmatterEnd = false;

    for (const line of markdownFile.split('\n')) {
      if (!parsingFrontmatterStart && line.trim() === '---') {
        parsingFrontmatterStart = !parsingFrontmatterStart;
      } else if (parsingFrontmatterStart && line.trim() !== '---') {
        const indexOfFirstColon = line.indexOf(':');
        const key = line.slice(0, indexOfFirstColon).trim();
        const value = line.slice(indexOfFirstColon + 1).trim();
        frontmatter[key] = value;
      } else if (parsingFrontmatterStart && !parsingFrontmatterEnd) {
        parsingFrontmatterEnd = true;
        parsingFrontmatterStart = false;
        break;
      }
    }

    allFrontmatter.push(frontmatter);
  }

  return {
    allFrontmatter
  }
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

export function getPostDataIncludingYAML(car, filename) {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filePath = path.join(postsDirectory, `${car}/${filename}`);  
  const markdownFile = fs.readFileSync(filePath, 'utf-8');
  
  let frontmatter = {};
  let content = '';
  let parsingFrontmatterStart = false;
  let parsingFrontmatterEnd = false;
  let parsingFrontmatterEndCompleted = false; // Hacky, but JUST in case I have --- in the actual blog itself

  markdownFile.split('\n').forEach(line => {
    if (!parsingFrontmatterEndCompleted && !parsingFrontmatterStart && line.trim() === '---') {
      parsingFrontmatterStart = !parsingFrontmatterStart;
    } else if (parsingFrontmatterStart && line.trim() !== '---') {
      // const [key, value] = line.split(':').map(item => item.trim());
      const indexOfFirstColon = line.indexOf(':');
      const key = line.slice(0, indexOfFirstColon).trim();
      const value = line.slice(indexOfFirstColon + 1).trim();
      frontmatter[key] = value;
    } else if (parsingFrontmatterStart && !parsingFrontmatterEnd) {
      parsingFrontmatterEnd = true;
      parsingFrontmatterStart = false;
      parsingFrontmatterEndCompleted = true;
    } else {
      content += line + '\n';
    }
  });
  
  return {
    frontmatter,
    content
  }
}

/* 
 * - Make a object serialisable to JSON
 * - Useful to convert an object which may contain non-serialisable data such as 'Dates' to a object which doesn't
 */
export function makeSerializable (o) {
  return JSON.parse(JSON.stringify(o))
}
