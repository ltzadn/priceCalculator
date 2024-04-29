import React from 'react';
import { Field } from 'formik';

const ShipForm = props => {
	const { label, name, options, ...rest } = props;
	return (
		<div className='mx-auto p-1 m-1 text-center '>
			<label className='font-semibold text-lg' htmlFor={name}>
				{label}:
			</label>
			<Field className='m-2 rounded-md outline-none border-none' as='select' id={name} name={name} {...rest}>
				{options.map(option => {
					return (
						<option key={option.key} value={option.value}>
							{option.key}
						</option>
					);
				})}
			</Field>
		</div>
	);
};

export default ShipForm;
