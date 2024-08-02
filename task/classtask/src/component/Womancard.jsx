import React from "react";
import Woman from "./Woman";

function Womancard() {
  return (
    <>
      <h1 className=" text-center bg-dark text-white py-2 ">
        <b>
          <i>Women Collection</i>
        </b>
      </h1>
      <div className="container ">
        <div className="row m-auto py-5 text-center">
          <div className="col-4">
            <Woman
              image="w1"
              name="Mast & Harbour"
              mrp="428"
              off="1099"
              per="61"
              link="https://www.meesho.com/trendy-feminine-women-tshirts/p/bm7ll"
            />
          </div>
          <div className="col-4">
            <Woman
              image="w2"
              name="Roadster"
              mrp="407"
              off="1199"
              per="66"
              link="https://www.meesho.com/womens-casual-wear-printed-oversize-tshirt/p/6shho9"
            />
          </div>
          <div className="col-4">
            <Woman
              image="w3"
              name="EDRIO"
              mrp="599"
              off="1299"
              per="62"
              link="https://www.meesho.com/comfy-fashionista-women-tshirts/p/6n56ep"
            />
          </div>
        </div>
        <div className="row m-auto py-5 text-center">
          <div className="col-4">
            <Woman
              image="w4"
              name="DILLINGER"
              mrp="441"
              off="1299"
              per="66"
              link="https://www.meesho.com/fancy-gorgeous-t-shirt-for-beautiful-women/p/52b4hm"
            />
          </div>
          <div className="col-4">
            <Woman
              image="w5"
              name="Blissclub"
              mrp="455"
              off="1199"
              per="62"
              link="https://www.meesho.com/graphic-printed-cotton-oversize-tshirt-for-women/p/6sgyoi"
            />
          </div>
          <div className="col-4">
            <Woman
              image="w6"
              name="PROTEENS"
              mrp="879"
              off="2199"
              per="60"
              link="https://www.meesho.com/comfy-retro-women-tshirts/p/qgne6"
            />
          </div>
        </div>
        <div className="row m-auto py-5 text-center">
          <div className="col-4">
            <Woman
              image="w7"
              name="DILLINGER"
              mrp="441"
              off="1299"
              per="66"
              link="https://www.meesho.com/kabiran-heart-printed-women-tshirts/p/5k9s4y"
            />
          </div>
          <div className="col-4">
            <Woman
              image="w8"
              name="Blissclub"
              mrp="455"
              off="1199"
              per="62"
              link="https://www.meesho.com/pretty-fashionable-women-tshirts/p/50buhh"
            />
          </div>
          <div className="col-4">
            <Woman
              image="w9"
              name="PROTEENS"
              mrp="879"
              off="2199"
              per="60"
              link="https://www.meesho.com/ptts16/p/6e8o5t"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Womancard;
