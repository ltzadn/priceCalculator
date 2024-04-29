import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

function Input(props) {
	const { label, name, ...rest } = props;
	return (
		<div className='flex max-w-full py-2 pl-3'>
			<div className='w-1/2'>
				<label htmlFor={name}>{label}</label>
			</div>
			<div className='w-1/2 relative right-20'>
				<Field className='border-black border-solid border rounded-md ml-2 pl-1 ' id={name} name={name} {...rest} />
				<ErrorMessage component={TextError} name={name} />
			</div>
		</div>
	);
}

export default Input;
