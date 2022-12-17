import { IProcedure } from "../../models";
import { CardBody } from "./Card-body";
import { CardItem } from "./Card-item";
import "./Card.style.scss";

export const CardProcedure = ({
    procedure,
    code,
    difference,
    authorized,
    reclaim,
}: IProcedure) => {
    return (
        <div className="card-container">
            <div className="card">
                <CardBody>
                    <CardItem title="Procedimiento 01" value={procedure} />
                    <CardItem title="Código" value={code} />
                    <CardItem title="Reclamado" value={reclaim} />
                    <CardItem title="Diferencia RD$" value={difference} />
                    <CardItem title="Autorizado RD$" value={authorized} />
                </CardBody>
            </div>
        </div>
    );
};
