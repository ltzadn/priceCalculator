import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';
import Summary from './Summary';
// import { formikValidation } from '../utils/formikValidation';

function FormikContainer() {
	const dropdownOptions = [
		{ key: 'Rusałka: standard, pon-czw', price: 1250, value: 'dValue1' },
		{ key: 'Rusałka: standard, ptk-nd', price: 1400, value: 'dValue2' },
		{ key: 'Rusałka: premium, pon-czw', price: 1600, value: 'dValue3' },
		{ key: 'Rusałka: premium, ptk-nd', price: 1800, value: 'dValue4' },
		{ key: 'Rusałka: vip, pon-czw', price: 4500, value: 'dValue5' },
		{ key: 'Rusałka: vip, ptk-nd', price: 4900, value: 'dValue6' },
		{ key: 'Kaczuszka: standard', price: 990, value: 'dValue7' },
		{ key: 'Kaczuszka: premium', price: 1290, value: 'dValue8' },
		{ key: 'Kaczuszka: vip', price: 1690, value: 'dValue9' },
		{ key: 'Pirat: standard', price: 750, value: 'dValue10' },
		{ key: 'Pirat: premium', price: 950, value: 'dValue11' },
		{ key: 'Pirat: vip', price: 1350, value: 'dValue12' },
		{ key: 'Korsarz: standard', price: 700, value: 'dValue13' },
		{ key: 'Korsarz: premium', price: 900, value: 'dValue14' },
		{ key: 'Korsarz: vip', price: 1250, value: 'dValue15' },
		{ key: 'Miami/California: standard', price: 750, value: 'dValue16' },
		{ key: 'Miami/California: premium', price: 950, value: 'dValue17' },
		{ key: 'Miami/California: vip', price: 1250, value: 'dValue18' },
	];
	const fingerfoodOptions = [
		{ key: 'Opcja 1 (mix FF naszych)', price: 99, value: 'ffValue1' },
		{ key: 'Opcja 2.(BF zimnych z WP)', price: 210, value: 'ffValue2' },
		{ key: 'Opcja 3. (Wiejski stół)', price: 170, value: 'ffValue3' },
		{ key: 'Opcja 4. (Zakąski b1.)', price: 200, value: 'ffValue4' },
		{ key: 'Opcja 5. (Zakąski b2)', price: 240, value: 'ffValue5' },
		{ key: 'Opcja 6. (Zakąski b3)', price: 280, value: 'ffValue6' },
		{ key: 'Opcja 7. (Zakąski wege)', price: 180, value: 'ffValue7' },
		{ key: 'Opcja 8. (Przekąski suche)', price: 45, value: 'ffValue8' },
	];
	const lunchOptions = [
		{ key: 'Opcja 1 - Klasyczny lunch', price: 190, value: 'lValue1' },
		{ key: 'Opcja 2 - Kolacja 1', price: 390, value: 'lValue2' },
		{ key: 'Opcja 3 - Kolacja 2', price: 370, value: 'lValue3' },
		{ key: 'Opcja 4 - Kolacja 3', price: 290, value: 'lValue4' },
	];

	const pastryOptions = [
		{ key: 'Opcja 1 - mix. 2 porcje/os', price: 40, value: 'pValue1' },
		{ key: 'Opcja 2 - słodki stół do 20os.', price: 65, value: 'pValue2' },
		{ key: 'Opcja 3 - słodki stół do 40os.', price: 79, value: 'pValue3' },
		{ key: 'Opcja 4 - słodki stół powyżej 40os.', price: 87, value: 'pValue4' },
	];

	const musicOptions = [
		{ key: 'Udostępienie nagłośnienia', price: 200, value: 'mOption1' },
		{ key: 'Dj Damn Lady', price: 2200, value: 'mOption2', extraHourPrice: 500, extraHourTreshold: 3 },
		{ key: 'Dj Seniorita', price: 2200, value: 'mOption3', extraHourPrice: 500, extraHourTreshold: 3 },
		{ key: 'Dj Mingis', price: 3000, value: 'mOption4', extraHourPrice: 700, extraHourTreshold: 3 },
		{ key: 'Dj Mia', price: 1900, value: 'mOption5', extraHourPrice: 350, extraHourTreshold: 3 },
		{ key: 'Dj Bilik', price: 1800, value: 'mOption6', extraHourPrice: 350, extraHourTreshold: 3 },
	];
	const serviceOptions = [
		{ key: 'Jedno-osobowa obsługa', price: 80, value: 'sOption1' },
		{ key: 'Dwu-osobowa obsługa', price: 160, value: 'sOption2' },
		{ key: 'Trzy-osobowa obsługa', price: 240, value: 'sOption3' },
		{ key: 'Cztero-osobowa obsługa', price: 320, value: 'sOption4' },
		{ key: 'Pięcio-osobowa obsługa', price: 400, value: 'sOption5' },
	];

	const openbarOptions = [
		{ key: 'Open bar 1', price: 39, value: 'bOption1', type: 'per Person', extraHourPrice: 15, extraHourTreshold: 3 },
		{ key: 'Open bar 2', price: 89, value: 'bOption2', type: 'per Person', extraHourPrice: 30, extraHourTreshold: 3 },
		{ key: 'Open bar 3', price: 99, value: 'bOption3', type: 'per Person', extraHourPrice: 30, extraHourTreshold: 3 },
		{ key: 'Open bar 4', price: 120, value: 'bOption4', type: 'per Person', extraHourPrice: 40, extraHourTreshold: 3 },
		{ key: 'Open bar 5', price: 169, value: 'bOption5', type: 'per Person', extraHourPrice: 50, extraHourTreshold: 4 },
		{ key: 'Open bar 6', price: 199, value: 'bOption6', type: 'per Person', extraHourPrice: 55, extraHourTreshold: 4 },
		{ key: 'Hot open bar', price: 29, value: 'bOption7', type: 'per Person' },
	];

	const additionalOptions = [
		{ key: 'Opłata korkowa - catering', price: 25, value: 'addValue1', type: 'per Person' },
		{ key: 'Opłata korkowa - alkohol', price: 25, value: 'addValue2', type: 'per Person' },
		{ key: 'Wypożyczenie lodówko-zamrażarki', price: 150, value: 'addValue3' },
		{ key: 'Czerwony dywan', price: 200, value: 'addValue4' },
		{ key: 'Oscarowe wejście', price: 400, value: 'addValue5' },
		{ key: 'Drink powitalny prosecco plastik', price: 25, value: 'addValue6', type: 'per Person' },
		{ key: 'Drink powitalny prosecco szkło', price: 30, value: 'addValue7', type: 'per Person' },
		{ key: 'Drink powitalny Szampan szkło', price: 59, value: 'addValue8', type: 'per Person' },
		{ key: 'Godzinny rejs motorówką', price: 890, value: 'addValue9' },
		{ key: 'Dwugodzinny rejs motorówką', price: 1780, value: 'addValue10' },
		{ key: 'Godzinny reportaż zdjęciowy', price: 750, value: 'addValue11' },
		{ key: 'Dwugodzinny reportaż zdjęciowy', price: 1200, value: 'addValue12' },
		{ key: 'Automaty 1szt.', price: 999, value: 'addValue13' },
		{ key: 'Automaty 2szt.', price: 1200, value: 'addValue14' },
		{ key: 'Animator dla dzieci', price: 1800, value: 'addValue15' },
		{ key: 'Przewodnik PL', price: 800, value: 'addValue16' },
	];

	const grillOptions = [
		{ key: 'Grill klasyczny', value: 'klasyczny' },
		{ key: 'Grill skrócony', value: 'skrocony' },
		{ key: 'Brak grilla', value: 'brak' },
	];

	const initialValues = {
		guestCount: 0,
		hoursCount: 0,
		selectOption: dropdownOptions[0].value,
		musicOption: '',
		pastryOption: '',
		serviceOption: '',
		fingerfoodOption: '',
		lunchOption: '',
		openbarOption: [],
		additionalOption: [],
		grillOption: '',
	};
	const onSubmit = formValue => {
		console.log(formValue);
		let sum = 0;
		const serviceOptionPrice = calculateServiceOption(formValue.serviceOption, serviceOptions, formValue.hoursCount);
		const selectOptionPrice = calculateServiceOption(formValue.selectOption, dropdownOptions, formValue.hoursCount);
		const musicOptionPrice = calculateMusicTotal(formValue.musicOption, musicOptions, formValue.hoursCount);
		const fingerfoodOptionPrice = calculateSingleSelectFoodOption(
			formValue.fingerfoodOption,
			fingerfoodOptions,
			formValue.guestCount
		);
		const pastryOptionPrice = calculateSingleSelectFoodOption(
			formValue.pastryOption,
			pastryOptions,
			formValue.guestCount
		);
		const lunchOptionPrice = calculateSingleSelectFoodOption(formValue.lunchOption, lunchOptions, formValue.guestCount);
		const additionalOptionsTotal = calculateAdditionalTotal(formValue.additionalOption, formValue.guestCount);
		const openbarOptionsTotal = calculateOpenbarTotal(
			formValue.openbarOption,
			formValue.guestCount,
			formValue.hoursCount
		);
		const grillOptionsTotal = calculateGrillTotal(formValue.grillOption, formValue.guestCount, formValue.hoursCount);

		sum =
			additionalOptionsTotal +
			openbarOptionsTotal +
			grillOptionsTotal +
			fingerfoodOptionPrice +
			serviceOptionPrice +
			pastryOptionPrice +
			lunchOptionPrice +
			selectOptionPrice +
			musicOptionPrice;
		console.log(sum);
	};

	const calculateAdditionalTotal = (selectedOptions, guestCount) => {
		let sum = 0;
		const selectedAdditionalOption = additionalOptions.filter(option => selectedOptions.includes(option.value));
		selectedAdditionalOption.forEach(selected => {
			if (selected.type === undefined) {
				sum += selected.price;
			} else {
				sum += selected.price * guestCount;
			}
		});
		return sum;
	};

	const calculateOpenbarTotal = (selectedOptions, guestCount, hoursCount) => {
		let sum = 0;
		const selectedAdditionalOption = openbarOptions.filter(option => selectedOptions.includes(option.value));
		selectedAdditionalOption.forEach(selected => {
			if (selected.type === undefined) {
				sum += selected.price;
			} else {
				sum += selected.price * guestCount;
			}
			if (selected.extraHourPrice !== undefined && selected.extraHourTreshold !== undefined) {
				let hoursAboveThreshold = hoursCount - selected.extraHourTreshold;
				sum += hoursAboveThreshold * selected.extraHourPrice;
			}
		});
		return sum;
	};

	const calculateMusicTotal = (selectedOptionValue, availableOptions, hoursCount) => {
		let sum = 0;
		let selectedOption = availableOptions.find(option => option.value === selectedOptionValue);
		if (selectedOptionValue === 'mOption1') {
			sum = selectedOption.price;
			return sum;
		}
		if (hoursCount > 3) {
			let hoursAboveThreshhold = hoursCount - selectedOption.extraHourTreshold;
			sum += selectedOption.price + hoursAboveThreshhold * selectedOption.extraHourPrice;
		}
		return sum;
	};

	const calculateGrillTotal = (selectedOption, guestCount, hoursCount) => {
		let sum = 0;
		if (selectedOption === 'brak' || selectedOption === undefined) {
			return sum;
		}
		let grillRate = 0;
		if (selectedOption === 'klasyczny') {
			if (guestCount < 13) {
				grillRate = hoursCount > 5 ? 170 : hoursCount > 3 ? 160 : 150;
				console.log(grillRate, 'test1');
			} else {
				grillRate = hoursCount > 5 ? 160 : hoursCount > 3 ? 150 : 140;
				console.log(grillRate, 'test2');
			}
			sum += grillRate * guestCount;
			return sum;
		}
		if (selectedOption === 'skrocony') {
			if (guestCount < 13) {
				grillRate = hoursCount > 5 ? 135 : hoursCount > 3 ? 125 : 115;
			} else {
				grillRate = hoursCount > 5 ? 130 : hoursCount > 3 ? 120 : 110;
			}
			sum += grillRate * guestCount;
			return sum;
		}
	};

	const calculateSingleSelectFoodOption = (selectedOptionValue, availableOptions, guestCount) => {
		let sum = 0;
		let selectedOption = availableOptions.find(option => option.value === selectedOptionValue);
		if (guestCount === undefined) {
			sum += selectedOption.price;
		} else {
			sum += selectedOption.price * guestCount;
		}
		return sum;
	};

	const calculateServiceOption = (selectedOptionValue, availableOptions, hoursCount) => {
		let sum = 0;
		let selectedOption = availableOptions.find(option => option.value === selectedOptionValue);
		sum += selectedOption.price * hoursCount;
		return sum;
	};

	const validationSchema = Yup.object({
		// grillOption: Yup.string().required('Required'),
		// guestCount: Yup.number().required('Required'),
		// hoursCount: Yup.number().required('Required'),
		// selectOption: Yup.string().required('Required'),
		// pastryOption: Yup.string().required('Required'),
		// lunchOption: Yup.string().required('Required'),
		// fingerfoodOption: Yup.string().required('Required'),
		// musicOption: Yup.string().required('Required'),
		// serviceOption: Yup.string().required('Required'),
		// openbarOption: Yup.array().required('Required'),
		// additionalOption: Yup.array().required('Required'),
	});
	// const validationSchema = formikValidation(initialValues);

	return (
		<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
			{formik => (
				<Form className='mx-auto w-auto'>
					<FormikControl control='select' label='Wybierz statek' name='selectOption' options={dropdownOptions} />
					<FormikControl
						control='input'
						type='number'
						label='Ilość osób:'
						name='guestCount'
						onChange={formik.handleChange}
						value={formik.values.name}
					/>
					<FormikControl
						control='input'
						type='number'
						label='Ilość godzin:'
						name='hoursCount'
						onChange={formik.handleChange}
						value={formik.values.name}
					/>
					<FormikControl control='radio' label='Opcje fingerfood' name='fingerfoodOption' options={fingerfoodOptions} />
					<FormikControl control='radio' label='Opcje grilla' name='grillOption' options={grillOptions} />
					<FormikControl control='radio' label='Menu obiadowe' name='lunchOption' options={lunchOptions} />
					<FormikControl control='radio' label='Słodkości' name='pastryOption' options={pastryOptions} />
					<FormikControl control='radio' label='Muzyka' name='musicOption' options={musicOptions} />
					<FormikControl control='radio' label='Obsługa' name='serviceOption' options={serviceOptions} />

					<FormikControl
						control='checkbox'
						label='Dodatkowe usługi'
						name='additionalOption'
						options={additionalOptions}
					/>
					<FormikControl control='checkbox' label='Open bar' name='openbarOption' options={openbarOptions} />

					<Summary></Summary>
					<div className='w-full flex pt-2 justify-center'>
						<button className='bg-slate-600 rounded w-1/2 align-middle text-white text-lg' type='submit'>
							Submit
						</button>
					</div>
				</Form>
			)}
		</Formik>
	);
}

export default FormikContainer;
