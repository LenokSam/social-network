export type PostType = {
  avatar: string
  date: string
  id: string
  likes: number
  text: string
  theme: string

}

export type DialogItemType ={
  id:string
  name:string
  text:string
  avatar: string
  login:string
}
export type UserInfoType ={
  id:string
  name:string
  login:string
  avatar: string
}

export type ProfileDataType = {
  userInfo:UserInfoType
  posts: Array<PostType>
}
export type MessagesDataType = {
  dialogs: Array<DialogItemType>
}


export type StateType = {
  profile:ProfileDataType
  messages:MessagesDataType
}