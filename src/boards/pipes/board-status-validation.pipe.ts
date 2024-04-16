import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { BoardStatus } from "../board-status.enum";

export class BoardStatusValidationPipe implements PipeTransform{
    //readonly : 클래스 외부에서 접근은 가능하지만 변경은 불가!
    readonly StatusOptions =[
        BoardStatus.PRIVATE,
        BoardStatus.PUBLIC
    ]

    transform(value: any) { // value : 사용자가 입력한 status
        value = value.toUpperCase(); //대문자 변환

        if(!this.isStatusValid(value)){
            throw new BadRequestException(`${value} isn'i in the status`)
        }
        
        return value;
    }

    private isStatusValid(status: any){
        const index = this.StatusOptions.indexOf(status); //배열안에 있는지, 있으면 그 배열내 인덱스값
        return index !== -1;
    }
}