export interface IUserMin {
    id: number;
    username: string;
    fullName: string;
}

export interface IDJComment {
    id: number;
    body: string;
    postId: number;
    likes: number;
    user: IUserMin;
}
