import React, { useState } from 'react';
import MonthFilterButton from "../components/MonthFilterButton"
import Listing from "../components/Listing"

function Family() {
    const [open, setOpen] = useState(false)

    function toggleOpen() {
        console.log(open)
        setOpen(!open)
    }

    return (
        <section className={open === false ? "h-12 md:h-24 lg:h-28 overflow-hidden" : null}>
            <button
                onClick={toggleOpen}
                className="bg-107-copa-green-100 hover:bg-107-copa-green-200 w-full text-left">
                <div className="wrapper">
                    <h2 className="text-5xl md:text-8xl font-medium pb-4 md:pb-8 lg:pb-12">Family</h2>
                    <div className="flex flex-wrap justify-between -mx-1 lg:-mx-4">
                        <MonthFilterButton month="Jan" colour="red" />
                        <MonthFilterButton month="Feb" colour="purple" />
                        <MonthFilterButton month="Mar" colour="purple" />
                        <MonthFilterButton month="Apr" colour="purple" />
                        <MonthFilterButton month="May" colour="purple" />
                        <MonthFilterButton month="Jun" colour="purple" />
                        <MonthFilterButton month="Jul" colour="purple" />
                        <MonthFilterButton month="Aug" colour="purple" />
                        <MonthFilterButton month="Sep" colour="purple" />
                        <MonthFilterButton month="Oct" colour="purple" />
                        <MonthFilterButton month="Nov" colour="purple" />
                        <MonthFilterButton month="Dec" colour="purple" />
                    </div>
                </div>
            </button>
            <ul className="wrapper flex flex-wrap justify-between">
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
            </ul>
        </section>
    )
}

export default Family