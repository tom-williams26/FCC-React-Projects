type ControlProps = {
	audioName: string;
};
const Controls = (props: ControlProps) => {
	return (
		<div className='controls'>
			<div className='sound-name-container'>
				<p>{props.audioName}</p>
			</div>
		</div>
	);
};

export default Controls;
