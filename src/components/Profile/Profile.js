import './Profile.css';

function Profile() {


  return (
    <div className="profile">
      <p className="profile__title">
        Привет, Виталий!
      </p>
      <div className="profile__info">
        <div className="profile__name">
          <span className="profile__caption">Имя</span>
          <span className="profile__value">Виталий</span>
        </div>
        <div className="profile__email">
          <span className="profile__caption">E-mail</span>
          <span className="profile__value">pochta@yandex.ru</span>
        </div>
      </div>
      <button className="profile__edit" type="button">Редактировать</button>
      <button className="profile__exit" type="button">Выйти из аккаунта</button>
    </div>
  )
}

export default Profile;