import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import{useState} from 'react';
import { FlatList } from 'react-native';
import { TextInput } from 'react-native';


// 
type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;

};
// 
export default function App() {
  const [itemName, setItemName] = useState('')
  const [itemPrice, setItemPrice] = useState('')
  const [itemCategory, setItemCategory] = useState('')
  const [itemDescription, setItemDescription] = useState('');
  const [productCatalogue, setProductCatalogue] = useState< MenuItem[]>([

    //
    {
      id:"1",
      name:"Ribeye and Roasted Garlic Pan Sauce with Mashed Potatoes and Green Beans",
      price: "R390",
      category: "Dinner",
      description: "Fresh beans and mash accompany a succulent ribeye steak with a rich garlic sauce",
    },
    {
      id:"2",
      name:"Garlic Butter Salmon with Spinach & Mushrooms in Creamy Sauce",
      price: "R370",
      category: "Dinner",
      description: "Garlic butter with flaky fish, spinach, and mushrooms",
    },
    {
      id:"3",
      name:"Lamb Chops with Mashed Potatoes",
      price: "R410",
      category: "Dinner",
      description: "Lamb chops that are juicy and paired with a buttery, sily mash ",
    },
    {
      id:"4",
      name:"Creme Brulee",
      price: "R102",
      category: "Dessert",
      description: "A smooth vanilla custard with a crunchy, caramelised sugar topping on top ",
    },
    {
      id:"5",
      name:"Raspberry Cheesecake",
      price: "R85",
      category: "Dessert",
      description: "Creamy cheesecake swirled with raspberry sauce, finished with fresh raspberries on top",
    },
    {
      id:"6",
      name:"Mixed Berry Tart",
      price: "R105",
      category: "Dessert",
      description: "Buttery tart shell filled with smooth cream and topped with a medley of fresh berries",
    },
    {
      id:"7",
      name:"French Garlic Soup and Garlic Rolls",
      price: "R130",
      category: "Starters",
      description: "A rich garlic soup served with warm garlic rolls",
    },
    {
      id:"8",
      name:"TunWorth Croquettes",
      price: "R105",
      category: "Starters",
      description: "Crispy golden bites filled with creamy TunWorth Croquettes",
    },
    {
      id:"9",
      name:"Pizza CupCake",
      price: "R120",
      category: "Starters",
      description: "Mini Pizza-inspired cupcake with gooey cheese and toppings",
    },
     ]);

// 
const addNewItem = () => {
    // 
    if (!itemName || !itemPrice || !itemCategory || !itemDescription) return;     //! means it not 

//
const addremoveItem = () => {
    // 
    if (!itemName || !itemPrice || !itemCategory || !itemDescription) return;     //! means it not 
  
//
  const newItem: MenuItem = {
      id: (productCatalogue.length+1).toString(),
      name: itemName,
      price: itemPrice,
      category: itemCategory,
      description: itemDescription,

};
    // we add the new item into our list*by appending it to the end of the list)  - check this comment
    setProductCatalogue((prevList) => [newItem, ...prevList]);
    //finally, we clear the inputs so that user can add another item
    setItemName("")
    setItemPrice("")
    setItemCategory("")
    setItemDescription("")
  };

//The IIE,2025
const renderHeader = () => (
<View style={{width:'100%', alignItems: 'center'}}> {/*             */}
  <Text style={styles.title}>Welcome to Christoffel's Crib</Text> {/*        */}

{/* COMMENT !      */}

<TextInput                //
  placeholder='Item Name'
  value={itemName}
  onChangeText={setItemName}
  style={styles.input}
  />
  <TextInput              //
   placeholder='Item Price'
    value={itemPrice}
     onChangeText={setItemPrice}
     style={styles.input}
     keyboardType='numeric' //
      />
      <TextInput          //
        placeholder='Item Category'
        value={itemCategory}
        onChangeText={setItemCategory}
        style={styles.input}
      />
      <TextInput        //                                                              //(In-text referencing as well for everything above and below!)
        placeholder='Item Description'
        value={itemDescription}
        onChangeText={setItemDescription}
        style={[styles.input, styles.multiline]}
        multiline           // Im not sure about this !???????/
      />
      <Button title='Add New Item' onPress={addNewItem} />      {/*           */}
    </View>
);
// Footer component with item total count and images that show dishes
const renderFooter = () => (
  <View style={{width: '90%', alignItems:'center', paddingBottom: 24}}>
    <Text style ={{marginTop:8}}>Total Item Count: {productCatalogue.length}</Text>

    {/*         */}
  <Text style={{marginTop: 15, fontWeight: '700'}}>Starters</Text>    {/*W3School,2025*/}
  <Image style={styles.Images} source={require('./'Images\Mas

  

      <FlatList
        data={productCatalogue}
        keyExtractor={(storeItem) => storeItem.id}
        renderItem={({ item }) => (
          <View style={styles.displayItem}>
            <Text style={styles.displayText}>
              {item.name} - {item.price}
            </Text>
            <Text style={styles.displayText}>
              {item.category} - {item.description}
            </Text>
          </View>
        )}
        style={styles.itemList}
      />
      <Text>Total Item Count: {productCatalogue.length}</Text>
      <StatusBar style='auto' />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginBottom: 60,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  baseText: {
    fontFamily: {'Cochin',
  }, 

  displayItem: {
    padding: 10,
    backgroundColor: "#f2f2f2",
    borderRadius:5,
    marginBottom: 10,
  },
  displayText: {
    fontSize: 16,
  },
  itemList: {
    marginTop: 10,
  },
  title:{
    marginBottom:15,
    fontSize:18,
    fontWeight: '600',
  },
});

//ReferenceList(Alphabetical Order)
