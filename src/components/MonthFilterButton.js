import * as React from "react"

function MonthFilterButton(props) {
    return (
        <button type="button" className="pills-button">{props.month}</button>
    )
}

export default MonthFilterButton