import { View, Text, SafeAreaView, Image } from "react-native";
import { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import style from "../style";

const PokeScreen = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { params } = useRoute();

  const id = params.pokeId;
  //   console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(id);
        setData(response.data);
        setIsLoading(false);
        // console.log(response.data);
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
