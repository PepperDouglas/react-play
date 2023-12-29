import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Navigation = () => {
    return (<nav>
        <ul>
            <li><NavLink to='/'>Counter</NavLink></li>
            <li><NavLink to='/chesscontainer'>Chesser</NavLink></li>
            <li><NavLink to='/stylediv'>Alerter</NavLink></li>
            <li><NavLink to='/arrprac1'>Car Sorting</NavLink></li>
            <li><NavLink to='/arrprac2'>Band Sorting</NavLink></li>
            <li><NavLink to='/arrprac3'>Numbers</NavLink></li>
            <li><NavLink to='/arrprac4'>Countries</NavLink></li>
        </ul>
    </nav>);
}

export default Navigation;