export interface loginParams 
{
    email:string
    password:string
}


export interface registerParam {
    name:string
    email:string
    password:string
    password_confirmation:string
    privacy:boolean
}

export interface changePasswordParam {
    email:string,
    currentPassword:string,
    newPassword: string,
    confirmPassword:string,
    username:string
}