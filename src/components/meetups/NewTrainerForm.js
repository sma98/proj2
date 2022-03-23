import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewTrainerForm.module.css';

function NewTrainersForm(props) {
  //NewTrainersForm(props)
  const nameInputRef = useRef();
  const imageInputRef = useRef();
  const nicInputRef = useRef();
  const descriptionInputRef = useRef();
  const cidInputRef=useRef();
  const emailInputRef=useRef();
  const pnumbInputRef=useRef();

  //function submitHandler(event)
  function submitHandler(event) {
    event.preventDefault();

    // addToDb.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredNic = nicInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredCid = cidInputRef.current.value;
    const  enteredPnum=pnumbInputRef.current.value;
    const enteredEmail=emailInputRef.current.value;

    const TrainersData = {
      name: enteredName,
      image: enteredImage,
      nic: enteredNic,
      description: enteredDescription,
      email:enteredEmail,
      pnum:enteredPnum,
      cid:enteredCid
    };
    
    console.log(TrainersData);
    
    props.submitHandler(TrainersData);
    //props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Fullname</label>
          <input type='text' required id='name' ref={nameInputRef} />
        </div>
        
        <div className={classes.control}>
          <label htmlFor='nic'>NIC</label>
          <input type='text' required id='nic' ref={nicInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='Certificate Id'>Certificate Id</label>
          <input type='text' required id='cid' ref={cidInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='email'>Email address</label>
          <input type='text' required id='email' ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='pnumb'>Phone number</label>
          <input type='text' required id='pnumb' ref={pnumbInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'> Image</label>
          <input type='text' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button type='submit'>Add Trainer</button>
        </div>
      </form>
    </Card>
  );
}

export default NewTrainersForm;