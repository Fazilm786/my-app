import './App.css';

function App() {
  return (
    
    <div className="App">
      <div className='page'>
        <div className='left'>
          <div className='top-content'>
            <img src={require('./assets/icons/Logodust.jpg')} alt="logo" className='logodust'/>
            <h3 className="com-name">Untitled UI</h3>
            <a href="/" className="top-link"><span className="material-symbols-outlined left-arrow" >arrow_back</span> Go back</a>
          </div>
          <div className='cen-content'>
            <h1>Sign in</h1>
            <p className="left-p">Enter your email to receive a one-time passcord.</p>
            <input type='email' className="email"placeholder='amelie@untitledui.com' />
            {/* <div style={{display:"flex",flexDirection:'row'}}> */}
              <label class="toggle-container">
                <input type="checkbox" class="toggle-input"/>
                <span class="toggle-slider"></span>
              </label>
              <p style={{display:'inline-block',marginTop:-3,position:'relative',top:-5,marginLeft:5,fontSize:12}}>Remember me for 30 days</p>
            {/* </div> */}

            
            <button className='blue-butt'>Send 4-digit code</button>
            <div className='cross-line'></div>
            <div className="or">or</div>
            <button className="gray-butt">Sign in width password</button>
              <div className='left-down'>
              <div className="left-last"><p className="left-p">Need an account? <a href="/" className="last-link">Sign up hear</a></p></div>
              {/* <`navlink`> */}
              </div>
          </div>
        </div>






        <div className='right'>
          {/* <img className="backgrd" src={require("./assets/icons/right-background.jpg")} alt="background color"/> */}
          <div className='right-content'>
            <div className='box'>
              <div style={{textAlign:"center"}}>
                <div className='logos'>
                  <img src={require("./assets/icons/close.png")} alt='close' style={{width:25}} className='close'/>
                  <img src={require('./assets/icons/images.png')} alt='logos' className='black-logo'/>
                  <img src={require('./assets/icons/data-transfer.png')} alt='logos' className='data-logo'/>
                  <img src={require('./assets/icons/logo2.png')} alt='logos' className='bluee'/>
                </div>
              
                <h3>Connect Untitled to Linear</h3>
                <p style={{fontSize:"small",marginTop:-15,color:'rgb(43, 42, 42)'}}>Prioritize work based on customer needs and build<br/> a tighter feedback loop with your customer.</p>
              </div>
              <div className='cross-line'></div>
              
              <h5>Untitled would like to</h5>
              <ul style={{fontSize:"small" }} className='li-style'>
                  <li><span className="material-symbols-outlined check">check_circle</span>Accedd basic comany information and details</li>
                  <li><span className="material-symbols-outlined check">check_circle</span>Access and edit bug reports and create new issues</li>
                  <li><span className="material-symbols-outlined check">check_circle</span>Change issue status and assignee of issues</li>
              </ul>
              
              <div className='cross-line'></div>
                {/* <div className='butt-list'> */}
                  <button className="how-butt"><span className="material-symbols-outlined play">play_circle</span>How it works</button>
                  <button className="gray-button f-button" style={{marginRight:8}}>Cancel</button>
                  <button className='blue-button f-button'>Allow access</button>
                {/* </div> */}
                <div className="blur-box ">
                  <div className="blur box1"></div>
                  <div className="blur box2"></div>
                  <div className="blur box3"></div>
                  <div className="blur box4"></div>
                  <div className="blur box5"></div>
                  <div className="blur box6"></div>
                </div>

            </div>
           

            <div style={{textAlign:'center'}}>
              <button className="white-butt">WHAT'S NEW?</button>
              <div className='f-family'>
                <h2>15 new integrations added </h2>
              </div>
                <p className="left-p">You asked and we listened! We've added a bunch<br/> of new integrations to speed up your woorkflow</p>
              
              {/* <div className="last">
              <div className="last">
              <div className="last"></div>
              </div>
              </div> */}
              
              <ul className='last-dot'>
                <li><span className="material-symbols-outlined arrow_">arrow_back</span></li>
                <li><div className='last diff'></div></li>
                <li><div className='last'></div></li>
                <li><div className='last'></div></li>
                <li><span className="material-symbols-outlined arrow__">arrow_forward</span></li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
      
    
