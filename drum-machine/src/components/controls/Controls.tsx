type ControlProps = {
	audio: string;
};
const Controls = (props: ControlProps) => {
	return (
		<div className='controls'>
			<div className='sound-name-container'>
				<p>{props.audio}</p>
			</div>
		</div>
	);
};

export default Controls;
