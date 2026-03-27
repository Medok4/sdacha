import { StyleSheet, Text, View, Image, ScrollView, TextInput, Pressable } from 'react-native';

export default function ThirdScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={true}>
      <View style={styles3.container}>
        <View style={styles3.greencontainer}>
          <View style={styles3.arrow}>
            <Image style={styles3.arrowIS} source={require('../assets/whitearrow.png')} />
          </View>
          <Text style={styles3.bigtext}>Job Search</Text>
          <Text style={styles3.notbigtext}>McDONALD'S GLOBAL STAFF</Text>
          <TextInput 
            placeholderTextColor='white' 
            placeholder='Category of JobTitle' 
            style={styles3.input1} 
          />
          <TextInput 
            placeholderTextColor='#EDB432' 
            placeholder='Chicago' 
            style={styles3.input2} 
          />
          <Image style={styles3.city} source={require('../assets/cityicon.png')} />
          <View style={styles3.inpbut}>
            <TextInput 
              style={styles3.input3} 
              placeholder='10 miles' 
              placeholderTextColor='#EDB432' 
            />
            <Image style={styles3.orangearrow} source={require('../assets/orangearrow.png')} />
            <Pressable style={styles3.orangebutton}>
              <Image source={require('../assets/searchicon.png')} />
            </Pressable>
          </View>
        </View>

        <View style={styles3.tags}>
          <View style={styles3.tagIS}>
            <Text style={styles3.clear}>Advertising</Text>
            <Image source={require('../assets/x.png')} />
          </View>
          <Text style={styles3.clear}>Clear All</Text>
        </View>

        <Text style={styles3.t1}>1 RESULT</Text>
        <Text style={styles3.t2}>Manager, Customer Data Strategy</Text>
        <Text style={styles3.t3}>Location</Text>
        <Text style={styles3.t4}>Chicago, Illinois US</Text>
        <Text style={styles3.t5}>Categories</Text>
        <Text style={styles3.t6}>Advertising</Text>

        <Pressable style={styles3.s3b}>
          <Text style={styles3.t7}>Apply now</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles3 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    height: 1000
  },
  greencontainer: {
    width: '100%',
    height: 450,
    backgroundColor: '#084210',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  arrow: {
    height: 15,
    marginTop: 50,
    marginLeft: 20,
    width: 20,
  },
  arrowIS: {
    width: '100%',
    height: '100%'
  },
  bigtext: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 21,
    marginTop: 15
  },
  notbigtext: {
    marginTop: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: 'grey'
  },
  input1: {
    width: '85%',
    height: 70,
    marginLeft: 28,
    marginTop: 15,
    color: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 50,
    paddingHorizontal: 30,
    fontWeight: 'bold',
    fontSize: 16
  },
  input2: {
    width: '85%',
    height: 70,
    marginLeft: 28,
    marginTop: 10,
    color: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 50,
    paddingHorizontal: 30,
    fontWeight: 'bold',
    fontSize: 16
  },
  city: {
    position: 'absolute',
    top: 265,
    left: 320
  },
  input3: {
    width: '67%',
    height: 70,
    color: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 50,
    paddingHorizontal: 30,
    fontWeight: 'bold',
    fontSize: 16
  },
  orangearrow: {
    position: 'absolute',
    top: 35,
    left: 190
  },
  orangebutton: {
    width: '30%',
    height: 70,
    borderRadius: 50,
    backgroundColor: '#EDB432',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inpbut: {
    width: '85%',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    marginLeft: 28,
  },
  tags: {
    width: '100%',
    marginTop: 25,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    gap: 10
  },
  tagIS: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E2EEE4',
    height: '100%',
    width: '35%',
    justifyContent: 'space-around',
    borderRadius: 5
  },
  clear: {
    color: '#084210',
    fontWeight: 'bold',
    fontSize: 16
  },
  t1: {
    color: '#B5B5B5',
    fontSize: 18,
    marginTop: 25,
    fontWeight: 'bold'
  },
  t2: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    width: '50%',
    textAlign: 'center',
    marginTop: 10
  },
  t3: {
    color: '#B5B5B5',
    fontSize: 18,
    marginTop: 25,
    fontWeight: 'bold',
    marginRight: 180
  },
  t4: {
    color: '#084210',
    fontSize: 18,
    marginTop: 5,
    fontWeight: 'bold',
    marginRight: 92
  },
  t5: {
    color: '#B5B5B5',
    fontSize: 18,
    marginTop: 25,
    fontWeight: 'bold',
    marginRight: 165
  },
  t6: {
    color: '#084210',
    fontSize: 18,
    marginTop: 5,
    fontWeight: 'bold',
    marginRight: 160
  },
  s3b: {
    width: '85%',
    height: 80,
    marginTop: 70,
    borderWidth: 1,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#084210'
  },
  t7: {
    color: '#084210',
    fontSize: 18,
    fontWeight: 'bold',
  },
});