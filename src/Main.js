import { Switch, Route, Routes } from 'react-router-dom';
import { fruits, contacts, news, flagprop, colorScheme } from './ReactPrac/rpracData';
import DataContainer from './prac';
import ChessContainer from './chessContainer';
import StyleDiv from './StyleDiv';
import Arr1Div from './ArrPrac/Arr1Div';
import Arr2Div from './ArrPrac/Arr2Div';
import Arr3Div from './ArrPrac/Arr3Div';
import Arr4Div from './ArrPrac/Arr4Div';
import MessageComp from './ReactPrac/MessageComp';
import StylingComp from './ReactPrac/StylingComp';
import StarWars from './ReactPrac/StarWars';

const Main = () => {
    return (<Routes>
        <Route path='/' element={<DataContainer />}></Route>
        <Route path='/chesscontainer' element={<ChessContainer player="dsebom"/>}></Route>
        <Route path='/stylediv' element={<StyleDiv />}> </Route>
        <Route path='/arrprac1' element={<Arr1Div />}> </Route>
        <Route path='/arrprac2' element={<Arr2Div />}> </Route>
        <Route path='/arrprac3' element={<Arr3Div />}> </Route>
        <Route path='/arrprac4' element={<Arr4Div />}> </Route>
        <Route path='/messagecomp' element={<div><MessageComp text="Hello" 
            date="2024-01-01" fruitsArr={fruits} contactsArr={contacts} newsArr={news} /></div>}> 
        </Route>
        <Route path='/stylingcomp' element={<StylingComp  color="blue"
            flag={flagprop} colors={colorScheme}/>}> 
        </Route>
        <Route path='/starwars' element={<StarWars personId={1}/>}> </Route>
    </Routes>);
}

export default Main;