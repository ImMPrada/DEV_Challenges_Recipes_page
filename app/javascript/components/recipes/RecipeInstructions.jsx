import React from 'react';
import CollectionGroup from '../CollectionGroup';
import RecipeInstruction from './RecipeInstruction';
import InstructionInput from './InstructionInput';

const RecipeInstructions = () => (
  <div className="the-recipe-content-instructions">
    <h2>Instructions</h2>

    <CollectionGroup
      CollectionMaker={InstructionInput}
      CollectionItem={RecipeInstruction}
    />
  </div>
);

export default RecipeInstructions;
