export class GithubRepository {
  name: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  html_url: string;

  constructor({ name, description, created_at, updated_at, html_url }: any) {
    this.name = name;
    this.description = description;
    created_at = created_at;
    updated_at = updated_at;
    this.html_url = html_url;
  }
}

export class GithubUserInfo {
  name: string;
  bio: string;
  avatar_url: string; //i decide to keep the json pattern
  repositories: GithubRepository[];

  constructor({ name, bio, avatar_url }: any, repositoriesApi: any) {
    this.name = name;
    this.bio = bio;
    this.avatar_url = avatar_url;
    this.repositories = repositoriesApi.map(
      (repoApi: any) => new GithubRepository(repoApi),
    );
  }
}
