import React, { Component} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            timer: 0,
            button: 'Iniciar',
            lastTime: null
        };

        // variavel do tempo do relogio
        this.time = null;
        this.iniciar = this.iniciar.bind(this);
        this.limpar = this.limpar.bind(this);
    };

    iniciar() {
        if(this.time != null) {
            // Aqui vai parar o tempo
            clearInterval(this.time);
            this.time = null;

            this.setState({ button: 'Iniciar'});
        }
        else {
            // Aqui comeca a girar o cronometro
            this.time = setInterval( () => {
                this.setState({ timer: this.state.timer + 0.1 });
            }, 100);

            this.setState({ button: 'Parar'});
        }
    };

    limpar() {
        if(this.time != null) {
            // Aqui vai parar o tempo
            clearInterval(this.time);
            this.time = null;
        }

        this.setState({ 
            lastTime: this.state.timer.toFixed(1), 
            timer: 0, 
            button: 'Iniciar' 
        })
    }

    render(){
        return(
            <View style={ styles.container }>

                <Image 
                    style={ styles.image }
                    source={require('./src/image/cronometro.png')}
                />

                <Text style={ styles.timer }>
                    { this.state.timer.toFixed(1) }
                </Text>

                <View style={ styles.btnView }>
                    <TouchableOpacity 
                        style={ styles.btn }
                        onPress={ this.iniciar }
                    >
                        <Text style={ styles.btnText }>
                            {this.state.button}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={ styles.btn }
                        onPress={ this.limpar }
                    >
                        <Text style={ styles.btnText }>Limpar</Text>
                    </TouchableOpacity>
                </View>

               

                <View style={ styles.areaLast }>
                    <Text  style={ styles.textLast }>
                        { this.state.lastTime > 0 ? 'Ultimo tempo: ' + this.state.lastTime + 's' : ''}
                    </Text>
                </View>

            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00aeef',
    },
    timer: {
        fontSize: 65,
        color: 'white',
        marginTop: -155,
        fontWeight: 'bold',
    },
    image: {

    },
    btnView : { 
        flexDirection: 'row',
        marginTop: 70,
        height: 40,
    },
    btn : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 40,
        margin: 17,
        borderRadius: 9,
    },
    btnText : {
        color: '#00aeef',
        fontWeight: 'bold',
        fontSize: 20,
    },
    areaLast: {
        textAlign: 'center',
    },
    textLast: {
        color: 'white',
        fontSize: 25,
        fontStyle: 'italic',
        marginTop: 40,
    }
 });

 export default App;