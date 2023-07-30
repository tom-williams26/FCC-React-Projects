// import { FunctionComponent } from 'react';
import { useState } from 'react';

type ButtonProps = {
	id: string;
	audioName: string;
	clip: string;
};

const Button = ({ id, audioName, clip }: ButtonProps) => {
	const [audioText, setAudioText] = useState<string>('');

	// const changeAudioText = (audio: string) => {
	// 	setAudioText(audio);
	// };
	const play = document.getElementById(id);
	const audio = new Audio(clip);

	const playAudio = () => {
		audio.play();
	};
	console.log('audio: ', audioText);

	return (
		<button className='drum-pad' id={id} onClick={playAudio}>
			<audio id={audioName} src={clip} className='clip'></audio>
			{id}
		</button>
	);
};

export default Button;
