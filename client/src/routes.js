import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import ContactPage from './containers/ContactPage.jsx';
import ContactListPage from './containers/ContactListPage.jsx';
import ContactShowPage from './containers/ContactShowPage.jsx';

const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [

    {
      path: '/',
      component: HomePage
    },
    {
      path: '/login',
      component: LoginPage
    },

    {
      path: '/signup',
      component: SignUpPage
    },
    {
      path: '/add_contact',
      component: ContactPage
    },
    {
      path: '/contact_list',
      component: ContactListPage
    },
    {
      path: '/contact_details',
      component: ContactShowPage
    }
    
  ]
};

export default routes;
