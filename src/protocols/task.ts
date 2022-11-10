import { Responsible } from "./responsible.js"

export type Task = {
    id?:number,
    name:string,
    description:string,
    day:Date,
    responsible:Responsible,
    status:boolean
}

export type InsertTask = {
    name:string,
    description:string,
    day:Date,
    status:boolean,
    responsibleToken:string    
}

export type TaskEntity = {
    id?:number,
    name:string,
    description:string,
    day:Date,
    idResponsible:number,
    status:boolean
}

export type TaskPerResponsible = {
    name: string,
    taskNumber: number
}