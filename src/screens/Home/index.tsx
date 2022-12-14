import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from "react-native";
import { styles } from "./style";

import { Participant } from "../../components/Participant";

export default function Home() {
  const [participants, setParticpants] = useState<string[]>([]);
  const [participantName, setParticpantName] = useState('');


  function handleParticpantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert('Nome já cadastrado');
    }
    setParticpants(prevState => [...prevState, participantName]);
    setParticpantName('');
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover participante', `Deseja remover ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticpants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do projeto
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={text => setParticpantName(text)}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticpantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listemptyText}>
            Ninguém chegou ainda 😢
          </Text>
        )}
      />
    </View>
  );
}
