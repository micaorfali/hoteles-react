import React from 'react'

const FilterSelect = ({name, onSelectChange, options, selected}) => {
    const optionsValues = options.map(({ value, name }) =>
        <option value={value}>{name}</option>
    )
  
  
  return (
      <div className="field">
        <div className="control">
          <div className="select" style={{ width: "100%" }}>
            <select
              style={{ width: "100%" }}
              value={selected}
              onChange={onSelectChange}
              name={name}
            >
              {optionsValues}
            </select>
          </div>
        </div>
      </div>
    );
  };
  export default FilterSelect;
