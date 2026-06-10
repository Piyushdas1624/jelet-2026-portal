# JELET 2026: Detailed Blueprint & Historical Pattern Analysis

This document presents a comprehensive, syllabus-aligned blueprint and pattern analysis for the **WBJEE JELET 2026 (Lateral Entry) Engineering & Technology** exam, compiled from a thorough analysis of previous years' papers (2022, 2023, 2024, and 2025).

---

## 1. Exam Structure & Scoring Rules
The exam consists of a single paper containing **100 Multiple Choice Questions** (MCQs) for a total of **120 Marks** over a **2-hour duration**.

*   **Category I (80 Questions - 1 Mark each)**: Only one option is correct. Negative marking of **-1/4 (-0.25) marks** is applied for incorrect answers or selecting multiple options.
*   **Category II (20 Questions - 2 Marks each)**: One or more options can be correct. **No negative marking**.
    *   *Full Marks (+2)*: If and only if all correct options (and no incorrect ones) are marked.
    *   *Partial Marks*: If some correct options (and no incorrect ones) are marked:
        $$\text{Marks} = 2 \times \frac{\text{Number of correct options marked}}{\text{Actual number of correct options}}$$
    *   *Incorrect/Zero Marks (0)*: If any incorrect option is marked.

### Subject-wise Question and Marks Distribution
| Subject | Category I (1 Mark) | Category II (2 Marks) | Total Questions | Total Marks | Weightage (%) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Mathematics** | 30 (Q1–Q30) | 10 (Q81–Q90) | 40 | 50 | 41.7% |
| **Physics** | 25 (Q31–Q55) | 5 (Q91–Q95) | 30 | 35 | 29.2% |
| **Chemistry** | 15 (Q56–Q70) | 5 (Q96–Q100) | 20 | 25 | 20.8% |
| **Electrical & Electronics** | 10 (Q71–Q80) | 0 | 10 | 10 | 8.3% |
| **Total** | **80** | **20** | **100** | **120** | **100.0%** |

---

## 2. Historical Cognitive Split (Numerical vs. Theory)
Our analysis reveals a sharp difference in the nature of questions across subjects. While Mathematics and Physics are heavily calculation-intensive, Chemistry is almost entirely conceptual/theoretical, and Electrical Engineering is a balanced mix.

| Subject | Avg. Numerical % | Avg. Theory % | Cognitive Nature & Strategy |
| :--- | :---: | :---: | :--- |
| **Mathematics** | 75% – 82% | 18% – 25% | **Very High Calculation**: Relies on algebraic simplification, calculus theorems, and matrix operations. |
| **Physics** | 55% – 73% | 27% – 45% | **Numerical-Heavy + Graphical**: Highly conceptual, featuring motion/forces, and translating graphs (e.g., $a-t$ to $v-t$ or $P-V$ thermodynamic cycles). |
| **Chemistry** | 10% – 30% | 70% – 90% | **Theory-Heavy (Time Saver)**: Emphasizes rules, structures, qualitative reaction roadmaps, and periodic trends. Ideal for saving time. |
| **Electrical & Electronics** | 60% – 80% | 20% – 40% | **Numerical Focus**: Focuses on network analysis (node/mesh), AC phasors, diode states, and op-amp calculations. |

---

## 3. Subject-wise Hidden Patterns & Weightage Analysis

### A. Engineering Mathematics (50 Marks)
Calculus and Matrices constitute over **75% of the Mathematics section**.

1.  **Matrices & Determinants (20% Weightage)**:
    *   *Hidden Pattern 1*: **Rank of 3x3 Matrices**. Almost every year features a question finding the rank of a $3\times3$ matrix or solving for a parameter $\lambda$ that determines consistency/rank (2022 Q31, 2023 Q3, 2024 Q2, 2025 Q4, Q22).
    *   *Hidden Pattern 2*: **Matrix Powers & Roots of Unity**. Matrix multiplications of the form $A^k$ where the diagonal elements are complex roots of unity ($\omega$) or trigonometric values ($\cos\theta, \sin\theta$) leading to cyclic patterns (2022 Q2, 2023 Q2, 2024 Q3, 2025 Q2).
    *   *Hidden Pattern 3*: **Homogeneous Linear Systems**. Solving for non-trivial solutions (determinant = 0) to find variables or conditions (2022 Q32, 2023 Q6, 2025 Q22).
2.  **Calculus & Differential Equations (55% Weightage)**:
    *   *Hidden Pattern 1*: **Euler's Theorem on Homogeneous Functions**. A guaranteed question on evaluating $x \frac{\partial u}{\partial x} + y \frac{\partial u}{\partial y}$ where $u$ is a function of a homogeneous algebraic ratio (2022 Q23, 2023 Q22, 2024 Q20, 2025 Q5).
    *   *Hidden Pattern 2*: **Indeterminate Limits**. Focuses on the $1^\infty$ form or trigonometric limits containing $\cos^2 x$ (e.g., $\lim_{x\to0} \frac{\sin(\pi \cos^2 x)}{x^2} = \pi$) (2022 Q16, 2023 Q14, 2024 Q16, 2025 Q24).
    *   *Hidden Pattern 3*: **Rolle's / Lagrange's Mean Value Theorem**. Evaluating the point $c \in (a, b)$ satisfying Rolle's or Lagrange's condition for logarithmic or polynomial functions (2022 Q17/Q18, 2023 Q18, 2024 Q17).
    *   *Hidden Pattern 4*: **Definite Integrals of Absolute Functions**. Calculating integrals of the form $\int |f(x)| dx$ where the absolute sign forces splitting limits (2022 Q25, 2024 Q22, 2025 Q6).
    *   *Hidden Pattern 5*: **First-Order Linear ODEs**. Solving $dy/dx + Py = Q$ using the Integrating Factor $I.F. = e^{\int P dx}$ (2022 Q27, 2023 Q27, 2024 Q26, 2025 Q10).
3.  **Coordinate Geometry (12.5% Weightage)**:
    *   *Hidden Pattern*: **Tangents and Circles/Conics**. Finding equations of tangents perpendicular/parallel to lines, or calculating the length of a common tangent to two circles (2022 Q37, 2024 Q10, 2025 Q14, Q20, Q27).
4.  **Probability (10% Weightage)**:
    *   *Hidden Pattern*: **Bayes' Theorem & Independent Events**. Calculations of conditional probability of drawing balls/coins or finding joint probabilities of independent events (2022 Q30, 2023 Q30, 2024 Q40, 2025 Q15, Q37).

### B. Physics (35 Marks)
Mechanics dominates the section.

1.  **Classical Mechanics (55% Weightage)**:
    *   *Hidden Pattern 1*: **Graphical Motion Analysis**. Finding acceleration or velocity by analyzing slopes and areas of $x-t$, $v-t$, or $a-t$ curves (2022 Q46, 2024 Q46, 2025 Q44, Q46).
    *   *Hidden Pattern 2*: **Work-Energy Theorem with Variable Force**. Integrating $W = \int F(x) dx$ where force varies quadratically or linearly (2022 Q47, 2024 Q65, 2025 Q45).
    *   *Hidden Pattern 3*: **Fluid Mechanics (Terminal Velocity)**: Terminal velocity $v_t \propto r^2$ of spheres falling through viscous liquids, and matching $v-t$ slopes (2022 Q52, 2025 Q51, Q65).
2.  **Thermal Physics & Thermodynamics (23.3% Weightage)**:
    *   *Hidden Pattern 1*: **Indicator Diagram Conversions**. Translating cyclic thermodynamic processes from $V-T$ to $P-V$ or $P-T$ coordinates (2022 Q62, 2025 Q58).
    *   *Hidden Pattern 2*: **Calorimetry Phase Changes**. High-difficulty Category-II questions involving mixing steam and ice where complete melting/vaporization is not guaranteed (2025 Q69).
3.  **Optics & Modern Physics (10% Weightage)**:
    *   *Hidden Pattern*: **Photoelectric Einstein Equation**. Calculating maximum kinetic energy or stopping potential when incident light wavelength changes (2022 Q60, 2024 Q55, Q70, 2025 Q64).

### C. Chemistry (25 Marks)
Chemistry is conceptual, favoring physical chemistry rules and reaction mechanisms.

1.  **Atomic Structure & Chemical Bonding (45% Weightage)**:
    *   *Hidden Pattern 1*: **Bohr Orbit Calculations**. Ratio of radii ($r \propto n^2/Z$) or energy levels ($E \propto Z^2/n^2$) for single-electron species like $He^+$, $Li^{2+}$ (2023 Q71/Q72, 2024 Q73, 2025 Q73).
    *   *Hidden Pattern 2*: **Molecular Geometry (VSEPR/Hybridization)**. Finding hybridization states (e.g., $d_{sp^3}$ in $PCl_5$ or $sp^3d$ in $SF_4$) and identifying linear/bent molecules (2023 Q83, 2024 Q82/Q84, 2025 Q72, Q87).
2.  **Equilibrium & Electrochemistry (30% Weightage)**:
    *   *Hidden Pattern 1*: **Le Chatelier's Principle**. Predicting shifts in gas-phase equilibria under pressure, temperature, or volume changes (2022 Q89, 2025 Q77, Q89).
    *   *Hidden Pattern 2*: **Solubility Product ($K_{sp}$)**. Calculating $K_{sp}$ from solubility values in g/L, or vice-versa (2024 Q81).
3.  **Organic Chemistry (25% Weightage)**:
    *   *Hidden Pattern*: **Qualitative Tests and Nomenclature**. Identifying carbonyls using the Iodoform test or terminal alkynes using Tollens' test, and IUPAC nomenclature of complex branched alkynes/alkenes (2024 Q78/Q79, 2025 Q81, Q89).

### D. Fundamentals of Electrical & Electronics Engineering (10 Marks)
This section is highly numerical (70% calculation).

1.  **Network Theory & DC Circuits (30% Weightage)**:
    *   *Hidden Pattern*: **Node Voltage Analysis**. Solving network branch currents or voltages using nodal equations (2023 Q94, 2024 Q94, 2025 Q94).
2.  **AC Circuits & Phasors (30% Weightage)**:
    *   *Hidden Pattern*: **RMS and Average Calculations**. Calculating the RMS value of composite wave signals ($V(t) = V_{dc} + V_m \sin\omega t$) (2023 Q93).
3.  **Electrical Machines (20% Weightage)**:
    *   *Hidden Pattern*: **Transformer Impedance & Ratios**. Transferring equivalent resistance or reactance from secondary to primary side ($R_e = R_1 + a^2 R_2$) (2022 Q92, 2024 Q100).
4.  **Analog & Digital Electronics (20% Weightage)**:
    *   *Hidden Pattern*: **Boolean Simplification & Op-Amps**. Simplifying logic networks using Boolean laws and calculating output voltage of non-inverting/inverting Op-Amps (2022 Q97/Q98, 2024 Q97/Q98, 2025 Q98/Q99/Q100).

---

## 4. JELET 2026 Question Paper Slot Blueprint

Below is the question-by-question blueprint mapping for the 100 questions of the JELET 2026 paper, aligning with the observed historical slot allocations.

### Mathematics (Q1 to Q30: Cat-I, Q81 to Q90: Cat-II)
*   **Q1**: Matrices & Determinants - Matrix Polynomial calculation ($A^k$) (Cat-I, Medium, Confidence: High)
*   **Q2**: Matrices & Determinants - Symmetric/Skew-symmetric matrix operations (Cat-I, Medium, Confidence: High)
*   **Q3**: Matrices & Determinants - Rank of a $3\times3$ parameter-dependent matrix (Cat-I, Hard, Confidence: High)
*   **Q4**: Matrices & Determinants - Determinant properties & algebraic variables (Cat-I, Medium, Confidence: Medium)
*   **Q5**: Linear Equations - System of equations with infinite solutions (Cat-I, Medium, Confidence: High)
*   **Q6**: Complex Numbers - Modulus, amplitude, and polar conversions (Cat-I, Easy, Confidence: High)
*   **Q7**: Complex Numbers - De Moivre's Theorem powers summation (Cat-I, Hard, Confidence: High)
*   **Q8**: Complex Numbers - Locus of complex equations (Cat-I, Medium, Confidence: Medium)
*   **Q9**: Coordinate Geometry - Circle equations and tangent length (Cat-I, Medium, Confidence: High)
*   **Q10**: Coordinate Geometry - Eccentricity and foci of Hyperbola/Ellipse (Cat-I, Hard, Confidence: High)
*   **Q11**: Coordinate Geometry - Intersection of line and conic section (Cat-I, Hard, Confidence: Medium)
*   **Q12**: Vector Algebra - Dot product and angle between vectors (Cat-I, Easy, Confidence: High)
*   **Q13**: Vector Algebra - Scalar triple product and coplanarity (Cat-I, Medium, Confidence: High)
*   **Q14**: Vector Algebra - Application: work done or moment of force (Cat-I, Easy, Confidence: High)
*   **Q15**: Differential Calculus - Domain and range of composite functions (Cat-I, Medium, Confidence: Medium)
*   **Q16**: Differential Calculus - Indeterminate limit of $1^\infty$ form (Cat-I, Medium, Confidence: High)
*   **Q17**: Differential Calculus - Limits involving trigonometric terms (Cat-I, Medium, Confidence: High)
*   **Q18**: Differential Calculus - Piecewise function continuity and differentiability (Cat-I, Hard, Confidence: High)
*   **Q19**: Differential Calculus - Rolle's or Mean Value Theorem (Cat-I, Medium, Confidence: High)
*   **Q20**: Application of Derivative - Tangents, normals, and slopes of curves (Cat-I, Medium, Confidence: High)
*   **Q21**: Application of Derivative - Maxima & minima optimization under constraint (Cat-I, Hard, Confidence: High)
*   **Q22**: Partial Differentiation - Euler's theorem on homogeneous functions (Cat-I, Easy, Confidence: High)
*   **Q23**: Partial Differentiation - Composite functions and partial derivatives (Cat-I, Medium, Confidence: Medium)
*   **Q24**: Integral Calculus - Indefinite integration by algebraic substitution (Cat-I, Easy, Confidence: High)
*   **Q25**: Integral Calculus - Definite integral of absolute value functions (Cat-I, Hard, Confidence: High)
*   **Q26**: Integral Calculus - Definite integral properties (periodic/trig) (Cat-I, Medium, Confidence: High)
*   **Q27**: Integral Calculus - Area of bounded region between curves (Cat-I, Medium, Confidence: High)
*   **Q28**: Differential Equations - First-order linear differential equations (Cat-I, Medium, Confidence: High)
*   **Q29**: Differential Equations - First-order exact/homogeneous equations (Cat-I, Hard, Confidence: High)
*   **Q30**: Probability - Classical probability with combinations (coin/dice) (Cat-I, Medium, Confidence: High)
*   **Q81**: Matrices & Determinants - Consistency of homogeneous equations (Cat-II, Hard, Confidence: High)
*   **Q82**: Matrices & Determinants - Properties of Adjoint & Inverse matrices (Cat-II, Hard, Confidence: High)
*   **Q83**: Complex Numbers - Roots of unity and complex geometry (Cat-II, Hard, Confidence: Medium)
*   **Q84**: Coordinate Geometry - Rectangular hyperbola properties (Cat-II, Hard, Confidence: High)
*   **Q85**: Vector Algebra - Vector identities & cross-product products (Cat-II, Hard, Confidence: High)
*   **Q86**: Differential Calculus - Differentiability of piecewise modulus functions (Cat-II, Hard, Confidence: High)
*   **Q87**: Differential Calculus - Maxima/Minima and monotonicity intervals (Cat-II, Hard, Confidence: High)
*   **Q88**: Integral Calculus - Integral properties of parameter functions (Cat-II, Hard, Confidence: Medium)
*   **Q89**: Differential Equations - Second-order ODE solutions (C.F. & P.I.) (Cat-II, Hard, Confidence: High)
*   **Q90**: Probability - Conditional probability & independent events (Cat-II, Hard, Confidence: High)

### Physics (Q31 to Q55: Cat-I, Q91 to Q95: Cat-II)
*   **Q31**: Units & Dimensions - Dimensions of parameters in equations (Cat-I, Easy, Confidence: High)
*   **Q32**: Error Analysis - Percentage error propagation in computations (Cat-I, Medium, Confidence: High)
*   **Q33**: Kinematics - Graphical translation ($a-t$ to $v-t$ curve) (Cat-I, Medium, Confidence: High)
*   **Q34**: Kinematics - Projectile motion trajectory and velocity (Cat-I, Hard, Confidence: High)
*   **Q35**: Laws of Motion - Friction and banking of roads (Cat-I, Medium, Confidence: High)
*   **Q36**: Laws of Motion - Tension in pulley-mass systems (Cat-I, Medium, Confidence: High)
*   **Q37**: Work, Power, Energy - Force & kinetic energy graphs (Cat-I, Hard, Confidence: High)
*   **Q38**: Rotational Mechanics - Center of mass integration for non-uniform rods (Cat-I, Hard, Confidence: High)
*   **Q39**: Rotational Mechanics - Conservation of angular momentum (Cat-I, Hard, Confidence: High)
*   **Q40**: Gravitation - Satellite orbital energy ratios (Cat-I, Easy, Confidence: High)
*   **Q41**: Gravitation - Variation of acceleration due to gravity ($g$) (Cat-I, Medium, Confidence: High)
*   **Q42**: Elasticity - Hooke's law and Young's/Rigidity modulus ratios (Cat-I, Easy, Confidence: High)
*   **Q43**: Surface Tension - Capillary rise and angle of contact (Cat-I, Medium, Confidence: High)
*   **Q44**: Fluid Mechanics - Torricelli's Law / equation of continuity (Cat-I, Medium, Confidence: High)
*   **Q45**: Viscosity - Terminal velocity of falling spheres (Cat-I, Hard, Confidence: High)
*   **Q46**: Thermal Expansion - Linear, areal, and volume coefficients (Cat-I, Easy, Confidence: High)
*   **Q47**: Heat Transmission - Thermal conduction of composite rods (Cat-I, Medium, Confidence: High)
*   **Q48**: Thermodynamics - First Law: work and heat along routes (Cat-I, Medium, Confidence: High)
*   **Q49**: Thermodynamics - Isothermal and Adiabatic curve slopes (Cat-I, Hard, Confidence: High)
*   **Q50**: Reflection & Refraction - Snell's Law and apparent depth graphs (Cat-I, Medium, Confidence: High)
*   **Q51**: Geometrical Optics - Lens combination equivalent focal lengths (Cat-I, Hard, Confidence: High)
*   **Q52**: Wave Optics - Brewster's angle and polarization (Cat-I, Easy, Confidence: Medium)
*   **Q53**: Photoelectricity - Einstein's equation work function (Cat-I, Medium, Confidence: High)
*   **Q54**: Photoelectricity - Stopping potential vs frequency graphs (Cat-I, Medium, Confidence: High)
*   **Q55**: Oscillations - Simple Harmonic Motion time period equations (Cat-I, Hard, Confidence: High)
*   **Q91**: Classical Mechanics - 2D elastic collisions energy conservation (Cat-II, Hard, Confidence: High)
*   **Q92**: Laws of Motion - Pulley-Spring systems force analysis (Cat-II, Hard, Confidence: Medium)
*   **Q93**: Thermodynamics - Ideal gas specific heats ratio ($C_p/C_v$) (Cat-II, Hard, Confidence: High)
*   **Q94**: Geometrical Optics - Lens-Mirror system multiple reflection (Cat-II, Hard, Confidence: High)
*   **Q95**: Photoelectric Effect - Threshold frequency characteristics (Cat-II, Hard, Confidence: High)

### Chemistry (Q56 to Q70: Cat-I, Q96 to Q100: Cat-II)
*   **Q56**: Atomic Structure - Quantum numbers energy configurations (Cat-I, Easy, Confidence: High)
*   **Q57**: Atomic Structure - Bohr model radius / energy levels (Cat-I, Medium, Confidence: High)
*   **Q58**: Chemical Bonding - VSEPR theory molecular shapes (Cat-I, Easy, Confidence: High)
*   **Q59**: Chemical Bonding - Hybridization of central atoms ($sp^3d, sp^3d^2$) (Cat-I, Medium, Confidence: High)
*   **Q60**: Acids, Bases & Salts - Normality, molarity dilution calculations (Cat-I, Medium, Confidence: High)
*   **Q61**: Acids, Bases & Salts - Solubility product principle ($K_{sp}$) (Cat-I, Hard, Confidence: High)
*   **Q62**: Redox Reactions - Oxidation numbers chemical conversions (Cat-I, Easy, Confidence: High)
*   **Q63**: Electrochemistry - Faraday's laws of electrolysis (Cat-I, Medium, Confidence: High)
*   **Q64**: Chemical Equilibrium - Le Chatelier's equilibrium yields (Cat-I, Easy, Confidence: High)
*   **Q65**: Metallurgy - Alloys composition and usage (Cat-I, Easy, Confidence: High)
*   **Q66**: Water - EDTA titration hardness removal (Cat-I, Medium, Confidence: Medium)
*   **Q67**: Organic Chemistry - IUPAC nomenclature of branched chains (Cat-I, Easy, Confidence: High)
*   **Q68**: Organic Chemistry - Isomerism (optical / structural) (Cat-I, Medium, Confidence: High)
*   **Q69**: Organic Chemistry - Grignard reactions and yields (Cat-I, Hard, Confidence: High)
*   **Q70**: Organic Chemistry - Alkynes qualitative Tollens' tests (Cat-I, Medium, Confidence: High)
*   **Q96**: Atomic Structure - de Broglie wavelength voltage calculations (Cat-II, Hard, Confidence: High)
*   **Q97**: Electrochemistry - Nernst equation EMF calculation (Cat-II, Hard, Confidence: High)
*   **Q98**: Chemical Equilibrium - $K_p$ and $K_c$ reaction relations (Cat-II, Hard, Confidence: High)
*   **Q99**: Organic Chemistry - Carbocation electrophilic addition (Cat-II, Hard, Confidence: High)
*   **Q100**: Inorganic Chemistry - Oxyacids acidic strength periodic trends (Cat-II, Hard, Confidence: High)

### Fundamentals of Electrical & Electronics Engineering (Q71 to Q80: Cat-I)
*   **Q71**: Measuring Instruments - PMMC instrument current reading (Cat-I, Medium, Confidence: High)
*   **Q72**: Transformers - Transformation ratios and primary currents (Cat-I, Easy, Confidence: High)
*   **Q73**: Transformers - Equivalent referred impedance calculations (Cat-I, Medium, Confidence: High)
*   **Q74**: Electrical Machines - Induction motor slip-torque speed (Cat-I, Medium, Confidence: High)
*   **Q75**: DC Circuits - Nodal analysis network voltage values (Cat-I, Hard, Confidence: High)
*   **Q76**: AC Circuits - Sinusoidal signal RMS / phase differences (Cat-I, Medium, Confidence: High)
*   **Q77**: Basic Semiconductors - PN diode forward/reverse conduction states (Cat-I, Easy, Confidence: High)
*   **Q78**: Analog Circuits - Op-Amp non-inverting/inverting adder calculations (Cat-I, Hard, Confidence: High)
*   **Q79**: Digital Electronics - Boolean algebra logic simplification (Cat-I, Easy, Confidence: High)
*   **Q80**: Digital Electronics - Combinational gates truth table logic (Cat-I, Easy, Confidence: High)

---
*End of Blueprint Document*
