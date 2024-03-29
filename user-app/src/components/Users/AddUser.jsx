import { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
   const nameInputRef = useRef();
   const ageInputRef = useRef();

   // const [enteredUsername, setEnteredUsername] = useState("");
   // const [enteredAge, setEnteredAge] = useState("");
   const [error, setError] = useState();

   const addUserHandler = (e) => {
      e.preventDefault();
     const enteredName = nameInputRef.current.value;
     const enteredUserAge = ageInputRef.current.value;
      if (
         enteredName.trim().length === 0 ||
         enteredUserAge.trim().length === 0
      ) {
         setError({
            title: "Invalid input",
            message: "Please enter a valid name and age (non-empty values).",
         });
         return;
      }
      if (+enteredUserAge < 1) {
         setError({
            title: "Invalid age",
            message: "Please enter a valid age (> 0).",
         });
         return;
      }

      props.onAddUser(enteredName, enteredUserAge);
      nameInputRef.current.value= ''
      ageInputRef.current.value= ''
   };

   // const usernameChangeHandler = (e) => {
   //    setEnteredUsername(e.target.value);
   // };
   // const ageChangeHandler = (e) => {
   //    setEnteredAge(e.target.value);
   // };
   const errorHandler = () => {
      setError(null);
   };

   return (
      <div>
         {error && (
            <ErrorModal
               title={error.title}
               message={error.message}
               onConfirm={errorHandler}
            />
         )}
         <Card className='input'>
            <form onSubmit={addUserHandler}>
               <label htmlFor='username'>Username</label>
               <input
                  id='username'
                  type='text'
                  // onChange={usernameChangeHandler}
                  // value={enteredUsername}
                  ref={nameInputRef}
               />
               <label htmlFor='age'>Age (Years)</label>
               <input
                  id='age'
                  type='number'
                  // onChange={ageChangeHandler}
                  // value={enteredAge}
                  ref={ageInputRef}
               />
               <Button type='submit'>Add User</Button>
            </form>
         </Card>
      </div>
   );
};

export default AddUser;
