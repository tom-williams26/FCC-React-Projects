import React from 'react';

const Controls: React.FC = () => {
	return (
		<div className='controls'>
			<div>
				<p>Power</p>
				<select name='' id=''></select>
			</div>
			<div>
				<p>sound name</p>
			</div>
			<div>
				<input type='range' />
			</div>
			<div>
				<p>Bank</p>
				<div className='select'>
					<div className='inner'></div>
				</div>
			</div>
		</div>
	);
};

export default Controls;
