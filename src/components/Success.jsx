import IconLogo from "../images/icon-complete.svg"

const Success = ({setDisplay}) => {
  return (
     <div style={{ width: "400px", marginRight: "100px", display: "flex", flexDirection: "column", gap: "20px", justifyContent: "center", alignItems: "center" }}>
        <img src={IconLogo} alt='' style={{height: "100px", width: "100px"}}/>
        <h1>THANK YOU!</h1>
        <p>We've added your card details</p>
        <button className='w-100 btn btn-dark' onClick={() => setDisplay(false)}>Dismiss</button>
    </div>
  )
}

export default Success