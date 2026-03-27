import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native';

export default function FirstScreen() {

      const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Image style={styles.img} source={require('../assets/iconM.png')} />
        <Image style={styles.img2} source={require('../assets/burger.png')} />
      </View>

      <Text style={styles.text}>Big Mac</Text>
      <Image source={require('../assets/burgerIS.png')} />
      <Image source={require('../assets/dots.png')} />
      <Text style={styles.text}>Nutritional Information</Text>

      <View style={styles.textblock}>
        <View style={styles.textsubblock}>
          <Text style={styles.textb1}>550 Cal.</Text>
          <Text style={styles.textb2}>Calories</Text>
          <Text style={styles.textb1}>45g</Text>
          <Text style={styles.textb2}>Total Carbs (16% DV)</Text>
        </View>

        <View style={styles.textsubblock2}>
          <Text style={styles.textb1}>30g</Text>
          <Text style={styles.textb2}>Total Fat (38% DV)</Text>
          <Text style={styles.textb1}>25g</Text>
          <Text style={styles.textb2}>Protein</Text>
        </View>

        <View>
          <Text style={styles.textb3}>Calculator</Text>
        </View>
      </View>

        <TouchableOpacity style={styles.finaltext} onPress={() => navigation.navigate('Second')}>
            <Text>View Ingredients & Allergens</Text>
        </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#07330C'
  },
  text: {
    color: 'white',
    fontSize: 14,
    marginTop: 40
  },
  nav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    height: '4%',
    marginTop: 50
  },
  img: {
    width: 35,
    height: 30
  },
  img2: {
    width: 25,
    height: 15,
    position: 'relative',
    top: 10
  },
  textblock: {
    width: '80%',
    height: '15%',
    display: 'flex',
    flexDirection: 'row'
  },
  textsubblock: {
    width: '40%',
    height: '100%'
  },
  textsubblock2: {
    width: '40%',
    height: '100%',
    position: 'relative',
    left: 40
  },
  textb1: {
    color: 'white',
    fontSize: 14,
    marginTop: 10,
  },
  textb2: {
    color: '#687C6B',
    fontSize: 10,
    width: '50%',
    marginTop: 10
  },
  textb3: {
    color: '#EDB432',
    fontSize: 20,
    transform: 'rotate(270deg)',
    position: 'relative',
    top: 40
  },
  finaltext: {
    width: '80%',
    height: '10%',
    textAlign: 'center',
    backgroundColor: '#EDB432',
    color: '#06310B',
    fontSize: 20,
    paddingTop: 25,
    borderRadius: 20,
    marginTop: 20,
    display: 'flex',
    alignItems: 'center'
  }
});