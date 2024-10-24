import { View, Text ,StyleSheet,FlatList,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToMyCart ,removeProductFromCart} from './CartSlice';

const MyCart = () => {
   const myCartItems=useSelector(state=>state.cart);
   const dispatch =useDispatch();




    renderItem = ({ item ,index}) => {
        const increment=()=>{
            dispatch(addProductToMyCart(item));
          }

          const decrement=()=>{
            dispatch(removeProductFromCart(item))
          }
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
                           
                            {item.qty == 0 ? null : (
                                <TouchableOpacity style={styles.buttonCont} onPress={decrement}>
                                    <Text style={styles.button}>-</Text>
                                </TouchableOpacity>
                            )}
                            {item.qty == 0 ? null : (
                            <Text style={styles.count}>{item.qty}</Text>
                        )}
                            {item.qty == 0 ? null : (

                                <TouchableOpacity style={styles.buttonCont} onPress={increment} >
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
     
      <FlatList
                data={myCartItems}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
    </View>
  )
}

export default MyCart
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
    }
})
