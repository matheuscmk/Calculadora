import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import Botao from "./Botao.js";
export default function App() {
  console.disableYellowBox = true;
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [sinal, setSinal] = useState("");
  const [stringCalculo, setStringCalculo] = useState("0");
  var numeros = [];

  for (var i = 0; i <= 9; i++) {
    numeros.push(i);
  }

  function logicaCalculadora() {
    //Logica da calculadora
  }

  return (
    <View style={{ flex: 1, backgroundColor: "silver" }}>
      <StatusBar hidden />
      <View style={styles.topo}>
        <Text style={{ fontSize: 30, color: "yellow" }}>{stringCalculo}</Text>
      </View>
      <View
        style={{ flexDirection: "row", height: "16.6%", alignItems: "center" }}
      >
        <TouchableOpacity
          style={{
            width: "25%",
            backgroundColor: "rgb(79,85,94)",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Text style={{ fontSize: 30, textAlign: "center", color: "yellow" }}>
            +
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "25%",
            backgroundColor: "rgb(79,85,94)",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Text style={{ fontSize: 30, textAlign: "center", color: "yellow" }}>
            -
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "25%",
            backgroundColor: "rgb(79,85,94)",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Text style={{ fontSize: 30, textAlign: "center", color: "yellow" }}>
            /
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "25%",
            backgroundColor: "rgb(79,85,94)",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Text style={{ fontSize: 30, textAlign: "center", color: "yellow" }}>
            *
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          borderTopColor: "silver",
          borderTopWidth: 2,
          height:'66.8%'
        }}
      >
        {numeros.map(function (e) {
          return (
            <Botao logicaCalculadora={logicaCalculadora} numero={e}></Botao>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topo: {
    padding: 10,
    borderBottomColor: "silver",
    borderBottomWidth: 2,
    backgroundColor: "rgb(79,85,94)",
    height: "16.6%",
    justifyContent: "flex-end",
    paddingLeft: 20,
  },
});
