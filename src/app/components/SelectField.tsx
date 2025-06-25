import React from 'react'
import { UseFormRegister, FieldError } from 'react-hook-form'

interface SelectFieldProps {
  label: string
  name: string
  register: UseFormRegister<any>
  error?: FieldError
  required?: boolean
  options: { value: string; label: string }[]
  placeholder?: string
}

export function SelectField({ 
  label, 
  name, 
  register, 
  error, 
  required = false, 
  options,
  placeholder = '選択してください'
}: SelectFieldProps) {
  return (
    <div className="mb-4">
      <label className="form-label">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <select
        className={`form-select ${error ? 'border-red-500' : ''}`}
        {...register(name)}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="form-error">{error.message}</p>}
    </div>
  )
}