import { IsNotEmpty } from "class-validator";

export class createBoardDto{
    @IsNotEmpty() // null 불허
    title: string;

    @IsNotEmpty()
    description: string;
}