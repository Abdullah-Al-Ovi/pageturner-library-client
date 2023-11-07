import swal from "sweetalert";
import useAxios from "../../../Components/Hooks/useAxios";


const BorrowedBook = ({book,borrowedBooks,setBorrowedBooks}) => {
    const {issueDate,returnDate,bookName,bookCategory,bookImage,_id} = book
    const axiosBasic = useAxios()

    const handleReturn = ()=>{
        axiosBasic.delete(`/returnBook/${_id}`)
        .then(res=>{
            console.log(res.data);
            if(res.data.deletedCount){
                const rem = borrowedBooks?.filter(borrowedBook=>borrowedBook._id !== book._id)
                setBorrowedBooks(rem)
                swal('Yesss!','You have returned the book','success')
            }
        })
    }
    return (
        <div className="md:flex text-center md:text-start justify-between  my-3 shadow-md">
            <div className="w-[50%] mx-auto md:w-[25%] h-44 lg:h-56  object-cover border-2  lg:my-auto">
                <img className="object-cover   w-full h-full" src={bookImage}  />
            </div>
            <div className="flex flex-col flex-1 px-3 justify-center">
                <p><span className="font-medium">Title: </span>{bookName}</p>
                <p><span className="font-medium">Category: </span>{bookCategory}</p>
            </div>
            <div className="flex flex-col flex-1 px-2 justify-center">
                <p><span className="font-medium">Issue Date: </span>{issueDate}</p>
                <p><span className="font-medium">Return Date: </span>{returnDate}</p>
            </div>
            <div className="md:flex p-1 md:justify-end md:items-end ">
            <button onClick={handleReturn} className="p-[2px] border-2 bg-blue-200 rounded font-medium">Return</button>
            </div>
        </div>
    );
};

export default BorrowedBook;