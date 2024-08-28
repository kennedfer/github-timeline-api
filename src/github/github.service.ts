import { Get, Injectable } from '@nestjs/common';
import { GithubUserInfo } from 'src/models/github.model';

const USERS_API_PATH: string = 'https://api.github.com/users/';
const REPOS_API_PATH_PREFIX: string = 'https://api.github.com/users/';
const REPOS_API_PATH_SUFFIX: string = '/repos';

@Injectable()
export class GithubService {
  async getUserInfo(username: string): Promise<GithubUserInfo> {
    const [userResponse, reposResponse]: [Response, Response] =
      await Promise.all([
        fetch(USERS_API_PATH + username),
        fetch(REPOS_API_PATH_PREFIX + username + REPOS_API_PATH_SUFFIX),
      ]);

    const userData = await userResponse.json();
    const reposData = await reposResponse.json();

    const githubUserInfo = new GithubUserInfo(userData, reposData);
    return githubUserInfo;
  }
}
