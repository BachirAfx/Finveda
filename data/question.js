export const QUESTIONS = [
  {
    id: 1,
    category: "Investing",
    question: "What does SIP stand for in the context of mutual fund investing?",
    options: [
      "Systematic Investment Plan",
      "Standard Interest Protocol",
      "Secure Investment Portfolio",
      "Simple Indexed Plan",
    ],
    correct: 0,
    explanation:
      "SIP stands for Systematic Investment Plan — it lets investors put a fixed amount into a mutual fund regularly, averaging out market volatility over time through rupee-cost averaging.",
  },
  {
    id: 2,
    category: "Banking",
    question: "What is compound interest?",
    options: [
      "Interest calculated only on the principal amount",
      "Interest earned on both the principal and accumulated interest",
      "A fixed interest rate guaranteed by the bank",
      "Interest paid monthly regardless of balance",
    ],
    correct: 1,
    explanation:
      "Compound interest is calculated on both the initial principal and the interest already earned — meaning your money grows exponentially rather than linearly over time. Einstein reportedly called it the 'eighth wonder of the world'.",
  },
  {
    id: 3,
    category: "Risk",
    question: "Which investment option is generally considered the safest?",
    options: [
      "Small-cap stocks",
      "Cryptocurrency",
      "Government bonds",
      "Sector-specific mutual funds",
    ],
    correct: 2,
    explanation:
      "Government bonds (G-Secs / Treasury bonds) are backed by the government, making them the lowest-risk option. They offer stable but relatively lower returns compared to equities.",
  },
  {
    id: 4,
    category: "Strategy",
    question: "What does portfolio diversification mean?",
    options: [
      "Putting all money in one high-return asset",
      "Investing only in international markets",
      "Spreading investments across different asset classes to reduce risk",
      "Changing your investments every month",
    ],
    correct: 2,
    explanation:
      "Diversification means spreading investments across asset classes (stocks, bonds, gold, real estate) so a loss in one area doesn't devastate your overall portfolio. It's the core principle of risk management.",
  },
  {
    id: 5,
    category: "Banking",
    question: "What does EMI stand for in a loan context?",
    options: [
      "Estimated Monthly Installment",
      "Equated Monthly Installment",
      "External Market Index",
      "Earned Money Interest",
    ],
    correct: 1,
    explanation:
      "EMI stands for Equated Monthly Installment — a fixed payment made to the lender each month, covering both principal repayment and interest accrued on the outstanding loan amount.",
  },
  {
    id: 6,
    category: "Economics",
    question: "Inflation refers to which of the following?",
    options: [
      "A rise in the value of currency over time",
      "A decrease in the general price level of goods",
      "A sustained increase in the general price level of goods and services",
      "The interest rate set by the central bank",
    ],
    correct: 2,
    explanation:
      "Inflation is the rate at which the general level of prices for goods and services rises over time, which erodes the purchasing power of money. The RBI targets 4% inflation in India.",
  },
  {
    id: 7,
    category: "Investing",
    question: "What is an index fund?",
    options: [
      "A fund that actively picks stocks to beat the market",
      "A fund that tracks a market index like Nifty 50 or Sensex",
      "A government-backed savings scheme with guaranteed returns",
      "A fixed-deposit product offered by mutual fund houses",
    ],
    correct: 1,
    explanation:
      "An index fund passively replicates a market index (like Nifty 50) by holding the same stocks in identical proportions. It offers low costs, broad diversification, and typically outperforms most actively managed funds long-term.",
  },
  {
    id: 8,
    category: "Tax",
    question:
      "Under Section 80C of the Income Tax Act, what is the maximum annual deduction allowed?",
    options: ["₹1,00,000", "₹1,50,000", "₹2,00,000", "₹2,50,000"],
    correct: 1,
    explanation:
      "Section 80C allows a maximum deduction of ₹1,50,000 per financial year on qualifying investments like PPF, ELSS mutual funds, NSC, life insurance premiums, and home loan principal repayment.",
  },
  {
    id: 9,
    category: "Planning",
    question:
      "The 50/30/20 budgeting rule splits income into which three categories?",
    options: [
      "Savings / Debt / Food",
      "Needs / Wants / Savings",
      "Bills / Entertainment / Emergency fund",
      "Rent / Food / Investments",
    ],
    correct: 1,
    explanation:
      "The 50/30/20 rule: allocate 50% to needs (rent, groceries, utilities), 30% to wants (dining out, subscriptions, entertainment), and 20% to savings or debt repayment. It's a simple framework to stay financially healthy.",
  },
  {
    id: 10,
    category: "Investing",
    question: "What is the 'Rule of 72' used for in personal finance?",
    options: [
      "Calculating monthly EMI on a loan",
      "Estimating how long it takes to double your investment",
      "Determining the safe withdrawal rate in retirement",
      "Calculating tax liability on capital gains",
    ],
    correct: 1,
    explanation:
      "The Rule of 72 is a mental math shortcut: divide 72 by your annual return rate to estimate years needed to double your money. At 8% returns, your investment doubles in roughly 9 years (72 ÷ 8 = 9).",
  },
];

export const CATEGORY_COLORS = {
  Investing: { bg: "#F0F5FF", text: "#4A6FA5", border: "#D0E0FF" },
  Banking:   { bg: "#F0FBF4", text: "#3A7A5A", border: "#C0E8D0" },
  Risk:      { bg: "#FFF0F0", text: "#A04A4A", border: "#F8C8C8" },
  Strategy:  { bg: "#F5F1E8", text: "#8B7340", border: "#E8DFC0" },
  Economics: { bg: "#F8F0FF", text: "#7A4AA0", border: "#E0C8F8" },
  Tax:       { bg: "#F0FBF4", text: "#3A7A5A", border: "#C0E8D0" },
  Planning:  { bg: "#F5F5F3", text: "#666666", border: "#E0E0E0" },
};