import CalculatorPage from "./CalculatorPage.jsx";
import { calcProse } from "../data/calcProse/finance.js";

export default function CalculatorFinancePage() {
  return <CalculatorPage prose={calcProse} />;
}