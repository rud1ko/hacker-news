export interface NewsItemProps {
    id: number;
    title: string;
    url: string;
    by: string;
    time: string;
    score: number;
    descendants: number;
    kids: number[];
    text: string;
    deleted: boolean
}