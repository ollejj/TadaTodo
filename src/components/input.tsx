export const Input = ({ label, type, placeholder, inputRef, defaultValue }) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={label} className="text-sm font-bold text-date-text">
          {label}
        </label>
      )}
      <input
        ref={inputRef}
        name={label}
        className="w-full h-10 px-2 text-sm text-white placeholder-date-text bg-input rounded-md"
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </div>
  );
};
