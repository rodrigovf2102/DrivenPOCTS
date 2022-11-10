export type Responsible = {
    id?:number,
    name:string,
    age:number,
    token:string
}

export type InsertResponsible = Omit<Responsible,'token'|'id'>