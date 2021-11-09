import { Octokit } from '@octokit/rest'

const { rest } = new Octokit({
  auth: process.env.GH_TOKEN
});

export default rest