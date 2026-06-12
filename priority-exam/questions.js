// JELET 2026 High-Yield Priority Practice Exam Questions
// Focuses exclusively on:
// - Mathematics: Matrices & Determinants, Vectors, Limits, Sets
// - Physics: Units & Dimensions, Kinematics, NLM, WPE, Optics, Photoelectricity
// - Chemistry: Chemical Equilibrium, Chemical Bonding, Atomic Structure, Mole Concept
// - FEEE: Semiconductors, Biasing, PN Junction, Transistors (BJT/MOSFET/CMOS), Logic Gates

const priorityQuestions = [
  // ================= MATHEMATICS CATEGORY I (1 to 15) =================
  {
    id: 1,
    subject: "mathematics",
    category: 1,
    text: "If $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ and $A^2 - kA - 2I = O$, then the value of $k$ is:",
    options: ["5", "3", "-5", "2"],
    correct: [0],
    solution: "By Cayley-Hamilton Theorem, a square matrix satisfies its own characteristic equation: $|A - \\lambda I| = 0 \\implies (1-\\lambda)(4-\\lambda) - 6 = 0 \\implies \\lambda^2 - 5\\lambda - 2 = 0$. Therefore, $A^2 - 5A - 2I = O$, which yields $k = 5$."
  },
  {
    id: 2,
    subject: "mathematics",
    category: 1,
    text: "Let $A$ be a $3 \\times 3$ non-singular matrix. If $|A| = 3$, then the value of $|2 \\text{adj}(A)|$ is equal to:",
    options: ["72", "144", "36", "18"],
    correct: [0],
    solution: "Using the properties of determinants: $|kM| = k^n|M|$ for $n \\times n$ matrix, and $|\\text{adj}(A)| = |A|^{n-1}$. Here $n=3$, so $|2 \\text{adj}(A)| = 2^3 |\\text{adj}(A)| = 8 \\cdot |A|^2 = 8 \\cdot 3^2 = 8 \\cdot 9 = 72$."
  },
  {
    id: 3,
    subject: "mathematics",
    category: 1,
    text: "If the system of equations $x + 2y + z = 1$, $2x + 3y + z = 2$, and $3x + 5y + kz = 3$ has infinite solutions, then the value of $k$ is:",
    options: ["2", "1", "3", "0"],
    correct: [0],
    solution: "For the system to have infinite solutions, the determinant of coefficients $\\Delta = 0$. Here $\\Delta = \\begin{vmatrix} 1 & 2 & 1 \\\\ 2 & 3 & 1 \\\\ 3 & 5 & k \\end{vmatrix} = 0$. Performing $R_2 \\to R_2 - 2R_1$ and $R_3 \\to R_3 - 3R_1$ gives $\\begin{vmatrix} 1 & 2 & 1 \\\\ 0 & -1 & -1 \\\\ 0 & -1 & k-3 \\end{vmatrix} = -1(k-3) - 1 = 0 \\implies -k + 3 - 1 = 0 \\implies k = 2$."
  },
  {
    id: 4,
    subject: "mathematics",
    category: 1,
    text: "If the vectors $\\vec{a} = \\hat{i} + \\lambda\\hat{j} + 3\\hat{k}$ and $\\vec{b} = 3\\hat{i} + 2\\hat{j} + 9\\hat{k}$ are parallel to each other, then the value of $\\lambda$ is:",
    options: ["2/3", "3/2", "2", "3"],
    correct: [0],
    solution: "For parallel vectors, the ratio of their components must be equal: $\\frac{1}{3} = \\frac{\\lambda}{2} = \\frac{3}{9} \\implies \\lambda = 2/3$."
  },
  {
    id: 5,
    subject: "mathematics",
    category: 1,
    text: "The volume of the parallelepiped whose coterminous edges are represented by the vectors $\\vec{a} = 2\\hat{i} - 3\\hat{j} + 4\\hat{k}$, $\\vec{b} = \\hat{i} + 2\\hat{j} - \\hat{k}$, and $\\vec{c} = 3\\hat{i} - \\hat{j} + 2\\hat{k}$ is:",
    options: ["7 units", "14 units", "0 units", "21 units"],
    correct: [0],
    solution: "Volume $V = |[\\vec{a}\\ \\vec{b}\\ \\vec{c}]| = \\begin{vmatrix} 2 & -3 & 4 \\\\ 1 & 2 & -1 \\\\ 3 & -1 & 2 \\end{vmatrix} = 2(4 - 1) - (-3)(2 - (-3)) + 4(-1 - 6) = 2(3) + 3(5) + 4(-7) = 6 + 15 - 28 = -7$. The magnitude of the volume is 7 units."
  },
  {
    id: 6,
    subject: "mathematics",
    category: 1,
    text: "The value of the limit $\\lim_{x \\to 0} \\frac{e^{\\sin x} - 1}{x}$ is:",
    options: ["1", "0", "e", "$e-1$"],
    correct: [0],
    solution: "Using L'Hopital's rule (0/0 form): Differentiate numerator and denominator: $\\lim_{x \\to 0} \\frac{e^{\\sin x} \\cos x}{1} = e^0 \\cdot \\cos 0 = 1 \\cdot 1 = 1$."
  },
  {
    id: 7,
    subject: "mathematics",
    category: 1,
    text: "The value of the limit $\\lim_{x \\to 0} (1 + 2x)^{3/x}$ is:",
    options: ["$e^6$", "$e^3$", "$e^2$", "e"],
    correct: [0],
    solution: "This is a $1^\\infty$ form. Limit $L = e^k$, where $k = \\lim_{x \\to 0} \\frac{3}{x} \\cdot (1+2x - 1) = \\lim_{x \\to 0} \\frac{3}{x} \\cdot 2x = 6$. So, the limit is $e^6$."
  },
  {
    id: 8,
    subject: "mathematics",
    category: 1,
    text: "In a class of 50 students, 30 play cricket, 25 play football, and 10 play both. How many students play neither cricket nor football?",
    options: ["5", "10", "15", "0"],
    correct: [0],
    solution: "Using Set formulas: $n(C \\cup F) = n(C) + n(F) - n(C \\cap F) = 30 + 25 - 10 = 45$. The number of students playing neither is $n(\\text{Total}) - n(C \\cup F) = 50 - 45 = 5$."
  },
  {
    id: 9,
    subject: "mathematics",
    category: 1,
    text: "If $A$ and $B$ are two sets such that $n(A) = 12$, $n(B) = 17$, and $n(A \\cup B) = 25$, find $n(A \\cap B)$:",
    options: ["4", "8", "5", "12"],
    correct: [0],
    solution: "$n(A \\cap B) = n(A) + n(B) - n(A \\cup B) = 12 + 17 - 25 = 4$."
  },
  {
    id: 10,
    subject: "mathematics",
    category: 1,
    text: "Let $A$ and $B$ be two orthogonal vectors. If $\\vec{a} = 2\\hat{i} + 3\\hat{j} - \\hat{k}$ and $\\vec{b} = \\hat{i} - 2\\hat{j} + k\\hat{k}$, find the value of $k$:",
    options: ["-4", "4", "2", "-2"],
    correct: [0],
    solution: "For orthogonal vectors, $\\vec{a} \\cdot \\vec{b} = 0 \\implies (2)(1) + (3)(-2) + (-1)(k) = 0 \\implies 2 - 6 - k = 0 \\implies -4 - k = 0 \\implies k = -4$."
  },
  {
    id: 11,
    subject: "mathematics",
    category: 1,
    text: "Let $P(A)$ and $P(B)$ be the probabilities of two independent events $A$ and $B$. If $P(A) = 0.4$ and $P(B) = 0.5$, what is $P(A \\cup B)$?",
    options: ["0.7", "0.9", "0.2", "0.6"],
    correct: [0],
    solution: "For independent events, $P(A \\cap B) = P(A) \\cdot P(B) = 0.4 \\times 0.5 = 0.2$. Therefore, $P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = 0.4 + 0.5 - 0.2 = 0.7$."
  },
  {
    id: 12,
    subject: "mathematics",
    category: 1,
    text: "If $f(x) = \\frac{\\sin(\\pi \\cos^2 x)}{x^2}$, then $\\lim_{x \\to 0} f(x)$ is equal to:",
    options: ["$\\pi$", "$-\\pi$", "$0$", "$1$"],
    correct: [0],
    solution: "Rewrite $\\sin(\\pi \\cos^2 x) = \\sin(\\pi(1 - \\sin^2 x)) = \\sin(\\pi - \\pi\\sin^2 x) = \\sin(\\pi \\sin^2 x)$. Therefore, $\\lim_{x \\to 0} \\frac{\\sin(\\pi \\sin^2 x)}{x^2} = \\lim_{x \\to 0} \\frac{\\sin(\\pi \\sin^2 x)}{\\pi \\sin^2 x} \\cdot \\frac{\\pi \\sin^2 x}{x^2} = 1 \\cdot \\pi \\cdot 1^2 = \\pi$."
  },
  {
    id: 13,
    subject: "mathematics",
    category: 1,
    text: "If the determinant $\\begin{vmatrix} x & 2 \\\\ 3 & 5 \\end{vmatrix} = 4$, then the value of $x$ is:",
    options: ["2", "4", "0", "5"],
    correct: [0],
    solution: "$5x - 6 = 4 \\implies 5x = 10 \\implies x = 2$."
  },
  {
    id: 14,
    subject: "mathematics",
    category: 1,
    text: "The vector projection of $\\vec{a} = \\hat{i} - 2\\hat{j} + \\hat{k}$ on $\\vec{b} = 4\\hat{i} - 4\\hat{j} + 7\\hat{k}$ is:",
    options: ["19/9", "19/81", "19", "3"],
    correct: [0],
    solution: "Scalar projection of $\\vec{a}$ on $\\vec{b}$ is $\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|} = \\frac{(1)(4) + (-2)(-4) + (1)(7)}}{\\sqrt{16+16+49}} = \\frac{4+8+7}{\\sqrt{81}} = \\frac{19}{9}$."
  },
  {
    id: 15,
    subject: "mathematics",
    category: 1,
    text: "The number of subsets of a set containing 5 elements is:",
    options: ["32", "31", "16", "25"],
    correct: [0],
    solution: "The number of subsets of a set of size $n$ is $2^n$. For $n=5$, it is $2^5 = 32$."
  },

  // ================= PHYSICS CATEGORY I (16 to 27) =================
  {
    id: 16,
    subject: "physics",
    category: 1,
    text: "In the dimensional formula of the universal gravitational constant $G$, the power of mass $M$ is:",
    options: ["-1", "-2", "1", "3"],
    correct: [0],
    solution: "Since $F = G\\frac{m_1m_2}{r^2} \\implies G = \\frac{Fr^2}{m_1m_2}$. Dimensions: $[G] = \\frac{[MLT^{-2}][L^2]}{[M^2]} = [M^{-1}L^3T^{-2}]$. The power of $M$ is -1."
  },
  {
    id: 17,
    subject: "physics",
    category: 1,
    text: "A physical quantity $X$ is given by $X = \\frac{A^2 B}{C^3}$. If the percentage errors in $A$, $B$, and $C$ are 1%, 2%, and 1% respectively, the maximum percentage error in $X$ is:",
    options: ["7%", "5%", "4%", "6%"],
    correct: [0],
    solution: "$\\frac{\\Delta X}{X}\\% = 2\\frac{\\Delta A}{A}\\% + 1\\frac{\\Delta B}{B}\\% + 3\\frac{\\Delta C}{C}\\% = 2(1\\%) + 1(2\\%) + 3(1\\%) = 2 + 2 + 3 = 7\\%$."
  },
  {
    id: 18,
    subject: "physics",
    category: 1,
    text: "The velocity-time graph of a body moving in a straight line is a triangle with base 10 seconds and height $20\\text{ m/s}$. The total displacement of the body is:",
    options: ["100 m", "200 m", "50 m", "10 m"],
    correct: [0],
    solution: "Displacement is the area under the $v-t$ graph. Area of the triangle = $\\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 10 \\times 20 = 100\\text{ m}$."
  },
  {
    id: 19,
    subject: "physics",
    category: 1,
    text: "A particle is projected with an initial velocity of $30\\text{ m/s}$ at an angle of $30^\\circ$ with the horizontal. Find the maximum height reached. (Take $g = 10\\text{ m/s}^2$)",
    options: ["11.25 m", "45 m", "22.5 m", "90 m"],
    correct: [0],
    solution: "$H = \\frac{u^2 \\sin^2 \\theta}{2g} = \\frac{30^2 \\cdot (1/2)^2}{2(10)} = \\frac{900 \\cdot (1/4)}{20} = \\frac{225}{20} = 11.25\\text{ m}$."
  },
  {
    id: 20,
    subject: "physics",
    category: 1,
    text: "Two masses of $3\\text{ kg}$ and $1\\text{ kg}$ are connected by a light string passing over a smooth frictionless pulley. The acceleration of the masses is: (Take $g = 10\\text{ m/s}^2$)",
    options: ["5 m/s²", "2.5 m/s²", "10 m/s²", "7.5 m/s²"],
    correct: [0],
    solution: "Atwood machine acceleration $a = \\frac{m_1 - m_2}{m_1 + m_2}g = \\frac{3 - 1}{3 + 1} \\cdot 10 = \\frac{2}{4} \\cdot 10 = 5\\text{ m/s}^2$."
  },
  {
    id: 21,
    subject: "physics",
    category: 1,
    text: "A force $F = (3x^2 + 2x)\\text{ N}$ acts on a body of mass $2\\text{ kg}$ causing a displacement from $x=0$ to $x=2\\text{ m}$. The work done by the force is:",
    options: ["12 J", "8 J", "16 J", "24 J"],
    correct: [0],
    solution: "$W = \\int_{0}^{2} F(x) dx = \\int_{0}^{2} (3x^2 + 2x) dx = [x^3 + x^2]_{0}^{2} = (8 + 4) - 0 = 12\\text{ J}$."
  },
  {
    id: 22,
    subject: "physics",
    category: 1,
    text: "A thin convex lens of focal length $20\\text{ cm}$ is kept in contact with a thin concave lens of focal length $40\\text{ cm}$. The equivalent focal length of the combination is:",
    options: ["40 cm", "-40 cm", "20 cm", "-20 cm"],
    correct: [0],
    solution: "$\\frac{1}{f_{\\text{eq}}} = \\frac{1}{f_1} + \\frac{1}{f_2} = \\frac{1}{20} - \\frac{1}{40} = \\frac{2-1}{40} = \\frac{1}{40} \\implies f_{\\text{eq}} = 40\\text{ cm}$."
  },
  {
    id: 23,
    subject: "physics",
    category: 1,
    text: "When light is incident on a transparent glass plate of refractive index $\\mu = \\sqrt{3}$, the reflected light is completely polarized if the angle of incidence is:",
    options: ["60°", "30°", "45°", "90°"],
    correct: [0],
    solution: "By Brewster's Law, $\\tan \\theta_p = \\mu = \\sqrt{3} \\implies \\theta_p = 60^\\circ$."
  },
  {
    id: 24,
    subject: "physics",
    category: 1,
    text: "If light of wavelength $300\\text{ nm}$ is incident on a metal plate of work function $2.0\\text{ eV}$, what is the maximum kinetic energy of the emitted photoelectrons? (Take $hc = 1240\\text{ eV}\\cdot\\text{nm}$)",
    options: ["2.13 eV", "4.13 eV", "1.13 eV", "3.0 eV"],
    correct: [0],
    solution: "Energy of photon $E = \\frac{hc}{\\lambda} = \\frac{1240}{300} \\approx 4.13\\text{ eV}$. Kinetic Energy $K_{\\text{max}} = E - \\phi = 4.13 - 2.0 = 2.13\\text{ eV}$."
  },
  {
    id: 25,
    subject: "physics",
    category: 1,
    text: "If the intensity of incident light in a photoelectric experiment is doubled, then the stopping potential will:",
    options: ["Remain unchanged", "Double", "Halve", "Increase slightly"],
    correct: [0],
    solution: "Stopping potential is independent of the intensity of light. It only depends on the frequency of the incident light. Therefore, it remains unchanged."
  },
  {
    id: 26,
    subject: "physics",
    category: 1,
    text: "A bullet of mass $10\\text{ g}$ moving with velocity $400\\text{ m/s}$ hits a wooden block and penetrates $10\\text{ cm}$ before coming to rest. The average resistive force offered by the block is:",
    options: ["8000 N", "4000 N", "2000 N", "1000 N"],
    correct: [0],
    solution: "Work-Energy Theorem: $W = \\Delta KE \\implies -F \\cdot d = 0 - \\frac{1}{2}mv^2 \\implies F = \\frac{mv^2}{2d} = \\frac{0.01 \\times (400)^2}{2 \\times 0.1} = \\frac{1600}{0.2} = 8000\\text{ N}$."
  },
  {
    id: 27,
    subject: "physics",
    category: 1,
    text: "The apparent depth of a coin placed at the bottom of a container filled with water ($\\mu = 4/3$) to a depth of $12\\text{ cm}$ is:",
    options: ["9 cm", "16 cm", "10 cm", "8 cm"],
    correct: [0],
    solution: "$d_{\\text{apparent}} = \\frac{d_{\\text{real}}}{\\mu} = \\frac{12}{4/3} = 12 \\times \\frac{3}{4} = 9\\text{ cm}$."
  },

  // ================= CHEMISTRY CATEGORY I (28 to 39) =================
  {
    id: 28,
    subject: "chemistry",
    category: 1,
    text: "The ratio of the radius of the 2nd Bohr orbit of $\\text{He}^+$ ($Z=2$) to the 3rd Bohr orbit of $\\text{Li}^{2+}$ ($Z=3$) is:",
    options: ["2/3", "4/9", "3/2", "1/1"],
    correct: [0],
    solution: "Radius $r \\propto \\frac{n^2}{Z}$. So $\\frac{r_1}{r_2} = \\frac{2^2/2}{3^2/3} = \\frac{2}{3}$."
  },
  {
    id: 29,
    subject: "chemistry",
    category: 1,
    text: "According to VSEPR theory, the hybridization and shape of the $XeF_2$ molecule is:",
    options: ["sp³d, Linear", "sp³, Bent", "sp³d², Linear", "sp², Linear"],
    correct: [0],
    solution: "For $XeF_2$, $SN = \\frac{1}{2}[8 + 2] = 5 \\implies sp^3d$. There are 2 Bond Pairs and 3 Lone Pairs in the equatorial plane, leading to a straight linear structure."
  },
  {
    id: 30,
    subject: "chemistry",
    category: 1,
    text: "For the reaction $PCl_5(g) \\rightleftharpoons PCl_3(g) + Cl_2(g)$, the relation between $K_p$ and $K_c$ is:",
    options: ["Kp = Kc(RT)", "Kp = Kc", "Kp = Kc(RT)^-1", "Kp = Kc(RT)^2"],
    correct: [0],
    solution: "Here $\\Delta n_g = (1 + 1) - 1 = 1$. Since $K_p = K_c(RT)^{\\Delta n_g}$, we have $K_p = K_c(RT)$."
  },
  {
    id: 31,
    subject: "chemistry",
    category: 1,
    text: "How many grams of $NaOH$ (molar mass = $40\\text{ g/mol}$) are needed to prepare $500\\text{ mL}$ of a $0.2\\text{ M}$ solution?",
    options: ["4.0 g", "8.0 g", "2.0 g", "10.0 g"],
    correct: [0],
    solution: "Moles $n = M \\times V(\\text{L}) = 0.2 \\times 0.5 = 0.1\\text{ mol}$. Mass $= n \\times \\text{Molar Mass} = 0.1 \\times 40 = 4.0\\text{ g}$."
  },
  {
    id: 32,
    subject: "chemistry",
    category: 1,
    text: "The solubility product of $BaSO_4$ in water is $1.0 \\times 10^{-10}$. Find its solubility in mol/L:",
    options: ["1.0 x 10^-5", "1.0 x 10^-10", "2.0 x 10^-5", "1.0 x 10^-6"],
    correct: [0],
    solution: "Since $BaSO_4 \\rightleftharpoons Ba^{2+} + SO_4^{2-}$, $K_{sp} = s^2 \\implies s = \\sqrt{K_{sp}} = \\sqrt{1.0 \\times 10^{-10}} = 1.0 \\times 10^{-5}\\text{ mol/L}$."
  },
  {
    id: 33,
    subject: "chemistry",
    category: 1,
    text: "In the reaction $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$ with $\\Delta H = -92\\text{ kJ}$, the equilibrium yield of ammonia is increased by:",
    options: ["Increasing pressure", "Increasing temperature", "Adding catalyst", "Increasing volume"],
    correct: [0],
    solution: "By Le Chatelier's Principle: There are fewer gas moles on the product side ($2 < 4$), so increasing pressure shifts equilibrium forward. Since the reaction is exothermic, increasing temp shifts it backward."
  },
  {
    id: 34,
    subject: "chemistry",
    category: 1,
    text: "The number of electrons in a subshell with Azimuthal quantum number $l=3$ is:",
    options: ["14", "10", "6", "2"],
    correct: [0],
    solution: "Max capacity $= 2(2l+1) = 2(2(3)+1) = 2(7) = 14$."
  },
  {
    id: 35,
    subject: "chemistry",
    category: 1,
    text: "Which of the following compounds has a zero net dipole moment?",
    options: ["BF3", "NH3", "H2O", "CHCl3"],
    correct: [0],
    solution: "$BF_3$ has a symmetric trigonal planar shape, meaning its individual dipole moments cancel out completely, yielding $\\mu = 0$."
  },
  {
    id: 36,
    subject: "chemistry",
    category: 1,
    text: "What is the equivalent weight of $H_2SO_4$ (molar mass = $98\\text{ g/mol}$) in a complete neutralization reaction?",
    options: ["49 g", "98 g", "32.6 g", "196 g"],
    correct: [0],
    solution: "Equivalent weight $= \\frac{\\text{Molar Mass}}{\\text{Basicity}} = \\frac{98}{2} = 49\\text{ g}$."
  },
  {
    id: 37,
    subject: "chemistry",
    category: 1,
    text: "The de Broglie wavelength of an electron accelerated by a potential difference of $100\\text{ V}$ is approximately:",
    options: ["1.23 Å", "12.3 Å", "0.123 Å", "123 Å"],
    correct: [0],
    solution: "Using the shortcut formula: $\\lambda = \\frac{12.27}{\\sqrt{V}} = \\frac{12.27}{\\sqrt{100}} = \\frac{12.27}{10} = 1.227\\text{ Å} \\approx 1.23\\text{ Å}$."
  },
  {
    id: 38,
    subject: "chemistry",
    category: 1,
    text: "If $10\\text{ g}$ of calcium carbonate ($CaCO_3$, molar mass = $100\\text{ g/mol}$) is heated completely, the volume of $CO_2$ gas released at STP is:",
    options: ["2.24 L", "22.4 L", "1.12 L", "4.48 L"],
    correct: [0],
    solution: "$CaCO_3 \\to CaO + CO_2$. Moles of $CaCO_3 = 10/100 = 0.1\\text{ mol}$. Since 1 mol gives 1 mol $CO_2$, we get $0.1\\text{ mol } CO_2$. Volume at STP $= 0.1 \\times 22.4 = 2.24\\text{ L}$."
  },
  {
    id: 39,
    subject: "chemistry",
    category: 1,
    text: "According to VSEPR theory, the molecular shape of $SF_6$ is:",
    options: ["Octahedral", "Hexagonal", "Trigonal bipyramidal", "See-saw"],
    correct: [0],
    solution: "For $SF_6$, $SN = \\frac{1}{2}[6 + 6] = 6$. With 6 Bond Pairs, the shape is octahedral."
  },

  // ================= FEEE CATEGORY I (40 to 50) =================
  {
    id: 40,
    subject: "electrical",
    category: 1,
    text: "In a semiconductor material, the relationship between intrinsic carrier concentration ($n_i$), electron concentration ($n$), and hole concentration ($p$) is given by:",
    options: ["n_i² = n · p", "n_i = n · p", "n_i = n + p", "n_i² = n + p"],
    correct: [0],
    solution: "By the Mass Action Law: $n \\cdot p = n_i^2$."
  },
  {
    id: 41,
    subject: "electrical",
    category: 1,
    text: "If a silicon diode is Forward Biased, the approximate barrier potential across the junction is:",
    options: ["0.7 V", "0.3 V", "1.1 V", "0 V"],
    correct: [0],
    solution: "The typical barrier potential (knee voltage) of a silicon PN junction diode is $0.7\\text{ V}$ ($0.3\\text{ V}$ is for Germanium)."
  },
  {
    id: 42,
    subject: "electrical",
    category: 1,
    text: "A transistor has a common-emitter current gain $\\beta = 99$. The common-base current gain $\\alpha$ of the transistor is:",
    options: ["0.99", "1.01", "0.90", "0.95"],
    correct: [0],
    solution: "$\\alpha = \\frac{\\beta}{\\beta + 1} = \\frac{99}{99 + 1} = \\frac{99}{100} = 0.99$."
  },
  {
    id: 43,
    subject: "electrical",
    category: 1,
    text: "In which of the following regions must a BJT be biased to act as a closed switch?",
    options: ["Saturation region", "Active region", "Cut-off region", "Breakdown region"],
    correct: [0],
    solution: "A transistor acts as a closed switch in the saturation region, and as an open switch in the cut-off region. It acts as an amplifier in the active region."
  },
  {
    id: 44,
    subject: "electrical",
    category: 1,
    text: "Which of the following electronic components operates in reverse bias for light detection?",
    options: ["Photodiode", "Solar Cell", "LED", "Zener Diode"],
    correct: [0],
    solution: "Photodiodes are operated in reverse bias. The absorbed light increases the reverse leakage current by creating electron-hole pairs."
  },
  {
    id: 45,
    subject: "electrical",
    category: 1,
    text: "The output of a 2-input XOR gate is $1$ if the inputs $A$ and $B$ are:",
    options: ["A = 0, B = 1", "A = 0, B = 0", "A = 1, B = 1", "A = B"],
    correct: [0],
    solution: "An XOR gate output is 1 when the inputs are different ($A \\neq B$). Here, $A=0, B=1$ satisfies this."
  },
  {
    id: 46,
    subject: "electrical",
    category: 1,
    text: "In an ideal non-inverting operational amplifier circuit, if $R_f = 9\\text{ k}\\Omega$ and $R_{in} = 1\\text{ k}\\Omega$, the closed-loop voltage gain $A_v$ is:",
    options: ["10", "9", "-9", "-10"],
    correct: [0],
    solution: "For a non-inverting amplifier, $A_v = 1 + \\frac{R_f}{R_{in}} = 1 + \\frac{9}{1} = 10$."
  },
  {
    id: 47,
    subject: "electrical",
    category: 1,
    text: "The RMS value of the voltage signal $v(t) = 5 + 10\\sin(\\omega t)\\text{ V}$ is:",
    options: ["$\\sqrt{75}$ V", "15 V", "10 V", "$\\sqrt{125}$ V"],
    correct: [0],
    solution: "$V_{rms} = \\sqrt{V_{dc}^2 + \\frac{V_m^2}{2}} = \\sqrt{5^2 + \\frac{10^2}{2}} = \\sqrt{25 + \\frac{100}{2}} = \\sqrt{25 + 50} = \\sqrt{75}\\text{ V}$."
  },
  {
    id: 48,
    subject: "electrical",
    category: 1,
    text: "Which of the following logic gates is classified as a universal gate?",
    options: ["NAND", "XOR", "AND", "OR"],
    correct: [0],
    solution: "NAND and NOR gates are universal gates because any boolean expression can be realized using only these gates."
  },
  {
    id: 49,
    subject: "electrical",
    category: 1,
    text: "In a PNP transistor, the majority charge carriers in the emitter are:",
    options: ["Holes", "Free electrons", "Donor ions", "Acceptor ions"],
    correct: [0],
    solution: "In a PNP transistor, the emitter is of P-type, so the majority charge carriers are holes."
  },
  {
    id: 50,
    subject: "electrical",
    category: 1,
    text: "Simplify the Boolean expression $Y = A\\bar{B} + AB$:",
    options: ["A", "B", "A + B", "A\\bar{B}"],
    correct: [0],
    solution: "Factor out $A$: $Y = A(\\bar{B} + B)$. Since $\\bar{B} + B = 1$, we get $Y = A \\cdot 1 = A$."
  }
];
