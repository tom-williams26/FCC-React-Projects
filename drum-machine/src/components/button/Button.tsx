import { FunctionComponent } from 'react';

type AudioProps = {
	audioClips: string;
	changeAudioText: string;
};

// const Button: FunctionComponent<ButtonProps> = ({
// 	idIdentifier,
// 	audioIdentifier,
// 	clip,
// }) => {

// 	return (
// 		<button className='drum-pad' id={audioIdentifier}>
// 			<audio id={idIdentifier} src={clip} className='clip'></audio>
// 			{idIdentifier}
// 		</button>
// 	);
// };
const Button: FunctionComponent<AudioProps> = ({
	audioClips,
	changeAudioText,
}) => {
	return (
		<button>
			<audio></audio>
		</button>
	);
};

export default Button;
