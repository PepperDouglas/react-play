import { Switch, Route, Routes } from 'react-router-dom';
import DataContainer from './prac';
import ChessContainer from './chessContainer';
import StyleDiv from './StyleDiv';
import Arr1Div from './ArrPrac/Arr1Div';
import Arr2Div from './ArrPrac/Arr2Div';
import Arr3Div from './ArrPrac/Arr3Div';
import Arr4Div from './ArrPrac/Arr4Div';

const Main = () => {
    return (<Routes>
        <Route path='/' element={<DataContainer />}></Route>
        <Route path='/chesscontainer' element={<ChessContainer player="dsebom"/>}></Route>
        <Route path='/stylediv' element={<StyleDiv />}> </Route>
        <Route path='/arrprac1' element={<Arr1Div />}> </Route>
        <Route path='/arrprac2' element={<Arr2Div />}> </Route>
        <Route path='/arrprac3' element={<Arr3Div />}> </Route>
        <Route path='/arrprac4' element={<Arr4Div />}> </Route>
    </Routes>);
}

export default Main;