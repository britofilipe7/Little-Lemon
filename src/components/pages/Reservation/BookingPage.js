import React, { useReducer } from "react";
import "./../../styles/BookingPage.css"
import BookingForm from "./BookingForm";
import Nav from "../../Nav";
import {fetchAPI} from "../../../bookingApi";

const BookingPage = () => {

    function updateTimes(date) {
        return fetchAPI(date);
    }

    const output = fetchAPI(new Date());

    const [availableTimes, dispatch] = useReducer(updateTimes, output);

    return(
        <>
            <div className="contents">
                <BookingForm availableTimes={availableTimes} updateTimes={dispatch}/>
            </div>
        </>
    );
}

export default BookingPage;