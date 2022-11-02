import { db } from "../fireBaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import AddBookForm from "./AddBookForm";
import { useParams } from "react-router-dom";



const AddBook = () => {
    const navigate = useNavigate();
    const { id } = useParams()

    // add book to the firebase collection
    const onSubmitHandeler = async (book) => {
        const booksCollectonRef = collection(db, "BookTwo");
        await addDoc(booksCollectonRef, book);
        navigate("/");    
    }

  return  (
    <>
        <AddBookForm onSubmitHandeler={onSubmitHandeler}  id={id}  />
    </>
  )
}

export default AddBook