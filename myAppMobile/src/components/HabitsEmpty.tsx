import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";

export function HabitsEmpty() {
  const { navigate } = useNavigation();

  return (
    <Text className="text-zinc-400 text-base">
      Nenhum hábito criado ainda. {' '}
      <Text
        className="text-violet-400 text-base underline"
        onPress={() => navigate('new')}
      >
        Cadastre um
      </Text>
    </Text>
  );
}
