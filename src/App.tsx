import './App.css';
import React from 'react';
import Programs from './Components/Programs';
import FilterPrograms from './Components/FilterPrograms';
import { Mock_ProgramLaunches } from './MockData/Mock_ProgramLaunches';
import { ProgramLaunch } from './Models/ProgramLaunch';

export interface AppProps {

}

export interface AppState {

}

class App extends React.PureComponent<AppProps, AppState> {

  filterYears = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018];
  filterLaunchAndLanding = [true, false];
  // constructor(props: AppProps) {
  //   super(props);    
  //   this.state = { :  };
  // }


  render() {
    return (
      <React.Fragment>

        <div className="header">
          <h1>Space Launch Programs</h1>
        </div>

        <div className="row">
          <div className="col-3 filter">
            <h3>Launch Year</h3>
            {
              this.filterYears.map((year, idx) => {
                return (<button className="col-2" id={`{btnFilterYear-${year}`} key={idx}>{year}</button>)
              })
            }

            <div className="launch">
              <h3>Successful Launch</h3>
              {
                this.filterLaunchAndLanding.map((launch, idx) => {
                  return (<button className="col-2" id={`{btnFilterLaunch-${launch}`} key={idx}>{launch.toString()}</button>)
                })
              }
            </div>

            <div className="launch">
              <h3>Successful Landing</h3>
              {
                this.filterLaunchAndLanding.map((landing, idx) => {
                  return (<button className="col-2" id={`{btnFilterLanding-${landing}`} key={idx}>{landing.toString()}</button>)
                })
              }
            </div>

          </div>

          <div className="col-9">
            <div>
              {
                Mock_ProgramLaunches.map((program, idx: number) =>{
                    return (
                      <div>
                        <h3>{`${program.mission_name}#${idx}`}</h3>                    
                      </div>

                    );
                  })
              }
            </div>
          </div>

        </div>

        <div className="footer">
          <p>Developed By: Anandaraj Srinivasan</p>
          {/* <p>Email: anand91.cbe@gmail.com</p>
            <p>Contact Number: +91 9940895758</p> */}
        </div>

      </React.Fragment>
    );
  }


  // render() {
  //   return (
  //     <React.Fragment>
  //       <div id="app">
  //         <h1>Space Launch Programs</h1>
  //         <FilterPrograms />
  //         <Programs {...Mock_ProgramLaunches} />
  //       </div>
  //     </React.Fragment>
  //   );
  // }
}

export default App;
