import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { faCircleCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useState } from "react";

const SCREEN_WIDTH = Dimensions.get("window").width;
export default function List(props) {
  const { itemList, onHandlerModal, onHandlerCompleteItem } = props;
  const [listStatus, setListstatus] = useState(false);
  function allAreTruthy(itemList) {
    if (itemList.every((element) => element.completed)) {
      setListstatus(true);
    }
  }
  return (
    <>
      <FlatList
        data={itemList}
        renderItem={(data) => (
          <View style={styles.item}>
            <Text
              style={{
                textDecorationLine: data.item.completed ? "line-through" : null,
                width: "70%",
              }}
              onPress={console.log()}
            >
              {data.item.value}
            </Text>
            <TouchableOpacity
              onPress={() => onHandlerModal(data.item.id)}
              style={styles.delete}
            >
              <FontAwesomeIcon icon={faTrashCan} color="red" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onHandlerCompleteItem(data.item.id)}
              style={styles.checkbox}
            >
              <FontAwesomeIcon icon={faCircleCheck} color="green" />
            </TouchableOpacity>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
      />
    </>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    marginTop: "10%",
    height: 50,
  },
  delete: {
    flex: 1,
    flexDirection: "row",
    marginTop: "10%",
    height: 50,
    marginLeft: 50,
  },
  checkbox: {
    flex: 1,
    flexDirection: "row",
    marginTop: "10%",
    height: 50,
  },
});
