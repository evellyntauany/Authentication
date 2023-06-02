export type UserRegister ={
    userId?:number;
    name:string;
    email:string;
    password?:string;
    selectedOption?:number
}
export type User ={
    userId?:number;
    name:string;
    email:string;
    userType?:number;
}

export type UserId={
    name:string;
}



export type UserLogin ={
    email:string;
    password:string;
}

