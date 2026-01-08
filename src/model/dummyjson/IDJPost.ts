export interface IReactions {
    likes: number;
    dislikes: number;
}

export interface IDJPost {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: IReactions;
    views: number;
    userId: number;
}
