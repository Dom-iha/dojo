import MeetupDetail from '@/components/meetups/MeetupDetail';

function MeetupDetails() {
  return (
    <>
      <MeetupDetail
        image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg?20130611211153'
        title='First Meetup'
        address='Some Street 5,Some City'
        description='The meetup description'
      />
    </>
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg?20130611211153',
        id: 'm1',
        title: 'First Meetup',
        address: 'Some Street 5,Some City',
        description: 'The meetup description',
      },
    },
    revalidate: 10,
  };
}

export default MeetupDetails;
