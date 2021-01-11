import Card from './Card';

const CardList = ({profiles}) => {
	return (
		<div>
			{
				profiles.map( profile => {
					return <Card profile={profile} />
				})
			}
		</div>
	);
};

export default CardList;