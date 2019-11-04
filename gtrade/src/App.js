import React from 'react';
import stonk from './stonks.png';
import './App.css';
const googleTrends = require('google-trends-api');

function App() {
  function getTrends() {
    console.log(123);
    let selecter = document.getElementById("stocks");
    let theSelected = selecter.options[selecter.selectedIndex].value;
    alert(theSelected);
    var company = document.getElementById("stocks").value
    if(isTrending(company)){
      window.alert(company+" is trending")
    }
    else{
      window.alert(company+" is NOT trending")
    }

    getTrending();
    getTrendInterest("Google");
  }

  function getTrending(){
      googleTrends.realTimeTrends({
          geo: 'US',
          category: 'b',
        }, function(err, results) {
          if (err) {
            console.log(err);
          }else{
            console.log(results);
          }
        });
  }

  function getTrendInterest(key){
      googleTrends.interestOverTime({keyword: key})
        .then(function(results){
          console.log('Trend for company: ' + results);
        })
        .catch(function(err){
          console.log('Error: '+err);
      });

  }

  function isTrending(company){
    if(company=="Apple"){
      return true;
    }
    if(company=="Google"){
      return true;
    }
    if(company=="Paycom"){
      return false;
    }
    if(company=="Amazon"){
      return true;
    }
    if(company=="Walmart"){
      return true;
    }
    if(company=="ATT"){
      return false;
    }
    if(company=="GM"){
      return true;
    }
    if(company=="EM"){
      return false;
    }
    if(company=="Costco"){
      return false;
    }
    if(company=="IBM"){
      return true;
    }
    if(company=="Facebook"){
      return true;
    }
    if(company=="Uber"){
      return false;
    }
  }

  return (
    <div className="App">
      <header className="home-header">
      <div className="stonk">
      <img src={stonk} alt="Logo Placeholder" align="left"></img>
      <h1 id="title-header">gTrade</h1>
      </div>

      <div className="main-content">

      <div id="desc">
      <h2>Choose a stock to get recent trends and analysis!</h2>
      </div>
        <form id="stocks-chosen">
        <div>
        <select multiple id="stocks">
          <option>Choose a Stock!</option>
          <option value="Apple">Apple</option>
          <option value="Google">Google</option>
          <option value="Paycom">Paycom</option>
          <option value="Amazon">Amazon</option>
          <option value="Walmart">Walmart</option>
          <option value="att">AT&T</option>
          <option value="GM">General Motors</option>
          <option value="EM">Exxon Mobil</option>
          <option value="Costco">Costco</option>
          <option value="IBM">IBM</option>
          <option value="Facebook">Facebook</option>
          <option value="Uber">Uber</option>
        </select>
        </div>
          <br></br>
          <button type='button' onClick={getTrends}>Submit</button>
        </form>
      </div>
      </header>
    </div>
  );
}


export default App;


// import React from 'react';

// function App() {

//   function sayHello() {
//     console.log(321);
//   }

//   return (
//     <button onClick={sayHello}>
//       Click me!
//     </button>
//   );
// }

// export default App;
