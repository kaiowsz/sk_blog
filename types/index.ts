export type Category = {
    name: string;
    slug: string;
}

export type Author = {
    bio?: string;
    id: string;
    name: string;
    photo: {
        url: string;
    }
}

export type Post = {
    author: Author;
    categories?: Category[];
    content?: {
        raw: {
            children: ChildrenOfChildren[];
        }
    };
    createdAt: string;
    excerpt?: string;
    featuredImage: { 
        url: string 
    };
    slug: string;
    title: string;
}

export interface PropsOnlyPost {
    post: Post;
}

export interface PostWidgetType {
    createdAt: string;
    featuredImage: {
    url: string;
    };
    slug: string;
    title: string;
}

type ChildrenOfChildren = {
    children: any[];
    type: string;
}