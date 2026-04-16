# Finalized Mini-Project Idea (Chosen)

## ✅ Selected Idea
**What-If AI: Economic Policy Impact Simulator for India**

This is a strong and unique mini-project because most student projects stop at simple prediction, while this one adds **interactive policy simulation** (what-if analysis), **explainability**, and **decision-support visualization**.

---

## Why this is the best and most unique

Compared to common ML projects (house price prediction, sentiment analysis, stock trend prediction), this idea is different because it combines:

1. **Economics + AI + Policy simulation** in one system.
2. **User-controlled scenario testing** (sliders for inflation, unemployment, exports, spending, etc.).
3. **Explainable ML output** using feature importance and scenario comparison.
4. **Practical relevance for India** with real macroeconomic indicators.

This makes your project look more research-oriented and more impactful than a typical single-model predictor.

---

## Final Project Statement (for submission)

This project builds an interactive machine learning simulator that predicts India’s GDP growth under different economic scenarios. Using historical macroeconomic indicators (inflation, unemployment, interest rates, exports, imports, government spending, and population growth), a Random Forest Regression model is trained to learn economic relationships. Users can then adjust indicator values through a Streamlit interface to run “what-if” simulations and observe predicted outcomes. The system also provides visual comparisons between baseline and simulated scenarios, along with feature-importance analysis to highlight the most influential factors. The project demonstrates how AI can support policy understanding and data-driven economic decision-making.

---

## Uniqueness boosters (add at least 2 to stand out)

To make this clearly different from other teams, include these enhancements:

### 1) Policy Shock Mode
Add preset scenarios such as:
- “High inflation shock”
- “Export boom”
- “Fiscal expansion”
- “High interest-rate tightening”

Users can apply one-click shocks and compare outcomes.

### 2) Confidence Band / Uncertainty
Instead of showing only one GDP value, show a likely range (e.g., ± confidence interval from tree variance or bootstrap).

### 3) Explainability Panel
Show:
- global feature importance (bar chart)
- local explanation for current scenario (optional: SHAP if feasible)

### 4) Baseline vs Scenario Delta Card
Display clear KPI cards:
- Predicted GDP baseline
- Predicted GDP after policy change
- Net change (% points)

---

## Recommended Dataset Sources

Prefer authoritative datasets first, then Kaggle for convenience:

- **World Bank Data** (India indicators)
- **IMF / OECD macroeconomic indicators**
- **RBI Handbook of Statistics**
- Kaggle combined macroeconomic datasets (for quick prototyping)

> Tip: Keep yearly data from around 1990 onward to balance coverage and quality.

---

## Implementation Plan (simple and practical)

### Phase 1: Data Pipeline
- Collect India macroeconomic indicator data.
- Merge by year.
- Handle missing values (forward fill / interpolation as needed).
- Normalize or scale only if required.

### Phase 2: Modeling
- Target: `GDP_Growth`.
- Features: inflation, unemployment, exports, imports, interest rate, government spending, population growth, etc.
- Train/test split (time-aware split preferred).
- Train **RandomForestRegressor**.
- Evaluate with MAE, RMSE, R².

### Phase 3: Simulation Engine
- Build a function that accepts user-adjusted indicators.
- Predict GDP for modified input.
- Compare baseline vs simulated prediction.

### Phase 4: Streamlit Dashboard
Sections:
1. Economic Dashboard
2. Scenario Simulation Panel
3. Prediction Results
4. Factor Importance Analysis

### Phase 5: Final Validation & Report
- Add 3–5 case scenarios and discuss results.
- Document limitations (correlation ≠ causation, limited variables, data lag).

---

## Suggested Tech Stack
- Python
- Pandas, NumPy
- scikit-learn
- Plotly / Matplotlib
- Streamlit

Optional:
- SHAP (for richer explainability)
- joblib (model persistence)

---

## 5–6 Line Short Version (ready for proposal form)

This project develops a machine-learning-based simulator to analyze how economic factors influence India’s GDP growth. Historical macroeconomic indicators such as inflation, unemployment, exports, imports, interest rates, and government spending are used to train a Random Forest Regression model. A Streamlit interface allows users to change indicator values and run what-if policy scenarios interactively. The system then predicts GDP outcomes and compares them with baseline values using visual dashboards. Feature-importance analysis highlights which variables most strongly affect economic performance. The project demonstrates AI-driven support for policy understanding and data-informed decision-making.

---

## Final Recommendation

**Go ahead with this 3rd idea.**

It is practical to build within a mini-project timeline, academically strong, and more unique than most common ML projects—especially if you include policy shock presets and baseline-vs-scenario comparison.
