import { StatusBar, } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Pressable, TextInput} from 'react-native';


export default function App() {
  return (


    //Первая страница
    // <View style={styles.container}>
    //   <View style={styles.nav}>
    //     <Image style={styles.img} source={require('./assets/iconM.png')}></Image>
    //     <Image style={styles.img2} source={require('./assets/burger.png')}></Image>
    //   </View>

    //   <Text style={styles.text}>Big Mac</Text>
    //   <Image source={require('./assets/burgerIS.png')}></Image>
    //   <Image source={require('./assets/dots.png')}></Image>
    //   <Text style={styles.text}>Nutritional Information</Text>

    //   <View style={styles.textblock}>
    //     <View style={styles.textsubblock}>
    //       <Text style={styles.textb1}>550 Cal.</Text>
    //       <Text style={styles.textb2}>Calories</Text>
    //       <Text style={styles.textb1}>45g</Text>
    //       <Text style={styles.textb2}>Total Carbs (16% DV)</Text>
    //     </View>

    //     <View style={styles.textsubblock2}>
    //       <Text style={styles.textb1}>30g</Text>
    //       <Text style={styles.textb2}>Total Fat (38% DV)</Text>
    //       <Text style={styles.textb1}>25g</Text>
    //       <Text style={styles.textb2}>Protein</Text>
    //     </View>

    //     <View>
    //       <Text style={styles.textb3}>Calculator</Text>
    //     </View>
    //   </View>

    //   <Text style={styles.finaltext}>View Ingredients & Allergens</Text>
    // </View>

    //Вторая страница
    // <ScrollView showsVerticalScrollIndicator={true}>
    // <View style={styles2.container}>
    //   <View style={styles2.nav}>
    //      <Image style={styles2.img} source={require('./assets/iconM.png')}></Image>
    //      <Image style={styles2.img2} source={require('./assets/burger2.png')}></Image>
    //    </View>

    //    <Text style={styles2.text}>Buttermilk Crispy Chicken Sandwich</Text>

    //    <View style={styles2.burgerblock}>
    //     <View style={styles2.arrow}><Image  source={require('./assets/LA.png')}></Image></View>
    //     <View><Image source={require('./assets/burgers2.png')}></Image></View>
    //     <View style={styles2.arrow}><Image  source={require('./assets/RA.png')}></Image></View>
    //     <View style={styles2.info}><Image source={require('./assets/info.png')}></Image></View>
    //    </View>

    //    <Text style={styles2.graytext}>INGREDIENTS</Text>

    //    <View style={styles2.sixwork}>
    //       <View style={styles2.onework}>
    //         <Image source={require('./assets/six1.png')}></Image>
    //         <Text style={styles2.oneworktext}>Buttermilk Crispy Chicken Fillet</Text>
    //       </View>
    //       <View style={styles2.onework}>
    //         <Image source={require('./assets/six2.png')}></Image>
    //         <Text style={styles2.oneworktext}>Artisan Roll</Text>
    //       </View>
    //    </View>

    //    <View style={styles2.sixwork}>
    //       <View style={styles2.onework}>
    //         <Image source={require('./assets/six3.png')}></Image>
    //         <Text style={styles2.oneworktext}>Roma Tomato</Text>
    //       </View>
    //       <View style={styles2.onework}>
    //         <Image source={require('./assets/six4.png')}></Image>
    //         <Text style={styles2.oneworktext}>Shredded Lettuce</Text>
    //       </View>
    //    </View>

    //    <View style={styles2.sixwork}>
    //       <View style={styles2.onework}>
    //         <Image source={require('./assets/six5.png')}></Image>
    //         <Text style={styles2.oneworktext}>Mayonnaise</Text>
    //       </View>
    //       <View style={styles2.onework2}>
    //         <Text style={styles2.ow2text}>VIEW NUTRITION SUMMARY</Text>
    //         <Pressable style={styles2.button}><Image source={require('./assets/buttonicon.png')}></Image></Pressable>
    //       </View>
    //    </View>

    // </View>
    // </ScrollView>

    <ScrollView showsVerticalScrollIndicator={true}>
    <View style={styles3.container}>
      <View style={styles3.greencontainer}>
        <View style={styles3.arrow}><Image style={styles3.arrowIS} source={require('./assets/whitearrow.png')}></Image></View>
        <Text style={styles3.bigtext}>Job Search</Text>
        <Text style={styles3.notbigtext}>McDONALD'S GLOBAL STAFF</Text>
        <TextInput placeholderTextColor='white' placeholder='Category of JobTitle' style={styles3.input1}></TextInput>
        <TextInput placeholderTextColor='#EDB432' placeholder='Chicago' style={styles3.input2}></TextInput>
        <Image style={styles3.city} source={require('./assets/cityicon.png')}></Image>
        <View style={styles3.inpbut}>
          <TextInput style={styles3.input3} placeholder='10 miles' placeholderTextColor='#EDB432'></TextInput>
          <Image style={styles3.orangearrow} source={require('./assets/orangearrow.png')}></Image>
          <Pressable style={styles3.orangebutton}> <Image source={require('./assets/searchicon.png')}></Image></Pressable>
        </View>
      </View>

      <View style={styles3.tags}>
        <View style={styles3.tagIS}>
          <Text style={styles3.clear}>Advertising</Text>
          <Image source={require('./assets/x.png')}></Image>
        </View>
        <Text style={styles3.clear}>Clear All</Text>
      </View>

      <Text style={styles3.t1}>1 RESULT</Text>
      <Text style={styles3.t2}>Manager, Customer Data Strategy </Text>
      <Text style={styles3.t3}>Location</Text>
      <Text style={styles3.t4}>Chicago, Illinois US</Text>
      <Text style={styles3.t5}>Categories</Text>
      <Text style={styles3.t6}>Advertising</Text>

      <Pressable style={styles3.s3b}><Text style={styles3.t7}>Apply now</Text></Pressable>

    </View>
    </ScrollView>
  );
}

// Стили первой страницы
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#07330C'
  },
  text:{
    color: 'white',
    fontSize: 14,
    marginTop: 40
  },
  nav:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    height: '4%',
    // backgroundColor: 'red',
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
  burgerimg:{
    width: 311,
    height: 245,
  },
  textblock:{
    width: '80%',
    height: '15%',
    // backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'row'
  },
  textsubblock:{
    width: '40%',
    height: '100%'
  },
  textsubblock2:{
    width: '40%',
    height: '100%',
    position: 'relative',
    left: 40
  },
  textb1:{
    color: 'white',
    fontSize: 14,
    marginTop:10,
  },
  textb2:{
    color: '#687C6B',
    fontSize: 10,
    width: '50%',
    marginTop: 10
  },
  textb3:{
    color: '#EDB432',
    fontSize: 20,
    transform: 'rotate(270deg)',
    position: 'relative',
    top: 40
  },
  finaltext:{
    width: '80%',
    height: '10%',
    textAlign: 'center', 
    backgroundColor: '#EDB432',
    color: '#06310B',
    fontSize: 20,
    paddingTop: 25,
    borderRadius: 20,
    marginTop: 20
  }
});

//Стили второй страницы
const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    height: '1000'
  },
  nav:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    height: '4%',
    // backgroundColor: 'red',
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
  text:{
    color: 'black',
    fontSize: 14,
    marginTop: 40
  },
  burgerblock: {
    display: 'flex',
    flexDirection: 'row',
    gap: '20',
    marginTop: '20',
  },
  arrow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  info: {
    position: 'absolute',
    left: '270',
  },
  graytext: {
    color: 'gray',
    fontSize: '15',
    marginTop: '15'
  },
  sixwork: {
    width: '85%',
    height: '170',
    marginTop: '15',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  onework: {
    backgroundColor: 'gray',
    width: '47%',
    height: '100%',
    borderRadius: '15%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '20'
  },
  oneworktext:{
    textAlign: 'center',
    fontSize: '16',
    fontWeight: 'bold'
  },
  onework2: {
    backgroundColor: '#07330C',
    width: '47%',
    height: '100%',
    borderRadius: '15%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    gap: '20'
  },
  ow2text:{
    color: 'white',
    fontSize: '16',
    fontWeight: 'bold',
    width: '60%',
    marginLeft: '20'
  },
  button:{
    width: '60',
    backgroundColor: 'white',
    height: '60',
    marginLeft: '20',
    borderRadius: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const styles3 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    height: '1000'
  },
  greencontainer: {
    width: '100%',
    height: '450',
    backgroundColor: '#084210',
    borderRadius: '10%'
  },
  arrow: {
    height: '15',
    marginTop: '50',
    marginLeft: '20',
    width: '20',
  },
  arrowIS: {
    width: '100%',
    height: '100%'
  },
  bigtext: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '21',
    marginTop: '15'
  },
  notbigtext: {
    marginTop: '15',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '18',
    color: 'grey'
  },
  input1: {
    width: '85%',
    height: '70',
    marginLeft: '28',
    marginTop: '15',
    color: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 50,
    paddingHorizontal: 30,
    fontWeight: 'bold',
    fontSize: '16'
  },
  input2: {
    width: '85%',
    height: '70',
    marginLeft: '28',
    marginTop: '10',
    color: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 50,
    paddingHorizontal: 30,
    fontWeight: 'bold',
    fontSize: '16'
  },
  city: {
    position: 'absolute',
    top: '265',
    left: '320'
  },
  input3: {
    width: '67%',
    height: '70',
    color: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 50,
    paddingHorizontal: 30,
    fontWeight: 'bold',
    fontSize: '16'
  },
  orangearrow: {
    position: 'absolute',
    top: '35',
    left: '190'
  },
  orangebutton: {
    width: '30%',
    height: '70',
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
    marginTop: '10',
    justifyContent: 'space-between',
    marginLeft: '28',
  },
  tags: {
    width: '100%',
    marginTop: '25',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40',
    gap: '10'
  },
  tagIS: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E2EEE4',
    height: '100%',
    width: '35%',
    justifyContent: 'space-around',
    borderRadius: '5%'
  },
  clear: {
    color: '#084210',
    fontWeight: 'bold',
    fontSize: '16'
  },
  t1: {
    color: '#B5B5B5',
    fontSize: '18',
    marginTop: '25',
    fontWeight: 'bold'
  },
  t2: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: '20',
    width: '50%',
    textAlign: 'center',
    marginTop: '10'
  },
  t3: {
    color: '#B5B5B5',
    fontSize: '18',
    marginTop: '25',
    fontWeight: 'bold',
    marginRight: '180'
  },
  t4: {
    color: '#084210',
    fontSize: '18',
    marginTop: '5',
    fontWeight: 'bold',
    marginRight: '92'
  },
  t5: {
    color: '#B5B5B5',
    fontSize: '18',
    marginTop: '25',
    fontWeight: 'bold',
    marginRight: '165'
  },
  t6: {
    color: '#084210',
    fontSize: '18',
    marginTop: '5',
    fontWeight: 'bold',
    marginRight: '160'
  },
  s3b: {
    width: '85%',
    height: '80',
    marginTop: '70',
    borderWidth: 1,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#084210'
  },
  t7: {
    color: '#084210',
    fontSize: '18',
    fontWeight: 'bold',
  },
})
