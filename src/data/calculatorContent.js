import { calculatorContentAi } from "./calculatorContentAi.js";
import { calculatorContentStartupA } from "./calculatorContentStartupA.js";
import { calculatorContentStartupB } from "./calculatorContentStartupB.js";
import { calculatorContentMarketing } from "./calculatorContentMarketing.js";
import { calculatorContentFinanceA } from "./calculatorContentFinanceA.js";
import { calculatorContentFinanceB } from "./calculatorContentFinanceB.js";

export const calculatorContent = {
  ...calculatorContentAi,
  ...calculatorContentStartupA,
  ...calculatorContentStartupB,
  ...calculatorContentMarketing,
  ...calculatorContentFinanceA,
  ...calculatorContentFinanceB
};
