import { StyleSheet, Text, View, Image, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SecondScreen() {

    const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={true}>
      <View style={styles2.container}>
        <View style={styles2.nav}>
          <Image style={styles2.img} source={require('../assets/iconM.png')} />
          <Image style={styles2.img2} source={require('../assets/burger2.png')} />
        </View>

        <Text style={styles2.text}>Buttermilk Crispy Chicken Sandwich</Text>

        <View style={styles2.burgerblock}>
          <View style={styles2.arrow}>
            <Image source={require('../assets/LA.png')} />
          </View>
          <View>
            <Image source={require('../assets/burgers2.png')} />
          </View>
          <View style={styles2.arrow}>
            <Image source={require('../assets/RA.png')} />
          </View>
          <View style={styles2.info}>
            <Image source={require('../assets/info.png')} />
          </View>
        </View>

        <Text style={styles2.graytext}>INGREDIENTS</Text>

        <View style={styles2.sixwork}>
          <View style={styles2.onework}>
            <Image source={require('../assets/six1.png')} />
            <Text style={styles2.oneworktext}>Buttermilk Crispy Chicken Fillet</Text>
          </View>
          <View style={styles2.onework}>
            <Image source={require('../assets/six2.png')} />
            <Text style={styles2.oneworktext}>Artisan Roll</Text>
          </View>
        </View>

        <View style={styles2.sixwork}>
          <View style={styles2.onework}>
            <Image source={require('../assets/six3.png')} />
            <Text style={styles2.oneworktext}>Roma Tomato</Text>
          </View>
          <View style={styles2.onework}>
            <Image source={require('../assets/six4.png')} />
            <Text style={styles2.oneworktext}>Shredded Lettuce</Text>
          </View>
        </View>

        <View style={styles2.sixwork}>
          <View style={styles2.onework}>
            <Image source={require('../assets/six5.png')} />
            <Text style={styles2.oneworktext}>Mayonnaise</Text>
          </View>
          <View style={styles2.onework2}>
            <Text style={styles2.ow2text}>VIEW NUTRITION SUMMARY</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Third')} style={styles2.button}>
              <Image source={require('../assets/buttonicon.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    height: 1000
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
  text: {
    color: 'black',
    fontSize: 14,
    marginTop: 40
  },
  burgerblock: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    marginTop: 20,
  },
  arrow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  info: {
    position: 'absolute',
    left: 270,
  },
  graytext: {
    color: 'gray',
    fontSize: 15,
    marginTop: 15
  },
  sixwork: {
    width: '85%',
    height: 170,
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  onework: {
    backgroundColor: 'gray',
    width: '47%',
    height: '100%',
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 20
  },
  oneworktext: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  },
  onework2: {
    backgroundColor: '#07330C',
    width: '47%',
    height: '100%',
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    gap: 20
  },
  ow2text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    width: '60%',
    marginLeft: 20
  },
  button: {
    width: 60,
    backgroundColor: 'white',
    height: 60,
    marginLeft: 20,
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});