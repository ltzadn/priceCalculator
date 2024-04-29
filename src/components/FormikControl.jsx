import React from 'react';
import Input from './Input';
import Textarea from './Textarea';
import ShipForm from './ShipForm';
import RadioButtons from './RadioButtons';
import CheckboxGroup from './CheckboxGroup';

function FormikControl(props) {
	const { control, ...rest } = props;
	switch (control) {
		case 'input':
			return <Input {...rest} />;
		case 'textarea':
			return <Textarea {...rest} />;
		case 'select':
			return <ShipForm {...rest} />;
		case 'radio':
			return <RadioButtons {...rest} />;
		case 'checkbox':
			return <CheckboxGroup {...rest} />;
		default:
			return null;
	}
}

export default FormikControl;
