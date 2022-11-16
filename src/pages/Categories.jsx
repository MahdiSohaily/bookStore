import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

export default function Categories() {
  const data = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleStatus = () => dispatch(checkStatus('Under construction'));
  return (
    <>
      <h2>{data}</h2>
      <button type="button" onClick={handleStatus}>
        Check status
      </button>
    </>
  );
}
