import { useContext, useEffect, useState } from "react";
import { authContex } from "../../Components/AuthProvider/AuthProvider";
import useAxios from "../../Components/Hooks/useAxios";
import BorrowedBook from "./BorrowedBook/BorrowedBook";


const BorrowedBooks = () => {
    const {user}= useContext(authContex)
    const axiosBasic = useAxios()
    const [borrowedBooks,setBorrowedBooks] = useState([])
    useEffect(()=>{
        axiosBasic.get(`/borrowedBooks/${user?.email}`)
        .then(res=>{
            setBorrowedBooks(res?.data)
        })
    },[axiosBasic,user?.email])
    return (
        <div>
           <div className="text-lg lg:text-xl text-center font-medium my-5">
           <span >Total books you have borrowed yet: {borrowedBooks?.length}</span>  
            </div>
            <div className="w-[80%] lg:w-[50%] gap-3 mx-auto ">
                {
                  borrowedBooks?.map(book=><BorrowedBook key={book._id} book={book} borrowedBooks={borrowedBooks} setBorrowedBooks={setBorrowedBooks}></BorrowedBook>)  
                }
            </div>
            {
                borrowedBooks?.length === 0 && <div className=" h-[50vh] flex justify-center items-center text-center  mx-auto "><h1 className="mx-auto text-xl text-red-500 font-semibold ">Your borrowed list is empty.</h1></div>
            }

        </div>
    );
};

export default BorrowedBooks;