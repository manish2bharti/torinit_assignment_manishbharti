//Post anf PostComments interface
export interface Post {
  userId: string;
  id?: string;
  title: string;
  description: string;
  comments: any;
}

export interface PostComments {
  userId: string;
  postId?: string;
  id?: string;
  name: string;
  email: string;
  body: string;
}
