export type GithubRepository = {
  name: string;
  description: string;
  date: Date;
};

export class GithubUserInfo {
  name: string;
  repositories: GithubRepository[];

  constructor(githubApiResponse: any) {}
}
