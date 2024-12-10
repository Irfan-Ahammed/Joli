import PageOne from '../screens/signUp/PageOne';
import PageTwo from '../screens/signUp/PageTwo';

const WELCOME_CONTENTS = [
  {
    title: 'Welcome to Joli!',
    description:
      'Find the right job opportunities tailored to your skills and preferences. Your journey to meaningful work starts here.',
    image: 'WelcomeJoli',
  },
  {
    title: 'Get Rewarded',
    description:
      'Earn through consistent work. Build your profile and secure jobs that value your dedication and skills.',
    image: 'GetRewarded',
  },
  {
    title: 'Discover Opportunities',
    description:
      'Explore a wide range of jobs near you. From daily gigs to part-time roles, Joli brings opportunities to your fingertips.',
    image: 'DiscoverOpportunities',
  },
];
const registerScreens = [
  {
    component: <PageOne />,
  },
  {
    component: <PageTwo />,
  },
];

export default {WELCOME_CONTENTS, registerScreens};
