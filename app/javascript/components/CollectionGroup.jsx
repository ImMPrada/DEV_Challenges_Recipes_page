import React, { useState } from 'react';

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
    <div>
      <div className="collection-list">
        { collection.map((item, index) => (
          <>
            <CollectionItem item={item} />
            <button type="button" onClick={() => removeItemAt(index)}>
              Remove
            </button>
          </>
        ))}
      </div>

      <div className="collection-maker">
        <CollectionMaker
          item={newItem}
          onChange={(changedItem) => setNewItem(changedItem)}
        />
        <button type="button" onClick={addItemToCollection}>
          Add
        </button>
      </div>
    </div>
  );
};

export default CollectionGroup;
