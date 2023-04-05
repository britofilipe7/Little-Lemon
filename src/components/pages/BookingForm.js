import React, { useContext } from "react";
import { useState, useEffect } from "react";
import "./../styles/BookingForm.css"
import AppContext from "./../../components/AppContext";

const BookingForm = () => {

    const {state, setState} = useContext(AppContext);
    const [availableTimesArray, setAvailableTimesArray] = useState(state["initialTimes"].map(element => <option key={element} value={element}>{element}</option>));

    const [formData, setFormData] = useState({
        date: "",
        time: "",
        guests: 1,
      })

    useEffect(() => {
        const updateTimes = (date) => {
            if (state["dates"][date] !== undefined) {
                const tempArray = state["initialTimes"].filter(element => !state["dates"][date].includes(element));
                setAvailableTimesArray(tempArray.map(element => <option key={element} value={element}>{element}</option>));
            } else {
                setAvailableTimesArray(state["initialTimes"].map(element => <option key={element} value={element}>{element}</option>));
            }
        };
        updateTimes(formData.date);
    }, [formData.date, state.dates, state.initialTimes]);

    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let date = e.target["date"].value;
        let time = e.target["time"].value;;
        console.log(time);
        
        setState(prevState => ({
            ...prevState,
            dates: {
                ...prevState.dates,
                [date]: prevState.dates[date] ?
                [...prevState.dates[date], time] :
                [time]
            }
        }));
        console.log(formData);

        setFormData({
            date: "",
            time: "",
            guests: 1,
          });
    };


    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="date">Choose date</label>
            <input type="date" id="date" value={formData.date}
                onChange={handleChange}/>
            <label htmlFor="time">Choose time</label>
            <select id="time" value={formData.time}
                onChange={handleChange}>
                {availableTimesArray}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={formData.guests}
                onChange={handleChange}/>
            <input type="submit" value="Make Your reservation"/>
        </form>
    );
}

export default BookingForm;