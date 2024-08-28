import { Controller, Get, Param } from '@nestjs/common';
import { GithubService } from './github.service';
import { GithubUserInfo } from 'src/models/github.model';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get(':username')
  async show(@Param('username') username: string): Promise<GithubUserInfo> {
    return await this.githubService.getUserInfo(username);
  }
}
