import { View, Text } from "react-native";
import React from "react";

export default function Experiencia(){
    return(
        <View style={{marginTop: 60}}>
            <Text style={{textAlign: 'center', fontSize: 22, fontWeight: 'bold'}}>Experiencia</Text>

            <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginTop: 40}}>Residencia de software - ZroBank</Text>
            <Text style={{textAlign: 'center', margin: 20}}>Residência tecnológica com o ZroBank, voltada para a consulta e análise de dados com o banco de dados PostgreSQL. Nossa equipe foi escolhida dentre outros squads, formados pela zrobank, para apresentar nosso projeto final no cinema do Porto Digital.</Text>
        </View>
    )
}