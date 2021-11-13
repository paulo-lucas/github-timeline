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
    url: item.url,
    homepage: item.homepage,
    createdAt: item.created_at
  }))
  
  return {
    username: user.login,
    user: cleanUser,
    repos: cleanRepos
  }
}