import React, { useState } from 'react';
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const AnimatedForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const emailshake = useSharedValue(0);
  const passwordshake = useSharedValue(0);
  const emailCheckMark = useSharedValue(0);
  const passwordCheckMark = useSharedValue(0);
  const EmailErrorheight = useSharedValue(0);
  const passwordErrorheight = useSharedValue(0);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setEmailError('Email is required');
      return false;
    }
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email address');
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
    const isvalid = isValidEmail(text);
    emailCheckMark.value = withSpring(isvalid ? 1 : 0);

    if (!isvalid) {
      emailshake.value = withSequence(
        withTiming(-10, { duration: 100 }),
        withTiming(10, { duration: 100 }),
        withTiming(0, { duration: 100 }),
      );
      EmailErrorheight.value = withSpring(50);
    } else {
      EmailErrorheight.value = withSpring(0);
    }
  };

  const passwordValidation = (password: string) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!password) {
      setPasswordError('Password is required');
      return false;
    }
    if (!passwordRegex.test(password)) {
      setPasswordError('Must be at least 8 characters, include letters & numbers');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    const isvalid = passwordValidation(text);
    passwordCheckMark.value = withSpring(isvalid ? 1 : 0);

    if (!isvalid) {
      passwordshake.value = withSequence(
        withTiming(-10, { duration: 100 }),
        withTiming(10, { duration: 100 }),
        withTiming(0, { duration: 100 }),
      );
      passwordErrorheight.value = withSpring(50);
    } else {
      passwordErrorheight.value = withSpring(0);
    }
  };

  const handleFormSubmit = () => {
    const isEmailValid = isValidEmail(email);
    const isPasswordValid = passwordValidation(password);

    if (isEmailValid && isPasswordValid) {
      console.log('Form submitted', { email, password });
    } else {
      if (!isEmailValid) {
        emailshake.value = withSequence(
          withTiming(-10, { duration: 100 }),
          withTiming(10, { duration: 100 }),
          withTiming(0, { duration: 100 }),
        );
        EmailErrorheight.value = withSpring(50);
      }
      if (!isPasswordValid) {
        passwordshake.value = withSequence(
          withTiming(-10, { duration: 100 }),
          withTiming(10, { duration: 100 }),
          withTiming(0, { duration: 100 }),
        );
        passwordErrorheight.value = withSpring(50);
      }
    }
  };

  const EmailAnimationStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: emailshake.value }],
  }));

  const PasswordAnimationStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: passwordshake.value }],
  }));

  const emailCheckMarkStyle = useAnimatedStyle(() => ({
    opacity: emailCheckMark.value,
    transform: [
      { scale: emailCheckMark.value },
      { rotate: `${emailCheckMark.value * 360}deg` },
    ],
  }));

  const passwordCheckMarkStyle = useAnimatedStyle(() => ({
    opacity: passwordCheckMark.value,
    transform: [
      { scale: passwordCheckMark.value },
      { rotate: `${passwordCheckMark.value * 360}deg` },
    ],
  }));

  const EmailErrorStyle = useAnimatedStyle(() => ({
    height: EmailErrorheight.value,
    opacity: EmailErrorheight.value === 0 ? 0 : 1,
    transform: [{ translateY: withSpring(EmailErrorheight.value / 2) }],
  }));

  const PasswordErrorStyle = useAnimatedStyle(() => ({
    height: passwordErrorheight.value,
    opacity: passwordErrorheight.value === 0 ? 0 : 1,
    transform: [{ translateY: withSpring(passwordErrorheight.value / 2) }],
  }));

  return (
    <View style={style.container}>
      <Animated.View style={[style.inputGroup, EmailAnimationStyle]}>
        <TextInput
          style={style.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={handleEmailChange}
          placeholderTextColor="#999"
        />
        <Animated.Text style={[style.checkMark, emailCheckMarkStyle]}>✓</Animated.Text>
        {!!emailError && (
          <Animated.Text style={[style.errorText, EmailErrorStyle]}>
            {emailError}
          </Animated.Text>
        )}
      </Animated.View>

      <Animated.View style={[style.inputGroup, PasswordAnimationStyle]}>
        <TextInput
          style={style.input}
          placeholder="Password"
          secureTextEntry
          autoCapitalize="none"
          value={password}
          onChangeText={handlePasswordChange}
          placeholderTextColor="#999"
        />
        <Animated.Text style={[style.checkMark, passwordCheckMarkStyle]}>✓</Animated.Text>
        {!!passwordError && (
          <Animated.Text style={[style.errorText, PasswordErrorStyle]}>
            {passwordError}
          </Animated.Text>
        )}
      </Animated.View>

      <Pressable style={style.submitBtn} onPress={handleFormSubmit}>
        <Text style={style.submitText}>Submit</Text>
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    backgroundColor: '#f8f9fc',
  },
  inputGroup: {
    marginBottom: 24,
    position: 'relative',
  },
  input: {
    height: 55,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 17,
    borderWidth: 1.5,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  checkMark: {
    position: 'absolute',
    right: 16,
    top: 14,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  errorText: {
    marginTop: 6,
    color: '#e53935',
    fontSize: 14,
    fontWeight: '500',
  },
  submitBtn: {
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  submitText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
});

export default AnimatedForm;
