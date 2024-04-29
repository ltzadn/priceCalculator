import React, { useState } from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

function CheckboxGroup(props) {
	const [collapseOpen, setCollapse] = useState(false);
	const { label, name, options, ...rest } = props;
	return (
		<div className='max-w-md text-left'>
			<button type='button' onClick={() => setCollapse(!collapseOpen)} className='flex justify-between w-full'>
				<label className='font-semibold'>{label}: </label>
				{collapseOpen ? <span>-</span> : <span>+</span>}
			</button>
			<Field name={name} value={options}>
				{({ field }) => {
					return options.map(option => {
						return (
							<React.Fragment key={option.key}>
								<div
									className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
										collapseOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
									}`}>
									<div className='overflow-hidden'>
										<input
											type='checkbox'
											id={option.key}
											{...field}
											{...rest}
											value={option.value}
											checked={field.value === undefined ? null : field.value.includes(option.value)}
										/>

										<label htmlFor={option.value} className='px-1 py-1'>
											{option.key}
										</label>
									</div>
								</div>
							</React.Fragment>
						);
					});
				}}
			</Field>
			<ErrorMessage component={TextError} name={name} />
		</div>
	);
}

export default CheckboxGroup;
