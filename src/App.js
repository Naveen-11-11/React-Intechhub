import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// dropdown1
import Enterprise from './Pages/Enterprise';
import Web from './Pages/Web';
import Home from './Components /Home';
import Footer from './Components /Footer';
import Desktop from './Pages/Desktop';
import Mobile from './Pages/Mobile';
import Ai from './Pages/Ai';
import ML from './Pages/ML';
import QA from './Pages/QA';
import BPO from './Pages/BPO';

// dropdown2
import AboutUs from './Pages/AboutUs';
import OurTeam from './Pages/OurTeam';
import HowWeWork from './Pages/HowWeWork';


import WorkCulture from './Pages/WorkCulture';
import Careers from './Pages/Careers';
import Contact from './Pages/Contact';

// careers page
import WebApplicationCareers from './Pages/CareerPage/WebApplicationCareers';
import Windows from './Pages/CareerPage/Windows';
import Database from './Pages/CareerPage/Database';
import AIML from './Pages/CareerPage/AIML';
import Software from './Pages/CareerPage/Software';



import WebFresher from './Pages/CareerPage/WebFresher';
import DatabaseFresher from './Pages/CareerPage/DatabaseFresher';
import AIMLFresher from './Pages/CareerPage/AIMLFresher';
import SoftwareFresher from './Pages/CareerPage/SoftwareFresher';


// Missing
import Missing from './Components /Missing';










const App = () => {
  return (
    <div className='App'>

      

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/enterprise-software" element={<Enterprise />} />
          <Route path="/web-application" element={<Web />} />
          <Route path="/desktop-application" element={<Desktop />} />
          <Route path="/mobile-application" element={<Mobile/>} />
          <Route path="/artificial-intelligence" element={<Ai/>} />
          <Route path="/machine-learning" element={<ML/>} />
          <Route path="/quality-assurance" element={<QA/>} />
          <Route path ="/bussiness-process-outsourcing" element={<BPO/>} />
          
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/ourteam" element={<OurTeam/>}/>
          <Route path="/howwework" element={<HowWeWork/>}/>

          <Route path="/work-culture" element={<WorkCulture/>}/>
          <Route path="/careers" element={<Careers/>}/>
          <Route path="/contactsin" element={<Contact/>}/>

          <Route path="/web-application-careers" element ={<WebApplicationCareers/>}/>
          <Route path="/windows-application-career" element={<Windows/>}/>
          <Route path="/database-career" element={<Database/>}/>
          <Route path="/AI & ML" element={<AIML/>}/>
          <Route path="/software-testing" element={<Software/>}/>


          <Route path="/fresher-web" element={<WebFresher/>}/>
          <Route path="/database-freshers" element={<DatabaseFresher/>}/>
          <Route path="/AIML-fresher" element={<AIMLFresher/>}/>
          <Route path="/software-fresher" element={<SoftwareFresher/>}/>

          {/* <Route path="*" element={<Missing />} /> */}
        </Routes>
        <Footer />
        
      </Router>

      



    </div>
  )
}

export default App















