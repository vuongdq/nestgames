import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { Category } from './category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category])], // Import Entity Category để sử dụng trong service
  providers: [CategoryService], // Cung cấp CategoryService cho module này
  controllers: [CategoryController], // Đăng ký CategoryController
  exports: [CategoryService], // Export CategoryService nếu cần dùng ở module khác
})
export class CategoryModule {}
