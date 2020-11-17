import './App.css';
// import {useEffect} from 'react';
// import axios from 'axios';
function App() {
  // useEffect(() => {
  //     axios({
  //         url: 'https://pastebin.pl/view/raw/e1658aa0',
  //         method: 'GET'
  //             })
  //                 .then((response) => {
  //                     console.log('Data', response.data);
  //                 })
  //                 .catch('Oopps, there is an error')
  // }, [])
  const axios = require('axios');
  axios.get('https://pastebin.pl/view/raw/e1658aa0')
      .then(data => console.log(data))
  // let componentDidMount;
  // componentDidMount = () => {
  //     axios({
  //         url: 'https://pastebin.pl/view/raw/e1658aa0',
  //         method: 'GET'
  //     })
  //         .then((response) => {
  //             console.log('Data', response.data);
  //         })
  //         .catch('Oopps, there is an error')
  // }
  return (
      <div className="App">
        <div>
          <h2>Welcome to my App</h2>
        </div>
      </div>
  );
}
export default App;
