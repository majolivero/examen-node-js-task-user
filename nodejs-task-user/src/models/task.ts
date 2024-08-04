import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript';
import { User } from './user';

@Table({
    tableName: 'tasks',
    timestamps:true,
})
export class Task extends Model<Task>{
    @Column({
        type:DataType.STRING,
        allowNull:false,
    })
    name! : string;

    @Column({
        type:DataType.STRING,
        allowNull:false,
    })
    description! : string;

    @Column({
        type:DataType.BOOLEAN,
        allowNull:false,
        defaultValue:true,
    })
    state! : boolean;

    @ForeignKey(() => User)
    @Column({
        type:DataType.INTEGER,
        allowNull: false,
    })
    userId!: number;

    @BelongsTo(() => User)
    user!:User;
}