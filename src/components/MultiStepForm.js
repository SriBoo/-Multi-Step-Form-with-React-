// src/components/MultiStepForm.js
import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import NavigationButtons from './NavigationButtons';
import './MultiStepForm.css'; // Import CSS for animations

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleNext = () => {
    if (validateForm()) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const validateForm = () => {
    const newErrors = {};
    if (currentStep === 1) {
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
      if (!formData.phone) newErrors.phone = 'Phone number is required';
    } else if (currentStep === 2) {
      if (!formData.address1) newErrors.address1 = 'Address Line 1 is required';
      if (!formData.city) newErrors.city = 'City is required';
      if (!formData.state) newErrors.state = 'State is required';
      if (!formData.zip) newErrors.zip = 'Zip Code is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      alert('Form submitted successfully!');
      localStorage.removeItem('formData');
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="form-container">
      <TransitionGroup>
        <CSSTransition
          key={currentStep}
          timeout={300}
          classNames="step"
        >
          <div>
            {currentStep === 1 && <Step1 formData={formData} setFormData={setFormData} errors={errors} />}
            {currentStep === 2 && <Step2 formData={formData} setFormData={setFormData} errors={errors} />}
            {currentStep === 3 && <Step3 formData={formData} />}
          </div>
        </CSSTransition>
      </TransitionGroup>
      <NavigationButtons 
        currentStep={currentStep} 
        handleNext={handleNext} 
        handleBack={handleBack} 
        handleSubmit={handleSubmit} 
        isSubmitting={isSubmitting} 
      />
    </div>
  );
};

export default MultiStepForm;
