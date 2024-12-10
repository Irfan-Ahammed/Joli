import auth from '@react-native-firebase/auth';

const getFriendlyErrorMessage = errorCode => {
  const errorMessages = {
    'auth/weak-password': 'Password must be at least 6 characters.',
    'auth/invalid-email': 'The email address is not valid.',
    'auth/email-already-in-use': 'This email address is already registered.',
    'auth/operation-not-allowed': 'Signup is currently disabled.',
    'auth/network-request-failed': 'Network error. Please try again.',
  };

  return errorMessages[errorCode] || 'An unexpected error occurred';
};

export const signUpScreenOne = async (
  email,
  password,
  navigation,
  setError,
) => {
  if (!email || !password) {
    setError('Please enter all required fields');
    return;
  }
  try {
    const cred = await auth().createUserWithEmailAndPassword(
      email.trim(),
      password,
    );
    console.log('User created with UID:', cred.user.uid);
    navigation.navigate('PageTwo');
  } catch (err) {
    const friendlyMessage = getFriendlyErrorMessage(err.code);
    setError(friendlyMessage);
  }
};

export const signUpScreenTwo = (firstName, lastName, navigation, setError) => {
  if (!firstName || !lastName) {
    setError('Please enter your first and last name');
    return;
  }
  const fullname = `${firstName} ${lastName}`;
  const currentUser = auth().currentUser;
  if (currentUser) {
    return currentUser
      .updateProfile({
        displayName: fullname,
      })
      .then(() => {
        console.log('User profile updated with name:', fullname);
        navigation.navigate('Signin');
        return fullname;
      })
      .catch(err => {
        setError(`Error: ${err.message}`);
        throw err;
      });
  } else {
    setError('No user is currently logged in');
    return Promise.reject(new Error('No user is logged in'));
  }
};
export const signIn = (email, password, navigation, setError) => {
  return auth()
    .signInWithEmailAndPassword(email.trim(), password)
    .then(() => {
      console.log('User signed in with UID:', auth().currentUser.uid);
      navigation.navigate("Home")
      return auth().currentUser.uid;
    })
    .catch(err => {
      const friendlyMessage = getFriendlyErrorMessage(err.code);
      setError(friendlyMessage);
    });
};

export const signOut = () => {
  return auth()
    .signOut()
    .then(() => {
      console.log('User signed out successfully');
    })
    .catch(err => {
      alert(`Error: ${err.message}`);
      throw err; // Optional: rethrow the error if needed
    });
};
