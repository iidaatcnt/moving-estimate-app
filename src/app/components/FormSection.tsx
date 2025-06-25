import React from 'react'

interface FormSectionProps {
  title: string
  children: React.ReactNode
}

export function FormSection({ title, children }: FormSectionProps) {
  return (
    <div className="form-section">
      <h2 className="form-title">{title}</h2>
      {children}
    </div>
  )
}