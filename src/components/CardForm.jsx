import {useState} from 'react'
import { Button, Form } from 'react-bootstrap';
const CardForm = ({setDisplay, handleCardDetails}) => {
    const [loading, setLoading] = useState(false)
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")
  const [cvc, setCvc] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    try{
        setLoading(true)
        handleCardDetails({name, number, month, year, cvc})
    //   console.log({name, number, month, year, cvc})
      setLoading(false)
      setDisplay(true)
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div style={{ width: "400px", marginRight: "100px" }}>
        <Form className="w-100" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>CARDHOLDER NAME</Form.Label>
            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="name@example.com" required/>
          </Form.Group>
          <Form.Group className="">
            <Form.Label>CARD NUMBER</Form.Label>
            <Form.Control type="number" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="0000 0000 0000 0000" required/>
          </Form.Group>
          <Form.Group
            className=" d-flex gap-2 justify-content-center align-items-center"
          >
            <Form.Group className="w-25">
              <Form.Label>EXP. DATE</Form.Label>
              <Form.Control type="number" value={month } onChange={(e) => setMonth(e.target.value)} placeholder="MM" required />
            </Form.Group>
            <Form.Group className="w-25">
              <Form.Label>[MM/YY]</Form.Label>
              <Form.Control type="number" value={year} onChange={(e) => setYear(e.target.value)} placeholder="YY" required />
            </Form.Group>
            <Form.Group className="w-50">
              <Form.Label>CVC</Form.Label>
              <Form.Control type="number" value={cvc} onChange={(e) => setCvc(e.target.value)} placeholder="e.g. 123" required />
            </Form.Group>
          </Form.Group>
          <Button type="submit" className="bg-dark w-100 mt-3">
            {loading ? "Confirming.." : "Confirm"}
          </Button>
        </Form>
      </div>
  )
}

export default CardForm