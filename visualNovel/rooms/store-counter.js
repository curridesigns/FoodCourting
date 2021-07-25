import { canvas, ctx, frameCount } from "../../canvas.js";
import * as helperFunction from "../../helper-functions.js";
import { visualNovel } from "../VisualNovel.js"
import { taylor } from "../../../characters/Taylor.js"

//creates the store object
const store = {};
store.entrance = {
   img: "image",
   choice: {
     chat: {
       box: {
         top: 750, 
         bottom: 1050, 
         left: 750, 
         right: 1050,
         color: "#12A35A",
        }, 
        text:"Are you here to chat?",
      }, 
      shop: {
        box: {
          top: 750, 
          bottom: 1050, 
          left: 1150, 
          right: 1450,
          color: "#12A35A",
        }, 
        text:"Are you here to shop?"
      },
    },
    render: function() {},
    click: function() {},
  }
store.chat = {render: function(){}, click: function(){}, bool: false};
store.shop = {render: function(){}, bool: false}
//store's images
store.bg = document.getElementById("storeBG");
store.Reg = document.getElementById("storeReg");
store.ending = document.getElementById("taylorEnding");
store.entrance.img = document.getElementById("debug");


//run in VisualNovel.js
store.load = function() {
  store.entrance.render();

  if (store.chat.bool) {
    store.chat.render();
  }
  else if (store.shop.bool){
    store.shop.render();
  }
};

//handles taylor's click()
store.click = function(event) {


  if (store.chat.bool) {
    store.chat.click();
  }
  else if (store.shop.bool){
    store.shop.click();
  } else {
    store.entrance.click();
  }

}

store.entrance.render = function() {
  helperFunction.background(store.entrance.img);
  helperFunction.dialogueBoxes(
    store.entrance.choice.shop.box,
    store.entrance.choice.shop.text,
    10,
    34,
    24,
    ctx,
    "#F06003",
  );
  helperFunction.dialogueBoxes(
    store.entrance.choice.chat.box,
    store.entrance.choice.chat.text,
    10,
    34,
    24,
    ctx,
    "#F06003",
  );
}

store.entrance.click = function(){
  if (helperFunction.button.click(store.entrance.choice.shop.box)) {
    store.shop.bool = true;
  }
  if (helperFunction.button.click(store.entrance.choice.chat.box)) {
    store.chat.bool = true;
  }
}

store.chat.render = function () {
  helperFunction.background(store.bg);
  taylor.render(900,50);
  helperFunction.background(store.Reg);
  
  //dialogue
  taylor.dialogueRender();
}

store.chat.click = function (event) {
  switch (taylor.click(event)) {
    case "map":
      visualNovel.display = "map";
      store.chat.bool = false;
      taylor.chatNumber++;
      taylor.chatProgress = 0;
      taylor.dialogue.playerResponse = "a";
    visualNovel.forcedMini = true;
      break;
    case "ending":
      visualNovel.endScene = "taylor";
      visualNovel.display = "ending"
      break;
  };
}

store.shop.render = function() {
  helperFunction.background(store.bg);
  helperFunction.background(store.bg);
  taylor.render(900,50);
  helperFunction.background(store.Reg);
  helperFunction.dialogueBoxes(
    store.entrance.choice.chat.box,
    "Return To Map",
    10,
    34,
    24,
    ctx,
    "#F06003",
    "#12A35A"
  );
}

store.shop.click = function(){
  if (helperFunction.button.click(store.entrance.choice.chat.box)) {
    visualNovel.display = "map"
  }
}

export { store };