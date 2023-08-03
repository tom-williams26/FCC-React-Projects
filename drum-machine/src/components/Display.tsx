import { useState } from 'react';
import Controls from './controls/Controls';
import Button from './button/Button';

// Represents the object model.
type AudioProps = {
	id: string;
	audio: string;
	path: string;
};

const audioClips: Array<AudioProps> = [
	{
		id: 'q',
		audio: 'Heater-1',
		path: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
	},
	{
		id: 'w',
		audio: 'Heater-2',
		path: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
	},
	{
		id: 'e',
		audio: 'Heater-3',
		path: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
	},
	{
		id: 'a',
		audio: 'Heater-4',
		path: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
	},
	{
		id: 's',
		audio: 'Clap',
		path: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
	},
	{
		id: 'd',
		audio: 'Open-HH',
		path: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
	},
	{
		id: 'z',
		audio: "Kick-n'-Hat",
		path: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
	},
	{
		id: 'x',
		audio: 'Kick',
		path: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
	},
	{
		id: 'c',
		audio: 'Closed-HH',
		path: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
	},
];

const Display = () => {
	const [audioName, setAudioName] = useState<string>('');

	const childToParent = (childData: string): void => {
		setAudioName(childData);
	};

	const buttonComponent = audioClips.map((element, key) => (
		<Button
			key={key}
			id={element.id}
			audio={element.audio}
			path={element.path}
			childToParent={childToParent}
		/>
	));

	// console.log(audioName);

	return (
		<div id='display'>
			<div className='display-container'>{buttonComponent}</div>
			<div className='display-container' id='controls-container'>
				<Controls audio={audioName} />
			</div>
		</div>
	);
};

export default Display;
