export interface IMail {
    nombre?: string;
    email?: string;
    asunto?: string;
    mensaje?: string;
}

export class Mail implements IMail {
    public nombre?: string;
    public email?: string;
    public asunto?: string;
    public mensaje?: string;
}