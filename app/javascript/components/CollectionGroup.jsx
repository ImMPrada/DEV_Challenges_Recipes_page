import React, { useState } from 'react';
import CheckIcon from './icons/CheckIcon';
import CrossSignIcon from './icons/CrossSignIcon';

const CollectionGroup = ({ CollectionMaker, CollectionItem }) => {
  const [collection, setCollection] = useState([]);
  const [newItem, setNewItem] = useState({});

  const addItemToCollection = () => {
    setCollection([
      ...collection,
      newItem,
    ]);

    setNewItem({});
  };

  const removeItemAt = (index) => {
    const dupCollection = [...collection];
    dupCollection.splice(index, 1);

    setCollection(dupCollection);
  };

  return (
    <div className="collection-group-component">
      <div className="collection-list-wrapper">
        { collection.map((item, index) => (
          <>
            <CollectionItem item={item} />
            <button type="button" className="action-button" onClick={() => removeItemAt(index)}>
              <CrossSignIcon />
            </button>
          </>
        ))}
      </div>

      <div className="collection-maker-wrapper">
        <CollectionMaker
          item={newItem}
          onChange={(changedItem) => setNewItem(changedItem)}
        />
        <button type="button" className="action-button" onClick={addItemToCollection}>
          <CheckIcon />
        </button>
      </div>
    </div>
  );
};

export default CollectionGroup;
