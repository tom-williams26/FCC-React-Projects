import react, { useEffect, useRef } from 'react';

type ArrayProps = {
	id: string;
	audio: string;
	path: string;
	childToParent: (childData: string) => void;
};

const Button = (props: ArrayProps) => {
	const btnRef = useRef(null);

	useEffect(() => {
		// const element = btnRef.current;
		// element.addEventListener('click', playAudio);
		// return () => element?.removeEventListener('click', playAudio);
	}, []);

	const playAudio = (clip: string) => {
		const audio = new Audio();
		audio.src = clip;
		void audio.play();
	};

	return (
		<button
			className='drum-pad'
			key={props.id}
			id={props.audio}
			ref={btnRef.current}
			onClick={() => {
				playAudio(props.path);
				props.childToParent(props.audio);
			}}
		>
			<audio id={props.id.toUpperCase()} src={props.path} className='clip' />
			{props.id.toUpperCase()}
		</button>
	);
};

export default Button;
