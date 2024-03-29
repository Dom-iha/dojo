import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';
import { action as manipulateEventAction } from './components/EventForm';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import EventsRootLayout from './pages/EventsRoot';
import EditEventPage from './pages/EditEvent';
import NewEventPage from './pages/NewEvent';
import ErrorPage from './pages/Error';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import EventDetailPage, {
   loader as eventDetailLoader,
   action as deleteEventAction,
} from './pages/EventDetail';

const router = createBrowserRouter([
   {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
         { index: true, element: <HomePage /> },
         {
            path: 'events',
            element: <EventsRootLayout />,
            children: [
               {
                  index: true,
                  element: <EventsPage />,
                  loader: eventsLoader,
               },
               {
                  path: ':eventId',
                  id: 'event-detail',
                  loader: eventDetailLoader,
                  children: [
                     {
                        index: true,
                        element: <EventDetailPage />,
                        action: deleteEventAction,
                     },
                     {
                        path: 'edit',
                        element: <EditEventPage />,
                        action: manipulateEventAction,
                     },
                  ],
               },
               {
                  path: 'new',
                  element: <NewEventPage />,
                  action: manipulateEventAction,
               },
            ],
         },
         {
            path: 'newsletter',
            element: <NewsletterPage />,
            action: newsletterAction,
         },
      ],
   },
]);

function App() {
   return <RouterProvider router={router} />;
}

export default App;
