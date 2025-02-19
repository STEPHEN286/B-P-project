function InputGroup({ label, type = "text", name, required = false, placeholder, isTextArea = false }) {
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
        {isTextArea ? (
          <textarea
            name={name}
            rows={4}
            required={required}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm resize-none"
            placeholder={placeholder}
          ></textarea>
        ) : (
          <input
            type={type}
            name={name}
            required={required}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm"
            placeholder={placeholder}
          />
        )}
      </div>
    );
  }
  
  export default InputGroup;
  