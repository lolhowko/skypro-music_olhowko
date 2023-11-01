export function SigninLogin({ user, onAuthButtonClick }) {
    return (
        <button className="modal__btn-signup-ent" onClick={onAuthButtonClick}>
        {user ? "Выход" : "Вход"}
      </button>
    )
}