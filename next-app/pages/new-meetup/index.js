import NewMeetupForm from '@/components/meetups/NewMeetupForm';

function NewMeetupPage() {
  const addMeetupHandler = () => {
    console.log(addMeetupHandler);
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
