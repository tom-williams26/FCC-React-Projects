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
		id: 'q',
		audioName: 'Heater-1',
		path: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
	},
	{
		id: 'w',
		audioName: 'Heater-2',
		path: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
	},
	{
		id: 'e',
		audioName: 'Heater-3',
		path: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
	},
	{
		id: 'a',
		audioName: 'Heater-4',
		path: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
	},
	{
		id: 's',
		audioName: 'Clap',
		path: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
	},
	{
		id: 'd',
		audioName: 'Open-HH',
		path: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
	},
	{
		id: 'z',
		audioName: "Kick-n'-Hat",
		path: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
	},
	{
		id: 'x',
		audioName: 'Kick',
		path: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
	},
	{
		id: 'c',
		audioName: 'Closed-HH',
		path: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
	},
];

const Display = () => {
	const [audioName, setAudioName] = useState<string>('');

	const childToParent = (childData: string): void => {
		setAudioName(childData);
	};

	// const buttonComponent = audioClips.map((element, key) => (
	// 	<Button
	// 		key={key}
	// 		id={element.id}
	// 		audioName={element.audioName}
	// 		path={element.path}
	// 		childToParent={childToParent}
	// 	/>
	// ));

	// console.log(audioName);

	return (
		<div id='display'>
			<div className='display-container'>
				<Button audioClips={audioClips} childToParent={childToParent} />
			</div>
			<div className='display-container' id='controls-container'>
				<Controls audioName={audioName} />
			</div>
			{/* controls */}
		</div>
	);
};

export default Display;
