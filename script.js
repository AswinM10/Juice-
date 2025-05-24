 function changeJuice(name, price, itemImage, bottleImage, bgClass) {
      document.getElementById("flavor").innerText = name;
      document.getElementById("price").innerText = price;
      document.getElementById("item-img").src = "./assets/" + itemImage;
      document.getElementById("bottle-img").src = "./assets/" + bottleImage;

      const wrapper = document.getElementById("main-bg");
      wrapper.className = "juice-wrapper " + bgClass;


}

