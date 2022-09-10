import prisma from '../../../lib/prisima';

//
// Just temp methods to  fill this space. will modify in a later branch
// once components have been brought in
//


export default async function handler () {
  const prisma = new PrismaClient();

  if (req.method === 'GET') {
    const users = await prisma.user.findMany();
    return res.send(users);
  } else if (req.method === 'POST') {
    res.status(201).send('POST');
  }
}

// POST /api/post
// Required fields in body: title, authorEmail
// Optional fields in body: content
export default async function handle(req, res) {
  const { title, content, authorEmail } = req.body
  const result = await prisma.post.create({
    data: {
      title: title,
      content: content,
      author: { connect: { email: authorEmail } },
    },
  })
  res.json(result)
}
