import { useSelector } from "react-redux";

export const Input = ({
  label,
  id,
  name,
  type,
  required,
  styleDetails = "",
  onChange,
  value = "",
}) => {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  return (
    <div>
      <label
        htmlFor={name}
        className={`block text-gray-700
        ${isDarkMode ? "text-white" : "text-gray-700"}
      `}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className={
          `border border-gray-300 rounded w-full p-2
        ${
          isDarkMode
            ? "bg-gray-700 text-white border-gray-600"
            : "border-gray-300 text-slate-600"
        }
         ` + styleDetails
        }
        onChange={onChange}
        required={required}
        value={value}
      />
    </div>
  );
};

export const TextArea = ({
  label,
  id,
  name,
  required,
  styleDetails = "",
  onChange,
  value = "",
}) => {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  return (
    <div>
      <label
        htmlFor={name}
        className={`block text-gray-700 
        ${isDarkMode ? "text-white" : "text-gray-700"}
      `}
      >
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        onChange={onChange}
        className={
          `border border-gray-300 rounded p-2 
        ${
          isDarkMode
            ? "bg-gray-700 text-white border-gray-600"
            : "border-gray-300 text-slate-600"
        }
        ` + styleDetails
        }
        value={value}
        required={required}
      ></textarea>
    </div>
  );
};
