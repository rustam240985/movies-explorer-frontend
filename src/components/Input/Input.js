import './Input.css'

function Input({ fieldtitle, error, ...props }) {

  return (
    <label className="field">
      {fieldtitle}
      <input className="input" {...props} />
      <span className="input__error">{error}</span>
    </label>
  )

}

export default Input;