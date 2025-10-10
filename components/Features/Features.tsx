import { Camper } from '@/types/camper';
import css from './Features.module.css';

type Props = {
  item: Camper;
};

const featureIcons: Record<string, string> = {
  transmission: '',
  engine: '',
  AC: 'icon-wind1',
  bathroom: 'icon-ph_shower',
  kitchen: 'icon-cup-hot',
  TV: 'icon-tv1',
  radio: 'icon-ui-radios1',
  refrigerator: 'icon-solar_fridge-outline',
  microwave: 'icon-lucide_microwave',
  gas: 'icon-hugeicons_gas-stove',
  water: 'icon-ion_water-outline',
};

const Features = ({ item }: Props) => {
  return (
    <div>
      <ul className={css.listWrapper}>
        <li>
          <p className={css.rating}>
            <svg className={css.icon} width={16} height={16}>
              <use href="/icons/filters.svg#icon-Property-1Pressed" />
            </svg>
            {item.engine}
          </p>
        </li>
      </ul>
    </div>
  );
};
export default Features;
