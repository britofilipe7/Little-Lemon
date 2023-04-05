import React from "react";
import "./../styles/BookingPage.css"
import BookingForm from "./BookingForm";
import Nav from "./../Nav";

const BookingPage = ({availableTimes}) => {
    return(
        <>
            <Nav />
            <div className="contents">
                <BookingForm availableTimes={availableTimes}/>
            </div>
        </>
    );
}

export default BookingPage;