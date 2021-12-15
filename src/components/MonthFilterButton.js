import * as React from "react"

function MonthFilterButton(props) {
    return (
        <button type="button"
            className={
                "pills-button w-5/24 lg:w-3/24 mx-1 lg:mx-4 mb-3 lg:mb-4 text-base md:text-2xl font-bold pills-button--" +
                props.colour}>
            <p className="mx-auto mb-0">{props.month}</p>
        </button>
    )
}

export default MonthFilterButton