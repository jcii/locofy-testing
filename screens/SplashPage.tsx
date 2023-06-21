import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily } from "../GlobalStyles";

const SplashPage = () => {
  return (
    <View style={styles.splashPage}>
      <View style={[styles.spashText, styles.appNameFlexBox]}>
        <View style={[styles.appName, styles.appNameFlexBox]}>
          <Text
            style={[styles.title, styles.titleFlexBox]}
            numberOfLines={2}
          >{`SOLID
LABOR`}</Text>
          <Text
            style={[styles.fromline, styles.titleFlexBox]}
            numberOfLines={1}
          >
            from NDLON affiliated organizations
          </Text>
        </View>
        <Text
          style={[styles.dailyMessage, styles.titleFlexBox]}
          numberOfLines={2}
        >
          This is the daily message
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appNameFlexBox: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  titleFlexBox: {
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.robotoRegular,
    alignSelf: "stretch",
  },
  title: {
    fontSize: 60,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  fromline: {
    fontSize: 18,
  },
  appName: {
    alignItems: "flex-end",
  },
  dailyMessage: {
    fontSize: 48,
    marginTop: 69,
  },
  spashText: {
    alignItems: "center",
  },
  splashPage: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 800,
    paddingHorizontal: 0,
    paddingVertical: 71,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default SplashPage;
