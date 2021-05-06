import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable } from "react-native";
import styles from "./styles";

//REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setIncrement, setDecrement } from '../../Redux/store/action/counter_action';

let count = 0;

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount = async () => {
        console.log("Props =", this.props);
    }

    increment = async () => {
        count = count + 1;
        this.props.setIncrement(count).then((response) => {
        });
    }

    decrement = async () => {
        count == 0 ? null :
            count = count - 1;
        this.props.setDecrement(count).then((response) => {
        });
    }

    render() {
        return (
            <View style={styles.mainView}>
                <Pressable
                    onPress={() => this.increment()}
                    style={styles.incrementContainer}
                >
                    <Text style={styles.labelContainer}>INCREMENT</Text>
                </Pressable>
                <View>
                    <Text style={styles.counterLabel}>{this.props.Counter.count}</Text>
                </View>
                <Pressable
                    onPress={() => this.decrement()}
                    style={styles.decrementContainer}
                >
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
