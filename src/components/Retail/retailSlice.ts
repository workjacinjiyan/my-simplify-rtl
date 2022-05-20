import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'src/store';

// import products from 'src/data/Retail/products';

export type TProduct = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

type SliceState = {
  products: TProduct[];
  cartItems: (Pick<TProduct, 'id' | 'price' | 'title'> & {
    quantity: number;
  })[];
  favorites: string[];
  showProductDetails: TProduct | {};
};

const initialState: SliceState = {
  products: [],
  cartItems: [],
  favorites: [],
  showProductDetails: {},
};

export const retailSlice = createSlice({
  name: 'retail store',
  initialState,
  reducers: {
    showDetails: (state, action: PayloadAction<string>) => {
      state.showProductDetails =
        state.products.find((product) => product.id === action.payload) || {};
    },
    addToFavorites: (state, action: PayloadAction<string>) => {
      state.favorites = [...state.favorites, action.payload];
    },
    addToCart: (
      state,
      action: PayloadAction<
        Pick<TProduct, 'id' | 'price' | 'title'> & {
          quantity: number;
        }
      >
    ) => {
      state.cartItems = [
        ...state.cartItems.filter((item) => item.id !== action.payload.id),
        {
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          quantity: action.payload.quantity,
        },
      ];
    },
  },
});

export const { showDetails, addToFavorites, addToCart } = retailSlice.actions;

export const selectProducts = (state: RootState) => state.retail.products;
export const selectShowProductDetails = (state: RootState) =>
  state.retail.showProductDetails;
export const selectFavorites = (state: RootState) => state.retail.favorites;
export const selectCartItems = (state: RootState) => state.retail.cartItems;

export default retailSlice.reducer;
