import { forwardRef } from "react";
import "./input-field.scss";

export const InputWithError = forwardRef(({ errors, ...rest }, ref) => {
  return (
    <div className="input-container">
      <input ref={ref} {...rest} />
      {errors[rest.name] && (
        <div className="error-tooltip">{errors[rest.name].message}</div>
      )}
    </div>
  );
});
