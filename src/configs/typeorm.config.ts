import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeORMConfig : TypeOrmModuleOptions = {
    //Database Type
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username:'postgres',
    password: '0121',
    database: 'board-app',
    //엔티티는 하나씩 넣을 수도 있지만 이렇게 다 포함하게 할 수 있다. 
    entities: [__dirname+'/../**/*.entity.{js,ts}'],
    synchronize: true 

}