import authorCardWithLinkResource from '../../resources/author-card-with-link'

export default async function handler(req, res) {
  try {
    const response = await authorCardWithLinkResource(req.query)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).send('Something went wrong')
  }
}
