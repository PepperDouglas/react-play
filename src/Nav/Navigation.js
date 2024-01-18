import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Navigation = () => {
    const Nav = styled.nav`
        display: inline-flex;
    `
    return (<Nav>
        <ul>
            <li><NavLink to='/'>Counter</NavLink></li>
            <li><NavLink to='/chesscontainer'>Chesser</NavLink></li>
            <li><NavLink to='/stylediv'>Alerter</NavLink></li>
            <li><NavLink to='/arrprac1'>Car Sorting</NavLink></li>
            <li><NavLink to='/arrprac2'>Band Sorting</NavLink></li>
            <li><NavLink to='/arrprac3'>Numbers</NavLink></li>
            <li><NavLink to='/arrprac4'>Countries</NavLink></li>
        </ul>
        <ul>
            <li><NavLink to='/messagecomp'>Props</NavLink></li>
            <li><NavLink to='/stylingcomp'>Styling</NavLink></li>
            <li><NavLink to='/starwars'>Star Wars</NavLink></li>
            <li><NavLink to='/eventref'>Event&Ref</NavLink></li>
            <li><NavLink to='/fetchdemo'>FetchDemo</NavLink></li>
            <li><NavLink to='/advcounter'>Adv. Counting</NavLink></li>
            <li><NavLink to='/todo'>To-do List</NavLink></li>
        </ul>
        <ul>
            <li><NavLink to='/tictac'>Tic-Tac</NavLink></li>
            <li><NavLink to='/todocontainer'>ToDoTwo</NavLink></li>
            <li><NavLink to='/routing'>Routing</NavLink></li>

        </ul>
    </Nav>);
}

export default Navigation;