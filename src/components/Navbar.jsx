import styled from "styled-components";
import {Link} from "react-router-dom";
const Navbar = ({setSearch}) => {
    return(
    <Container>
         <Link to="addBook" > <Button2>Add Book</Button2></Link> 
    </Container>
    )
}
const Container = styled.div`
    position: sticky;
    top: 0;
    z-index: 20;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    padding: 1rem 3rem;
    height: 4rem;
    min-width: 100%;
    background-color: #d8deef;
    @media(max-width: 800px){
        padding: 1rem .3rem;
       align-items: center;

    }
    ul{
        display: flex;
        list-style: none;
        width: 100%;
        margin: 0 .3rem;
        max-width: 40rem;
        @media(max-width: 600px){
                display: none;
            }
        input{
            width: 100%;
            border: none;
            outline: none;
            padding:.5rem;
            
        }
    }
    div{
        margin: 0 .3rem;
        display: flex;
        align-items: center;
        @media(max-width: 800px){
            display: none;
        }
        img{
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            margin-left: 1rem;
            cursor: pointer;
        }
    }
`
 const Button2 = styled.button`
        margin: .5rem;
        padding: .3rem 1rem;
        border: none;
        background-color: #50c5b7;
        border-radius: .3rem;
        color: white;
        cursor: pointer;
        &:hover{
            background-color: #2c6e66;
        }
 `

export default Navbar;