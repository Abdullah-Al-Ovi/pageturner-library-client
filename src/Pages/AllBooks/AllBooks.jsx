import { useContext, useEffect, useState } from "react";
import useAxios from "../../Components/Hooks/useAxios";
import BookForAllBooks from "./BookForAllBooks/BookForAllBooks";
import { authContex } from "../../Components/AuthProvider/AuthProvider";

const AllBooks = () => {
    const axiosBasic = useAxios()
    const {user}=useContext(authContex)
    const [allBooks,setAllBooks]= useState([])
    const [availableBooks,setAvailableBooks] = useState([])
    const [books,setBooks] = useState([])
    const [selectedOption,setSelectedOption]= useState('')
    
    useEffect(()=>{
        axiosBasic.get('/allBooks').then(res=>{
            setAllBooks(res.data)
            setBooks(res.data)
        })
    },[axiosBasic])
    useEffect(()=>{
       const fetchAvailableBooks = async ()=>{
        if(selectedOption==='Available'){
            const res = await axiosBasic.get('/filteredBooks')
            console.log(res.data);
            setAvailableBooks(res.data)
            setBooks(res.data)
        }
       }
       fetchAvailableBooks()
    },[axiosBasic,selectedOption])

    const handleFilter =(e)=>{
        setSelectedOption(e.target.value)
        if(e.target.value === 'All'){
            console.log('All');
            setBooks(allBooks)
        }
        else if(e.target.value==='Available'){
            console.log('Available');
            // const filter = allBooks?.filter(singleBook=>singleBook?.quantity !== 0)
            // console.log(filter);
            setBooks(availableBooks)
        }
    }
    return (
        <div className="my-11">
            <div className="text-center my-3">
                <label className="block font-medium " htmlFor="dropdown">Filter:</label>
                <select className="border-2" value={selectedOption} onChange={handleFilter}>
                    <option value="All" >All Books</option>
                    <option value="Available">Available Books</option>
                </select>
            </div>
            <div className="grid grid-cols-2 w-[90%] md:w-[80%] gap-5 mx-auto">
             
             {
                 books?.map(book=><BookForAllBooks key={book._id} book={book} user={user}></BookForAllBooks>)
             }
         </div>
        </div>
    );
};

export default AllBooks;