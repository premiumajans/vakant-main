export interface SuccesRes {
    authorisation:{
        token:string
        type:string
    }
    status:string
    user:user
}

export interface user {
    id:number
    profile_photo_url:string,
    name:string
}