import React from 'react';
import './styles.css';
import ProductTile from '../../widgets/ProductTile';

export default function Feed() {
  return (
    <div className={'feed'}>
      <ProductTile />
      <ProductTile />
      <ProductTile />
      <ProductTile />
      <ProductTile />
      <ProductTile />
      <ProductTile />
    </div>
  );
}
