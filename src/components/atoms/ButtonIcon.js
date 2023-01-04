import { useNavigate } from "react-router-dom";

const ButtonIcon = ({ title, icon, url }) => {
  const navigate = useNavigate();
  return (
    <button
      className="btn btn-icon btn-sm"
      data-container="body"
      title={title}
      onClick={() => navigate(url)}
    >
      {icon}
    </button>
  );
};

export default ButtonIcon;
