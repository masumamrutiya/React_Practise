import React from "react";
import Man from "./Man";

function Menscard() {
  return (
    <>
      <h1 className="bg-dark text-white text-center fst-italic mt-5 mb-5">
        MEN'S COLLECTION{" "}
      </h1>
      <div className="container">
        <div className="row text-center gap-5 justify-content-evenly">
          <Man
            image="jt1"
            brand="VOXATI"
            z="Men's Denim Jacket"
            price="₹988"
            l="1200"
            offer="(65% off)"
            link="https://www.amazon.in/s?k=mens+clothes&crid=25E8LVQNEFVEN&sprefix=mens+clothes%2Caps%2C252&ref=nb_sb_noss_1"
          />
          <Man
            image="jt2"
            brand="Dennis Lingo"
            z="Dennis Lingo Men's Regular Fit Long Sleeve Button Down Panel Denim Jacket"
            price="₹925"
            l="1025"
            offer="(10% off)"
                 link="https://www.amazon.in/s?k=mens+clothes&crid=25E8LVQNEFVEN&sprefix=mens+clothes%2Caps%2C252&ref=nb_sb_noss_1"
          />
          <Man
            image="jt3"
            brand="Veirdo"
            z="Men's Regular Fit Colorblock Hoodie with Drawcord - Contemporary Style and Ultimate Ease"
            price="₹599"
            l="700"
            offer="(20% off)"
                 link="https://www.amazon.in/s?k=mens+clothes&crid=25E8LVQNEFVEN&sprefix=mens+clothes%2Caps%2C252&ref=nb_sb_noss_1"
          />
          <Man
            image="pent1"
            brand="Hubberholme"
            z="Men's Casual Trousers"
            price="₹799"
            l="1024"
            offer="(30% off)"
                 link="https://www.amazon.in/s?k=mens+clothes&crid=25E8LVQNEFVEN&sprefix=mens+clothes%2Caps%2C252&ref=nb_sb_noss_1"
          />
          <Man
            image="pent2"
            brand="POSHAX"
            z="Track Pant for Men || Track Pants || Plain Track Pant (Rib-Trackpant)"
            price="₹549"
            l="570"
            offer="(5% off)"
                 link="https://www.amazon.in/s?k=mens+clothes&crid=25E8LVQNEFVEN&sprefix=mens+clothes%2Caps%2C252&ref=nb_sb_noss_1"
          />
          <Man
            image="pent3"
            brand="FRONTLINE CREATION"
            z="Men's Lycra Solid Lycra Slim Fit Stretchable Casual Wear Comfortable Formal Trousers Pants"
            price="₹649"
            l="650"
            offer="(0% off)"
                 link="https://www.amazon.in/s?k=mens+clothes&crid=25E8LVQNEFVEN&sprefix=mens+clothes%2Caps%2C252&ref=nb_sb_noss_1"
          />
          <Man
            image="shirt2"
            brand="Generic"
            z="boy's shirt"
            price="₹1500"
            l="1725"
            offer="(15% off)"
                 link="https://www.amazon.in/s?k=mens+clothes&crid=25E8LVQNEFVEN&sprefix=mens+clothes%2Caps%2C252&ref=nb_sb_noss_1"
          />
          <Man
            image="shirt3"
            brand="TAGAS"
            z="boy's shirt"
            price="₹1100"
            l="1485"
            offer="(35% off)"
                 link="https://www.amazon.in/s?k=mens+clothes&crid=25E8LVQNEFVEN&sprefix=mens+clothes%2Caps%2C252&ref=nb_sb_noss_1"
          />
          <Man
            image="shirt5"
            brand="TAGAS"
            z="boy's shirt"
            price="₹950"
            l="1045"
            offer="(10% off)"
                 link="https://www.amazon.in/s?k=mens+clothes&crid=25E8LVQNEFVEN&sprefix=mens+clothes%2Caps%2C252&ref=nb_sb_noss_1"
          />

          <Man
            image="joger1"
            brand="Kraasa"
            z="Men & Boys Casual Wear Cargo Pants for Men Regular Fit Cargos for Men Stylish Mens Cargo Pant, Trouser, Lowers for Men"
            price="₹499"
             l="625"
            offer="(25% off)"
                 link="https://www.amazon.in/s?k=mens+clothes&crid=25E8LVQNEFVEN&sprefix=mens+clothes%2Caps%2C252&ref=nb_sb_noss_1"
          />
          <Man
            image="joger2"
            brand="Lymio"
            z="Visit the Lymio Store Lymio Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton || Cargos for Men (Army)"
            price="₹699"
             l="780"
            offer="(12% off)"
                 link="https://www.amazon.in/s?k=mens+clothes&crid=25E8LVQNEFVEN&sprefix=mens+clothes%2Caps%2C252&ref=nb_sb_noss_1"
          />
          <Man
            image="joger3"
            brand="JUGULAR"
            z="Men's Cotton Solid Men Stylish Cargo Black Track Pants"
            price="₹950"
             l="1215"
            offer="(28% off)"
                 link="https://www.amazon.in/s?k=mens+clothes&crid=25E8LVQNEFVEN&sprefix=mens+clothes%2Caps%2C252&ref=nb_sb_noss_1"
          />
        </div>
      </div>
    </>
  );
}

export default Menscard;
