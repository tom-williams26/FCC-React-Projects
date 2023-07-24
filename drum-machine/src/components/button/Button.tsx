import { FunctionComponent } from 'react';

type ButtonProps = {
	idIdentifier: string;
	audioIdentifier: string;
	clip: string;
};

const Button: FunctionComponent<ButtonProps> = ({
	idIdentifier,
	audioIdentifier,
	clip,
}) => {
	return (
		<button className='drum-pad' id={audioIdentifier}>
			<audio className='clip' id={idIdentifier} src={clip}></audio>
			{idIdentifier}
		</button>
	);
};

export default Button;
