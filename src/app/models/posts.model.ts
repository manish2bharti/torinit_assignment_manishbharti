export interface Post {
  id?: string;
  title: string;
  description: string;
  comments: any;
}

export interface PostComments {
  postId?: string;
  id?: string;
  name: string;
  email: string;
  body: string;
}
