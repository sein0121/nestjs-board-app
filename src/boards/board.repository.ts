import { EntityRepository, Repository } from "typeorm";
import { Board } from "./board.entity";
import { createBoardDto } from "./dto/create-board.dto";

@EntityRepository(Board)
export class BoardRepository extends Repository<Board>{
    // async createBoard(createBoardDto: createBoardDto, user: User) : Promise<Board> {
    //     const {title, description} = createBoardDto;

    //     const board = this.create({ 
    //         title, 
    //         description,
    //         status: BoardStatus.PUBLIC,
    //         user
    //     })

    //     await this.save(board);
    //     return board;
    // }
    
}