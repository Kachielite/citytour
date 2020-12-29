import {useState} from 'react';
import './App.css';
import Navbar from '../src/Navbar-Component/Navbar';
import Control from '../src/Control-Component/Control';


function App() {


  const data = [
    {
        id: 0,
        name: "Dubai",
        source: "https://images.unsplash.com/photo-1465414951857-102134ffaa57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1353&q=80",
        info: "The Burj Al Arab is a luxury hotel located in the city of Dubai, United Arab Emirates. It is one of the tallest hotels in the world, although 39% of its total height is made up of non-occupiable space.The shape of the structure is designed to resemble the sail of a ship. It has a helipad near the roof at a height of 210 m (689 ft) above ground."
    },
    {
        id: 1,
        name: "Berlin",
        source: "https://images.unsplash.com/photo-1509136561942-7d8663edaaa2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80",
        info:"The Berlin Cathedral is a Protestant church and dynastic tomb on the Museum Island in Berlin. Built from 1894 to 1905 by order of German Emperor William II according to plans by Julius Raschdorff in Renaissance and Baroque Revival styles, the listed building is the largest Protestant church in Germany and one of the most important dynastic tombs in Europe."
    },
    {
        id: 2,
        name: "London",
        source: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        info: "Tower Bridge is a combined bascule and suspension bridge in London, built between 1886 and 1894. The bridge crosses the River Thames close to the Tower of London and has become a world-famous symbol of London. As a result, it is sometimes confused with London Bridge, about half a mile upstream"
    },
    {
      id: 3,
      name: "Washington",
      source: "https://images.unsplash.com/photo-1501466044931-62695aada8e9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1278&q=80",
      info: "The United States Capitol, often called the Capitol Building, is the meeting place of the United States Congress and the seat of the legislative branch of the U.S. federal government. It is located on Capitol Hill at the eastern end of the National Mall in Washington, D.C. The Capitol forms the origin point for the district's street-numbering system and the district's four quadrants."
  },
  {
    id: 4,
    name: "Tokyo",
    source: "https://images.unsplash.com/photo-1577537500263-da8814d8e040?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    info:"Tokyo Tower is a communications and observation tower in the Shiba-koen district of Minato, Tokyo, Japan. At 332.9 meters (1,092 ft), it is the second-tallest structure in Japan. The structure is an Eiffel Tower-inspired lattice tower that is painted white and international orange to comply with air safety regulations."
  },

  {
    id: 5,
    name: "Shanghai",
    source: "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    info: "The Oriental Pearl Radio & Television Tower  is a TV tower in Shanghai. Its location at the tip of Lujiazui in the Pudong New Area by the side of Huangpu River, opposite The Bund, makes it a distinct landmark in the area. Its principal designers were Jiang Huan Chen, Lin Benlin, and Zhang Xiulin. Construction began in 1991, and the tower was completed in 1995."
}
]

const [cityData, setCityData] = useState([
    {
        id: 0,
        name: "Dubai",
        source: "https://images.unsplash.com/photo-1465414951857-102134ffaa57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1353&q=80",
        info: "The Burj Al Arab is a luxury hotel located in the city of Dubai, United Arab Emirates. It is one of the tallest hotels in the world, although 39% of its total height is made up of non-occupiable space.The shape of the structure is designed to resemble the sail of a ship. It has a helipad near the roof at a height of 210 m (689 ft) above ground."
    }
])

const [index, setIndex] = useState(0)

let image = cityData[index].source

  return (
    <div className="App" style={{backgroundImage:`url(${image})`}}>
      <div className="navbar-section">
        <Navbar/>
      </div>
      <h3>{cityData[index].name}</h3>
      <div className="control-section">
        <Control data={data} cityData={cityData} setCityData={setCityData} index={index} setIndex={setIndex}/>
      </div>
      <div className="social-links">
        <div>
        <i class="foot-icon fab fa-facebook-f "/>
        <i class="foot-icon fab fa-twitter "/>
        <i class="foot-icon fab fa-instagram "/>
        </div>
        <p >© Copyright 2020 Madumere</p>
      </div>
      
    </div>
  );
}

export default App;
