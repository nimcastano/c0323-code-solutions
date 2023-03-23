var orderHistory = [
  {
    orderDate: 'August 4, 2020',
    orderNumber: '114-3941689-8772232',
    items: [
      {
        type: 'book',
        name: 'Javascript for Impatient Programmers',
        author: 'Dr Axel Rauschmayer',
        cost: 31.55,
        returnWindow: 'September 7, 2020'
      }
    ],
    total: 34.00,
    deliveryDate: 'August 8, 2020'
  },
  {
    orderDate: 'July 19, 2020',
    orderNumber: '113-9984268-1280257',
    items: [
      {
        type: 'book',
        name: 'The Timeless Way of Building',
        author: 'Christopher Alexander',
        cost: 41.33,
        returnWindow: 'August 19, 2020'
      }
    ],
    total: 44.53,
    deliveryDate: 'July 20, 2020'
  },
  {
    orderDate: 'July 4, 2020',
    orderNumber: '114=2875557-9059409',
    items: [
      {
        type: 'tech',
        name: 'Gamecube Controller Adaptor',
        cost: 15.98,
        returnWindow: 'August 5, 2020'
      }
    ],
    total: 17.22,
    deliveryDate: 'July 7, 2020'
  },
  {
    orderDate: 'July 3, 2020',
    orderNumber: '113-2883177-2648248',
    items: [
      {
        type: 'tech',
        name: 'Gamecube Controller',
        cost: 94.95,
        returnWindow: 'August 4, 2020'
      },
      {
        type: 'book',
        name: 'The Art of Sql',
        author: 'Stephane Faroult',
        cost: 33.99,
        returnWindow: 'August 4, 2020'
      }
    ],
    total: 138.93,
    deliveryDate: 'July 5, 2020'
  }
];

console.log('cost of the second item in the order placed on July 3rd, 2020: $', orderHistory[3].items[1].cost);

// func to get a type of orders
const getTypeofOrder = (str) => {
  const techOrders = [];
  for (let i = 0; i < orderHistory.length; i++) {
    for (let j = 0; j < orderHistory[i].items.length; j++) {
      if (orderHistory[i].items[j].type === str) {
        techOrders.push(orderHistory[i].items[j].name);
      }
    }
  }
  return console.log(techOrders);
};

getTypeofOrder('book');
getTypeofOrder('tech');
