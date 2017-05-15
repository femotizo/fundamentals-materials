import React from 'react';
import { TouchableHighlight, Text, Easing, View, Animated, Button, StyleSheet } from 'react-native';

let styles = {};

class CreateAnimatedComponent extends React.Component {
  static navigationOptions = () => ({
    title: 'CreateAnimatedComponent',
  });

  animatedButton = new Animated.Value(1);

  animate = () => {
    this.animatedButton.resetAnimation();
    Animated.timing(
      this.animatedButton,
      {
        toValue: 2,
        duration: 1200,
        easing: Easing.linear,
      },
    ).start(() => {
      Animated.timing(
        this.animatedButton,
        {
          toValue: 1,
          duration: 1200,
          easing: Easing.linear,
        },
      ).start(() => this.animate());
    });
  }

  render() {
    const AnimatedButton = Animated.createAnimatedComponent(TouchableHighlight);

    return (
      <View style={styles.container}>
        <Button title="Animate With Easing" onPress={this.animate} />
        <AnimatedButton
          underlayColor="#dddddd"
          onPress={console.log}
          style={[styles.button, { transform: [{ scale: this.animatedButton }] }]}>
          <Text style={styles.buttonText}>HELLO!</Text>
        </AnimatedButton>
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: 'red',
    marginTop: 100,
    marginLeft: 130,
  },
  buttonText: {
    fontWeight: '300',
  },
});

export default CreateAnimatedComponent;