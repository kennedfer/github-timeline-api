import { Module } from '@nestjs/common';
import { GithubService } from './github/github.service';
import { GithubController } from './github/github.controller';

@Module({
  imports: [],
  controllers: [GithubController],
  providers: [GithubService],
})
export class AppModule {}
