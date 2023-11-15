import blogPostCardPortraitResource from '../../resources/blog-post-card-portrait'

export default async function handler(req, res) {
  try {
    const response = await blogPostCardPortraitResource(req.query)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).send('Something went wrong')
  }
}
