import { Module } from '@nestjs/common';
import { ArticleModule } from './article/ArticleModule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './category/CategoryModule';
import { BlogModule } from './blog/BlogModule';
import { VisitorModule } from './visitor/VisitorModule';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'database.sqlite',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,
        })
        , ArticleModule
        , CategoryModule
        , BlogModule
        , VisitorModule
    ],
})
export class AppModule { }
