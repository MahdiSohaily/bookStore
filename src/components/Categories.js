import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categoriesReducer);
  const info = status;
  return (
    <section>
      <h2>{info}</h2>
      <button type="button" onClick={() => (dispatch(checkStatus()))}>Check Status</button>
    </section>
  );
};
export default Categories;
