import React, { useEffect, useState } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import './styles.css';
import ProductTile from '../../widgets/ProductTile';
import { ProductActions } from '../../Redux/actions';
import IReduxState from '../../interfaces/IReduxState';

interface FeedProps {
  getAllProducts: () => void;
  product: any;
}


function Feed({ getAllProducts, product }: FeedProps) {
  useEffect(() => {
    getAllProducts()
  }, []);

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

const mapStateToProps = (state: IReduxState) => ({
  product: state.product,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  { getAllProducts: ProductActions.getAllProduct },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
