import './App.css';
import CardLogo from "./images/card-logo.svg"
import BackCard from "./images/bg-card-back.png"
import FrontCard from "./images/bg-card-front.png"
import { useState } from 'react';

import "bootstrap/dist/css/bootstrap.css"
import CardForm from './components/CardForm';
import Success from './components/Success';

function App() {
  const [display, setDisplay] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  const handleCardDetails = (cardDetails) => {
    console.log(cardDetails)
    setName(cardDetails.name);
    setNumber(cardDetails.number);
    setMonth(cardDetails.month);
    setYear(cardDetails.year);
    setCvc(cardDetails.cvc);
  }

  return (
    <div className="w-100 h-100 d-flex justify-content-between align-items-center">
      <div className="inter-lhs">
        <div
          style={{ width: "400px", height: "200px", marginTop: "30px" }}
          className="front-card"
        >
          <img src={FrontCard} alt="" className="w-100 h-100" />
          <div className="front-card-details">
            <div>
              <img src={CardLogo} alt="card-img" />
              {/* <img src={IconLogo} alt='icon-img' /> */}
            </div>
            <p className="text-white font-bold pt-4">{number}</p>
            <div className="d-flex justify-content-between align-items-center pt-3">
              <h6 className="text-white font-bold">{name}</h6>
              <p className="text-white font-bold float-right">
                {month}/{year}
              </p>
            </div>
          </div>
        </div>
        <div style={{ width: "400px", height: "200px" }} className="back-card">
          <img src={BackCard} alt="" className="w-100 h-100" />
          <div className="back-card-details">
            <p className="text-dark font-bold">{cvc}</p>
          </div>
        </div>
      </div>
      <div>
        {display ? (
          <Success setDisplay={setDisplay} />
        ) : (
          <CardForm
            setDisplay={setDisplay}
            handleCardDetails={handleCardDetails}
          />
        )}
      </div>
    </div>
  );
}

export default App;
