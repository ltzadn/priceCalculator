import React from 'react';

function TextError(props) {
	return <div className='text-rose-700 absolute bottom-0 left-48'>{props.children.toUpperCase()}</div>;
}

export default TextError;
