import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCN2sX3nqO86mWFgFFW9Ftx6ry6L3FF_Gc",
    authDomain: "codifiedcoder-83e66.firebaseapp.com",
    databaseURL: "https://codifiedcoder-83e66.firebaseio.com",
    projectId: "codifiedcoder-83e66",
    storageBucket: "codifiedcoder-83e66.appspot.com",
    messagingSenderId: "237324063309",
    appId: "1:237324063309:web:cf27fe3dd9b392eaa4c204",
    measurementId: "G-XWZCL5JG4B"
  };
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


 const getExperienceList = async ()=>{
  const expCol = collection(db, 'experience');
  const expSnapShot = await getDocs(expCol);
  const expList = expSnapShot.docs.map(doc => doc.data());
  return expList;
}

const getSiteData = async ()=>{
    const siteCol = collection(db, 'site-data');
    const siteSnapshot = await getDocs(siteCol);
    const siteData = siteSnapshot.docs.map(doc => {return {data:doc.data(),type:doc.id}});
    return siteData;
}

const getProjects = async ()=>{
  const projectCol = collection(db, 'projects');
  const projectSnapshot = await getDocs(projectCol);
  const projectData = projectSnapshot.docs.map(doc => {return {data:doc.data(),type:doc.id}});
  return projectData;
}
export {getExperienceList,getSiteData, getProjects}