import gh from 'services/github'

export default async function handler(req, res) {
  if (req.method !== 'GET')
    return res.sed(`Cannot ${req.method}`)

  const { username } = req.query

  try {
    const { data } = await gh.repos.listForUser({
      username
    });

    res.status(200).json(data)

  } catch (err) {
    res.status(404).json({ error: `User ${username} not found` })
  }
}