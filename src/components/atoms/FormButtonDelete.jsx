const FormButtonDelete = ({ title, icon, onClick }) => {
    return (
        <button
            className="btn btn-xs btn-outline-danger ml-1"
            data-container="body"
            title={title}
            onClick={onClick}
        >
            {icon}
        </button>
    );
};

export default FormButtonDelete;
