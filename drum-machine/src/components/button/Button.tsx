import { useEffect, useRef } from 'react';

type ButtonProps = {
	id: string;
	audioName: string;
	path: string;
	childToParent: (childData: string) => void;
};

const Button = (props: ButtonProps) => {
	const btnRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const element = btnRef.current;
		element?.addEventListener('click', playAudio);
		return () => element?.removeEventListener('click', playAudio);
	}, []);

	const playAudio = (event: MouseEvent) => {
		const audio = new Audio();
		audio.src = props.path;
		void audio.play();
	};

	return (
		audioClips.map((element) => (
		<Button
			id={element.id}
			audioName={element.audioName}
			path={element.path}
			childToParent={childToParent}
		/>
	))
		<button
			className='drum-pad'
			key={props.id}
			id={props.audioName}
			ref={btnRef}
			onClick={() => props.childToParent(props.audioName)}
		>
			<audio id={props.id.toUpperCase()} src={props.path} className='clip' />
			{props.id.toUpperCase()}
		</button>
	);
};

export default Button;
