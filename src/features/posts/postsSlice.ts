import { createSlice } from '@reduxjs/toolkit'

export type PostState = {
    id: string,
    title: string,
    content: string
}

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' }
] as PostState[]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
      postAdded(state, action) {
        state.push(action.payload)
      },
      postRemoved(state) {
        state.pop()
      },
      postIdRemoved(state, action) {
        const { id } = action.payload
        const index: number = state.findIndex(post => post.id === id)
        if (index > -1) {
            state.splice(index, 1)
        }
    }
  }
})

export const { postAdded, postRemoved, postIdRemoved } = postsSlice.actions
export default postsSlice.reducer