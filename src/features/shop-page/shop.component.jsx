import CollectionPreview from "../collection-perview/collectionPreview.component";
import { useSelector } from "react-redux";

const Shop = () => {
  const collections = useSelector((state) => state.shopItems);

  return (
    <div>
      <h1>Collections</h1>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default Shop;
