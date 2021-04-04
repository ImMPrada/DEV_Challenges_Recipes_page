import React from 'react';
import InputField from '../InputField';
import CutleryIcon from '../icons/CutleryIcon';
import TimerIcon from '../icons/TimerIcon';

const RecipeDetailsCard = () => (
  <div className="the-recipe-info-card">
    <div className="the-recipe-info-card-number-of">

      <div className="the-recipe-info-card-data-item">
        <div className="the-recipe-info-card-data-item-img">
          <CutleryIcon />
        </div>
        <div className="the-recipe-info-card-data-item-text">
          <p className="text-1">YIELDS</p>
          <div className="text-2">
            <InputField
              className="text-2-input"
              type="text"
              name="lot"
              placeholder="X"
            />
            Servings
          </div>
        </div>
      </div>

    </div>
    <div className="the-recipe-info-card-little-data">

      <div className="the-recipe-info-card-data-item">
        <div className="the-recipe-info-card-data-item-img">
          <TimerIcon />
        </div>
        <div className="the-recipe-info-card-data-item-text">
          <p className="text-1">PREP TIME</p>
          <div className="text-2">
            <InputField
              className="text-2-input"
              type="text"
              name="prep_time"
              placeholder="X"
            />
            minutes
          </div>
        </div>
      </div>

      <div className="the-recipe-info-card-data-item">
        <div className="the-recipe-info-card-data-item-img">
          <TimerIcon />
        </div>
        <div className="the-recipe-info-card-data-item-text">
          <p className="text-1">COOK TIME</p>
          <div className="text-2">
            <InputField
              className="text-2-input"
              type="text"
              name="cook_time"
              placeholder="X"
            />
            minutes
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RecipeDetailsCard;
