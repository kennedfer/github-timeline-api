export type GithubRepository = {
  name: string;
  description: string;
  date: Date;
};

export type GithubUserInfo = {
  name: string;
  repositories: GithubRepository[];
};
