import React from "react";
import "./collectionItem.styles.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart-item/cartSlice";
import CustomBtn from "../custom-btn/customBtn.component";

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}$</span>
      </div>
      <div className="collection-btn">
        <CustomBtn onClick={() => dispatch(addToCart(item))}>
          add to cart
        </CustomBtn>
      </div>
    </div>
  );
};

export default CollectionItem;
