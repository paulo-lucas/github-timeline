import gh from 'services/github'
import { getTimelineData } from 'helpers/githubData'

export default async function handler(req, res) {
  if (req.method !== 'GET')
    return res.sed(`Cannot ${req.method}`)

  const { username } = req.query

  try {
    const { data: repos } = await gh.repos.listForUser({
      username
    });

    const { data: user } = await gh.users.getByUsername({
      username,
    });

    const timelineData = getTimelineData(user, repos)

    res.status(200).json(timelineData)

  } catch (err) {
    res.status(404).json({ error: `User ${username} not found`, username })
  }
}