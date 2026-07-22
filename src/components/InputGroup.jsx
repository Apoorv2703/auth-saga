import React from 'react';

const InputGroup = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  icon: Icon,
  rightElement,
  error,
  required = false,
  autoComplete,
}) => {
  return (
    <div className="space-y-1.5 text-left">
      {label && (
        <label htmlFor={name} className="block text-xs font-semibold uppercase tracking-wider text-gray-600">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative rounded-xl shadow-sm">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
            <Icon className="w-5 h-5" />
          </div>
        )}
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
          className={`w-full py-3 ${Icon ? 'pl-11' : 'pl-4'} ${rightElement ? 'pr-11' : 'pr-4'} bg-gray-50/80 border ${
            error ? 'border-red-400 focus:ring-2 focus:ring-red-200 focus:border-red-500' : 'border-gray-200 focus:ring-2 focus:ring-indigo-100 focus:border-indigo-600'
          } rounded-xl text-gray-900 placeholder-gray-400 text-sm transition-all duration-200 focus:bg-white outline-none`}
        />
        {rightElement && (
          <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center">
            {rightElement}
          </div>
        )}
      </div>
      {error && (
        <p className="text-xs text-red-500 font-medium pt-0.5 animate-fadeIn">
          {error}
        </p>
      )}
    </div>
  );
};

export default InputGroup;
