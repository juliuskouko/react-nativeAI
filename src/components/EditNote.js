// import { View, Text, ScrollView, KeyboardAvoidingView, Keyboard, TouchableOpacity, Button, TextInput } from 'react-native';
// import React, { useState } from 'react';
// import { styles } from './AddNote'
// import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport';
// import axios from 'axios';

// // import navigation from '../navigation';
// // import { TextInput } from 'react-native-paper';
// import { apiCall } from '../api/openAI';

// export default function EditNote({ route, navigation, ...props }) {

//   const { i, n } = route.params;
//   const [newEdit, setNewEdit] = useState(n);
//   const [generatedDocument, setGeneratedDocument] = useState('');
//   const [documentType, setDocumentType] = useState('');

//   function editNote() {
//     let edited = [...props.notes];
//     edited[i] = newEdit;
//     props.setNotes(edited);

//     navigation.navigate('Notes')
//   };

//   // const convertToDocument = async (type) => {
//   //     try {
//   //         const response = await apiCall(newEdit, type, apiCall); // Replace with your API key
//   //         if (response.success) {
//   //             const generatedDoc = response.data;
//   //             setGeneratedDocument(generatedDoc);
//   //             setDocumentType(type);
//   //         } else {
//   //             console.error('API call failed:', response.msg);
//   //         }
//   //     } catch (error) {
//   //         console.error('Error:', error);
//   //     }
//   // };

//   // const convertToDocument = async (type) => {
//   //   const apiKey = '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'; // Replace with your GPT-3 API key

//   //   try {
//   //     const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
//   //       prompt: `Convert the following note into a ${type}: ${newEdit}`,
//   //       max_tokens: 150,
//   //     }, {
//   //       headers: {
//   //         'Authorization': `Bearer ${apiKey}`,
//   //       },
//   //     });
//   //     console.log(response)
//   //     if (response.status === 200) {
//   //       const generatedDoc = response.data.choices[0].text;
//   //       setGeneratedDocument(generatedDoc);
//   //       setDocumentType(type);
//   //     } else {
//   //       console.error('API call failed:', response.statusText);
//   //     }
//   //   } catch (error) {
//   //     console.error('Error:', error);
//   //   }
//   // };
//   const convertToDocument = async (type, newEdit) => {
//     try {
//       const apiKey = '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';
//       const apiUrl = 'https://api.openai.com/v1/engines/davinci/completions';

//       // Construct the request payload
//       const requestData = {
//         prompt: `Convert the following note into a ${type}: ${newEdit}`,
//         max_tokens: 150,
//       };

//       // Configure the HTTP headers for the request
//       const requestHeaders = {
//         'Authorization': `Bearer ${apiKey}`,
//       };

//       // Make an HTTP POST request to the GPT-3 API
//       const response = await axios.post(apiUrl, requestData, { headers: requestHeaders });

//       // Check if the API call was successful
//       if (response.status === 200) {
//         // Extract the generated document from the response
//         const generatedDoc = response.data.choices[0].text;

//         // Perform actions with the generated document if needed
//         // For example, you can update state or display the document

//         return generatedDoc; // Return the generated document
//       } else {
//         console.error('API call failed:', response.statusText);
//         return null; // Return null to indicate an error
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       return null; // Return null to indicate an error
//     }
//   };


//   return (
//     <ScrollView>
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       // behavior='padding'
//       >
//         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//           <View style={{ padding: 20, justifyContent: 'space-around ' }}>
//             {/* <TextInput style={[styles.input]} placeholder='Type Here....' multiline={true}
//                             value={newEdit.toString()}
//                             onChangeText={(text) => setNewEdit(text)}
//                         /> */}

//             <TextInput
//               style={[styles.input]}
//               // style={{ height: 100, borderWidth: 1, padding: 10 }}
//               placeholder='Type here...'
//               multiline={true}
//               value={newEdit.toString()}
//               onChangeText={(text) => setNewEdit(text)}

//             />

//             <TouchableOpacity style={styles.button} onPress={() => editNote()}>
//               <Text style={styles.buttonText}>Edit</Text>
//             </TouchableOpacity>



//             {/* <Button title="Convert to Business Plan" onPress={() => convertToDocument('Convert the provided text into a prfessional Business Plan. If necessary information for the business plan is not provided, make all details for the business')} />
//             <Button title="Convert to Formal Letter" onPress={() => convertToDocument('Formal Letter')} />
//             <Button title="Convert to Informal Letter" onPress={() => convertToDocument('Informal Letter')} />
//             <Button title="Convert to Legal Document" onPress={() => convertToDocument('Legal Document')} />
//             <Button title="Convert to Articles" onPress={() => convertToDocument('Articles')} /> */}

//             <Button title="Convert to Business Plan" onPress={() => convertToDocument('Business Plan', newEdit)} />
//             <Button title="Convert to Formal Letter" onPress={() => convertToDocument('Formal Letter', newEdit)} />
//             <Button title="Convert to Informal Letter" onPress={() => convertToDocument('Informal Letter', newEdit)} />
//             <Button title="Convert to Legal Document" onPress={() => convertToDocument('Legal Document', newEdit)} />
//             <Button title="Convert to Articles" onPress={() => convertToDocument('Articles', newEdit)} />


//             {generatedDocument && (
//               <View>
//                 <Text style={{ fontWeight: 'bold', marginTop: 10 }}>
//                   Generated {documentType}:
//                 </Text>
//                 <Text>{generatedDocument}</Text>
//               </View>
//             )}
//           </View>
//         </TouchableWithoutFeedback>
//       </KeyboardAvoidingView>
//     </ScrollView>
//   )
// }



// import { View, Text, ScrollView, KeyboardAvoidingView, Keyboard, TouchableOpacity, Button, TextInput, Modal, StyleSheet, Image } from 'react-native';
// import React, { useState } from 'react';
// import { styles } from './AddNote';
// import * as Style from '../../assets/style';
// import axios from 'axios';
// import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Lightning } from '../../assets';

// export default function EditNote({ route, navigation, ...props }) {

//   const { i, n } = route.params;
//   const [newEdit, setNewEdit] = useState(n);
//   const [generatedDocument, setGeneratedDocument] = useState('');
//   const [documentType, setDocumentType] = useState('');
//   const [isPopupOpen, setIsPopupOpen] = useState(false);




//   const togglePopup = () => {
//     setIsPopupOpen(!isPopupOpen); // Toggle the pop-up state
//   };

//   async function convertToDocument(type, content) {
//     try {
//       const apiKey = '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'; // Replace with your GPT-3 API key
//       const apiUrl = 'https://api.openai.com/v1/engines/davinci/completions';

//       // Construct the request payload
//       const requestData = {
//         prompt: `Generate ${type}: ${content}`,
//         max_tokens: 500,
//       };

//       // Configure the HTTP headers for the request
//       const requestHeaders = {
//         'Authorization': `Bearer ${apiKey}`,
//       };

//       // Make an HTTP POST request to the GPT-3 API
//       const response = await axios.post(apiUrl, requestData, { headers: requestHeaders });

//       // Check if the API call was successful
//       if (response.status === 200) {
//         // Extract the generated document from the response
//         const generatedDoc = response.data.choices[0].text;
//         console.log(response)
//         // Set the generated document and document type in the component state
//         setGeneratedDocument(generatedDoc);
//         setDocumentType(type);
//       } else {
//         console.error('API call failed:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//     setIsPopupOpen(false);
//   }

//   function editNote() {
//     let edited = [...props.notes];
//     edited[i] = newEdit;
//     props.setNotes(edited);

//     navigation.navigate('Notes')


//     AsyncStorage.setItem('storedNotes', JSON.stringify(edited)).then(() => {
//       props.setMoveToBin(edited)
//     }).catch(error => console.log(error))

//   }

//   return (


//     <ScrollView>
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       >

//         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//           <View style={{ marginTop: 40, padding: 20, justifyContent: 'space-around ' }}>

//             <View className="w-full flex-row items-center justify-between px-4 py-2">
//               <TouchableOpacity onPress={() => editNote()}>
//                 <Text style={{fontSize: 20, fontWeight: 700, color: '#00A36C'}}>Edit</Text>
//               </TouchableOpacity>

//               <TouchableOpacity onPress={togglePopup}>
//                 <Image source={Lightning} className="w-12 h-12" resizeMode="contain" />
//               </TouchableOpacity>
//             </View>

//             {/* Your UI components */}
//             <TextInput
//               style={[style.input]}
//               placeholder='Type here...'
//               multiline={true}
//               value={generatedDocument || newEdit.toString()}
//               onChangeText={(text) => setNewEdit(text)}
//             />


//             {/* Conditionally render the pop-up */}
//             <Modal
//               transparent={true}
//               animationType="slide"
//               visible={isPopupOpen}
//             >
//               <View style={style.modalContainer}>
//                 <View style={style.modalContent}>
//                   {/* <Text style={style.modalHeading}>Convert To:</Text> */}
//                   <Button title="Business Plan" onPress={() => convertToDocument('Business Plan', newEdit)} />
//                   <Button title="Formal Letter" onPress={() => convertToDocument('Formal Letter', newEdit)} />
//                   <Button title="Informal Letter" onPress={() => convertToDocument('Informal Letter', newEdit)} />
//                   <Button title="Legal Document" onPress={() => convertToDocument('Legal Document', newEdit)} />
//                   <Button title="Articles" onPress={() => convertToDocument('Articles')} />
//                   <Button title="Explain" onPress={() => convertToDocument('Explain')} />
//                   <Button title="Close" onPress={togglePopup} />
//                 </View>
//               </View>
//             </Modal>
//           </View>
//         </TouchableWithoutFeedback>
//       </KeyboardAvoidingView>
//     </ScrollView>

//   )
// }

// const style = StyleSheet.create({

//   input: {
//     padding: 20,
//     paddingTop: 20,
//     width: '100%',
//     fontSize: 15,
//     color: 'black',
//     fontWeight: '600',
//     opacity: 0.8,
//     shadowColor: Style.color,
//     shadowOpacity: 0.4,
//     shadowOffset: { width: 0, height: 4 },
//     shadowRadius: 8,
//     elevation: 5,
//     backgroundColor: 'white',
//     borderColor: Style.color,
//     borderWidth: 2,
//     borderRadius: 5,
//     height: 300
//   },
//   button: {
//     backgroundColor: Style.color,
//     width: '40%',
//     borderRadius: 100,
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 40,
//     alignSelf: 'flex-end',
//     marginTop: 20
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 20,
//     fontWeight: '700'
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'flex-end', 
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     backgroundColor: 'white', 
//     padding: 20,
//     borderTopLeftRadius: 20, 
//     borderTopRightRadius: 20, 
//   },
//   modalHeading: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginLogotom: 10,
//   },
// });



import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  TextInput,
  Modal,
  StyleSheet,
  Image,
  Button
} from 'react-native';
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport';
import * as Style from '../../assets/style';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Lightning } from '../../assets';

export default function EditNote({ route, navigation, ...props }) {
  const { i, n } = route.params;
  const [newEdit, setNewEdit] = useState(n);
  const [generatedDocument, setGeneratedDocument] = useState('');
  const [documentType, setDocumentType] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen); // Toggle the pop-up state
  };

  async function generateChatGPTResponse(type, content) {
    try {
      const apiKey = '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'; // Replace with your GPT-3 API key
      const apiUrl = 'https://api.openai.com/v1/engines/davinci/completions';

      // Construct the request payload
      const requestData = {
        prompt: `Generate ${type}: ${content}`,
        max_tokens: 200,
      };

      // Configure the HTTP headers for the request
      const requestHeaders = {
        'Authorization': `Bearer ${apiKey}`,
      };

      // Make an HTTP POST request to the GPT-3 API
      const response = await axios.post(apiUrl, requestData, { headers: requestHeaders });

      // Check if the API call was successful
      if (response.status === 200) {
        // Extract the generated document from the response
        const generatedDoc = response.data.choices[0].text;
        // Set the generated document and document type in the component state
        setGeneratedDocument(generatedDoc);
        setDocumentType(type);
      } else {
        console.error('API call failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
    setIsPopupOpen(false);
  }

  function editNote() {
    let edited = [...props.notes];
    edited[i] = newEdit;
    props.setNotes(edited);

    navigation.navigate('Notes');

    AsyncStorage.setItem('storedNotes', JSON.stringify(edited))
      .then(() => {
        props.setMoveToBin(edited);
      })
      .catch(error => console.log(error));
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ marginTop: 40, padding: 20, justifyContent: 'space-around ' }}>
            <View className="w-full flex-row items-center justify-between px-4 py-2">
              <TouchableOpacity onPress={() => editNote()}>
                <Text style={{ fontSize: 20, fontWeight: 700, color: '#00A36C' }}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={togglePopup}>
                <Image source={Lightning} className="w-12 h-12" resizeMode="contain" />
              </TouchableOpacity>
            </View>
            {/* Your UI components */}
            <TextInput
              style={[style.input]}
              placeholder='Type here...'
              multiline={true}
              value={generatedDocument || newEdit.toString()}
              onChangeText={(text) => setNewEdit(text)}
            />
            {/* Conditionally render the pop-up */}
            <Modal
              transparent={true}
              animationType="slide"
              visible={isPopupOpen}
            >
              <View style={style.modalContainer}>
                <View style={style.modalContent}>
                  {/* <Text style={style.modalHeading}>Convert To:</Text> */}
                  <Button title="Articles" onPress={() => generateChatGPTResponse('Articles', newEdit)} />
                  <Button title="Informal Letter" onPress={() => generateChatGPTResponse('Informal Letter', newEdit)} />
                  <Button title="Legal Document" onPress={() => generateChatGPTResponse('Legal Document', newEdit)} />
                  <Button title="Formal Letter" onPress={() => generateChatGPTResponse('Formal Letter', newEdit)} />
                  <Button title="Business Plan" onPress={() => generateChatGPTResponse('Business Plan', newEdit)} />
                  {/* <Button title="Explain" onPress={() => generateChatGPTResponse('Explain', newEdit)} /> */}
                  <Button title="Close" onPress={togglePopup} />
                </View>
              </View>
            </Modal>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  input: {
    padding: 20,
    paddingTop: 20,
    width: '100%',
    fontSize: 15,
    color: 'black',
    fontWeight: '600',
    opacity: 0.8,
    shadowColor: Style.color,
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: 'white',
    borderColor: Style.color,
    borderWidth: 2,
    borderRadius: 5,
    height: 300,
  },
  button: {
    backgroundColor: Style.color,
    width: '40%',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    alignSelf: 'flex-end',
    marginTop: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLogotom: 10,
  },
});

