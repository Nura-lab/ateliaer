import './App.css';
import {Header} from "./components/Header";
import {BlockFirst} from "./components/BlockFirst";
import { BlockSecond } from './components/BlockSecond';
import {Cards} from "./components/Cards";
import {BlockThird} from "./components/BlockThird";
import {BlockFour} from "./components/BlockFour";
import {Footer} from "./components/Footer";
import card1 from "./components/Images/IMAGEcard_one.png"
import card2 from "./components/Images/IMAGEcard_two.png"
import card3 from "./components/Images/IMAGEcard_three.png"
import card4 from "./components/Images/IMAGEcard_four.png"
import card5 from "./components/Images/IMAGEcard_five.png"
import card6 from "./components/Images/IMAGEcard_six.png"
import card7 from "./components/Images/IMAGEcard_seven.png"
import card8 from "./components/Images/IMAGEcard_eight.png"
import card9 from "./components/Images/IMAGEcard_nine.png"
import card10 from "./components/Images/IMAGEcard_ten.png"
import card11 from "./components/Images/IMAGEcard_11.png"
import card12 from "./components/Images/IMAGEcard_12.png"
import card13 from "./components/Images/IMAGEcard_13.png"
import card14 from "./components/Images/IMAGEcard_14.png"
import card15 from "./components/Images/IMAGEcard_15.png"
import card16 from "./components/Images/IMAGEcard_16.png"
import card17 from "./components/Images/IMAGEcard_17.png"
import card18 from "./components/Images/IMAGEcard_18.png"
import card19 from "./components/Images/IMAGEcard_19.png"
import card20 from "./components/Images/IMAGEcard_20.png"
import card21 from "./components/Images/IMAGEcard_21.png"


function App() {

  const data =[
    {
        title:"Landing vr.1",
        img: card1,
    },
    {
        title:"Landing vr.2",
        img: card2,
    },
    {
        title:"Landing vr.3",
        img: card3,
    },
    {
        title:"Landing vr.4",
        img: card4,
    },
    {
        title:"Landing vr.5",
        img: card5,
    },
    {
        title:"Landing vr.6",
        img: card6,
    },
    {
        title:"Landing vr.7",
        img: card7,
    },
    {
        title:"Landing vr.8",
        img: card8,
    },
    {
        title:"Landing vr.9",
        img: card9,
    },
    {
        title:"Landing vr.10",
        img: card10,
    },
    {
        title:"Landing vr.11",
        img: card11,
    },
    {
        title:"Landing vr.12",
        img: card12,
    },
    { 
        title:"Landing vr.13",
        img: card13,
    },
    {
        title:"Landing vr.14",
        img: card14,
   },
   {
        title:"Landing vr.15",
        img: card15,
   },
   {
        title:"Landing vr.16",
        img: card16,
   },
   {
        title:"Landing vr.17",
        img: card17,
   },
   {
        title:"Landing vr.18",
        img: card18,
   },
   {
        title:"Landing vr.19",
        img: card19,
    },
    {
        title:"Landing vr.20",
        img: card20,
   },
   {
        title:"Landing vr.21",
        img: card21,
   },
]
  return (
    <div className="App">
      <Header/>
      <BlockFirst/>
      <BlockSecond />
      {
        data.map((el, id)=> {
            return <Cards data={el} key={id}/>
        })
      }
      <BlockThird/>
      <BlockFour/>
      <Footer/>
    </div>
  );
}

export default App;