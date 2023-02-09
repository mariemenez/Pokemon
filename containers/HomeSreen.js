import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import style from "../style";

const HomeScreen = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/?limit=100`
        );
        setData(response.data);
        setIsLoading(false);
        // console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <View>
      <Text>ça charge</Text>
    </View>
  ) : (
    <SafeAreaView style={style.container}>
      <Text>LA LISTE DES POKEMON</Text>

      <FlatList
        data={data.results}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={style.pokeView}
            onPress={() => {
              navigation.navigate("Poke", { pokeId: item.url });
            }}
          >
            <View>
              <Text style={style.pokeViewText}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
