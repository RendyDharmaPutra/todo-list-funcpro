import { useState, useCallback } from "react";
import { View, TextInput, Alert, KeyboardAvoidingView, Platform, Button, StyleSheet } from "react-native";
import { collection, addDoc } from "@react-native-firebase/firestore";
import { db } from "../configs/firebaseConfig";

const AddTodosScreen = ({ navigation }) => {
    const [todo, setTodo] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');

    const handleAddTodo = useCallback(async () => {
        if (!todo.trim() || !time.trim() || !description.trim) {
            Alert.alert('Validation Error', 'Harap isi semua data');
            return;
        }

        try
        {
            await addDoc(collection(db, 'todos'), 
            {
                todo: todo.trim(),
                time: time.trim(),
                description: description.trim(),
                status: 'Doing',
            });
            Alert.alert('Success', 'Tugas berhasil ditambahkan');
        } catch (error) 
            {
                console.error('Error adding data:', error);
                Alert.alert('Error', 'Terjadi kesalahan saat menambahkan data');
            }
    },[todo, time, description, navigation]);
    
    return (
        <KeyboardAvoidingView
            style={style.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <View style={style.form}>
                <TextInput
                    style = {style.input}
                    placeholder="nama kegiatan"
                    value={todo}
                    onChangeText={setTodo}
                />

                <TextInput
                    style = {style.input}
                    placeholder="waktu"
                    value={time}
                    onChangeText={setTime}
                />

                <TextInput
                    style = {[style.input, style.description]}
                    placeholder="Keterangan"
                    value={description}
                    onChangeText={setDescription}
                    multiline
                />

                <Button title="Tambah To-Do" onPress={handleAddTodo}/>
                </View>
        </KeyboardAvoidingView>
    )
}

const style = StyleSheet.create
({
    container: {flex: 1, padding: 20, backgroundColor: "#fff"},
    form: {flex: 1, justifyContent: "center"},
    input: 
    {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        marginBottom: 16,
        borderRadius: 10
    },
    description: 
    {
        height: 100,
        textAlignVertical: 'top'
    }
});

export default AddTodosScreen;