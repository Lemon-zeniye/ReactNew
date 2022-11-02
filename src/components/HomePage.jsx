import styled  from "styled-components";
import ListOfBook from "./ListOfBook";
import book from "../images/book1.avif";
import book1 from "../images/cover10.jpg";
import book2 from '../images/cover13.gif';
const HomePage = () => {
    return(
    <BigCon>
        <Container>
            <InnerContainer>
                <h1>Buy and Sell your textbook for best price</h1>
                <p>Lorem  dignissimos eum doloremque, voluptate impedit iusto in nobis. Nobis, numquam adipisci.
                </p>
            </InnerContainer>
            <ImgContainer id="reactive">
               <img  className="below" src={book}  alt=""/>
               <img  className="left" src={book1}  alt=""/>
               <img  className="top" src={book2}  alt=""/>
            </ImgContainer>
        </Container>
        <ListOfBook />
    </BigCon>
    )
}
const BigCon = styled.div`
    max-width: 1600px;
    min-width: 400px;
    margin: 0 auto;
    box-shadow: 0px 0px 8px 2px #cfd8f4;
    border-radius: .4rem;
`
const Container = styled.div`
    display: flex;
    max-height: 73vh;
    background-color: #f5f0f8;
    padding: 1rem;
`
const InnerContainer = styled.div`
    flex: 1;
    margin: 5rem;
    border-right: 1px solid #e3d6e1;
    box-shadow: 6px 0 5px -6px #aaa;
    @media(max-width: 800px){
        border: none;
        margin: 1rem;
    }
    p{
        margin:3rem 3rem 3rem 0 ;
    }
    form{
        width: 17rem;
        height: 2.5rem;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: space-around;
        input{
            outline: none;
            border: none;
            height: 2.5rem;
        }
        button{
            border: none;
            padding: .2rem 1rem;
            background-color: #1d8c7f;
            color: white;
            cursor: pointer;
        }
        button:hover{
            background-color: #1eb8a6;
        }
    }
    div{
        margin:2rem auto;
        .login, .registor{
            margin: .5rem;
            padding: .3rem 1rem;
            border: none;
            background-color: #50c5b7;
            border-radius: .3rem;
            color: white;
            cursor: pointer;
        }
        .login:hover, .registor:hover{
            background-color: #2c6e66;
        }
    }
    
    
`
const ImgContainer = styled.div`
    flex: 1;
    display: flex;
    margin-left: 1rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    @media(max-width: 800px){
        display: none;
    }
    img{
        width: 15rem;
        height: 20rem;
        object-fit: fill;
        position: absolute;
        box-shadow: 0px 0px 8px 2px #97aae2;
        padding: .5rem;
        background-color: white; 
    }
    .below{
        z-index: 10;
        right: 17%;
        top: 10%;
    }
    .top{
        top: 0;
        left: 30%;
    }
    .left{
        left: 20%;
        top: 14%;
        z-index: 11;
    }
       
`
//yaekob melikt 

export default HomePage;