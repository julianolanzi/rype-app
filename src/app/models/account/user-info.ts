export interface UserInfo {
    id: string;
    nickname: string;
    name: string;
    lastname: string;
    email: string;
    phone: string;
    url: string;
    gender: string;
    country: string;
    birthday: Date;
    team: [{
        teamName: string;
        tagName: string;
        ranking: number;
        admin: number;
        url: string;
        description: string;
        createdAt: Date;
    }]
    createdAt: Date
}