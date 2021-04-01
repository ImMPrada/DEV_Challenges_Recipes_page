import React from 'react';
import PropTypes from 'prop-types';

const NewRecipeForm = ({ children }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      { children }

      <div className="form-controls">
        <button type="submit">
          Create Recipe
        </button>
      </div>
    </form>
  );
};

NewRecipeForm.propTypes = {
  children: PropTypes.element,
};

NewRecipeForm.defaultProps = {
  children: [],
};

export default NewRecipeForm;
