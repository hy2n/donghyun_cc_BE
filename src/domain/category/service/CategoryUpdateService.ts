import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../domain/Category.entity';
import { InternalServerException } from '../exception/InternalServerErrorException';
import { CreateCategoryRequest } from '../presentation/dto/request/CreateCategoryRequest';
import { UpdateCategoryRequest } from '../presentation/dto/request/UpdateCategoryRequest';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryUpdateService {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>,
    ) {}

    async updateCategory(updateCategoryDto: UpdateCategoryRequest): Promise<Category> {
        try {
            const category = await this.categoryRepository.findOne({
                where: { category_id: updateCategoryDto.category_id }
            });
            
            if (!category) {
                throw new NotFoundException('Category not found');
            }

            category.category_name = updateCategoryDto.category_name;
            return await this.categoryRepository.save(category);
        } catch (error) {
            if (error instanceof NotFoundException) throw error;
            throw new InternalServerException();
        }
    }
}