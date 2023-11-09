# Live Link: https://pageturnerlibrary.surge.sh/
### Message for PH Team:
  * Applied optional requirements no 1 and 5.
  * So only admin can add and update book. Email : admin@gmail.com and pass: Asdfg@
  * Don't copy-paste pass,rather type it manually.
  * JWT token in cookie will be available for 1 hour.After that you have to sign in again to add or update book.Hopefully you will be automatically signed out and redirected to sign in page.(This will happen when add/update button is clicked.As JWT verification is applied on POST/PUT method.)
  * Though after borrowing a book without returning it gives a success message,but the book is not stored in DB or borrowed books route.

### Feature:
  * Only authorized admin/moderator can add book or update book information.
  * Add book route and update button will visible only when authorized admin/moderator logins.
  * User can borrow and return book.
  * A specific user can't borrow a specific book until he/she returns it.
  * When a book becomes unavailable(quantity=)0,the **Borrow** button for it will be disabled.
  * When a book is borrowed the quantity gets decreased by 1.
  * When a book is returned the quantity gets increased by 1.
  * User token will be valid till 1 hour after signing in.After the time period if user goes to *All Books** page.he/she be automatically signed out and redirected to sign in page.