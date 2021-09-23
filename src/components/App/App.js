import React, { useState, useEffect } from "react";
import axios from 'axios';
import 'bulma/css/bulma.min.css';
import './App.css';
import NavBar from '../NavBar/NavBar';
import Main from '../Main/Main';
import Filters from '../Filters/Filters';
import Moment from 'moment';
import Hero from '../Hero/Hero'


const App = () => {

    
  const [hoteles, setHoteles] = useState([]);
  const [hotelesFiltered, setHotelesFiltered] = useState([]); 
  const today = new Date()
  const todayFormated = Moment(today).format("YYYY-MM-DD");
  const nextMonthFormated = Moment(today).add(1, "month").format("YYYY-MM-DD");

  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState(
    {
      dateFrom: todayFormated,
      dateTo: nextMonthFormated,
      price:'select',
      country:'select',
      rooms:'select'
    }
  )

  useEffect(() => {
    document.title = "Tu hotel ideal"
    const getHoteles = async () =>{

    try {
      setIsLoading(true)
      const hotelesFromApi = await axios.get(
        `https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica`
      );
      setHoteles(hotelesFromApi.data);
      setHotelesFiltered(hotelesFromApi.data);
      setIsLoading(false);
    } catch (error) {
      console.log('Error del catch', error);
    }
    
    }

    getHoteles()
  }, [])


  const handleFilter = ({ dateFrom, dateTo, country, rooms, price }) => {
    return hoteles.filter(
      (hotel) =>
        Moment(hotel.availabilityFrom).format("YYYY-MM-DD") >= dateFrom &&
        Moment(hotel.availabilityTo).format("YYYY-MM-DD") <= dateTo &&
       hotel.country === (country !== 'select' ? country : hotel.country) && 
       parseInt(hotel.price) === (price !== 'select' ? parseInt(price) : parseInt(hotel.price) ) &&
       (parseInt(hotel.rooms) >= (rooms != 'select' ? (rooms == 10 ? 0 : (rooms == 20 ? 10 : 20)) : parseInt(hotel.rooms)) &&
       parseInt(hotel.rooms) <= (rooms == 10 ? 10 : (rooms == 20 ? 20 : parseInt(hotel.rooms))))
       
       );
  };

  

  const onFilterChange = (payload) => {
    console.log("payload", payload);

    const hotelesFilt = handleFilter(payload)

    setFilters((prevState) => ({
      ...prevState,
      ...payload,
    }));

    setHotelesFiltered(hotelesFilt)
  };


  return (
    <>
      <NavBar />
      <Hero/>
      <Filters filters={filters} onFilterChange={onFilterChange} />

      <Main isLoading={isLoading} hoteles={hotelesFiltered}/>
    </>
  );
}

export default App;
