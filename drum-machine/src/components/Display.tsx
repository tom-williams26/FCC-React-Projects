import React, { useState } from 'react';
import Button from './button/Button';
import Controls from './controls/Controls';

// Represents the object model.
type ButtonAttributes = {
	idIdentifier: string;
	audioIdentifier: string;
	clip: string;
};

const audioClips: ButtonAttributes[] = [
	{
		idIdentifier: 'Q',
		audioIdentifier: 'Heater-1',
		clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
	},
	{
		idIdentifier: 'W',
		audioIdentifier: 'Heater-2',
		clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
	},
	{
		idIdentifier: 'E',
		audioIdentifier: 'Heater-3',
		clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
	},
	{
		idIdentifier: 'A',
		audioIdentifier: 'Heater-4',
		clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
	},
	{
		idIdentifier: 'S',
		audioIdentifier: 'Clap',
		clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
	},
	{
		idIdentifier: 'D',
		audioIdentifier: 'Open-HH',
		clip: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
	},
	{
		idIdentifier: 'Z',
		audioIdentifier: "Kick-n'-Hat",
		clip: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
	},
	{
		idIdentifier: 'X',
		audioIdentifier: 'Kick',
		clip: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
	},
	{
		idIdentifier: 'C',
		audioIdentifier: 'Closed-HH',
		clip: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
	},
];

const Display: React.FC = (audioClips) => {
	const [audioText, setAudioText] = useState<string>('');

	// const buttonComponent = drumpadElement.map((element, key) => (
	// 	<Button
	// 		key={key}
	// 		idIdentifier={element.idIdentifier}
	// 		audioIdentifier={element.audioIdentifier}
	// 		clip={element.clip}
	// 	/>
	// ));

	const changeAudioText = (text: string) => {
		setAudioText(text);
	};

	return (
		<div id='display'>
			<div className='display-container'>
				<Button audioClips={audioClips} changeAudioText={changeAudioText} />
			</div>
			<div className='display-container' id='controls-container'>
				<Controls />
			</div>
			{/* controls */}
		</div>
	);
};

export default Display;
