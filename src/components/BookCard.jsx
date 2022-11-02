import styled from "styled-components";

function BookCard({book, books, setBooks}) {
  return (
    <Container>
      <ImgCon>
          <Img src={book.image} />
      </ImgCon>
      <DescriptionCon>
        <p className="title">{book.title}</p>
          <small>by: {book.fName0} {book.mName0 ? book.mName0 : ""} {book.lName0 ? book.lName0 : ""}</small>
          <p>4.5 <i className="fa-solid fa-star"></i></p>
          <p className="price">{book.price} $</p>
      </DescriptionCon>
    </Container>
  )
}
const Container = styled.div`
    border: .5px solid lightgray;
    width: 13rem;
    min-height: 23.5rem;
    margin-top: 1rem;
    box-shadow: 0px 0px 8px 2px #cfd8f4;
    border: none;
    border-radius: .3rem;
    @media(max-width: 800px){
      width: 100%;
      margin: 1rem auto;
    }
  `
const ImgCon = styled.div`
    width: 9rem;
    height: 13rem;
    margin: 0 auto;
    padding-top: .5rem;
    transition: all .2s linear;
    border-radius: .3rem;
    cursor: pointer;
    &:hover{
      width: 10rem;
      height: 14rem;
    }
`
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: fill;
    box-shadow: 0px 0px 8px 2px #dfe4f2;
    padding: .3rem;
    
`
const DescriptionCon = styled.div`
  padding: .5rem;
  width: 100%;
  p{
    margin: .2rem 0;
  }
  .title{
    font-family: 'Mukta', sans-serif;
    line-height: 1.3; 
    cursor: pointer;
    width: 100%;
    word-break: break-all;
    color: #062b70;
    &:hover{
      color: #3939b1;
    }
  }
  small{
    color: #5a5a5a;
  }
  p {
    i.fa-star{
      color: gold;
    }
  }
  .price{
    color: tomato;
  }
`
 

export default BookCard;