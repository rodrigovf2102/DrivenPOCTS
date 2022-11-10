import { Responsible } from "./responsible.js"

export type Task = {
    id?:number,
    name:string,
    description:string,
    day:Date,
    responsible:Responsible,
    status:boolean
}