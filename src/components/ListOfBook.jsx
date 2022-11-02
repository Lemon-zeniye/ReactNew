  import styled from "styled-components";
  import {  useState, useEffect  } from "react";
  import { collection, getDocs } from "firebase/firestore";
  import { db } from "../fireBaseConfig";
  import BookCard from "./BookCard";

  const ListOfBook = ({search}) => {
      const [books, setBooks] = useState([]);

      useEffect(() => {
      const getBooks = async () => {
      const booksCollectonRef = collection(db, "BookTwo");
        try{
          const data = await getDocs(booksCollectonRef);
          if(data){
              setBooks(data.docs.map(doc => ({...doc.data(), id: doc.id})));
          } else{
              console.log('Documents do not exist!')
          }
        }catch(error){
          console.log(error);
        }
      }
      getBooks()
  },[]);
      return(
        <Container>
          <InnerContainer>
              <h2>List of Books</h2>
              <div className="div">
                  {
                      books.map(best => (
                        <div key={best.id} className="inner">
                          <BookCard key={best} book={best} books={books} setBooks={setBooks}/>
                        </div>
                      ))
                  }
                </div>
          </InnerContainer>
        </Container>
      )};
  const Container = styled.div`
      margin: 1rem 2rem;
      @media(max-width: 800px){
        margin: 2rem .5rem;
      }
  `
  const InnerContainer = styled.div`
      cursor: grab;
      div.div{
        display: flex;
        padding-bottom: 5rem;
        flex-wrap: wrap;
        justify-content: space-around;
      }
      .inner{
        margin: 0 1rem;
        padding-bottom: 1rem;
      }
      h2{
        color: #222246;
      }
  `
  export default ListOfBook;

  //  <Splide options={{type: 'loop',arrows:false, autoWidth:true,  pagination: false, drag: 'free', gap: '1rem', focus:"center",
  //           autoScroll: {
  //               speed: .3,
  //           }, }} extensions={{AutoScroll}}> 
  // </Splide>
  