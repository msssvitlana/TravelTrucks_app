'use client';

import css from './FilterSidebar.module.css';
import { Filter } from '@/types/camper';
import { Formik, Form, Field, FieldProps, FormikHelpers } from 'formik';
import { useCamperStore } from '@/lib/store/filterStore';
import { FILTER_FEATURES, VEHICLE_TYPE } from '@/constants/constants';

const FilterSidebar = () => {
  const { setFilters, resetCampers, loadCampers } = useCamperStore();

  const initialValues: Filter = {
    location: '',
    equipment: [],
    type: '',
  };

  const handleSubmit = async (
    values: Filter,
    { setSubmitting, resetForm }: FormikHelpers<Filter>,
  ) => {
    resetCampers();
    setFilters(values);
    loadCampers();
    resetForm();
    setSubmitting(false);
  };

  return (
    <div className={css.sidebar}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} enableReinitialize>
        {({ isValid, isSubmitting }) => (
          <Form className={css.form}>
            <Field name="location">
              {({ field, meta }: FieldProps<string>) => (
                <div className={css.formGroup}>
                  <label htmlFor="location" className={css.formLabel}>
                    Location
                  </label>
                  <input
                    {...field}
                    id="location"
                    type="text"
                    placeholder="Kyiv, Ukraine"
                    className={`${css.input} ${meta.touched && meta.error ? css.inputError : ''}`}
                  />
                  {meta.touched && meta.error && <div className={css.errorText}>{meta.error}</div>}
                </div>
              )}
            </Field>

            <h2 className={css.equipmentTitle}>Filters</h2>
            <p className={css.iconTitle}>Vehicle equipment</p>
            <Field name="equipment">
              {({ field, form }: FieldProps<string[]>) => (
                <div className={css.checkboxGroup}>
                  {FILTER_FEATURES.map(({ key, label, icon }) => {
                    const isChecked = field.value.includes(key);
                    return (
                      <label
                        key={key}
                        className={`${css.checkboxItem} ${isChecked ? css.active : ''}`}
                      >
                        <input
                          type="checkbox"
                          name="equipment"
                          value={key}
                          checked={isChecked}
                          onChange={() => {
                            const newValue = isChecked
                              ? field.value.filter((item) => item !== key)
                              : [...field.value, key];
                            form.setFieldValue('equipment', newValue);
                          }}
                          className={css.hiddenCheckbox}
                        />
                        <div className={css.customCheckbox}>
                          <svg className={css.icon} width={32} height={32}>
                            <use href={`/icons/filters.svg#${icon}`} />
                          </svg>
                          <p className={css.iconLabel}>{label}</p>
                        </div>
                      </label>
                    );
                  })}
                </div>
              )}
            </Field>

            <p className={css.iconTitle}>Vehicle type</p>
            <Field name="type">
              {({ field, form }: FieldProps<string>) => (
                <div className={css.checkboxGroup}>
                  {VEHICLE_TYPE.map(({ key, label, icon }) => (
                    <label
                      key={key}
                      className={`${css.checkboxItem} ${field.value === key ? css.active : ''}`}
                    >
                      <input
                        type="radio"
                        name="type"
                        value={key}
                        checked={field.value === key}
                        onChange={() => form.setFieldValue('type', key)}
                        className={css.hiddenCheckbox}
                      />
                      <div className={css.customCheckbox}>
                        <svg className={css.icon} width={32} height={32}>
                          <use href={`/icons/filters.svg#${icon}`} />
                        </svg>
                        <p className={css.iconLabel}>{label}</p>
                      </div>
                    </label>
                  ))}
                </div>
              )}
            </Field>

            <button type="submit" className={css.submitBtn} disabled={!isValid || isSubmitting}>
              Search
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FilterSidebar;
