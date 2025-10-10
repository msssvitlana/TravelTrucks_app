import { Camper } from '@/types/camper';
import CamperItem from '@/components/CamperItem/CamperItem';
import css from './CamperList.module.css';

type Props = {
  campers: Camper[];
};

const CamperList = ({ campers }: Props) => {
  return (
    <ul className={css.listWrapper}>
      {campers.map((camper) => (
        <CamperItem key={camper.id} item={camper} />
      ))}
    </ul>
  );
};

export default CamperList;
