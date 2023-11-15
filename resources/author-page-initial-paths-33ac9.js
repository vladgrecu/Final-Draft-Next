import { normalize } from '@teleporthq/cms-mappers/contentful'

export default async function (params = {}) {
  const urlParams = {
    ...(params['content_type'] && {
      content_type: params['content_type'],
    }),
    ...(params['select'] && {
      select: params['select'],
    }),
  }
  const data = await fetch(
    `${process.env.CMS_URL}/entries?${new URLSearchParams(urlParams)}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.CMS_ACCESS_TOKEN}`,
      },
    }
  )
  const response = await data.json()
  return normalize(response)
}
