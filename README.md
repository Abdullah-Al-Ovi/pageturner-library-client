# Live Link: https://pageturnerlibrary.surge.sh/
### Admin Credentials: 
  *  Email : admin@gmail.com
  *  pass: Asdfg@
### Feature:
  * Only authorized admin/moderator can add book or update book information.
  * Add book route and update button will visible only when authorized admin/moderator logins.
  * User can borrow and return book.
  * A specific user can't borrow a specific book until he/she returns it.
  * When a book becomes unavailable(quantity=)0,the **Borrow** button for it will be disabled.
  * When a book is borrowed the quantity gets decreased by 1.
  * When a book is returned the quantity gets increased by 1.
  * User token will be valid till 1 hour after signing in.After the time period if user goes to *All Books** page.he/she be automatically signed out and redirected to sign in page.

### Details:
  * Used reactjs as frontend technology and nodejs & mongodb as backend technology.
  * Used firebase for authentication.
  * Applied success/error message when user sign in or sign up.
  * Applied logics to redirect unregistred user to sign in page to confirm their identity.
  * Used JWT for authorization and protecting API.
  * Created API for CRUD operation on various functionality such as to add,update,borrow and return book.
  * Also added private route to maintain security.
  * To restrict a specified book from borrowing untill returning it,protected post method and send response with a status code and message.
  * Made the borrow button disable when book's quantity stands to zero.
  * Gave the permission of adding or updating book only to the admin.
  * Restricted normal user to enter into the admin protected route.
  * Made sure when a user borrows a book the quantity is decreased and when a user returns a book the quantity incraeses.
  * Also implemented the available books filtering option.
  * Applied success/error message at every succesfull CRUD operation.
