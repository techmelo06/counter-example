import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable } from "react-native";
import styles from "./styles";
import Entypo from 'react-native-vector-icons/Entypo';
//REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setIncrement, setDecrement } from '../../Redux/store/action/counter_action';

//let count = 0;

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount = async () => {
    }

    increment = async () => {
        //console.log("Props =", this.props);
        let count = this.props.Counter?.count ? this.props.Counter.count + 1 : 0 + 1;
        //console.log("Props =", this.props);
        this.props.setIncrement(count);
    }

    decrement = async () => {
        let count = this.props.Counter?.count;
        count == 0 ? null :
            count = count - 1;
        this.props.setDecrement(count);
    }

    render() {
        return (
            <View style={styles.mainView}>
                <Pressable
                    onPress={() => this.increment()}
                    style={styles.incrementContainer}
                >
                    <Entypo
                        size={25}
                        name="plus"
                        color="#fff"
                    />
                    <Text style={styles.labelContainer}>INCREMENT</Text>
                </Pressable>
                <View>
                    <Text style={styles.counterLabel}>{this.props.Counter.count}</Text>
                </View>
                <Pressable
                    onPress={() => this.decrement()}
                    style={styles.decrementContainer}
                >
                    <Entypo
                        size={25}
                        name="minus"
                        color="#fff"
                    />
                    <Text style={styles.labelContainer}>DECREMENT</Text>
                </Pressable>

            </View>
        )
    }
}


function mapStateToProps(state) {
    return {
        Counter: state.Counter
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setIncrement, setDecrement }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(index);
