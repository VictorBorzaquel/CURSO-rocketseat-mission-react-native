import { View, Text, Image, Alert } from 'react-native';
import React from 'react';
import IllustrationImg from '../../assets/illustration.png';
import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import { useAuth } from '../../hooks/auth';
import { styles } from './styles';



export function SignIn() {
  // const [text, setText] = useState('');

  const { user, signIn } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (err) {
      Alert.alert('error');
    }
  }

  return (
    <Background>
    <View style={styles.container}>
      <Image 
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se{'\n'}
          e organize suas{'\n'}
          jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games{'\n'}
          favoritos com seus amigos
        </Text>

        <ButtonIcon 
          title="Entrar com Discord"
          onPress={handleSignIn}
        />
      </View>
    </View>
    </Background>
  );
}