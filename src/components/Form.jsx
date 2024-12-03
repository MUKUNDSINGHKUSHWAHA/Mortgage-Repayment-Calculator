import { useState } from 'react'
import img from "../assets/icon-calculator.svg";

const initialValues = {
    amount: "",
    term:   "",
    rate:   "",
    type:   "",
};




const Form = ({ calculateMortgage, onReset }) => {

    
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    function handleChanges(e) {
        setValues((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
    }

    function validate() {
        const newErrors = {};
    
        if (!values.amount) {
          newErrors.amount = true;
        }
        if (!values.term) {
          newErrors.term = true;
        }
        if (!values.rate) {
          newErrors.rate = true;
        }
        if (!values.type) {
          newErrors.type = true;
        }
    
        return newErrors;
    }

    function resetForm() {
        setValues(initialValues);
        setErrors({});
        onReset();
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors);
        } else {
          setErrors({});
          calculateMortgage(values.amount, values.term, values.rate);
        }
    }
    
  return (
    <form id='form' onSubmit={handleSubmit} onReset={resetForm}>
        <div className='title'>
            <h1>Mortgage Calcuator</h1>
            <button id='reset' type="reset">Clear All</button>
        </div>
        <div className="form-control">
            <label htmlFor="amount">Mortgage Amount</label>
            <div className={`info ${errors.amount ? "error" : ""}`}>
                <p>&pound;</p>
                <input
                    type="number"
                    min="0"
                    id="amount"
                    name="amount"
                    value={values.amount}
                    onChange={handleChanges}
                />
            </div>
            {errors.rate && <p className="error-msg">This field is required</p>}
        </div>
        <div className="term-rate">
            <div className="form-control">
                <label htmlFor="term">Mortgage Term</label>
                <div className={`info ${errors.term ? "error" : ""}`}>
                    <input
                        type="number"
                        min="1"
                        id="term"
                        name="term"
                        value={values.term}
                        onChange={handleChanges}
                    />
                    <p>years</p>
                </div>
                {errors.term && <p className="error-msg">This field is required</p>}
            </div>
            <div className="form-control">
                <label htmlFor="rate">Interest Rate</label>
                <div className={`info ${errors.rate ? "error" : ""}`}>
                <input
                    type="number"
                    min="0"
                    step="0.01"
                    id="rate"
                    name="rate"
                    value={values.rate}
                    onChange={handleChanges}
                />
                <p>%</p>
            </div>
            {errors.rate && <p className="error-msg">This field is required</p>}
        </div>
        </div>
        <fieldset>
            <legend>Mortgage Type</legend>
            <div className="form-control radio-control">
                <input
                    type="radio"
                    name="type"
                    id="repayment"
                    value="repayment"
                    checked={values.type === "repayment"}
                    onChange={handleChanges}
                />
                <label htmlFor="repayment">Repayment</label>
            </div>
            <div className="form-control radio-control">
                <input
                    type="radio"
                    name="type"
                    id="interest-only"
                    value="interest-only"
                    checked={values.type === "interest-only"}
                    onChange={handleChanges}
                />
                <label htmlFor="interest-only">Interest Only</label>
            </div>
            {errors.type && <p className="error-msg">This field is required</p>}
        </fieldset>
        <button type="submit" id="submit">
            <img src={img} alt="calculator icon" />
            <span>Calculate Repayments</span>
        </button>
    </form>
  )
}

export default Form
