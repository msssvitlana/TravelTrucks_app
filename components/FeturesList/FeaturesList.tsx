import { Camper } from '@/types/camper';
import css from './FeaturesList.module.css';

type Props = {
  item: Camper;
};

const FeaturesList = ({ item }: Props) => {
  const features = [
    {
      key: 'transmission',
      icon: 'icon-diagram',
      label: item.transmission,
    },
    {
      key: 'engine',
      icon: 'icon-Group1',
      label: item.engine,
    },
    {
      key: 'AC',
      icon: 'icon-wind1',
      label: 'AC',
      value: item.AC,
    },
    {
      key: 'bathroom',
      icon: 'icon-ph_shower',
      label: 'Bathroom',
      value: item.bathroom,
    },
    {
      key: 'kitchen',
      icon: 'icon-cup-hot',
      label: 'Kitchen',
      value: item.kitchen,
    },
    {
      key: 'TV',
      icon: 'icon-tv1',
      label: 'TV',
      value: item.TV,
    },
    {
      key: 'radio',
      icon: 'icon-ui-radios1',
      label: 'Radio',
      value: item.radio,
    },
    {
      key: 'refrigerator',
      icon: 'icon-solar_fridge-outline',
      label: 'Refrigerator',
      value: item.refrigerator,
    },
    {
      key: 'microwave',
      icon: 'lucide_microwave',
      label: 'Microwave',
      value: item.microwave,
    },
    {
      key: 'gas',
      icon: 'hugeicons_gas-stove',
      label: 'Gas',
      value: item.gas,
    },
    {
      key: 'water',
      icon: 'ion_water-outline',
      label: 'Water',
      value: item.water,
    },
  ];

  return (
    <div className={css.container}>
      <ul className={css.listWrapper}>
        {features.map(({ key, icon, label, value }) => {
          const isString = typeof label === 'string' && value === undefined;
          const isActive = value === true;

          if (isString || isActive) {
            return (
              <li key={key} className={css.featureItem}>
                <svg className={css.icon} width={20} height={20}>
                  <use href={`/icons/filters.svg#${icon}`} />
                </svg>
                <span>{label.charAt(0).toUpperCase() + label.slice(1)}</span>
              </li>
            );
          }

          return null;
        })}
      </ul>

      <ul className={css.detailList}>
        <h3 className={css.title}>Vehicle details</h3>
        <li className={css.detailItem}>
          <p className={css.label}>Form</p>
          <p className={css.value}>{item.form}</p>
        </li>
        <li className={css.detailItem}>
          <p className={css.label}>Length</p>
          <p className={css.value}>{item.length}</p>
        </li>
        <li className={css.detailItem}>
          <p className={css.label}>Width</p>
          <p className={css.value}>{item.width}</p>
        </li>
        <li className={css.detailItem}>
          <p className={css.label}>Height</p>
          <p className={css.value}>{item.height}</p>
        </li>
        <li className={css.detailItem}>
          <p className={css.label}>Tank</p>
          <p className={css.value}>{item.tank}</p>
        </li>
        <li className={css.detailItem}>
          <p className={css.label}>Consumption</p>
          <p className={css.value}>{item.consumption}</p>
        </li>
      </ul>
    </div>
  );
};

export default FeaturesList;
