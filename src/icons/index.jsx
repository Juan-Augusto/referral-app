export const PencilIcon = ({ className = "w-5 h-5" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 20h9"></path>
      <path d="M17 3l4 4-9 9H8v-3l9-9 3-3"></path>
      <path d="M13 2l3 3"></path>
    </svg>
  );
};

export const TrashIcon = ({ className = "w-5 h-5" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 6l3 0 1 14 10 0 1-14 3 0"></path>
      <path d="M6 6l0 0l1-3h10l1 3l0 0"></path>
      <path d="M9 6v14"></path>
      <path d="M15 6v14"></path>
    </svg>
  );
};
