import './App.css'

function App() {

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        {/* Container game */}
        <div style = {{ width: '350px', height: '500px', border: "1px solid black", borderRadius: "5px 5px 35px 5px"}}>
          {/* Container screen */}
          <div style={{paddingTop: '5%', paddingBottom: '25%', justifyContent: 'center', display: 'flex'}}>
            <div style={{width: '85%', height: '200px', backgroundColor: 'olive'}}>

            </div>
          </div>
          {/* Container buttons */}
          <div style={{ display: 'flex', justifyContent: 'space-around'}}>
            {/* First button */}
            <div style={{ width: '60px', height: '60px', backgroundColor: 'black'}}>
              <div>
                <button
                  style={{
                    backgroundColor: 'blue',
                    width: '40px',
                    height: '40px',
                  }}
                ></button>
              </div>
            </div>
            {/* Buttons Select Start */}
            <div style={{ paddingTop: '30%'}}>
              <div style={{ width: '60px', height: '60px', backgroundColor: 'gray'}}>
                <div>
                  <button style={{backgroundColor: '#A7A7A7', width: '40px', height: '10px', borderRadius: '25%'}}>
                  </button>
                </div>
                <div style={{ paddingLeft: '90%'}}>
                  <button style={{backgroundColor: '#A7A7A7', width: '40px', height: '10px', borderRadius: '25%'}}>
                  </button>
                </div>
              </div>
            </div>
            {/* Buttons A B */}
            <div style={{ width: '60px', height: '60px', backgroundColor: 'black', display: 'flex'}}>
              {/* Button B */}
              <div style={{ paddingTop: '50%'}}>
                <button style={{backgroundColor: '#821660', width: '40px', height: '40px', borderRadius: '50%'}}>
                </button>
              </div>
              <div>
                <button style={{backgroundColor: '#821660', width: '40px', height: '40px', borderRadius: '50%'}}>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
