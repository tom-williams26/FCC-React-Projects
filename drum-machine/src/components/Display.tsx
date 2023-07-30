import React, { FunctionComponent, useEffect, useState } from 'react';
import Button from './button/Button';
import Controls from './controls/Controls';

// Represents the object model.
type AudioProps = {
	key: string;
	audio: string;
	clip: string;
};

const audioClips: Array<AudioProps> = [
	{
		key: 'Q',
		audio: 'Heater-1',
		clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
	},
	{
		key: 'W',
		audio: 'Heater-2',
		clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
	},
	{
		key: 'E',
		audio: 'Heater-3',
		clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
	},
	{
		key: 'A',
		audio: 'Heater-4',
		clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
	},
	{
		key: 'S',
		audio: 'Clap',
		clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
	},
	{
		key: 'D',
		audio: 'Open-HH',
		clip: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
	},
	{
		key: 'Z',
		audio: "Kick-n'-Hat",
		clip: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
	},
	{
		key: 'X',
		audio: 'Kick',
		clip: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
	},
	{
		key: 'C',
		audio: 'Closed-HH',
		clip: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
	},
];

const Display = () => {
	const [audio, setAudio] = useState<AudioProps[]>();
	const [audioText, setAudioText] = useState<string>('');

	useEffect(() => {
		setAudio(audioClips);
	}, []);
	console.log(audio);

	// setAudio(audioClips)

	// const buttonComponent = audioClips.map((element, key) => (
	// 	<Button
	// 		key={key}
	// 		id={element.id}
	// 		audio={element.audio}
	// 		clip={element.clip}
	// 	/>
	// ));

	// const clips = () => {
	// 	setAudio(audioClips);
	// };
	// const changeAudioText = (text: string) => {
	// 	setAudioText(text);
	// };

	return (
		<div id='display'>
			<div className='display-container'>
				{/* {buttonComponent} */}
				<Button props={audioClips} />
			</div>
			<div className='display-container' id='controls-container'>
				<Controls />
			</div>
			{/* controls */}
		</div>
	);
};

export default Display;
