import React, {ForwardedRef, InputHTMLAttributes} from "react";
import './input.css';

type PropsType = Omit<InputHTMLAttributes<HTMLInputElement>, 'readOnly'> & {
  id: string,
  label: string,
  placeholder?: string
  readonly?: boolean
  disabled?: boolean
  error?: string
}

const Input = React.forwardRef((props: PropsType, ref: ForwardedRef<HTMLInputElement>) => {
  const {id, label, placeholder, readonly, disabled, error, type = 'text', ...rest} = props;

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        className={readonly ? 'readonly' : ""}
        id={id}
        type={type}
        placeholder={placeholder}
        readOnly={readonly}
        disabled={disabled}
        {...rest}
        ref={ref}
      />
      {error && <div className='error'>{error}</div>}
    </div>
  );
});

export default Input;
