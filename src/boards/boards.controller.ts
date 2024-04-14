import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board, BoardStatus } from './board.model';
import { createBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) {}

    @Get('/')
    getAllBoard(): Board[] {
        return this.boardsService.getAllBoards();
    }

    //body 전체 한번에 가져오기
    // @Post()
    // createBoard(@Body() body) {
    //     console.log('body', body);
    // }

    //body 의 특정 값만 가져오기
    // @Post()
    // createBoard(@Body('title') title: string, @Body('description') description: string) {
    //     console.log('title', title);
    //     console.log('description', description);
    // }

    @Post()
    @UsePipes(ValidationPipe) //유효성 체크
    createBoard(
        @Body() createBoardDto: createBoardDto
    ): Board { //return 값의 타입은 Board, Board[]로 주면 안됨 : service의 createBoard의 return 값이 board 하나이기 때문에
        return this.boardsService.createBoard(createBoardDto);
    }

    @Get('/:id')
    getBoardById(@Param('id') id: string): Board{
        return this.boardsService.getBoardId(id);
    }

    @Delete('/:id')
    deleteBoard(@Param('id') id: string): void {
        this.boardsService.deleteBoard(id);
    }

    @Patch('/:id/status')
    updateBoardStatus(
        @Param('id') id: string,
        @Body('status', BoardStatusValidationPipe) status: BoardStatus,
    ): Board {
        return this.boardsService.updateBoardStatus(id, status);
    }
    
}
