import React, { useEffect } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import './styles.css';
import ProductTile from '../../widgets/ProductTile';
import { ProductActions } from '../../Redux/actions';
import { IReduxState, IProductStore, IProduct } from '../../interfaces';

// Prop Types for current file components are given below
interface FeedPropType {
  getAllProducts: () => void;
  products: IProductStore;
}

//

function Feed({ getAllProducts, products }: FeedPropType) {
  useEffect(() => {
    getAllProducts()
  }, [getAllProducts]);

  return (
    <div className={'feed'}>
      {products.data.map(
        (value: IProduct, index: number) =>
          <ProductTile
            key={index}
            imageUrl={value.imageUrl}
            title={value.name}
          />
      )}
    </div>
  );
}

const mapStateToProps = (state: IReduxState) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  { getAllProducts: ProductActions.getAllProduct },
  dispatch
);

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Feed);
