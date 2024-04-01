import fs from 'fs';
import path from 'path';
let linkUrlPath = 'https://api.github.com/repos/Afx31/blogsite-markdown-files/contents';
const token = '';

const fetchFileNamesInDirectory = async (car) => {
  let capitalisedCar = car.charAt(0).toUpperCase() + car.slice(1);
  if (capitalisedCar === 'Ef9')
    capitalisedCar = 'EF9';
  
  const response = await fetch(`${linkUrlPath}/${capitalisedCar}`);

  if (response.ok) {
    const data = await response.json();
    const content = data.map(file => file.name);
    return content;
  } else {
      console.error('Failed to fetch file from GitHub');
      return [];
  }
}

const fetchFileData = async (car, fileName) => {
  let capitalisedCar = car.charAt(0).toUpperCase() + car.slice(1);
  if (capitalisedCar === 'Ef9')
    capitalisedCar = 'EF9';
  
  const response = await fetch(`${linkUrlPath}/${capitalisedCar}/${fileName}.md`, {
    headers: {
      'Authorization': `token ${token}`,
      'Accept': `application/vnd.github.v3.raw`
    }
  });
  // Accept: `application/vnd.github.v3+json` //below to be response.json() ;
  // const content = Buffer.from(data.content, 'base64').toString('utf-8');

  if (response.ok) {
    const content = await response.text();
    return content;

    //const content = Buffer.from(data.content, 'base64').toString('utf-8');
    //console.log(content); // This will log the content of your Markdown file
  } else {
    console.error('Failed to fetch file from GitHub');
    return '';
  }
}

// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------

export async function getAllPostFileLinks(car) {
  try {
    const fileNames = await fetchFileNamesInDirectory(car);
    return fileNames;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

export async function getCarsPostLinks(car) {
  try {
    const allFrontmatter = [];
    const fileNames = await fetchFileNamesInDirectory(car);

    for (const fileName of fileNames) {
      const markdownFile = await fetchFileData(car, fileName.replace(/\.md$/, ''));
      
      let frontmatter = {};
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

    return allFrontmatter;
  } catch (error) {
    console.log('Error: ', error);
    return '';
  }
}

export async function getPostData(car, fileName) {
  try {
    const markdownFile = await fetchFileData(car, fileName);
    // const postsDirectory = path.join(process.cwd(), 'posts');
    // const filePath = path.join(postsDirectory, `${car}/${fileName}.md`);  
    // const markdownFile = fs.readFileSync(filePath, 'utf-8');

    let frontmatter = {};
    let content = '';
    let parsingFrontmatterStart = false;
    let parsingFrontmatterEnd = false;
    let parsingFrontmatterEndCompleted = false; // Hacky, but JUST in case I have --- in the actual blog itself

    markdownFile.split('\n').forEach(line => {
      if (!parsingFrontmatterEndCompleted && !parsingFrontmatterStart && line.trim() === '---') {
        parsingFrontmatterStart = !parsingFrontmatterStart;
      } else if (parsingFrontmatterStart && line.trim() !== '---') {
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
  } catch (error) {
    console.log('Error: ', error);
  }
}

/* 
 * - Make a object serialisable to JSON
 * - Useful to convert an object which may contain non-serialisable data such as 'Dates' to a object which doesn't
 */
export function makeSerializable (o) {
  return JSON.parse(JSON.stringify(o))
}
