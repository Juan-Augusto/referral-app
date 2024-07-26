export const Input = ({
  label,
  id,
  name,
  type,
  required,
  styleDetails = "",
}) => {
  return (
    <div>
      <label htmlFor={name} className="block text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className={"border border-gray-300 rounded " + styleDetails}
        required={required}
      />
    </div>
  );
};

export const TextArea = ({ label, id, name, required, styleDetails = "" }) => {
  return (
    <div>
      <label htmlFor={name} className="block text-gray-700">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        className={"border border-gray-300 rounded " + styleDetails}
        required={required}
      ></textarea>
    </div>
  );
};
