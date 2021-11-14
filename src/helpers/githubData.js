export function getTimelineData(user, repos) {
  const cleanUser = {
    name: user.name,
    username: user.login,
    bio: user.bio,
    avatar: user.avatar_url,
    profile: user.html_url
  }

  const cleanRepos = repos.map(item => ({
    id: item.id,
    name: item.name,
    desc: item.description,
    url: item.html_url,
    homepage: item.homepage,
    createdAt: item.created_at
  }))

  return {
    username: user.login,
    user: cleanUser,
    repos: cleanRepos
  }
}

const compareRepos = (a, b) => {
  const a_value = new Date(a.createdAt).getTime()
  const b_value = new Date(b.createdAt).getTime()

  return a_value - b_value
}

export function sortReposByDate(data) {
  return data.sort(compareRepos)
}