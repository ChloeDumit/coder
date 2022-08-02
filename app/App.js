import { StyleSheet, View } from "react-native";

import ListPage from "./Components/ListPage";
import NoUser from "./Components/NoUser/index";

export default function App() {
  const Greetings = (props) => {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <ListPage />;
    }
    return <NoUser />;
  };

  return (

  <Greetings isLoggedIn={true} />;
}

const styles = StyleSheet.create({
  screen: {
    marginTop: "10%",
    padding: 30,
  },
});
