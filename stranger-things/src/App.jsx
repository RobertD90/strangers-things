import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LogInSignUpForm from './components/LogInSignUpForm';
import ShowPost from './components/ShowPost';
import LogAuth from './components/LogAuth';
import TreadmillDetails from './components/TreadmillDetails';
import AppForAuth from './components/AppForAuth';

const App = () => {

  const [adList, setadList] = useState([]);
  const [selectedList, setSelectedList] = useState([]);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await fetch('https://strangers-things.herokuapp.com/api/2306-fsa-et-web-ft-sf/posts');
        const data = await response.json();
        const allPost = data.data.posts;
        setadList(allPost);
      } catch (error) {
        console.error("Error fetching listings:", error);
      }
    };

    getDetails();
  }, []);

  const clickHandler = (treadmill) => {
    setSelectedList(treadmill);
  }

  // const handlerAlltreadmill = async (newTreadmill) => {
  //   try {
  //     const response = await fetch(`https://strangers-things.herokuapp.com/api/2306-fsa-et-web-ft-sf/posts`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(newTreadmill)
  //     })
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(`Error in the uploading`, error);
  //   }
  // }

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<LogInSignUpForm adList={adList} />} /> */}
        <Route path="/" element={<AppForAuth adList={adList} />} />
        <Route path="/showpost" element={<ShowPost />} />
      </Routes>

      {/* <TreadmillDetails adList={adList} />
      <AddTreadmill onAddTreadmill={handlerAlltreadmill} /> */}
    </>
  );
};

export default App;
