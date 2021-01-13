import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  titleContainer: {
    borderBottomColor: "#E9E8E8",
    borderBottomWidth: 1,
    width: "92%",
    marginBottom: "6%",
  },
  headerTitle: {
    fontSize: 40,
    textAlign: "left",
    width: "100%",
    fontWeight: "bold",
    marginTop: "10%",
    paddingBottom: "4%",
  },
  newBridgeContainer: {
    flex: 2,
    paddingLeft: 30,
    paddingTop: 20,
  },
  createContainer: {
    flex: 7,
  },
  createText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  createDescription: {
    fontSize: 18,
  },
  bottomPart: {
    width: "92%",
    marginTop: "6%",
  },
  subHeaderTitleContainer: {
    borderBottomColor: "#E9E8E8",
    borderBottomWidth: 1,
  },
  subHeaderTitle: {
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: "4%",
  },
  listContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginTop: "6%",
  },
  projectName: {
    flex: 7,
    fontSize: 20,
    fontWeight: "600",
  },
  date: {
    flex: 2,
    fontSize: 20,
    fontWeight: "600",
  },
  blueRibbon: {
    flex: 0.5,
    borderTopLeftRadius: 13,
    borderBottomLeftRadius: 13,
    backgroundColor: "#257FF2",
  },
  savedProjectText: {
    fontWeight: "bold",
    flex: 5,
    padding: "5%",
    fontSize: 15,
  },
  savedProjectDate: {
    flex: 3,
    paddingTop: "2%",
    textAlign: "center",
    height: "50%",
    alignSelf: "center",
    fontSize: 15,
  },
  previewBox: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: "100%",
    marginTop: "6%",
    display: "flex",
    flexDirection: "row",
    borderRadius: 13,
    backgroundColor: "#fff",

    //backgroundColor:'#F8F8F8',
  },
  createNew: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    height: 135,
    width: 380,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 13,
    paddingTop: "5%",
  },
});

export default styles;
