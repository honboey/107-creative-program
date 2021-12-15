import React, { useState } from 'react';
import { graphql } from 'gatsby';
import MonthFilterButton from "../components/MonthFilterButton"
import Listing from "../components/Listing"

function ViewAll() {
    const [open, setOpen] = useState(false)

    function toggleOpen() {
        console.log(open)
        setOpen(!open)
    }

    return (
        <section className={open === false ? "h-12 md:h-24 lg:h-28 overflow-hidden" : null}>
            <button
                onClick={toggleOpen}
                className="bg-107-juni-purple-100 hover:bg-107-juni-purple-200 w-full text-left">
                <div className="wrapper">
                    <h2 className="text-5xl md:text-8xl font-medium pb-4 md:pb-8 lg:pb-12">View all</h2>
                    <div className="flex flex-wrap justify-between -mx-1 lg:-mx-4">
                        <MonthFilterButton month="Jan" colour="green" />
                        <MonthFilterButton month="Feb" colour="green" />
                        <MonthFilterButton month="Mar" colour="green" />
                        <MonthFilterButton month="Apr" colour="green" />
                        <MonthFilterButton month="May" colour="green" />
                        <MonthFilterButton month="Jun" colour="green" />
                        <MonthFilterButton month="Jul" colour="green" />
                        <MonthFilterButton month="Aug" colour="green" />
                        <MonthFilterButton month="Sep" colour="green" />
                        <MonthFilterButton month="Oct" colour="green" />
                        <MonthFilterButton month="Nov" colour="green" />
                        <MonthFilterButton month="Dec" colour="green" />
                    </div>
                </div>
            </button>
                <Listing />
        </section>
    )
}

export default ViewAll