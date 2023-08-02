import { useState } from 'react';
import Controls from './controls/Controls';
import Button from './button/Button';

// Represents the object model.
type AudioProps = {
	id: string;
	audioName: string;
	path: string;
};

const audioClips: Array<AudioProps> = [
	{
		id: 'Q',
		audioName: 'Heater-1',
		path: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
	},
	{
		id: 'W',
		audioName: 'Heater-2',
		path: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
	},
	{
		id: 'E',
		audioName: 'Heater-3',
		path: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
	},
	{
		id: 'A',
		audioName: 'Heater-4',
		path: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
	},
	{
		id: 'S',
		audioName: 'Clap',
		path: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
	},
	{
		id: 'D',
		audioName: 'Open-HH',
		path: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
	},
	{
		id: 'Z',
		audioName: "Kick-n'-Hat",
		path: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
	},
	{
		id: 'X',
		audioName: 'Kick',
		path: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
	},
	{
		id: 'C',
		audioName: 'Closed-HH',
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
			audioName={element.audioName}
			path={element.path}
			childToParent={childToParent}
		/>
	));

	// console.log(audioName);

	return (
		<div id='display'>
			<div className='display-container'>{buttonComponent}</div>
			<div className='display-container' id='controls-container'>
				<Controls audioName={audioName} />
			</div>
			{/* controls */}
		</div>
	);
};

export default Display;
