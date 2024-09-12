// src/components/NavigationButtons.js
import React from 'react';

const NavigationButtons = ({ currentStep, handleNext, handleBack, handleSubmit, isSubmitting }) => {
  return (
    <div>
      {currentStep > 1 && <button onClick={handleBack}>Back</button>}
      {currentStep < 3 ? (
        <button onClick={handleNext}>Next</button>
      ) : (
        <button onClick={handleSubmit} disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      )}
    </div>
  );
};

export default NavigationButtons;
