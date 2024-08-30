export class GithubRepository {
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  html_url: string;

  constructor({ name, description, created_at, updated_at, html_url }: any) {
    this.name = name;
    this.description = description;
    this.created_at = created_at;
    this.updated_at = updated_at;
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
    ).sort((a: GithubRepository,b: GithubRepository) => {
      const aDate:number = Date.parse(a.created_at);
      const bDate:number = Date.parse(b.created_at);

      if(aDate > bDate){
        return 1;
      }
       if(aDate < bDate){
        return -1;
      }

      return 0;
    });
  }
}
