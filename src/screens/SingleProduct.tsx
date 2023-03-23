import { Col, Rate, Row, Select } from 'antd';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getDetailProduct } from '../redux/reducers/productDetails.reducer';
import { useAppDispatch, useAppSelector } from '../redux/store';

// interface => a named object type
// type => a name of any kind of type, include primitive, union and intersection types. => define useParams with type

type ProductParams = {
  id: string;
};

interface productType {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
}

function quantityOptions(values: Number) {
  const options = [...Array(values).keys()].map((opt) => {
    return { value: opt + 1, label: opt + 1 };
  });
  console.log(options);
  return options;
}

const SingleProduct = () => {
  const { id } = useParams<ProductParams>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [qty, setQty] = useState<Number>(1);

  const { item, status, error }: any = useAppSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [dispatch, id]);

  const onAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(`/cart/${id}?qty=${qty}`);
  };

  return (
    <div>
      {status === 'loading' ? (
        <p>Loading ...</p>
      ) : error ? (
        <p>Oppss!</p>
      ) : (
        <div>
          <Row>
            <Col span={12}>
              <img src={item.image} className='image-product' />
            </Col>
            <Col span={12}>
              <div>
                <div>
                  <div>{item.name}</div>
                </div>
                <p>{item.description}</p>
                <div>
                  <div>
                    <h4>Price: </h4>
                    <span>{item.price}</span>
                  </div>
                  <div>
                    <h4>Status: </h4>
                    {item.countInStock > 0 ? (
                      <span>In Stock</span>
                    ) : (
                      <span>Unavailable</span>
                    )}
                  </div>
                  <div>
                    <h4>Reviews</h4>
                    <Rate value={item.rating} disabled />
                    {item.numReview > 0 && (
                      <span>{item.numReview} Reviews</span>
                    )}
                  </div>
                  {item.countInStock > 0 ? (
                    <>
                      <div>
                        <h4>Quantity</h4>
                        <Select
                          options={quantityOptions(item.countInStock)}
                          defaultValue={1}
                          onChange={(value) => setQty(value)}
                        />
                      </div>
                      <button className='btn' onClick={onAddToCart}>
                        Add to Cart
                      </button>
                    </>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </Col>
          </Row>

          <div className='footer'></div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
