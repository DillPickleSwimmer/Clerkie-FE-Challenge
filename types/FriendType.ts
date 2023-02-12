export enum FriendStatus {
    normal,
    close,
    superClose,
}

export type FriendType = {
    id: string;
    name: string;
    email: string;
    phone: string;
    status: FriendStatus;
    birthday: Date;
    gender: 'female' | 'male';
};

export default FriendType;
