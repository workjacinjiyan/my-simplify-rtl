import backPack from 'src/assets/images/backpack.jpeg';
import bracelet from 'src/assets/images/bracelet.jpeg';
import jacket from 'src/assets/images/jacket.jpeg';
import longSleeve from 'src/assets/images/long-sleeve.jpeg';
import shortSleeve from 'src/assets/images/short-sleeve.jpeg';

import faker from '@faker-js/faker';

const fakeReduxProducts = [
  {
    id: faker.datatype.uuid(),
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: Number(faker.commerce.price()),
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: 'men clothing',
    image: backPack,
  },
  {
    id: faker.datatype.uuid(),
    title: 'Mens Casual Premium Slim Fit T-Shirts ',
    price: Number(faker.commerce.price()),
    description:
      'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    category: 'men clothing',
    image: shortSleeve,
  },
  {
    id: faker.datatype.uuid(),
    title: 'Mens Cotton Jacket',
    price: Number(faker.commerce.price()),
    description:
      'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
    category: 'men clothing',
    image: jacket,
  },
  {
    id: faker.datatype.uuid(),
    title: 'Mens Casual Slim Fit',
    price: Number(faker.commerce.price()),
    description:
      'The color could be slightly different between on the screen and in practice. Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
    category: 'men clothing',
    image: longSleeve,
  },
  {
    id: faker.datatype.uuid(),
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: Number(faker.commerce.price()),
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: 'jewelry',
    image: bracelet,
  },
];

export default fakeReduxProducts;
