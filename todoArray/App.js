import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      database: [
       
      ],
      inputanDatabase: "",
      idDataPraUpdate: 0,
      statusBtn: "add"
    }
  }

  addData = () => {
    // Destructuring array
    //  ...
    let itemInputan = {
      id: this.state.database.length + 1,
      task: this.state.inputanDatabase
    }
    const result = [...this.state.database, itemInputan]
    this.setState({ database: result })
    this.setState({ inputanDatabase: "" })
  }


  tampilkanData = () => {
    return this.state.database.map((value, index) => {
      return (
        <View key={index} style={{ height: 60, width: "100%", flexDirection: "row" }}>
          <View style={{ width: "80%", backgroundColor: "yellow" }}>
            <Text style={{ fontSize: 20 }}>{value.id} - {value.task}</Text>
          </View>
          <View style={{ width: 100, height: 60, justifyContent: "space-between" }}>
            <TouchableOpacity onPress={() => this.praUpdate(value)} style={{ height: 30, width: 50, backgroundColor: "green", alignItems: "center", justifyContent: "center" }}>
              <Text>U</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.hapusData(value.id)} style={{ height: 30, width: 50, backgroundColor: "red", alignItems: "center", justifyContent: "center" }}>
              <Text>D</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    })
  }


  hapusData = (id) => {
    // map data 
    // filter data berdasarkan id jika ada data kita 
    const result = this.state.database.filter(value => value.id != id)
    this.setState({ database: result })
    this.setState({ inputanDatabase: "" })
    // console.log(result)
  }

  praUpdate = (value) => {
    this.setState({ statusBtn: "edit", inputanDatabase: value.task, idDataPraUpdate:value.id })
  }

  editData = (id) => {
    const result = this.state.database.map((value, index) => {
      if (value.id == id){
        value.task = this.state.inputanDatabase
      }
      return value
    })
    this.setState({ database: result })
    this.setState({ inputanDatabase: "", statusBtn:"add" })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{
          height: 60,
          width: "100%",
          flexDirection: "row", alignItems: "center"
        }}>
          <TextInput
            value={this.state.inputanDatabase}
            placeholder='Masukan text'
            onChangeText={(inputanUser) => this.setState({ inputanDatabase: inputanUser })}
            style={{
              height: 50,
              width: "80%",
              backgroundColor: "#aeaeae",
              marginLeft: 10,
              paddingLeft: 10,
              borderRadius: 10
            }}
          />
          {
            this.state.statusBtn == "add" ?
              <TouchableOpacity
                onPress={() => this.addData()}
                style={{
                  backgroundColor: "green",
                  height: 50,
                  width: 50,
                  marginLeft: 20,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 25
                }}>
                <Text>+</Text>
              </TouchableOpacity>
              :
              <TouchableOpacity
                onPress={() => this.editData(this.state.idDataPraUpdate)}
                style={{
                  backgroundColor: "yellow",
                  height: 50,
                  width: 50,
                  marginLeft: 20,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 25
                }}>
                <Text>U</Text>
              </TouchableOpacity>
          }
        </View>
        {
          this.tampilkanData()
        }
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
});

export default App;
