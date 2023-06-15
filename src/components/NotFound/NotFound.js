import { useNavigate } from "react-router-dom";
import './NotFound.css'

function NotFound() {

  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <>
      <div className="not-found">
        <div className="not-found__message">
          <p className="not-found__code">404</p>
          <p className="not-found__text">Страница не найдена</p>
        </div>
        <button className="not-found__back-btn" onClick={goBack}>Назад</button>
      </div>
    </>
  )
}

export default NotFound;