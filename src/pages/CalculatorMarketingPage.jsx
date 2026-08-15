import CalculatorPage from "./CalculatorPage.jsx";
import { calcProse } from "../data/calcProse/marketing.js";

export default function CalculatorMarketingPage() {
  return <CalculatorPage prose={calcProse} />;
}