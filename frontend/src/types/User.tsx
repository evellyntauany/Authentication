export type UserRegister ={
    userId?:number;
    name:string;
    email:string;
    password?:string;
}
export type User ={
    userId?:number;
    name:string;
    email:string;
    userType?:number;
}



export type UserLogin ={
    email:string;
    password:string;
}

