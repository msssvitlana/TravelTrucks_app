'use client';

import { useRouter } from 'next/navigation';
import Loader from '../Loader/Loader';
import * as Yup from 'yup';
import { Formik, Form, Field, FieldProps, ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import css from './BookingForm.module.css';

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'Minimum 1 character')
    .required('Name is required')
    .matches(
      /^[a-zA-Z0-9\s'-]+$/,
      'Name can only contain letters, numbers, spaces, apostrophes and hyphens',
    ),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  dateFrom: Yup.date()
    .nullable()
    .required('Start date is required')
    .min(new Date(), 'Start date cannot be in the past'),

  dateTo: Yup.date()
    .nullable()
    .required('End date is required')
    .min(Yup.ref('dateFrom'), 'Select a date between today'),
  comment: Yup.string().max(300, 'Comment must be at most 300 characters'),
});

type ValuesProps = {
  name: string;
  email: string;
  dateFrom: Date | null;
  dateTo: Date | null;
  comment: string;
};

const initialValues: ValuesProps = {
  name: '',
  email: '',
  dateFrom: null,
  dateTo: null,
  comment: '',
};

const BookingForm = () => {
  const router = useRouter();

  const handleSubmit = async (values: ValuesProps) => {
    console.log('Form submitted with:', values);
    router.push('/catalog');
  };

  return (
    <div className={css.mainContent}>
      <div className={css.titleWrapper}>
        <h1 className={css.title}>Book your campervan now</h1>
        <p className={css.description}>Stay connected! We are always ready to help you.</p>
      </div>

      <Formik
        initialValues={initialValues}
        validateOnChange={true}
        validateOnBlur={true}
        validationSchema={FormSchema}
        onSubmit={handleSubmit}
      >
        {({ dirty, isValid, isSubmitting, setFieldValue, values }) => (
          <Form className={css.form}>
            {isSubmitting && <Loader />}

            <Field name="name">
              {({ field, meta }: FieldProps<string>) => (
                <>
                  <input
                    {...field}
                    id="name"
                    type="text"
                    placeholder="Name*"
                    className={`${css.input} ${meta.touched && meta.error ? css.inputError : ''}`}
                  />
                  {meta.touched && meta.error && <div className={css.errorText}>{meta.error}</div>}
                </>
              )}
            </Field>

            <Field name="email">
              {({ field, meta }: FieldProps<string>) => (
                <>
                  <input
                    {...field}
                    id="email"
                    type="text"
                    placeholder="Email*"
                    className={`${css.input} ${meta.touched && meta.error ? css.inputError : ''}`}
                  />
                  {meta.touched && meta.error && <div className={css.errorText}>{meta.error}</div>}
                </>
              )}
            </Field>
            <div className={css.fieldWrapper}>
              <DatePicker
                selected={values.dateFrom}
                onChange={(date: Date | null) => setFieldValue('dateFrom', date)}
                minDate={new Date()}
                dateFormat="dd.MM.yyyy"
                placeholderText="Booking Date*"
                className={css.dateInput}
              />
              <ErrorMessage name="dateFrom">
                {(msg) => <div className={css.errorText}>{msg}</div>}
              </ErrorMessage>
            </div>

            <Field name="comment">
              {({ field, meta }: FieldProps<string>) => (
                <>
                  <textarea
                    {...field}
                    id="comment"
                    placeholder="Comment"
                    className={`${css.textarea} ${
                      meta.touched && meta.error ? css.inputError : ''
                    }`}
                    rows={4}
                  />
                  {meta.touched && meta.error && <div className={css.errorText}>{meta.error}</div>}
                </>
              )}
            </Field>
            <button
              type="submit"
              disabled={isSubmitting || !dirty || !isValid}
              className={css.submitBtn}
            >
              {isSubmitting ? 'Submitting...' : 'Send'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
