import { IsString, IsArray, IsOptional, IsBoolean } from 'class-validator';

export class ArticleResponse {
    @IsString()
    article_id: string;

    @IsString()
    article_name: string;

    @IsString()
    thumbnail_url: string;

    @IsString()
    article_data_url: string;

    @IsString()
    article_view_mode: string;

    @IsString()
    article_date: string;

    @IsArray()
    @IsOptional()
    categories?: string[];
}
