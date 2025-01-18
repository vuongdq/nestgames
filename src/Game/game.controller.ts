import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { GameService } from './game.service';
import { Game } from './game.entity';

@Controller('games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post()
  create(@Body() game: Game) {
    return this.gameService.create(game);
  }

  @Get()
  findAll() {
    return this.gameService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.gameService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() game: Game) {
    return this.gameService.update(id, game);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.gameService.remove(id);
  }
}
