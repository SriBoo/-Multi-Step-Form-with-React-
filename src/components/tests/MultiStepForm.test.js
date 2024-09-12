// src/components/MultiStepForm.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MultiStepForm from '../MultiStepForm';

describe('MultiStepForm Component', () => {
  test('renders the form and displays Step 1 by default', () => {
    render(<MultiStepForm />);
    expect(screen.getByText(/Step 1: Personal Information/i)).toBeInTheDocument();
  });

  test('validates required fields in Step 1', () => {
    render(<MultiStepForm />);
    
    // Try to move to the next step without filling in the fields
    fireEvent.click(screen.getByText(/Next/i));

    expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Valid email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Phone number is required/i)).toBeInTheDocument();
  });
});
