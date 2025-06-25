import React from 'react'
import { UseFormRegister, FieldValues } from 'react-hook-form'

interface CheckboxGroupProps {
  label: string
  name: string
  register: UseFormRegister<FieldValues>
  options: { value: string; label: string }[]
}

export function CheckboxGroup({ label, name, register, options }: CheckboxGroupProps) {
  return (
    <div className="mb-4">
      <label className="form-label">{label}</label>
      <div className="checkbox-group">
        {options.map((option) => (
          <label key={option.value} className="checkbox-item cursor-pointer">
            <input
              type="checkbox"
              value={option.value}
              className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              {...register(name)}
            />
            <span className="text-sm text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  )
}