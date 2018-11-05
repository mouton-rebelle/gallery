import { getAll } from './category.api'
import { promiseActionCreator } from './actionCreator'
export const fetchCategories = () => (dispatch) => promiseActionCreator({
  dispatch,
  actionName: 'CATEGORY_LOAD',
  promise: getAll()
})


export default function CategoryReducer(state = { entities:[] }, action) {
  switch (action.type) {
      case 'CATEGORY_LOAD_SUCCESS': 
        return { ...state, entities: [...state.entities, ...action.payload] }
      default:
        return state
  }
}
