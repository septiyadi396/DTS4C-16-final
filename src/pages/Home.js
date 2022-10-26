import React from 'react';
import Main from '../components/Main';
import Row from '../components/Row';

function Home() {
  return (
    <div>
      <Main/>
      <Row rowID='1' title='Up Coming' api='/movie/upcoming'/>
      <Row rowID='2' title='Popular' api='/movie/popular'/>
      <Row rowID='3' title='Top Rated' api='/movie/top_rated'/>
    </div>
  )
}

export default Home