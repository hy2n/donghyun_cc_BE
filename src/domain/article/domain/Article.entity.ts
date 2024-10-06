import { Category } from 'src/domain/category/domain/Category.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, CreateDateColumn, OneToMany } from 'typeorm';
import { Viewmode } from './enum/Viewmode';

@Entity('article')
export class Article {
  @PrimaryGeneratedColumn('uuid')
  article_id: string;

  @CreateDateColumn({ type: 'datetime' })
  article_date: Date;

  @Column() // 게시글 제목
  article_name: string;

  @Column() // 게시글 썸네일 URL
  thumbnail_url: string;

  @Column() // 게시글 내용 MD파일 URL
  article_data_url: string;

  @Column({
    type: 'enum',
    enum: Viewmode,
    default: Viewmode.PRIVATE
  })
  article_view_mode: Viewmode;

  @ManyToMany(() => Category, (category) => category.articles)
  categorys: Category[];
}