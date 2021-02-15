import { createSlice } from '@reduxjs/toolkit'

export type ProductState = {
    id: string,
    image: string,
    name: string,
    title: string;
    content: string,
    category: string;
    price: number,
    retail: number,
    shipping: number
}

const initialState = [
  { id: '1',
    title: 'Brand',
    content: 'Description',
    name: "Organic Soap",
    image: "https://res.cloudinary.com/dropcommerce/image/upload/v1602735279/earthharbour_l4ouvs_uw5thh.jpg",
    category: "Home & Kitchen",
    price: 19.99,
    retail: 25.50,
    shipping: 4.00
  },
  { id: '2',
    title: 'Brand',
    content: 'Description',
    name: "Chair Pillows",
    image: "https://res.cloudinary.com/dropcommerce/image/upload/v1602735278/chair-pillows_mhgbru_i0krsp.jpg",
    category: "Home & Kitchen",
    price: 8.99,
    retail: 13.40,
    shipping: 4.00
  }
] as ProductState[]

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
      productAdded(draft, action) {
        draft.push(action.payload)
      },
      productRemoved(draft) {
        draft.pop()
      },
      productIdRemoved(draft, action) {
        const { id } = action.payload
        const index: number = draft.findIndex(product => product.id === id)
        if (index > -1) {
          draft.splice(index, 1)
        }
    }
  }
})

export const { productAdded, productRemoved, productIdRemoved } = productsSlice.actions
export default productsSlice.reducer