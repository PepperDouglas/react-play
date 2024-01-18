import { Switch, Route, Routes } from 'react-router-dom';
import { fruits, contacts, news, flagprop, colorScheme } from '../ReactPrac/rpracData';
import DataContainer from '../RandPrac/prac';
import ChessContainer from '../RandPrac/chessContainer';
import StyleDiv from '../RandPrac/StyleDiv';
import Arr1Div from '../ArrPrac/Arr1Div';
import Arr2Div from '../ArrPrac/Arr2Div';
import Arr3Div from '../ArrPrac/Arr3Div';
import Arr4Div from '../ArrPrac/Arr4Div';
import MessageComp from '../ReactPrac/MessageComp';
import StylingComp from '../ReactPrac/StylingComp';
import StarWars from '../ReactPrac/StarWars';
import EventRef from '../ReactPrac/EventRef';
import FetchDemo from '../ReactPrac/FetchDemo';
import AdvCounter from '../ReactPrac/AdvCounter';
import ToDo from '../ReactPrac/ToDo';
import TicTac from '../Demos/TicTac';
import TodoTwo from '../containers/TodoContainer/TodoContainer.jsx';
import Routing from '../RandPrac/Routing.jsx';

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
        <Route path='/eventref' element={<EventRef />}> </Route>
        <Route path='/fetchdemo' element={<FetchDemo player="dsebom"/>}> </Route> 
        <Route path='/advcounter' element={<AdvCounter />}> </Route>
        <Route path='/todo' element={<ToDo />}> </Route>
        <Route path='/tictac' element={<TicTac />}> </Route>
        <Route path='/todocontainer' element={<TodoTwo />}> </Route>
        <Route path='/routing' element={<Routing />}> </Route>

    </Routes>);
}

export default Main;