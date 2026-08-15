import CalculatorPage from "./CalculatorPage.jsx";
import { calcProse } from "../data/calcProse/startup.js";

export default function CalculatorStartupPage() {
  return <CalculatorPage prose={calcProse} />;
}