interface Order {
  nameOfItem: string;
  nameOfItem2?: string;
  numberOfItems: number;
  totalCost: number;
  datePlaced: string;
  dateDelivered: string;
}

const orderHistory: Order[] = [
  {
    nameOfItem: 'Javascript for impatient programmers',
    numberOfItems: 1,
    totalCost: 34.0,
    datePlaced: 'August 4, 2020',
    dateDelivered: 'August 8, 2020',
  },
  {
    nameOfItem: 'The Timeless Way of Building',
    numberOfItems: 1,
    totalCost: 44.53,
    datePlaced: 'July 19, 2020',
    dateDelivered: 'July 20, 2020',
  },
  {
    nameOfItem: 'Gamecube Controller Adapter...',
    numberOfItems: 1,
    totalCost: 17.22,
    datePlaced: 'July 4, 2020',
    dateDelivered: 'July 7, 2020',
  },
  {
    nameOfItem: 'Gamecube Controller...',
    nameOfItem2: 'The Art of Sql',
    numberOfItems: 2,
    totalCost: 139.93,
    datePlaced: 'July 3, 2020',
    dateDelivered: 'July 5, 2020',
  },
];

console.log('Order History: ', orderHistory);
