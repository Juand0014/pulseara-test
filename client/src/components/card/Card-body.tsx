import { ICardBody } from "./card.types";

export const CardBody = ({ children }: ICardBody) => {
    return <div className="card__body">{children}</div>;
};
