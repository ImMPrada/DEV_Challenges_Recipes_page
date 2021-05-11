import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
          <div className="collection-list-item">
            <CollectionItem item={item} />
            <button type="button" className="action-button" onClick={() => removeItemAt(index)}>
              <CrossSignIcon />
            </button>
          </div>
        ))}
      </div>

      <div className="collection-maker-wrapper">
        <CollectionMaker
          onChange={(changedItem) => setNewItem(changedItem)}
        />
        <button type="button" className="action-button" onClick={addItemToCollection}>
          <CheckIcon />
        </button>
      </div>
    </div>
  );
};

CollectionGroup.propTypes = {
  CollectionItem: PropTypes.element.isRequired,
  CollectionMaker: PropTypes.element.isRequired,
};

export default CollectionGroup;
