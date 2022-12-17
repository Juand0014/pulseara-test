import { IModalType } from './modal.types';

export const ModalItemGroup = ({title, value}: IModalType) => {
    return (
        <div className="form__group">
            <label htmlFor="Proccess">{title}</label>
            <input
                type="text"
                value={value}
                name=""
                id="Proccess"
                disabled
            />
        </div>
    );
};
