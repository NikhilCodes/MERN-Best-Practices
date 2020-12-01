import React from 'react';
import './styles.css';

interface ProductTilePropType {
  title: string;
  imageUrl: string;
}

export default function ProductTile({ title, imageUrl }: ProductTilePropType) {
  return (
    <div className={'product-tile'}>
      <img src={imageUrl} />
      <div>
        {title}
      </div>
    </div>
  );
}
