import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { v1 as uuid } from 'uuid';
import { createBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
    // private boards: Board[] = [];

    // getAllBoards(): Board[] {
    //     return this.boards;
    // }

    // createBoard(createBoardDto: createBoardDto){
    //     // const title = createBoardDto.title;
    //     // const description = createBoardDto.description;
    //     const { title, description }= createBoardDto;
    //     const board: Board={
    //         id: uuid(),
    //         //title: title -> 그냥 title로 생략가능 : 앞뒤 변수명이 동일
    //         title,
    //         // description: description
    //         description,
    //         status: BoardStatus.PUBLIC
    //     }

    //     //게시판에 게시글 생성한 것을 넣어주기
    //     this.boards.push(board);
    //     return board;
    // }

    // getBoardId(id: string): Board{ //게시물 하나를 return 하기 때문에 Board[] X
    //     const found = this.boards.find((board)=>board.id === id);

    //     if(!found){
    //         throw new NotFoundException(`Can't find Board with id ${id}`);
    //     }
    //     return found;
    // }

    // deleteBoard(id: string): void{ // return 을 따로 주지 않아도 되기 때문에 void
    //     const found = this.getBoardId(id);
    //     this.boards = this.boards.filter((board) => board.id !==found.id);
    // }

    // updateBoardStatus(id:string, status: BoardStatus):Board {
    //     const board = this.getBoardId(id);
    //     board.status = status;
    //     return board;
    // }
}
