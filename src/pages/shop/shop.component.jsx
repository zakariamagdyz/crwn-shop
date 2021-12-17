import React from "react";
import shopData from "../../assets/shop.data";
import CollectionPreview from "../../components/collection-perview/collectionPreview.component";

export default class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: shopData,
    };
  }

  render() {
    return (
      <div>
        <h1>Collections</h1>
        {this.state.collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
