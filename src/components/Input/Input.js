import './Input.css'

function Input({ fieldtitle, ...props }) {

  return (
    <label className="field">
      {fieldtitle}
      <input className="input" {...props} />
    </label>
  )

}

export default Input;