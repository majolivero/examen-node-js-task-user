import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    HasMany
} from "sequelize-typescript";
import { Task } from './task';

@Table({
    tableName : "users",
    timestamps : true,
})
export class User extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type:DataType.INTEGER,
    })
    id!:number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name!: string;

    @Column({
        type: DataType.STRING,
        allowNull:false,
        unique:true,
    })
    email!: string;

    @Column({
        type:DataType.STRING,
        allowNull:false,
    })
    password!: string;

    @HasMany(() => Task)
    tasks! : Task[];
}