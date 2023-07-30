import { FunctionComponent } from 'react';

type ButtonProps = {
	key: string;
	audio: string;
	clip: string;
};

const Button = (props: ButtonProps) => {
	return (
		{props.map((element, key) => (
				<Button
					key={key}
					key={element.key}
					audio={element.audio}
					clip={element.clip}
				/>
		))
		}
	)
};

// const Button = ({ id, audio, clip }: AudioProps) => {
// 		return (
// 		<button className='drum-pad' id={id}>
// 			<audio id={audio} src={clip} className='clip'></audio>
// 			{id}
// 		</button>
// 	);
// };
// return (
// 		audioClips.map((element, key) => (
// 				<Button
// 					key={key}
// 					idIdentifier={element.idIdentifier}
// 					audioIdentifier={element.audioIdentifier}
// 					clip={element.clip}
// 				/>
// 			))
// );
// };

export default Button;
