const ButtonPrint = ({ label, onClick, disabled }) => {
  return (
    <button
      className="btn btn-primary mr-1"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default ButtonPrint;
