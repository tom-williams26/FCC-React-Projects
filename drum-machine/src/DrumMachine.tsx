import React from 'react';

import './styles/sass/main.scss';
import Display from './components/Display';

const DrumMachine: React.FC = () => {
	return (
		<div id='drum-machine'>
			<Display />
		</div>
	);
};

export default DrumMachine;
