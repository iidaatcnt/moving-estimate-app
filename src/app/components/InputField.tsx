import React from 'react'
import { UseFormRegister, FieldError } from 'react-hook-form'

interface InputFieldProps {
  label: string
  name: string
  register: UseFormRegister<any>
  error?: FieldError
  required?: boolean
  type?: 'text' | 'email' | 'tel' | 'date'
  placeholder?: string
}

export function InputField({ 
  label, 
  name, 
  register, 
  error, 
  required = false, 
  type = 'text',
  placeholder 
}: InputFieldProps) {
  return (
    <div className="mb-4">
      <label className="form-label">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        className={`form-input ${error ? 'border-red-500' : ''}`}
        placeholder={placeholder}
        {...register(name)}
      />
      {error && <p className="form-error">{error.message}</p>}
    </div>
  )
}