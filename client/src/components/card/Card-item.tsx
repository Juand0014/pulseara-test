import { ICardItem } from "./card.types";

export const CardItem = ({ title, value }: ICardItem) => {
    return (
        <span className="card-item">
            <span className="item-title">{title}</span>
            <span className="item-body">{value}</span>
        </span>
    );
};
