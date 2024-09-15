import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

import Book from "../Lab4Tiki_Ok/assets/images/book.png";
import { useState } from "react";
export default function App() {
  const [quantity, setQuantity] = useState(1);
  const price = 141800;
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Book}></Image>
        <View style={styles.infoBook}>
          <Text style={styles.text}>Nguyên hàm tích phân và ứng dụng</Text>
          <Text style={styles.text}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.textPrice}>{VND.format(price)}</Text>
          <Text
            style={{
              color: "grey",
              fontSize: 14,
              textDecorationLine: "line-through",
            }}
          >
            {VND.format(price)}
          </Text>

          <View style={styles.quantityContainer}>
            <View style={styles.quantityButtonContainer}>
              <TouchableOpacity
                style={styles.buttonQuantity}
                disabled={quantity == 1 ? true : false}
                onPress={() => {
                  setQuantity(quantity - 1);
                }}
              >
                <Text
                  style={[
                    styles.textButton,
                    { color: quantity == 1 ? "#808080" : "black" },
                  ]}
                >
                  -
                </Text>
              </TouchableOpacity>
              <Text style={styles.textQuantity}>{quantity}</Text>
              <TouchableOpacity
                style={styles.buttonQuantity}
                onPress={() => {
                  setQuantity(quantity + 1);
                }}
              >
                <Text style={styles.textButton}>+</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.textLink}>Mua sau</Text>
          </View>
        </View>
      </View>

      <View style={styles.discountCode}>
        <Text style={[styles.text, { paddingRight: 35 }]}>
          Mã giảm giá đã lưu
        </Text>
        <Text style={styles.textLink}>Xem tại đây</Text>
      </View>

      <View style={styles.containerSale}>
        <View style={styles.discountForm}>
          <Text style={styles.textIcon}> </Text>
          <TextInput placeholder="Mã giảm giá" style={styles.textInput} />
        </View>
        <TouchableOpacity style={styles.buttonSale}>Áp dụng</TouchableOpacity>
      </View>

      <View style={styles.giftVoucher}>
        <Text style={[styles.text, { paddingRight: 10 }]}>
          Bạn có phiếu quà tặng Tiki/Got it/Urbox?
        </Text>
        <Text style={styles.textLink}>Nhập tại đây?</Text>
      </View>
      <View style={styles.priorCal}>
        <Text style={{ fontSize: 20, fontWeight: 700 }}>Tạm tính</Text>
        <Text style={styles.textPrice}>{VND.format(price * quantity)}</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.cal}>
          <Text style={{ fontSize: 20, fontWeight: 700, color: "#808080" }}>
            Thành tiền
          </Text>
          <Text style={styles.textPrice}>{VND.format(price * quantity)}</Text>
        </View>
        <TouchableOpacity style={styles.buttonOrder}>
          TIẾN HÀNH ĐẶT HÀNG
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoBook: {
    justifyContent: "space-between",
  },
  textPrice: {
    color: "red",
    fontSize: 20,
    fontWeight: 700,
  },
  infoBookFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  quantityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  quantityButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttonQuantity: {
    backgroundColor: "#C4C4C4",
    width: 20,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    fontSize: 15,
    fontWeight: 700,
  },
  textQuantity: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  containerSale: {
    flexDirection: "row",
    marginTop: 40,
    alignItems: "center",
    justifyContent: "space-between",
  },
  discountForm: {
    flexDirection: "row",
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#808080",
    width: "62%",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    height: 45,
    paddingLeft: 50,
  },
  textIcon: {
    backgroundColor: "#F2DD1B",
    fontSize: 16,
    width: 32,
    position: "absolute",
    left: 15,
  },
  buttonSale: {
    width: "30%",
    height: 45,
    backgroundColor: "#0A5EB7",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    fontWeight: 700,
    borderRadius: 2,
  },
  discountCode: {
    flexDirection: "row",
    paddingTop: 20,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textLink: {
    color: "blue",
    fontWeight: 700,
    fontSize: 12,
  },
  text: {
    fontWeight: 700,
    fontSize: 12,
  },
  giftVoucher: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 50,
  },
  priorCal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
  },
  footer: {
    justifyContent: "center",
    marginTop: "35%",
  },
  cal: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonOrder: {
    backgroundColor: "#E53935",
    width: "100%",
    color: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    marginTop: 20,
    fontWeight: 700,
    borderRadius: 2,
  },
});
