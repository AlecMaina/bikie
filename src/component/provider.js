import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import calendar from '../images/calendar.png'

function Provider(){

    const [open, setOpen] = useState(false);

    function clickHandler(){
        setOpen(prevOpen => !prevOpen)
    }

    return(
        <div>
            <section className="provider__page">
                <h1>John Smith</h1>
                <div className="provider">
                    <div className="side__bar">
                        <ol>
                            <li><h2>Available on April 18, 2021</h2></li>
                            <li><img src={calendar} alt="calendar" onClick={clickHandler} /></li>
                        </ol>
                        <div className="calendar" style={{position: "absolute", display: open ? "block" : "none" }} >
                            <Calendar />
                        </div>
                        <hr />
                        <ul>
                            <li><h3>All day</h3></li>
                            <li><button>Available</button></li>
                        </ul>
                        <hr />
                        <ul>
                            <li><h3>7.00 am - 8.00 am</h3></li>
                            <li><button>Available</button></li>
                        </ul>
                        <hr />
                        <ul>
                            <li><h3>8.00 am - 9.00 am</h3></li>
                            <li><button>Available</button></li>
                        </ul>
                        <hr />
                        <ul>
                            <li><h3>9.00 am - 10.00 am</h3></li>
                            <li><button>Available</button></li>
                        </ul>
                        <hr />
                        <ul>
                            <li><h3>10.00 am - 11.00 am</h3></li>
                            <li><button>Available</button></li>
                        </ul>
                        <hr />
                        <ul>
                            <li><h3>11.00 am - 12.00 pm</h3></li>
                            <li><button>Available</button></li>
                        </ul>
                        <hr />
                        <ul>
                            <li><h3>12.00 pm - 1.00 pm</h3></li>
                            <li><button>Available</button></li>
                        </ul>
                        <hr />
                    </div>
                    <div className="left__side__bar">
                        <h2>I offer my bike on the following rates</h2>
                        <ul>
                            <li><span>Hourly Rate</span> $2</li>
                            <li><span>Daily Rate</span> $10</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Provider;