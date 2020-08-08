import React, { useState } from 'react'
import { View, Text, ScrollView, TextInput } from 'react-native'

import PageHeader from '../../components/PageHeader';

import styles from './styles';
import TeacherItem from '../../components/TeacherItem';

function TeacherList() {
 const [isFilterVisible, setIsFilterVisible] = useState(false);

  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis" >
       { isFilterVisible &&(  
        <View style={styles.searchForm}>
          <Text style={styles.label}>Matéria</Text>
          <TextInput
            style={styles.input}
            placeholder="Qual a matéria?"
            placeholderTextColor="#c1bccc"
          />
          <View style={styles.inputGroup}>
            
            <View style={styles.inputBlock}>
              <Text style={styles.label}>Dia da semana</Text>
              <TextInput
                style={styles.input}
                placeholder="Qual o dia?"
                placeholderTextColor="#c1bccc"
              />
            </View>
            
            <View style={styles.inputBlock}>
              <Text style={styles.label}>Horário</Text>
              <TextInput
                style={styles.input}
                placeholder="Qual horário?"
                placeholderTextColor="#c1bccc"
              />
            </View>

          </View>
        </View>
        )}
      </PageHeader>
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 24,
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
}

export default TeacherList;