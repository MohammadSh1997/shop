import React from 'react'

function Filter(props) {
    return (
        <div className="filter">
            <p>{props.count} products</p>
            <p>Order {" "}
                <select value={props.value} onChange={props.handleOrder}>
                    <option value="latest">latest</option>
                    <option value="high">Highest</option>
                    <option value="low">Lowest</option>
                </select>
            </p>
            <p>Filter {" "}
                <select value={props.size} onChange={props.handleFilter}> 
                    <option value="none">choose</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                    <option value="XXXL">XXXL</option>
                </select>
            </p>
        </div>
    )
}

export default Filter
