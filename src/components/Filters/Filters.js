import React from 'react';
import './Filters.css';
import FilterDate from '../FilterDate/FilterDate';
import FilterSelect from '../FilterSelect/FilterSelect';
//import Select from 'react-select';


const Filters = ({ filters, onFilterChange }) => {

  
  const handleDateChange = (event) => {
    console.log(event.target.value);
    let payload = filters
    payload[event.target.name] = event.target.value
    onFilterChange(payload)
  };

  const handleSelectChange = (event) => {
    console.log(event.target.value);
    let payload = filters
    payload[event.target.name] = event.target.value
    onFilterChange(payload)
  };


  return (
    <nav className="navbar is-info" style={{ justifyContent: 'center' }}>
      <div className="navbar-item">
        <FilterDate
          date={filters.dateFrom}
          name="dateFrom"
          OnDateChange={handleDateChange}
        />
      </div>
      <div className="navbar-item">
        <FilterDate 
        date={filters.dateTo}
        name="dateTo"
        OnDateChange={handleDateChange}
        />
      </div>
      <div className="navbar-item">
        <FilterSelect
          options={[
            { value: "", name: "Seleccione un país" },
            { value: "Argentina", name: "Argentina" },
            { value: "Brasil", name: "Brasil" },
            { value: "Chile", name: "Chile" },
            { value: "Uruguay", name: "Uruguay" }
          ]}
          name="country"
          selected={filters.country}
          onSelectChange={handleSelectChange}
        />
      </div>
      <div className="navbar-item">
        <FilterSelect
          options={[
            { value: "select", name: "Seleccione un precio" },
            { value: "1", name: "$" },
            { value: "2", name: "$$" },
            { value: "3", name: "$$$" },
            { value: "4", name: "$$$$" }
          ]}
          name="price"
          selected={filters.price}
          onSelectChange={handleSelectChange}
        />
      </div>
      <div className="navbar-item">
        <FilterSelect
          options={[
            { value: "select", name: "Seleccione un tamaño del hotel" },
            { value: "10", name: "Hotel pequeño" },
            { value: "20", name: "Hotel mediano" },
            { value: "30", name: "Hotel grande" }
          ]}
          name="rooms"
          selected={filters.rooms}
          onSelectChange={handleSelectChange}
        />
      </div>
    </nav>
  )
}
export default Filters;

