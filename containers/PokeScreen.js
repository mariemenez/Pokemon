import {
  View,
  Text,
  SafeAreaView,
  Image,
  ActivityIndicator,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import style from "../style";
import useFetch from "../hooks/useFetch";

const PokeScreen = () => {
  const { params } = useRoute();
  const id = params.pokeId;
  const [data, isLoading] = useFetch(id);

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <SafeAreaView>
      <Text>{data.name}</Text>
      <Image
        source={{ uri: data.sprites.other.home.front_default }}
        style={style.pokeImage}
      />

      <Text>{data.height}</Text>
    </SafeAreaView>
  );
};

export default PokeScreen;
