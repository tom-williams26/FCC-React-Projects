// import React, { FunctionComponent, useEffect, useState } from 'react';
// import Controls from './controls/Controls';
import Button from './button/Button';

// Represents the object model.
type AudioProps = {
	id: string;
	audioName: string;
	clip: string;
};

const audioClips: Array<AudioProps> = [
	{
		id: 'Q',
		audioName: 'Heater-1',
		clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
	},
	{
		id: 'W',
		audioName: 'Heater-2',
		clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
	},
	{
		id: 'E',
		audioName: 'Heater-3',
		clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
	},
	{
		id: 'A',
		audioName: 'Heater-4',
		clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
	},
	{
		id: 'S',
		audioName: 'Clap',
		clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
	},
	{
		id: 'D',
		audioName: 'Open-HH',
		clip: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
	},
	{
		id: 'Z',
		audioName: "Kick-n'-Hat",
		clip: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
	},
	{
		id: 'X',
		audioName: 'Kick',
		clip: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
	},
	{
		id: 'C',
		audioName: 'Closed-HH',
		clip: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
	},
];

const Display = () => {
	// const [audio, setAudio] = useState<AudioProps[]>();
	// const [audioText, setAudioText] = useState<string>('');

	// useEffect(() => {
	// 	setAudio(audioClips);
	// }, []);
	// console.log(audio);

	const buttonComponent = audioClips.map((element, key) => (
		<Button
			key={key}
			id={element.id}
			audioName={element.audioName}
			clip={element.clip}
		/>
	));

	return (
		<div id='display'>
			<div className='display-container'>{buttonComponent}</div>
			<div className='display-container' id='controls-container'>
				{/* <Controls /> */}
			</div>
			{/* controls */}
		</div>
	);
};

export default Display;
