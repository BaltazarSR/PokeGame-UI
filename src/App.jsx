import './App.css'

function App() {

  return (
    <>
      <div class = "container-main">
        {/* Shadow */}
        <div class = "shadow">
          {/* Container top */}
          <div class = "container-top"></div>
          {/* Container game */}
          <div class = "container-gameboy">
            {/* Container screen */}
            <div class = "container-screen-center">
              <div class = "container-screen">
                {/* Container top screen */}
                <div class = "container-screen-title">
                  <div class = "container-dash-title1"></div>
                  <div class = "container-dash-title2"></div>
                </div>
                {/* Container display */}
                <div class = "container-display"></div>
              </div>
              {/* Container Nintendo */}
              <div class = "container-name">
              Nintendo GAMEBOY
              </div>
            </div>
            {/* Container buttons */}
            <div class = "container-buttons-center">
              <div class = "container-buttons">
                {/* D-PAD */}
                <div class = "container-dpad">
                  <div class = "button-dpad-empty"></div>
                  <div>
                    <button class = "button-dpad"></button>
                  </div>
                  <div class = "button-dpad-empty"></div>
                  <div>
                    <button class = "button-dpad"></button>
                  </div>
                  <div>
                    <button class = "button-dpad"></button>
                  </div>
                  <div>
                    <button class = "button-dpad"></button>
                  </div>
                  <div class = "button-dpad-empty"></div>
                  <div>
                    <button class = "button-dpad"></button>
                  </div>
                  <div class = "button-dpad-empty"></div>
                </div>
                {/* SELECT START */}
                <div style={{ paddingTop: '30%'}}>
                  <div class = "container-ss">
                    <button class = "button-ss"></button>
                    <button class = "button-ss"></button>
                  </div>
                  <div class = "container-text-ss">
                    <div class = "text-ss">SELECT</div>
                    <div class = "text-ss">START</div>
                  </div>
                </div>
                {/* A B */}
                <div class = "container-ab">
                  <div style={{ paddingTop: '30%'}}>
                    <button class = "button-ab"></button>
                  </div>
                  <div style={{ paddingBottom: '30%'}}>
                    <button class = "button-ab"></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
