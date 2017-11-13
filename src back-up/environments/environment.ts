// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  
  //dari website firebase
  firebaseConfig : 
  {
    apiKey: "AIzaSyCf5EyBsypVoLP3d1hPAGp77lQ_REHuWZk",
    authDomain: "employeeregister-2c911.firebaseapp.com",
    databaseURL: "https://employeeregister-2c911.firebaseio.com",
    projectId: "employeeregister-2c911",
    storageBucket: "employeeregister-2c911.appspot.com",
    messagingSenderId: "596300439583"
  }
};
