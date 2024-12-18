import {StorageService} from '../services';

const type = {
  SET_IS_APP_LOADING: 'SET_IS_APP_LOADING',
  SET_TOKEN: 'SET_TOKEN',
  SET_FIRST_TIME_USE: 'SET_FIRST_TIME_USE',
};

const setIsAppLoading = isAppLoading => {
  //action creator
  return {
    //returning object
    type: type.SET_IS_APP_LOADING,
    payload: isAppLoading,
  };
};

const setToken = token => {
  //action creator
  return {
    type: type.SET_TOKEN,
    payload: token,
  };
};
const setFirstTimeUse = () => {
  return {
    type: type.SET_FIRST_TIME_USE,
    payload: false,
  };
};

const appStart = () => {
  //1- appStartnte akath
  return (dispath, getState) => {
    StorageService.getFirstTimeUse().then(isFirstTimeUse => {
      //2- 1st tym use ano enn ckecking
      dispath({
        type: type.SET_FIRST_TIME_USE,
        payload: isFirstTimeUse ? false : true,
      });
    });
    StorageService.getToken().then(token => {
      //3- token undo? checking..
      if (token) {
        dispath({
          type: type.SET_TOKEN,
          payload: token,
        });
      }
    });
    dispath({
      type: type.SET_IS_APP_LOADING,
      payload: false,
    });
  };
};

export default {setIsAppLoading, setFirstTimeUse, setToken, type, appStart};
//4- src/navigators/index.js