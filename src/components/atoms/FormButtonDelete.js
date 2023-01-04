const FormButtonDelete = ({ title, icon, onClick }) => {
  
  return (
    <button
      className="btn btn-icon btn-sm"
      data-container="body"
      title={title}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default FormButtonDelete;
