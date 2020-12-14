import './sass/main.scss';
import 'material-design-icons/iconfont/material-icons.css';
// import './addCardLogic';
// import './scripts/main';
import addLogic from './scripts/addCardLogic';
import modalLogic from './scripts/addAndEditCardLogic';
import addCard from './templates/add.hbs';
import fetchFunctions from './scripts/fetchMe';

const mainPage = document.querySelector('body');
mainPage.insertAdjacentHTML('afterbegin', addCard());

addLogic();
modalLogic();

// const logInfo = {
//   email: 'titoff.roma@gmail.com',
//   password: 'qweqwe12',
// };
// const request = {
//   point: fetchFunctions.points.login,
//   body: logInfo,
//   method: 'POST',
//   //query: '1'
// };
// (async () => {
//   await fetchFunctions.login(request);
//   const newRequest = {
//     point: fetchFunctions.points.user,
//   };
//   const response = await fetchFunctions.getRequest(newRequest);
//   console.log('get user - authorized -', response);
// })();
