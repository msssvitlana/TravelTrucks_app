import { Camper } from '@/types/camper';
import css from './Features.module.css';

type Props = {
  item: Camper;
  detailed?: boolean;
};

const Features = ({ item, detailed = false }: Props) => {
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
    <ul className={css.listWrapper}>
      {(detailed ? features : features.slice(0, 6)).map(({ key, icon, label, value }) => {
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
  );
};

export default Features;
