export const Button = ({ children, onClick, styleDetails = "", type }) => {
  return (
    <button type={type} className={"rounded " + styleDetails} onClick={onClick}>
      {children}
    </button>
  );
};
