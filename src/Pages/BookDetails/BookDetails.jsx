import { Rating } from "@smastrom/react-rating";
import { Link, useLoaderData } from "react-router-dom";
import '@smastrom/react-rating/style.css'
import { useContext, useState } from "react";
import { authContex } from "../../Components/AuthProvider/AuthProvider";
import useAxios from "../../Components/Hooks/useAxios";
import swal from "sweetalert";


const BookDetails = () => {
    const loadedBookDetail = useLoaderData()
    const [quantity,setQuantity] = useState(loadedBookDetail?.quantity)
    const {image,name,author_name,rating,category,short_description,_id}= loadedBookDetail
    
    const [returnDate,setReturnDate] = useState('')
    const axiosBasic = useAxios()
    const {user} = useContext(authContex)
    
    const closeModal =()=>{
        document.getElementById('my_modal_5').close();
    }
    const handleBorrow=()=>{
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); 
        const day = currentDate.getDate().toString().padStart(2, '0');
        const issueDate = `${year}-${month}-${day}`;
        const username = user?.displayName
        const userEmail = user?.email
        const borrowInfo = {username,userEmail,issueDate,returnDate,bookName:name,bookCategory:category,bookImage:image}
        console.log(borrowInfo);
        axiosBasic.post('/addToBorrowed', borrowInfo)
  .then(res => {
    swal("Congratulations!", "Book added successfully!", "success");
    const newQuantity = quantity - 1;
    setQuantity(newQuantity)
    axiosBasic.patch(`/updateQuantity/${_id}`,{quantity:newQuantity})
    .then(res=>{
        console.log(res.data);
    })
    closeModal()
  })
  .catch(error => {
    if (error.response) {
      if (error.response.status === 400) {
        closeModal()
        swal("Oops!", error.response.data.message, "error");
      }
    }
  });


        
    }

    return (
        <div className=" overflow-hidden w-[80%] mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="px-4 py-2 text-center">
            <h1 className="text-lg lg:text-2xl font-semibold text-gray-800  dark:text-white">Title: {name}</h1>
            <p className="mt-1 text-gray-600 dark:text-gray-400 "><span className="text-lg font-medium">Author: </span>{author_name}</p>

</div>

<img className="object-cover w-[60%] mx-auto mt-2 rounded" src={image}  />

<div className="flex items-center w-[60%] mx-auto justify-between px-4 py-2 bg-gray-900">

<button title={quantity ? '' : 'Book is not available'} disabled={!quantity} onClick={()=>document.getElementById('my_modal_5').showModal()} className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Borrow</button>
 <Link to={`/content/${_id}`}>
 <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Read</button>
 </Link>
</div>
<div className="text-center space-y-2 my-3">
<p className="mt-1 text-gray-600 dark:text-gray-400"><span className="text-lg font-medium">Description: </span>{short_description}</p>
<p className="mt-1 text-gray-600 dark:text-gray-400 "><span className="text-lg font-medium">Category: </span>{category}</p>
<p className="mt-1 text-gray-600 dark:text-gray-400 "><span className="text-lg font-medium">Quantity: </span>{quantity ? quantity : 0}</p>
<p className="text-sm flex  justify-center items-center "><span className="font-medium">Rating: </span>
<Rating style={{ maxWidth: 150 }}  readOnly size={30} value={rating}  />
</p>

</div>
{/* Modal Code */}

<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className=""><span className="font-medium">Name: </span>{user?.displayName}</h3>
    <h3 className=""><span className="font-medium">Email: </span>{user?.email}</h3>
    <h4 className="font-medium">Return Date:</h4>
    <input onChange={(e)=>setReturnDate(e.target.value)} type="date" value={returnDate} name="returnDate" />
    <div className="flex flex-col">
        <button onClick={handleBorrow} className="btn btn-ghost">Submit</button>
        
    </div>
    <div className="modal-action">
      <form method="dialog">
        
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
</div>
    );
};

export default BookDetails;