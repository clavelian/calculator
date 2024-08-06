"use client";
import react from "react";
import { Button } from "../components/ui/button";
import { useState } from "react";
const Calc = () => {
  // Problem: the number value is still under construction, provided with sample function

  const [count, setCount] = useState(0);
  const handleAdd = () => setCount(count + 1);
  const handleSub = () => setCount(count - 1);
  const handleMulti = () => setCount(count * 2);
  const handleDiv = () => setCount(count / 2);
  const handleReset = () => setCount(0);
  // Del func is missing
  // % func is missing
  // - func is missing

  return (
    <>
      <div className="flex justify-center items-center py-10 ">
        <div className="screen p-10 border-white rounded-sm border flex justify-center place-items-center w-80 ">
          <form action="input">{count}</form>
          <b>{count}</b>
        </div>
      </div>
      <main className="flex justify-center place-items-center">
        <div className="calculatorHolder p-5 border border-white rounded-md">
          <div className="numpad">
            <div className="etc">
              <Button className="button text-base">%</Button>
              <Button onClick={handleReset} className="button text-base">
                C
              </Button>
              <Button className="button text-base">Del</Button>
              <Button className="button text-base">/</Button>
            </div>
            {/* 789 */}
            <div className="buttonTop">
              <Button className="button text-xl ">7</Button>
              <Button className="button text-xl ">8</Button>
              <Button className="button text-xl ">9</Button>
              <Button className="button text-xl">x</Button>
            </div>
            {/* 456 */}
            <div className="buttonMid">
              <Button className="button text-xl ">4</Button>
              <Button className="button text-xl ">5</Button>
              <Button className="button text-xl ">6</Button>
              <Button onClick={handleSub} className="button text-xl ">
                -
              </Button>
            </div>
            {/* 123 */}
            <div className="buttonLow">
              <Button className="button text-xl ">1</Button>
              <Button className="button text-xl ">2</Button>
              <Button className="button text-xl ">3</Button>
              <Button onClick={handleAdd} className="button text-xl">
                +
              </Button>
            </div>
            {/* -0. */}
            <div className="buttonLower">
              <Button className="button text-xl">-</Button>
              <Button className="button text-xl ">0</Button>
              <Button className="button text-xl ">.</Button>
              <Button className="button text-xl">=</Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Calc;
