import React from 'react';
import { StyleSheet, Text, TextInput, Button, View, Modal, TouchableHighlight } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import DatePicker from 'react-native-datepicker'

class Scheduler extends React.Component {

    state = {
      modalVisible: false,
      text: '',
      startDate: new Date(),
      endDate: new Date()
    };
    
    setModalVisible(visible) {
      this.setState({modalVisible: visible});
    }

    render() {
      return (
        <View style={styles.container}>
          <CalendarList 
           onDayPress={
               (day) => {
                    console.log('selected day', day); 
                    this.setModalVisible(!this.state.modalVisible);
                }
            }
          />

          <Modal
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}>
            <View style={styles.modalContainer}>
                <View style={{
                      width: 300,
                      height: 300,
                      backgroundColor: '#fff', 
                      padding: 20,
                      justifyContent: 'space-between'}}>
                  <Text>Title</Text>
                  <TextInput
                    placeholder="Type title"
                    onChangeText={(text) => this.setState({text})}
                  />
                  <DatePicker
                    style={{width: 200}} 
                    date={this.state.startDate}
                    mode="date"
                    androidMode="spinner"
                    placeholder="select start date"
                    format="YYYY-MM-DD"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                      },
                      dateInput: {
                        marginLeft: 36
                      }
                      // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {this.setState({startDate: date})}}
                  />
                  <DatePicker
                    style={{width: 200}} 
                    date={this.state.endDate}
                    mode="date"
                    androidMode="spinner"
                    placeholder="select start date"
                    format="YYYY-MM-DD"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                      },
                      dateInput: {
                        marginLeft: 36
                      }
                      // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {this.setState({endDate: date})}}
                  />
                  <Text>Memo</Text>
                  <TextInput
                    placeholder="Type memo"
                    onChangeText={(text) => this.setState({text})}
                  />
                  <View style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row'
                    }}>
                    <Button
                      onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                      }}
                      title="Save"
                      color="#841584"
                    />
                    <Button
                      onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                      }}
                      title="Cancel"
                      color="#999"
                    />
                  </View>
                </View>
            </View>
          </Modal>

        </View>
      );
    }
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalContainer: {
      backgroundColor: '#00000080',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
  }); 

  export default Scheduler;