import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board, BoardStatus } from './boards.model';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private boardService : BoardsService) {};

  @Get('/')
  private getAllBoard() : Board[] {
    return this.boardService.getAllBoards();
  }

  @Post('/create')
  private createBoard(
    @Body() createBoardDto : CreateBoardDto) : Board {

    return this.boardService.createBoard(createBoardDto);
  }

  @Get('/:id')
  private getBoardById(@Param('id') id : string) : Board {
    return this.boardService.getBoardById(id);
  }

  @Delete('/:id')
  private deleteBoard(@Param('id') id : string) : void{
    this.boardService.deleteBoard(id);
  }

  @Patch(':/id/status')
  private updateBoardStatus (
    @Param('id') id : string, 
    @Body('status') status : BoardStatus) : Board{
      return this.boardService.updateBoardStatus(id, status);
  }
}
