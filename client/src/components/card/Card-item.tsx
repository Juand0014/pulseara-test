import { ICardItem } from './card.types';

export const CardItem = ({title, value}: ICardItem)=>{
	return (
		<div className="card-item">
			<h4 className="item-title">{title}</h4>
			<p>{value}</p>
		</div>
	)
}