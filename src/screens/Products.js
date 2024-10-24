import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import shoesData from '../data'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToMyCart } from '../redux/CartSlice'
import { useNavigation } from '@react-navigation/native'

const Products = () => {
    const myProducts= useSelector(state =>state.product);
    console.log(myProducts.length)
    const myCartItems = useSelector(state=>state.cart);
    
    console.log('my====',myCartItems.qty);
    const dispatch= useDispatch();

  const getTotal =()=>{
    let total =0;
    myCartItems.map(item=>{
        total=total+item.qty*item.price;
    });
    return total;
  }
const navigation=useNavigation();
  const handleNavigation=()=>{
   navigation.navigate('MyCart');
  }
    renderItem = ({ item }) => {
        return (
            <View style={{ backgroundColor: 'white', margin: 10, }}>
                <View style={styles.body}>
                    <Image
                        source={{ uri: item.imageURL }}
                        style={{ width: 80, height: 80, borderRadius: 10 }}
                    />
                    <View style={{ marginLeft: 20, flexDirection: 'column' }}>

                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.price}>${item.price}</Text>
                        <Text >{item.category}</Text>


                        <View style={styles.buttonConatiner}>
                            {item.qty == 0 ? (
                              <TouchableOpacity
                              style={styles.buttonCont}
                              onPress={() => {
                                 
                                  dispatch(addProductToMyCart(item));
                             
                              }}
                          >
                              <Text style={styles.button}>Add To Cart</Text>
                          </TouchableOpacity>
                          
                            ) : null
                            }
                            {item.qty == 0 ? null : (
                                <TouchableOpacity style={styles.buttonCont} >
                                    <Text style={styles.button}>-</Text>
                                </TouchableOpacity>
                            )}
                            {item.qty == 0 ? null : (
                            <Text style={styles.count}>{item.qty}</Text>
                        )}
                            {item.qty == 0 ? null : (

                                <TouchableOpacity style={styles.buttonCont} >
                                    <Text style={styles.button}>+</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>
                </View>
            </View>

        )
    }
    return (
        <View>
            <Text>Products</Text>

            <FlatList
                data={shoesData}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
            {myCartItems.length>0 ?(
            <View style={styles.bottom}>
              <View style={styles.bottomView}>
                <Text>{'added items'+'{'+ myCartItems.length+'}'}</Text>
                <Text>{'Total: '+ getTotal()}</Text>
              </View>
              <TouchableOpacity style={styles.buttonContc} onPress={handleNavigation} >
            <Text style={styles.button}>Go to Cart</Text>
             </TouchableOpacity>
            </View>
            ):null}
        </View>
    )
}

export default Products;
const styles = StyleSheet.create({
    body: {
        flexDirection: 'row',
        margin: 20,
        backgroundColor: 'white'
    },
    price: {
        color: 'green',
        fontSize: 16,
        fontWeight: '500'
    },
    name: {

        fontSize: 16,
        fontWeight: '500'
    },
    buttonConatiner: {
        flexDirection: "row",
    },
    buttonCont: {
        backgroundColor: 'green',
        padding: 5,
        borderRadius: 5,
        marginLeft: 10,
    },
    button: {
        color: 'white'
    },
    count: {
        marginLeft: 6,
        marginTop: 5,
    },
    bottom:{
       width:'100%',
       height:60,
       backgroundColor:'white',
       position:'absolute',
       bottom:0 ,
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'space-evenly',
       
    },
    bottomView:{
        width:'50%',
        justifyContent:'center',
        alignItems:"center",
        paddingBottom:30

    },
    buttonContc: {
        backgroundColor: 'green',
        padding: 5,
        borderRadius: 5,
        marginLeft: 10,
       marginBottom:30,
    },

})
