import React from 'react';
import './styles.css';

interface ProductTilePropType {
  title: string;
  imageUrl: string;
}

export default function ProductTile({ title, imageUrl }: ProductTilePropType) {
  return (
    <div className={'product-tile'}>
      <img src={imageUrl} alt={'product'} />
      <div style={{ margin: 20 }}>
        {title}
      </div>
    </div>
  );
}
