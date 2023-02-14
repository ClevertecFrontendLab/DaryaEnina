import './style.scss';

interface IDelivery {
  id: number;
  handed: boolean;
  dateHandedFrom: string;
  dateHandedTo: string;
  recipientId: number;
  recipientFirstName: string;
  recipientLastName: string;
}

interface IProps {
  delivery: IDelivery;
}

export const BookedTillButton = ({ delivery }: IProps) => (
  <button type='button' className='button__book-card__book-till'>
    занята до {delivery.dateHandedTo}
  </button>
);
