import { useEffect } from 'react';

type ButtonProps = {
	id: string;
	audioName: string;
	path: string;
	childToParent: (childData: string) => void;
};

const Button = (props: ButtonProps) => {
	const play = document.querySelector(props.id);

	const playAudio = (props: ButtonProps) => {
		const audio = new Audio(props.path);
		void audio.play();
	};

	// play.addEventListener('click', playAudio);

	return (
		<button
			className='drum-pad'
			id={props.audioName}
			onClick={() => {
				props.childToParent(props.audioName);
				playAudio(props);
			}}
		>
			<audio className='clip' id={props.id} src={props.path} />
			{props.id}
		</button>
	);
};

export default Button;
