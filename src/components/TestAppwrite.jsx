// // TestAppwrite.jsx
// import { useEffect, useState } from 'react';
// import { databases, appwriteConfig } from '../services/appwrite';

// const TestAppwrite = () => {
//     const [status, setStatus] = useState('Testing connection...');

//     useEffect(() => {
//         const testConnection = async () => {
//             try {
//                 const response = await databases.listDocuments(
//                     appwriteConfig.databaseId,
//                     appwriteConfig.meetupCollectionId
//                 );
                
//                 console.log('Connection successful!', response);
//                 setStatus('Connected! Check console for data');
                
//                 // Log the first document if it exists
//                 if (response.documents.length > 0) {
//                     console.log('First document:', response.documents[0]);
//                 } else {
//                     console.log('No documents found, but connection works!');
//                 }
//             } catch (error) {
//                 console.error('Connection error:', error);
//                 setStatus(`Error: ${error.message}`);
//             }
//         };

//         testConnection();
//     }, []);

//     return (
//         <div>
//             <h2>Appwrite Connection Test</h2>
//             <p>{status}</p>
//         </div>
//     );
// };

// export default TestAppwrite;