const CHECK_STATUS = 'book-store/categories/CHECK_STATUS';

export default function categoriesReducer(state = [], action) {
  switch (action.type) {
    case CHECK_STATUS: return action.payload;
    default: return state;
  }
}

export const checkStatus = () => ({
  type: CHECK_STATUS,
  payload: 'Under construction',
});
