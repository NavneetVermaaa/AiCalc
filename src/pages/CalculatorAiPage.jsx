import CalculatorPage from "./CalculatorPage.jsx";
import { calcProse } from "../data/calcProse/ai.js";

export default function CalculatorAiPage() {
  return <CalculatorPage prose={calcProse} />;
}