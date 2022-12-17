import { useQuery } from "react-query";

import { CardProcedure, ModalComponent } from "../components";
import { IProcedure } from "../models";
import { http } from "../services";
import "./Home.style.scss";

export const Home = () => {
    const { isLoading, error, data } = useQuery<any, Error>({
				queryKey: "procedures",
        queryFn: () => http.get("procedure", { offset: 0, limit: 5 }),
    });

    if (isLoading) return <h1>Cargando...</h1>;

    if (error) return <h1>Ha ocurrido un error</h1>;


    return (
        <>
            <h3>Procedimientos</h3>
            {!data.length && <h1>No hay procedimientos</h1>}
            {data.length > 0 &&
                data.map((item: IProcedure) => {
                    return <CardProcedure key={item._id} {...item} />;
            })}
            <ModalComponent data={data} />
        </>
    );
};
