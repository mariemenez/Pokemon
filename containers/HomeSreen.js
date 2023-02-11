import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import style from "../style";
import useFetch from "../hooks/useFetch";

const HomeScreen = () => {
  const navigation = useNavigation();

  const [data, isLoading] = useFetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=100`
  );

  return isLoading ? (
    <ActivityIndicator />
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
