export interface SuccesRes {
    authorisation:{
        token:string
        type:string
    }
    status:string
    user:user
    company:boolean
}

export interface user {
    id:number
    profile_photo_url:string,
    name:string
    email:string
}

export interface generalData {
    show:boolean
}