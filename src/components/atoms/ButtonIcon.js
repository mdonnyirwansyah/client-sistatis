import { useNavigate } from "react-router-dom";

const ButtonIcon = ({ title, type, icon, url }) => {
  const navigate = useNavigate();
  return (
    <button
      className={`btn btn-xs ${type}`}
      data-container="body"
      title={title}
      onClick={() => navigate(url)}
    >
      {icon}
    </button>
  );
};

export default ButtonIcon;
