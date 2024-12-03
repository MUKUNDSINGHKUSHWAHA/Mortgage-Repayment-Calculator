import { useState } from "react";
import Form from "./components/Form";
import EmptyResults from "./components/EmptyResults";
import CompletedResults from "./components/CompletedResults";

import { calculateLoanPayement } from "./utils/loan";

const App = () => {

  const [isMortgageCalculated, setIsMortgageCalculated] = useState(false);
  const [mortgage, setMortgage] = useState({
    monthlyPayment: 0,
    totalRepayement: 0,
  });


  function calculateMortgage(amount, term, rate) {
    setMortgage(calculateLoanPayement(amount, term, rate));
    setIsMortgageCalculated(true);
  }

  function resetValues() {
    setIsMortgageCalculated(false);
  }


  return (
    <div>  
      <main>
        <Form calculateMortgage={calculateMortgage} onReset={resetValues}/>
        
        {isMortgageCalculated ? (
          <CompletedResults mortgage={mortgage} />
          ) : (
          <EmptyResults />
        )}

      </main>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a> 
        <br />
        Coded by <a href="#">Mukund Singh Kushwaha</a>
      </div>

    </div>
  )
}

export default App
