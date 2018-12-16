import React, {PropTypes} from 'react';

type Props = {
  name: String,
  label: String,
  onChange: Function,
  placeholder: String,
  value: String,
  error: String
};

class TextInput extends Component<Props>  {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error';
  }
  render() {
    const = {
      name,
      label,
      onChange,
      placeholder,
      value,
      error
    } = this.props
    return (
      <div className={wrapperClass}>
        <label htmlFor={name}>{label}</label>
        <div className="field">
          <input
            type="text"
            name={name}
            className="form-control"
            placeholder={placeholder}
            value={value}
            onChange={onChange}/>
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
      </div>
    );
  }
};
export default TextInput;