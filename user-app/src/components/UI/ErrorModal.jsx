import { createPortal } from "react-dom";
import { Fragment } from "react";
import Button from "./Button";
import Card from "./Card";

const Backdrop = (props) => {
   return <div className='backdrop' onClick={props.onConfirm}></div>;
};

const ModalOverlay = (props) => {
   return (
      <Card className='modal'>
         <header className='header'>
            <h2>{props.title}</h2>
         </header>
         <div className='content'>
            <p>{props.message}</p>
         </div>
         <footer className='actions'>
            <Button onClick={props.onConfirm}>Okay</Button>
         </footer>
      </Card>
   );
};
 
const ErrorModal = (props) => {
   return (
      <Fragment>
         {createPortal(
            <Backdrop onConfirm={props.onConfirm} />,
            document.getElementById("backdrop-root")
         )}
         {createPortal(
            <ModalOverlay
               title={props.title}
               message={props.message}
               onConfirm={props.onConfirm}
            />,
            document.getElementById("overlay-root")
         )}
      </Fragment>
   );
};

export default ErrorModal;
