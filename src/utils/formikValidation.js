import * as Yup from 'yup';

// const validationSchema = Yup.object({
//     guestCount: Yup.number().required('Required'),
//     hours: Yup.number().required('Required'),
//     selectOption: Yup.string().required('Required'),
//     pastryOption: Yup.string().required('Required'),
//     lunchOption: Yup.string().required('Required'),
//     fingerfoodOption: Yup.string().required('Required'),
//     musicOption: Yup.string().required('Required'),
//     serviceOption: Yup.string().required('Required'),
//     openbarOption: Yup.array().required('Required'),
//     additionalOption: Yup.array().required('Required'),
// });

export const formikValidation = values => {
	// Yup.object(
	//     {values.map( value =>  )}
	// )
	Object.entries(values).map(value => {
		// console.log(value);
		const test = [];
		const field = value[0];
		const type = typeof value[1];
		console.log(field, type);
	});
};
