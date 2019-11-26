import * as React from 'react';
import './select.css';

import {
  FormControl, Select as MaterialSelect, MenuItem,
} from '@material-ui/core';

class Select extends React.Component {
  render() {
    const {
      value,
      formClassName,
      selectClassName,
      optionsClassName,
      inputProps,
      onChange,
      selectOptions,
      disabled,
      onBlur,
      placeholder = 'Choose Item',
    } = this.props;

    return (
      <FormControl className={formClassName}>
        <MaterialSelect
          onBlur={onBlur}
          value={value}
          id={inputProps.id}
          onChange={onChange}
          inputProps={inputProps}
          disabled={disabled}
          className={selectClassName}
          placeholder={placeholder}
        >
          {
            !value && (
              <MenuItem
                value='none'
                disabled
                className={optionsClassName}
              >
                {placeholder}
              </MenuItem>
            )
          }
          {
            selectOptions.map((item, i) => (
              <MenuItem
                key={i}
                value={item.id}
                className={optionsClassName}
                componentname={item.name}
              >
                {item.name}
              </MenuItem>
            ))
          }
        </MaterialSelect>
      </FormControl>
    );
  }
}

export default Select;
