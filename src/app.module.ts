import { Module } from '@nestjs/common';
import { GithubService } from './github/github.service';
import { GithubModule } from './github/github.module';

@Module({
  imports: [GithubModule],
  controllers: [],
  providers: [GithubService],
})
export class AppModule {}
