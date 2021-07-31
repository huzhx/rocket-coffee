import statusTypes from '../../../libraries/status-types';

const ProductList = ({ status, ...otherProps }) => {
  if (status === statusTypes.loading) {
    return <Loading />;
  }
  if (status === statusTypes.errored) {
    return <Error message="Failed to load data" />;
  }
  return;
};

export default ProductList;
