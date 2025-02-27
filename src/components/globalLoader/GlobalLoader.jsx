import React from 'react';
import { useSelector } from 'react-redux';
import './GlobalLoader.css'; // CSS for the loader

const GlobalLoader = () => {
  const isLoading = useSelector((state) => state.loading.isLoading);

  if (!isLoading) return null;

  return (
    <div className="global-loader">
      <div className="loader"></div>
    </div>
  );
};

export default GlobalLoader;
