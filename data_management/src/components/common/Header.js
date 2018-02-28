// IMPORT LIBRARIES
import React from 'react';
import  {Text, View} from 'react-native';




// MAKE A COMPONENT
const Header = (props) =>{
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle:{
        backgroundColor:'#f8f8f8',
        justifyContent:'center',
        alignItems:'center',
        height: 60,
        paddingTop: 15,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};




//MAKE THE COMPONENT AVAILABLE TO OTHER PARTS OF THE APP
export { Header };