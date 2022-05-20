import * as React from 'react';

type TProduct = {
  id: string;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
};

type State = {
  products: TProduct[];
  cartItems: (Pick<TProduct, 'id' | 'price' | 'title'> & {
    quantity: number;
  })[];
  favorites: string[];
  showProductDetails: TProduct | {};
};

type Action =
  | {
      type: 'SHOW_DETAILS';
      id: string;
    }
  | {
      type: 'ADD_TO_CART';
      product: TProduct;
      quantity: number;
    }
  | {
      type: 'ADD_TO_FAVORITES';
      productId: string;
    };

type IRetailContext = [State, React.Dispatch<Action>];

const RetailContext = React.createContext<IRetailContext | null>(null);

function RetailProvider(props: {
  products: TProduct[];
  children?: React.ReactNode;
}) {
  const retailReducer = (state: State, action: Action) => {
    switch (action.type) {
      case 'SHOW_DETAILS':
        return {
          ...state,
          showProductDetails:
            state.products.find((product) => product.id === action.id) || {},
        };
      case 'ADD_TO_CART':
        return {
          ...state,
          cartItems: [
            ...state.cartItems.filter((item) => item.id !== action.product.id),
            {
              id: action.product.id,
              title: action.product.title,
              price: action.product.price,
              quantity: action.quantity,
            },
          ],
        };
      case 'ADD_TO_FAVORITES':
        return {
          ...state,
          favorites: [...state.favorites, action.productId],
        };

      default:
        return state;
    }
  };

  const initialState: State = {
    products: props.products || [],
    cartItems: [],
    favorites: [],
    showProductDetails: {},
  };

  const [state, dispatch] = React.useReducer<React.Reducer<State, Action>>(
    retailReducer,
    initialState
  );

  const value: [State, React.Dispatch<Action>] = [state, dispatch];

  return (
    <RetailContext.Provider value={value} {...props}>
      {props.children}
    </RetailContext.Provider>
  );
}

function useRetail() {
  const context = React.useContext(RetailContext);

  if (!context) {
    throw new Error('useRetail must be used within the RetailProvider');
  }
  const [state, dispatch] = context;

  const getDetails = (productId: string) => {
    dispatch({ type: 'SHOW_DETAILS', id: productId });
  };

  const addToCart = (product: TProduct, quantity: number) => {
    dispatch({ type: 'ADD_TO_CART', product, quantity: quantity });
  };

  const addToFavorites = (productId: string) => {
    dispatch({ type: 'ADD_TO_FAVORITES', productId });
  };

  return { state, getDetails, addToCart, addToFavorites };
}

export { RetailProvider, useRetail };
