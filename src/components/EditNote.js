// import React, { useState, useEffect } from 'react';
// import { View, Text, ScrollView, KeyboardAvoidingView, Keyboard, TouchableOpacity, TextInput, StyleSheet, Platform } from 'react-native';
// import * as Style from '../../assets/style';
// import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// import { apiCall } from './OpenAI'; // Import the apiCall function

// const EditNote = ({ route, navigation, ...props}) => {

//   const { i, n } = route.params;
//   const [newEdit, setNewEdit] = useState(n);
//   const [convertedDocument, setConvertedDocument] = useState(null);

//   useEffect(() => {
//     // You can add code here to fetch the converted document from OpenAI API if available
//   }, []);

//   async function convertToDocument(type) {
//     try {
//       const response = await apiCall(`Convert this note to a ${type}`, []);

//       if (response.success) {
//         const generatedContent = response.data[response.data.length - 1].content;
//         setConvertedDocument(generatedContent);
//       } else {
//         // Handle API error
//         Alert.alert('Error', 'Failed to convert the note into a document.');
//       }
//     } catch (error) {
//       console.error('API request error:', error);
//       Alert.alert('Error', 'Failed to convert the note into a document.');
//     }
//   }


//   return (
//         <ScrollView>
//           <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
//             <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//               <View style={{ padding: 20, marginTop: 50, justifyContent: 'space-around ' }}>
//                 <TextInput
//                   style={styles.input}
//                   placeholder='Type here...'
//                   multiline={true}
//                   value={newEdit.toString()}
//                   onChangeText={(text) => setNewEdit(text)}
//                 />

//                 <TouchableOpacity style={styles.button} onPress={() => editNote()}>
//                   <Text style={styles.buttonText}>Edit</Text>
//                 </TouchableOpacity>

//                 {/* Add buttons to convert to different document types */}
//                 <TouchableOpacity
//                   style={styles.button}
//                   onPress={() => convertToDocument('Business Plan')}>
//                   <Text style={styles.buttonText}>Convert to Business Plan</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={styles.button}
//                   onPress={() => convertToDocument('Formal Letter')}>
//                   <Text style={styles.buttonText}>Convert to Formal Letter</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={styles.button}
//                   onPress={() => convertToDocument('Informal Letter')}>
//                   <Text style={styles.buttonText}>Convert to Informal Letter</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={styles.button}
//                   onPress={() => convertToDocument('Legal Document')}>
//                   <Text style={styles.buttonText}>Convert to Legal Document</Text>
//                 </TouchableOpacity>

//                 {convertedDocument && (
//                   <View>
//                     <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>Converted Document:</Text>
//                     <Text>{convertedDocument}</Text>
//                   </View>
//                 )}
//               </View>
//             </TouchableWithoutFeedback>
//           </KeyboardAvoidingView>
//         </ScrollView>
//       );

// }

// export default EditNote;

// const styles = StyleSheet.create({
//   addNoteContainer: {
//     paddingHorizontal: 20,
//     marginTop: 20,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   input: {
//     padding: 20,
//     paddingTop: 20,
//     width: '100%',
//     fontSize: 19,
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
//     fontWeight: '700',
//   },
// });






import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Keyboard, TouchableOpacity, TextInput, StyleSheet, Platform, Alert } from 'react-native';
import * as Style from '../../assets/style';
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { apiCall } from './OpenAI'; // Import the apiCall function

const EditNote = ({ route, navigation, ...props }) => {

  const { i, n } = route.params;
  const [newEdit, setNewEdit] = useState(n);
  const [convertedDocument, setConvertedDocument] = useState(null);

  useEffect(() => {
    // You can add code here to fetch the converted document from OpenAI API if available
    useEffect(() => {
      // Check if there is already a converted document available for this note in AsyncStorage
      const fetchConvertedDocument = async () => {
        try {
          const storedConvertedDocument = await AsyncStorage.getItem(`convertedDocument_${i}`);
          if (storedConvertedDocument) {
            // If a converted document is found in AsyncStorage, set it in the state
            setConvertedDocument(storedConvertedDocument);
          }
        } catch (error) {
          console.error('Error fetching converted document from AsyncStorage:', error);
        }
      };
    
      // Call the function to fetch the converted document when the component mounts
      fetchConvertedDocument();
    }, []);
    
  }, []);

  
  async function convertToDocument(type) {
    try {
      const response = await apiCall(`Convert this note to a ${type}`, []);

      if (response.success) {
        const generatedContent = response.data[response.data.length - 1].content;
        setConvertedDocument(generatedContent);
        setNewEdit(generatedContent); // Update the TextInput value with the generated content
      } else {
        // Handle API error
        Alert.alert('Error', 'Failed to convert the note into a document.');
      }
    } catch (error) {
      console.error('API request error:', error);
      Alert.alert('Error', 'Failed to convert the note into a document.');
    }
  }


  async function editNote() {
    // Implement your edit note logic here
    async function editNote() {
      try {
        // Assuming you have an API or method to save the edited note
        // You can use AsyncStorage or any other data storage method
        await AsyncStorage.setItem(`note_${i}`, newEdit);
        Alert.alert('Success', 'Note edited successfully');
      } catch (error) {
        console.error('Error editing note:', error);
        Alert.alert('Error', 'Failed to edit the note.');
      }
    }
    
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ padding: 20, marginTop: 50, justifyContent: 'space-around ' }}>
            <TextInput
              style={styles.input}
              placeholder='Type here...'
              multiline={true}
              value={newEdit.toString()}
              onChangeText={(text) => setNewEdit(text)}
            />

            <TouchableOpacity style={styles.button} onPress={() => editNote()}>
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>

            {/* Add buttons to convert to different document types */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => convertToDocument('Business Plan')}>
              <Text style={styles.buttonText}>Convert to Business Plan</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => convertToDocument('Formal Letter')}>
              <Text style={styles.buttonText}>Convert to Formal Letter</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => convertToDocument('Informal Letter')}>
              <Text style={styles.buttonText}>Convert to Informal Letter</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => convertToDocument('Legal Document')}>
              <Text style={styles.buttonText}>Convert to Legal Document</Text>
            </TouchableOpacity>


            {convertedDocument && (
              <View>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>Converted Document:</Text>
                <Text>{convertedDocument}</Text>
              </View>
            )}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default EditNote;

const styles = StyleSheet.create({
  addNoteContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    padding: 20,
    paddingTop: 20,
    width: '100%',
    fontSize: 19,
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
    height: 300
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
  }
})
