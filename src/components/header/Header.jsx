import { faBed,faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import {format} from "date-fns"
import './header.css'
import { useNavigate } from 'react-router-dom';

const Header = ({type}) => {
    const [destination,setDestination] = useState("");
    const [openDate,setOpenDate]= useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      ]);
      const [openOptions,setOpenOptions]=useState(false)

      const [options,setOptions]= useState({
          child:0,
          room:1,
          adult:1,
      })
      const navigate = useNavigate()

      const handleOption = (name,operation) => {
        setOptions((prev)=>{
            return{
                ...prev,
                [name]: operation==="i" ? options[name]+1 : options[name]-1,
            };
        });
      };
      const handleSearch = ()=>{
        navigate("/hotels", {state: {destination,date,options}});
      }
  return (
    <div className="header">
        <div className= {type === "list" ? "headerContainer listMode": "headerContainer" }>
        <div className="headerList">
            <div className="headerListItems active">
                <FontAwesomeIcon icon={faBed} />
                <span> Stays</span>
            </div>
            <div className="headerListItems">
                <FontAwesomeIcon icon={faPlane} />
                <span> Flights</span>
            </div>
            <div className="headerListItems">
                <FontAwesomeIcon icon={faCar} />
                <span> Car Rentals</span>
            </div>
            <div className="headerListItems">
                <FontAwesomeIcon icon={faBed} />
                <span> Attractions</span>
            </div>
            <div className="headerListItems">
                <FontAwesomeIcon icon={faTaxi} />
                <span> Airport</span>
            </div>
        </div>
     { type !== "list" &&
         <>
     <h1 className="headerTitle">A Great Place For Destinations</h1>
      <p className="headerDesc">Get great Reward for your bookings here.
       We are always here to provide our best services to you. 
      </p>
      <button className="headerbtn">Sign In/ Sign Up</button>
            <div className="headerSearch">
                <div className="headerSearchItems">
                    <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                    <input
                    type="text"
                    placeholder="Where are you going ?"
                    className="headerSearchInput"
                    onChange={e=> setDestination(e.target.value)}
                    />
                </div>
                <div className="headerSearchItems">
                    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>  
                    <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText"> 
                    {`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>  
                    {openDate && <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    minDate={new Date()}
                    className="date"
                    /> }
                </div>
                <div className="headerSearchItems">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                    <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText"> {`${options.child} child .${options.room} room. ${options.adult}adult`} </span>
                    {openOptions && <div className="option">
                        <div className="optionitem">
                            <span className="optionText">Adult</span>
                            <div className="optionCounter">
                            <button
                            disabled= {options.adult <=1}
                            className="optionCounterButton" onClick={()=>handleOption("adult","d")} >-</button>
                            <span className="optionCounterNumber"> {options.adult} </span>
                            <button className="optionCounterButton" onClick={()=>handleOption("adult","i")} >+</button>   
                            </div>
                        </div>
                        <div className="optionitem">
                            <span className="optionText">Children</span>
                            <div className="optionCounter">
                            <button
                            disabled ={options.child <=0}
                            className="optionCounterButton" onClick={()=>handleOption("child","d")}>-</button>
                            <span className="optionCounterNumber"> {options.child} </span>
                            <button className="optionCounterButton"onClick={()=>handleOption("child","i")}>+</button>
                            </div>
                        </div> 
                        <div className="optionitem">
                            <span className="optionText">Room</span>
                            <div className="optionCounter">
                            <button
                            disabled={options.room<=1}
                            className="optionCounterButton" onClick={()=>handleOption("room","d")}>-</button>
                            <span className="optionCounterNumber"> {options.room} </span>
                            <button className="optionCounterButton" onClick={()=>handleOption ("room","i")}>+</button>
                            </div>
                        </div>
                    </div> }
                </div>
                <div className="headerSearchItems">
                    <button className="headerbtn" onClick={handleSearch} >Search</button>
                </div>
            </div>
            </> }
        </div>
    </div>
  )
}

export default Header