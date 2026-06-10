// JELET 2026 Question Database
// Contains exactly 100 questions:
// - Mathematics (Cat 1: 1-30, Cat 2: 81-90)
// - Physics (Cat 1: 31-55, Cat 2: 91-95)
// - Chemistry (Cat 1: 56-70, Cat 2: 96-100)
// - Electrical & Electronics (Cat 1: 71-80)

const questions = [
  // --- MATHEMATICS CATEGORY 1 (1-30) ---
  {
    id: 1,
    subject: "mathematics",
    category: 1,
    text: "If $A = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}$, then the matrix power $A^{2026}$ is equal to:",
    options: [
      "I",
      "-I",
      "A",
      "-A"
    ],
    correct: [1],
    confidence: "High",
    rationale: "Cyclic matrix powers containing skew-symmetric elements or roots of unity are consistently tested (2022 Q2, 2023 Q2, 2025 Q2).",
    solution: "$A^2 = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix} = -I$. Therefore, $A^4 = I$. Since $2026 = 4 \\times 506 + 2$, we have $A^{2026} = (A^4)^{506} \\cdot A^2 = A^2 = -I$."
  },
  {
    id: 2,
    subject: "mathematics",
    category: 1,
    text: "Let $A$ and $B$ be two symmetric matrices of the same order. The matrix product combination $AB - BA$ is always a:",
    options: [
      "Symmetric matrix",
      "Skew-symmetric matrix",
      "Diagonal matrix",
      "Identity matrix"
    ],
    correct: [1],
    confidence: "High",
    rationale: "Matrix properties under transposition (symmetric/skew-symmetric) are key Category-I themes (2022 Q31, 2025 Q3).",
    solution: "$(AB - BA)^T = (AB)^T - (BA)^T = B^T A^T - A^T B^T$. Since $A$ and $B$ are symmetric, $A^T=A$ and $B^T=B$. Hence, $(AB - BA)^T = BA - AB = -(AB - BA)$, which is the definition of a skew-symmetric matrix."
  },
  {
    id: 3,
    subject: "mathematics",
    category: 1,
    text: "If the rank of the matrix $A = \\begin{pmatrix} 1 & 1 & 1 \\\\ 1 & x & 1 \\\\ 1 & 1 & x^2 \\end{pmatrix}$ is 2, then the possible values of $x$ are:",
    options: [
      "1, -1",
      "1, 2",
      "-1, 2",
      "Only -1"
    ],
    correct: [3],
    confidence: "High",
    rationale: "Finding variables that satisfy specific matrix ranks is a recurring topic in almost every paper (2022 Q31, 2023 Q3, 2024 Q2).",
    solution: "For the rank to be 2, the determinant $|A|$ must be 0, but at least one $2 \\times 2$ minor must be non-zero. The determinant $|A| = (x-1)^2(x+1) = 0 \\implies x=1$ or $x=-1$. If $x=1$, the matrix rank is 1. If $x=-1$, the matrix rank is 2. Thus, only $x=-1$ is possible."
  },
  {
    id: 4,
    subject: "mathematics",
    category: 1,
    text: "The value of the Vandermonde determinant $\\Delta = \\begin{vmatrix} 1 & a & a^2 \\\\ 1 & b & b^2 \\\\ 1 & c & c^2 \\end{vmatrix}$ is equal to:",
    options: [
      "(a+b)(b+c)(c+a)",
      "(a-b)(b-c)(c-a)",
      "a^2b^2c^2",
      "0"
    ],
    correct: [1],
    confidence: "Medium",
    rationale: "Standard determinants and cyclic factorizations are standard curriculum elements.",
    solution: "Applying row operations $R_2 \\to R_2 - R_1$ and $R_3 \\to R_3 - R_1$ and factoring out $(b-a)$ and $(c-a)$ yields $(a-b)(b-c)(c-a)$."
  },
  {
    id: 5,
    subject: "mathematics",
    category: 1,
    text: "The system of equations: $x + y + z = 2$, $2x + 3y + 2z = 5$, and $2x + 3y + (k^2 - 1)z = k + 3$ has no solution if $k$ is:",
    options: [
      "$\\sqrt{3}$",
      "$-\\sqrt{3}$",
      "$\\pm \\sqrt{3}$",
      "$\\pm 2$"
    ],
    correct: [2],
    confidence: "High",
    rationale: "System consistency under parameter variations is a high-frequency topic (2022 Q32, 2023 Q6, 2025 Q4).",
    solution: "The determinant of coefficients $\\Delta = k^2 - 3$. For no solution or infinite solutions, we need $\\Delta = 0 \\implies k = \\pm\\sqrt{3}$. Substituting $k = \\pm\\sqrt{3}$ makes the third equation $2x + 3y + 2z = \\pm\\sqrt{3} + 3 \\neq 5$, which creates an inconsistency, resulting in no solution."
  },
  {
    id: 6,
    subject: "mathematics",
    category: 1,
    text: "The modulus of the complex number $z = \\frac{1 + 2i}{1 - (1 - i)^2}$ is equal to:",
    options: [
      "1",
      "$\\sqrt{5}$",
      "1/2",
      "2"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Simplifying complex fractions and extracting modulus is a core syllabus element.",
    solution: "$(1-i)^2 = -2i$. Denominator becomes $1 - (-2i) = 1+2i$. So $z = \\frac{1+2i}{1+2i} = 1$. The modulus $|z| = 1$."
  },
  {
    id: 7,
    subject: "mathematics",
    category: 1,
    text: "The value of $\\left(\\frac{\\sqrt{3} + i}{2}\\right)^{6} + \\left(\\frac{\\sqrt{3} - i}{2}\\right)^{6}$ is equal to:",
    options: [
      "2",
      "-2",
      "0",
      "2i"
    ],
    correct: [1],
    confidence: "High",
    rationale: "Powers of complex numbers using polar form / De Moivre's is highly predicted (2023 Q33, 2024 Q7).",
    solution: "$\\frac{\\sqrt{3}+i}{2} = e^{i\\pi/6}$ and $\\frac{\\sqrt{3}-i}{2} = e^{-i\\pi/6}$. Raising both to power 6 gives $(e^{i\\pi/6})^6 + (e^{-i\\pi/6})^6 = e^{i\\pi} + e^{-i\\pi} = -1 + (-1) = -2$."
  },
  {
    id: 8,
    subject: "mathematics",
    category: 1,
    text: "If the quotient $\\frac{z - 1}{z + 1}$ is purely imaginary, then the locus of $z$ in the Argand plane is a:",
    options: [
      "Straight line",
      "Circle of radius 1",
      "Ellipse",
      "Parabola"
    ],
    correct: [1],
    confidence: "Medium",
    rationale: "Geometric interpretations of complex numbers and loci (2024 Q8).",
    solution: "Let $z = x+iy$. For the real part of $\\frac{x-1+iy}{x+1+iy}$ to be 0, we must have $x^2 + y^2 - 1 = 0 \\implies x^2+y^2=1$, which is a circle of radius 1."
  },
  {
    id: 9,
    subject: "mathematics",
    category: 1,
    text: "The length of the tangent from the point $(5, 1)$ to the circle $x^2 + y^2 + 2x - 4y - 3 = 0$ is:",
    options: [
      "5",
      "$\\sqrt{29}$",
      "$2\\sqrt{7}$",
      "$3\\sqrt{3}$"
    ],
    correct: [1],
    confidence: "High",
    rationale: "Properties of tangents and circles are heavily featured (2024 Q10, 2025 Q16, Q20).",
    solution: "Length of tangent $L = \\sqrt{S_1} = \\sqrt{5^2 + 1^2 + 2(5) - 4(1) - 3} = \\sqrt{25 + 1 + 10 - 4 - 3} = \\sqrt{29}$."
  },
  {
    id: 10,
    subject: "mathematics",
    category: 1,
    text: "The eccentricity of the hyperbola $9x^2 - 16y^2 = 144$ is:",
    options: [
      "5/4",
      "5/3",
      "4/3",
      "$\\sqrt{7}/4$"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Conic section parameters (eccentricity, focus, latus rectum) are standard questions (2022 Q9, Q11, 2023 Q11).",
    solution: "Rewrite the hyperbola equation as $\\frac{x^2}{16} - \\frac{y^2}{9} = 1 \\implies a^2=16, b^2=9$. Eccentricity $e = \\sqrt{1 + b^2/a^2} = \\sqrt{1 + 9/16} = 5/4$."
  },
  {
    id: 11,
    subject: "mathematics",
    category: 1,
    text: "If the line $y = mx + 1$ is a tangent to the parabola $y^2 = 4x$, then the value of $m$ is:",
    options: [
      "1",
      "2",
      "1/2",
      "3"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Standard tangent conditions for conics are regular syllabus topics.",
    solution: "Condition for tangency of line $y = mx+c$ to $y^2=4ax$ is $c = a/m$. Here $a=1, c=1 \\implies 1 = 1/m \\implies m=1$."
  },
  {
    id: 12,
    subject: "mathematics",
    category: 1,
    text: "If the vectors $\\vec{a} = 2\\hat{i} - \\hat{j} + \\hat{k}$ and $\\vec{b} = \\hat{i} + 2\\hat{j} + \\lambda\\hat{k}$ are perpendicular to each other, the value of $\\lambda$ is:",
    options: [
      "0",
      "1",
      "-1",
      "2"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Dot product orthogonality conditions are standard questions.",
    solution: "For perpendicular vectors, $\\vec{a} \\cdot \\vec{b} = 0 \\implies (2)(1) + (-1)(2) + (1)(\\lambda) = 0 \\implies 2 - 2 + \\lambda = 0 \\implies \\lambda = 0$."
  },
  {
    id: 13,
    subject: "mathematics",
    category: 1,
    text: "The volume of the parallelepiped whose coterminous edges are represented by the vectors $\\vec{u} = \\hat{i} + \\hat{j} + \\hat{k}$, $\\vec{v} = \\hat{i} - \\hat{j} + \\hat{k}$ and $\\vec{w} = \\hat{i} + 2\\hat{j} - \\hat{k}$ is:",
    options: [
      "4",
      "2",
      "6",
      "8"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Scalar triple product and volume of parallelepiped calculations are highly predicted (2022 Q35, 2023 Q35, 2024 Q35).",
    solution: "Volume $= |\\vec{u} \\cdot (\\vec{v} \\times \\vec{w})| = \\begin{vmatrix} 1 & 1 & 1 \\\\ 1 & -1 & 1 \\\\ 1 & 2 & -1 \\end{vmatrix} = 1(1-2) - 1(-1-1) + 1(2 - (-1)) = -1 + 2 + 3 = 4$."
  },
  {
    id: 14,
    subject: "mathematics",
    category: 1,
    text: "The work done by a constant force $\\vec{F} = 3\\hat{i} + \\hat{j} - 2\\hat{k}$ in displacing a particle from point $A(1, -1, 2)$ to $B(3, 2, -1)$ is:",
    options: [
      "15 units",
      "12 units",
      "9 units",
      "18 units"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Vector dot product applied to mechanical work calculations is recurring (2022 Q13, 2024 Q13).",
    solution: "Displacement vector $\\vec{d} = \\vec{r_B} - \\vec{r_A} = 2\\hat{i} + 3\\hat{j} - 3\\hat{k}$. Work Done $= \\vec{F} \\cdot \\vec{d} = (3)(2) + (1)(3) + (-2)(-3) = 6 + 3 + 6 = 15$ units."
  },
  {
    id: 15,
    subject: "mathematics",
    category: 1,
    text: "The domain of the function $f(x) = \\sqrt{\\log_{10}\\left(\\frac{5x - x^2}{4}\\right)}$ is:",
    options: [
      "[1, 4]",
      "(0, 5)",
      "[0, 5]",
      "(1, 4)"
    ],
    correct: [0],
    confidence: "Medium",
    rationale: "Finding domains of logarithmic-square root functions (2024 Q14).",
    solution: "Inside square root: $\\log_{10}(\\frac{5x-x^2}{4}) \\ge 0 \\implies \\frac{5x-x^2}{4} \\ge 1 \\implies x^2 - 5x + 4 \\le 0 \\implies (x-1)(x-4) \\le 0 \\implies 1 \\le x \\le 4$. Inside log: $x(5-x) > 0 \\implies 0 < x < 5$. Intersection is $[1, 4]$."
  },
  {
    id: 16,
    subject: "mathematics",
    category: 1,
    text: "The value of the limit $\\lim_{x\\to0} (1 + \\sin x)^{\\cot x}$ is:",
    options: [
      "1",
      "e",
      "1/e",
      "$\\pi$"
    ],
    correct: [1],
    confidence: "High",
    rationale: "Evaluating indeterminate limits of the $1^\\infty$ form is a common calculus test (2022 Q16).",
    solution: "Limit is of $1^\\infty$ form. Let $L = e^{\\lim_{x\\to0} \\cot x \\ln(1+\\sin x)} = e^{\\lim_{x\\to0} \\frac{\\ln(1+\\sin x)}{\\tan x}} = e^1 = e$."
  },
  {
    id: 17,
    subject: "mathematics",
    category: 1,
    text: "The value of the trigonometric limit $\\lim_{x\\to0} \\frac{\\sin(\\pi \\cos^2 x)}{x^2}$ is:",
    options: [
      "$\\pi$",
      "$-\\pi$",
      "0",
      "1"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Trigonometric limit patterns are tested consistently (2023 Q14, 2025 Q24).",
    solution: "$\\sin(\\pi\\cos^2 x) = \\sin(\\pi(1-\\sin^2 x)) = \\sin(\\pi - \\pi\\sin^2 x) = \\sin(\\pi\\sin^2 x)$. The limit becomes $\\lim_{x\\to0} \\frac{\\sin(\\pi\\sin^2 x)}{\\pi\\sin^2 x} \\cdot \\frac{\\pi\\sin^2 x}{x^2} = 1 \\cdot \\pi \\cdot 1 = \\pi$."
  },
  {
    id: 18,
    subject: "mathematics",
    category: 1,
    text: "If $f(x) = x^2 \\sin(1/x)$ for $x \\neq 0$ and $f(0) = 0$, then at $x = 0$ the function $f(x)$ is:",
    options: [
      "Continuous but not differentiable",
      "Differentiable and $f'(0) = 0$",
      "Not continuous",
      "Differentiable and $f'(0) = 1$"
    ],
    correct: [1],
    confidence: "High",
    rationale: "Differentiability and continuity of oscillatory functions are typical exam questions (2024 Q36, 2025 Q32).",
    solution: "$\\lim_{x\\to0} f(x) = 0 = f(0)$ (continuity). $f'(0) = \\lim_{h\\to0} \\frac{h^2 \\sin(1/h)}{h} = \\lim_{h\\to0} h \\sin(1/h) = 0$ (differentiability)."
  },
  {
    id: 19,
    subject: "mathematics",
    category: 1,
    text: "The value of $c$ in Rolle's Theorem for $f(x) = \\ln(x^2 + 2) - \\ln 3$ on the interval $[-1, 1]$ is:",
    options: [
      "0",
      "1/2",
      "-1/2",
      "1"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Applying Rolle's Theorem or Lagrange's MVT to solve for $c$ is a favorite topic (2022 Q17, 2023 Q18).",
    solution: "$f(-1) = f(1) = 0$. $f'(x) = \\frac{2x}{x^2+2}$. Rolle's condition $f'(c) = 0 \\implies \\frac{2c}{c^2+2} = 0 \\implies c = 0 \\in [-1, 1]$."
  },
  {
    id: 20,
    subject: "mathematics",
    category: 1,
    text: "The slope of the tangent to the curve $x = t^2 + 3t - 8$ and $y = 2t^2 - 2t - 5$ at the point $(2, -1)$ is:",
    options: [
      "6/7",
      "2/3",
      "3/2",
      "7/6"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Finding slopes of tangents to parametric curves (2023 Q19).",
    solution: "Point $(2,-1) \\implies t^2+3t-10=0 \\implies t=2$ or $t=-5$. Substituting $t=2$ yields $y = 2(4)-2(2)-5 = -1$, which matches. So $t=2$. $\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{4t-2}{2t+3} = \\frac{6}{7}$."
  },
  {
    id: 21,
    subject: "mathematics",
    category: 1,
    text: "The maximum value of the product $xy$ subject to the constraint $x + 2y = 8$ (for positive $x, y$) is:",
    options: [
      "8",
      "16",
      "4",
      "12"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Constrained optimization problems in single variable calculus (2022 Q19, 2024 Q19).",
    solution: "$x = 8-2y \\implies P = (8-2y)y = 8y - 2y^2$. $\\frac{dP}{dy} = 8 - 4y = 0 \\implies y=2 \\implies x=4$. Max value $= 4 \\times 2 = 8$."
  },
  {
    id: 22,
    subject: "mathematics",
    category: 1,
    text: "If $u = \\ln\\left(\\frac{x^3 + y^3}{x + y}\\right)$, then the partial differential sum $x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y}$ is equal to:",
    options: [
      "2",
      "u",
      "e^u",
      "3"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Euler's theorem on homogeneous functions is tested consistently (2022 Q23, 2023 Q22, 2024 Q20, 2025 Q5).",
    solution: "Let $z = e^u = \\frac{x^3+y^3}{x+y}$. Since $z$ is homogeneous of degree $n = 3 - 1 = 2$, we have $x \\frac{\\partial z}{\\partial x} + y \\frac{\\partial z}{\\partial y} = 2z \\implies x e^u \\frac{\\partial u}{\\partial x} + y e^u \\frac{\\partial u}{\\partial y} = 2e^u \\implies x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y} = 2$."
  },
  {
    id: 23,
    subject: "mathematics",
    category: 1,
    text: "If $f(x, y) = x^2 y + \\sin(xy)$, then the value of the partial derivative $\\frac{\\partial^2 f}{\\partial x \\partial y}$ at $(1, 0)$ is:",
    options: [
      "2",
      "3",
      "1",
      "0"
    ],
    correct: [1],
    confidence: "Medium",
    rationale: "Evaluating second order partial derivatives.",
    solution: "$\\frac{\\partial f}{\\partial y} = x^2 + x\\cos(xy) \\implies \\frac{\\partial^2 f}{\\partial x \\partial y} = 2x + \\cos(xy) - xy\\sin(xy)$. Substituting $(1, 0)$ gives $2 + 1 - 0 = 3$."
  },
  {
    id: 24,
    subject: "mathematics",
    category: 1,
    text: "The indefinite integral $\\int \\frac{dx}{x(1 + \\ln x)^2}$ is equal to:",
    options: [
      "$-\\frac{1}{1 + \\ln x} + c$",
      "$\\frac{1}{1 + \\ln x} + c$",
      "$\\ln|x(1+\\ln x)| + c$",
      "$-\\frac{1}{x(1+\\ln x)} + c$"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Basic indefinite integration by substitution.",
    solution: "Let $t = 1+\\ln x \\implies dt = \\frac{1}{x}dx$. The integral is $\\int \\frac{dt}{t^2} = -\\frac{1}{t} + c = -\\frac{1}{1+\\ln x} + c$."
  },
  {
    id: 25,
    subject: "mathematics",
    category: 1,
    text: "The value of the definite integral $\\int_{-1}^{1} (|x| + x^3) dx$ is:",
    options: [
      "1",
      "0",
      "2",
      "1/2"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Definite integration properties of absolute and odd functions (2022 Q25, 2024 Q22, 2025 Q6).",
    solution: "Since $x^3$ is odd, its integral from $-1$ to $1$ is $0$. Since $|x|$ is even, $\\int_{-1}^1 |x| dx = 2\\int_0^1 x dx = 2 [\\frac{x^2}{2}]_0^1 = 1$."
  },
  {
    id: 26,
    subject: "mathematics",
    category: 1,
    text: "The value of the definite integral $\\int_{0}^{\\pi/2} \\frac{\\sin^3 x}{\\sin^3 x + \\cos^3 x} dx$ is:",
    options: [
      "$\\pi/4$",
      "$\\pi/2$",
      "$\\pi$",
      "0"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Definite integrals using the symmetric property $f(a+b-x)$ (2024 Q24).",
    solution: "Let $I = \\int_0^{\\pi/2} \\frac{\\sin^3 x}{\\sin^3 x + \\cos^3 x} dx$. By property, $I = \\int_0^{\\pi/2} \\frac{\\cos^3 x}{\\cos^3 x + \\sin^3 x} dx$. Adding them gives $2I = \\int_0^{\\pi/2} 1 dx = \\pi/2 \\implies I = \\pi/4$."
  },
  {
    id: 27,
    subject: "mathematics",
    category: 1,
    text: "The area of the region bounded by the parabola $y = x^2$ and the line $y = x$ is:",
    options: [
      "1/6",
      "1/3",
      "1/2",
      "5/6"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Areas bounded by simple curves (2023 Q26, 2024 Q25).",
    solution: "Intersection at $x=0$ and $x=1$. Area $= \\int_0^1 (x - x^2) dx = [\\frac{x^2}{2} - \\frac{x^3}{3}]_0^1 = 1/2 - 1/3 = 1/6$."
  },
  {
    id: 28,
    subject: "mathematics",
    category: 1,
    text: "The solution of the linear differential equation $\\frac{dy}{dx} + \\frac{y}{x} = x^2$ (for $x > 0$) with $y(1) = \\frac{1}{4}$ is:",
    options: [
      "$y = \\frac{x^3}{4}$",
      "$xy = \\frac{x^4}{4}$",
      "$y = \\frac{x^4 - 3}{4x}$",
      "$y = \\frac{x^3 + 3}{4x}$"
    ],
    correct: [0],
    confidence: "High",
    rationale: "First-order linear differential equations are tested consistently (2022 Q27, 2024 Q26).",
    solution: "Integrating Factor $I.F. = e^{\\int (1/x) dx} = x$. Solution is $yx = \\int x^3 dx = \\frac{x^4}{4} + c$. Using $y(1)=1/4 \\implies c=0 \\implies y = \\frac{x^3}{4}$."
  },
  {
    id: 29,
    subject: "mathematics",
    category: 1,
    text: "The ordinary differential equation $y dx - x dy + \\ln x dx = 0$ is of:",
    options: [
      "First order and first degree",
      "First order and second degree",
      "Second order and first degree",
      "Second order and second degree"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Standard terminology of ODEs (order/degree).",
    solution: "Rearranging: $\\frac{dy}{dx} = \\frac{y+\\ln x}{x}$. The highest derivative is $\\frac{dy}{dx}$ (Order 1) and its power is 1 (Degree 1)."
  },
  {
    id: 30,
    subject: "mathematics",
    category: 1,
    text: "A bag contains 5 white and 3 black balls. If two balls are drawn at random without replacement, the probability that both are black is:",
    options: [
      "3/28",
      "9/64",
      "3/14",
      "5/28"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Combinatorics and probability selections (2023 Q29, 2025 Q15).",
    solution: "Probability $= \\frac{^3C_2}{^8C_2} = \\frac{3}{28}$."
  },

  // --- PHYSICS CATEGORY 1 (31-55) ---
  {
    id: 31,
    subject: "physics",
    category: 1,
    text: "In the van der Waals gas equation $\\left(P + \\frac{a}{V^2}\\right)(V - b) = RT$, the dimensional formula of the constant $a$ is:",
    options: [
      "$[ML^5T^{-2}]$",
      "$[ML^3T^{-2}]$",
      "$[M^0L^3T^0]$",
      "$[ML^5T^{-1}]$"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Dimensions of constants in gas/wave equations (2025 Q41).",
    solution: "Dimensions of $\\frac{a}{V^2}$ equal pressure $P$. $[a] = [P][V^2] = [ML^{-1}T^{-2}][L^6] = [ML^5T^{-2}]$."
  },
  {
    id: 32,
    subject: "physics",
    category: 1,
    text: "The density of a cube is measured by measuring its mass and side length. If the maximum errors in mass and length are $3\\%$ and $2\\%$ respectively, the maximum percentage error in density is:",
    options: [
      "9%",
      "7%",
      "5%",
      "1%"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Percentage error propagation calculations (2022 Q42, 2025 Q42).",
    solution: "Density $\\rho = \\frac{M}{L^3} \\implies \\frac{\\Delta\\rho}{\\rho}\\% = \\frac{\\Delta M}{M}\\% + 3\\frac{\\Delta L}{L}\\% = 3\\% + 3(2\\%) = 9\\%$."
  },
  {
    id: 33,
    subject: "physics",
    category: 1,
    text: "The acceleration-time ($a-t$) graph of a particle starting from rest is a straight line passing through the origin. The corresponding velocity-time ($v-t$) graph will be a:",
    options: [
      "Straight line passing through the origin",
      "Parabola opening upwards",
      "Hyperbola",
      "Straight line parallel to time axis"
    ],
    correct: [1],
    confidence: "High",
    rationale: "Interpreting motion and graphical slopes (2022 Q46, 2025 Q44).",
    solution: "$a = kt \\implies \\frac{dv}{dt} = kt \\implies v = \\frac{1}{2}kt^2$ (since $v(0)=0$). This is a quadratic equation representing a parabola opening upwards."
  },
  {
    id: 34,
    subject: "physics",
    category: 1,
    text: "A projectile is thrown with an initial velocity $\\vec{v} = a\\hat{i} + b\\hat{j}$. If the range of the projectile is double the maximum height, then:",
    options: [
      "b = 2a",
      "a = 2b",
      "b = a",
      "b = 4a"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Kinematics of projectile range and height (2022 Q45).",
    solution: "Horizontal velocity $u_x = a$, vertical velocity $u_y = b$. Range $R = \\frac{2ab}{g}$ and Max Height $H = \\frac{b^2}{2g}$. Given $R = 2H \\implies \\frac{2ab}{g} = \\frac{b^2}{g} \\implies b = 2a$."
  },
  {
    id: 35,
    subject: "physics",
    category: 1,
    text: "A vehicle of mass $m$ is moving on a circular track of radius $r$ banked at an angle $\\theta$. If the coefficient of static friction is $\\mu_s$, the maximum safe speed is:",
    options: [
      "$v = \\sqrt{rg \\left(\\frac{\\tan\\theta + \\mu_s}{1 - \\mu_s\\tan\\theta}\\right)}$",
      "$v = \\sqrt{rg \\left(\\frac{\\tan\\theta - \\mu_s}{1 + \\mu_s\\tan\\theta}\\right)}$",
      "$v = \\sqrt{rg \\tan\\theta}$",
      "$v = \\sqrt{\\frac{rg}{\\mu_s}}$"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Circular motion and banking equations.",
    solution: "Standard derived equation for maximum safe speed on a banked road with friction."
  },
  {
    id: 36,
    subject: "physics",
    category: 1,
    text: "Two masses $m_1 = 4\\text{ kg}$ and $m_2 = 1\\text{ kg}$ are connected by a light string over a frictionless pulley. The acceleration of the system is ($g = 10\\text{ m/s}^2$):",
    options: [
      "$6\\text{ m/s}^2$",
      "$8\\text{ m/s}^2$",
      "$2\\text{ m/s}^2$",
      "$4\\text{ m/s}^2$"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Pulley-mass system dynamics (2024 Q54, 2025 Q67).",
    solution: "$a = \\frac{m_1 - m_2}{m_1 + m_2}g = \\frac{4 - 1}{4 + 1}(10) = 6\\text{ m/s}^2$."
  },
  {
    id: 37,
    subject: "physics",
    category: 1,
    text: "A body of mass $2\\text{ kg}$ is subjected to a force $F = (3x^2 - 2x)\\text{ N}$. The work done in moving the body from $x = 0$ to $x = 2\\text{ m}$ is:",
    options: [
      "4 J",
      "8 J",
      "12 J",
      "6 J"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Work energy calculations under variable force (2022 Q47, 2025 Q45).",
    solution: "$W = \\int_0^2 F dx = \\int_0^2 (3x^2 - 2x) dx = [x^3 - x^2]_0^2 = (8 - 4) - 0 = 4\\text{ J}$."
  },
  {
    id: 38,
    subject: "physics",
    category: 1,
    text: "A non-uniform rod of length $L$ has a linear density $\\rho(x) = \\rho_0 \\frac{x}{L}$. The center of mass of the rod is located at:",
    options: [
      "2L/3",
      "L/2",
      "3L/4",
      "L/3"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Mass center integration for non-uniform rods (2025 Q53).",
    solution: "$X_{cm} = \\frac{\\int_0^L x \\rho(x) dx}{\\int_0^L \\rho(x) dx} = \\frac{\\int_0^L x^2 dx}{\\int_0^L x dx} = \\frac{L^3/3}{L^2/2} = \\frac{2}{3}L$."
  },
  {
    id: 39,
    subject: "physics",
    category: 1,
    text: "A disc of mass $M$ and radius $R$ is rotating with angular velocity $\\omega_0$. If a point mass $m = M/2$ is placed gently on its rim, the new angular velocity is:",
    options: [
      "$\\omega_0 / 2$",
      "$2\\omega_0 / 3$",
      "$3\\omega_0 / 4$",
      "$\\omega_0 / 3$"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Rotational mechanics and conservation of angular momentum (2022 Q48, 2024 Q45).",
    solution: "Initial Inertia $I_1 = \\frac{1}{2}MR^2$. Final Inertia $I_2 = \\frac{1}{2}MR^2 + mR^2 = \\frac{1}{2}MR^2 + \\frac{1}{2}MR^2 = MR^2$. By conservation of angular momentum: $I_1 \\omega_0 = I_2 \\omega_f \\implies \\frac{1}{2}MR^2 \\omega_0 = MR^2 \\omega_f \\implies \\omega_f = \\omega_0 / 2$."
  },
  {
    id: 40,
    subject: "physics",
    category: 1,
    text: "For a satellite in circular orbit around Earth, the ratio of its potential energy (PE) to its total mechanical energy (E) is:",
    options: [
      "2",
      "-2",
      "-1",
      "1/2"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Satellite energies and Keplerian orbits (2025 Q49).",
    solution: "$PE = -\\frac{GMm}{r}$, $KE = \\frac{GMm}{2r}$, $E = KE+PE = -\\frac{GMm}{2r}$. Therefore, $PE = 2E$, so the ratio is 2."
  },
  {
    id: 41,
    subject: "physics",
    category: 1,
    text: "The acceleration due to gravity at a height $h$ above the Earth is the same as that at a depth $d$ below the surface (for $h, d \\ll R_e$). Then:",
    options: [
      "d = 2h",
      "d = h",
      "h = 2d",
      "d = \\sqrt{h R_e}$"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Gravity variation calculations (2024 Q58).",
    solution: "$g_h = g(1-2h/R_e)$, $g_d = g(1-d/R_e)$. Equating both yields $d = 2h$."
  },
  {
    id: 42,
    subject: "physics",
    category: 1,
    text: "The Poisson's ratio of a wire material cannot be:",
    options: [
      "0.6",
      "0.3",
      "0.4",
      "0.2"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Limits of Poisson's ratio.",
    solution: "Poisson's ratio theoretically lies between -1 and 0.5. Practical values lie between 0 and 0.5. Thus, it cannot be 0.6."
  },
  {
    id: 43,
    subject: "physics",
    category: 1,
    text: "If a capillary tube is immersed in water, the water rises to height $h$. If the radius of the tube is halved, the water will rise to a height of:",
    options: [
      "2h",
      "h/2",
      "4h",
      "h"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Capillary rise properties (2025 Q51, Q65).",
    solution: "By Jurin's Law, $h \\propto 1/r$. If $r$ is halved, $h$ is doubled to $2h$."
  },
  {
    id: 44,
    subject: "physics",
    category: 1,
    text: "Liquid flows through a horizontal pipe of varying cross-section. The velocity of liquid is $2\\text{ m/s}$ where pressure is $20\\text{ kPa}$. At another point where velocity is $4\\text{ m/s}$, the pressure is (density $= 1000\\text{ kg/m}^3$):",
    options: [
      "14 kPa",
      "16 kPa",
      "12 kPa",
      "18 kPa"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Bernoulli's equation calculations.",
    solution: "$P_1 + \\frac{1}{2}\\rho v_1^2 = P_2 + \\frac{1}{2}\\rho v_2^2 \\implies 20000 + \\frac{1}{2}(1000)(4) = P_2 + \\frac{1}{2}(1000)(16) \\implies 22000 = P_2 + 8000 \\implies P_2 = 14\\text{ kPa}$."
  },
  {
    id: 45,
    subject: "physics",
    category: 1,
    text: "A small spherical ball of radius $r$ falls from rest in a viscous liquid. The rate of heat production due to viscous force when the ball attains terminal velocity is proportional to:",
    options: [
      "r^5",
      "r^2",
      "r^3",
      "r^4"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Viscosity terminal velocity heat generation relations (2022 Q52).",
    solution: "Power $P = F \\cdot v_t = (6\\pi\\eta r v_t) v_t = 6\\pi\\eta r v_t^2$. Since $v_t \\propto r^2 \\implies v_t^2 \\propto r^4 \\implies P \\propto r^5$."
  },
  {
    id: 46,
    subject: "physics",
    category: 1,
    text: "If the coefficient of linear expansion of a solid is $\\alpha$, the coefficient of volume expansion is:",
    options: [
      "$3\\alpha$",
      "$2\\alpha$",
      "$\\alpha / 3$",
      "$\\alpha$"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Thermal expansion coefficient relations.",
    solution: "Volume expansion coefficient $\\gamma = 3\\alpha$, and area expansion coefficient $\\beta = 2\\alpha$."
  },
  {
    id: 47,
    subject: "physics",
    category: 1,
    text: "Two metal rods of identical dimensions are joined in series. If their thermal conductivities are $K_1$ and $K_2$, the equivalent thermal conductivity of the combination is:",
    options: [
      "$\\frac{2K_1K_2}{K_1 + K_2}$",
      "$\\frac{K_1K_2}{K_1 + K_2}$",
      "$K_1 + K_2$",
      "$\\frac{K_1 + K_2}{2}$"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Composite rod heat conduction equations (2024 Q49, 2025 Q63).",
    solution: "Thermal resistance in series: $R_e = R_1 + R_2 \\implies \\frac{2L}{K_e A} = \\frac{L}{K_1 A} + \\frac{L}{K_2 A} \\implies \\frac{2}{K_e} = \\frac{1}{K_1} + \\frac{1}{K_2} \\implies K_e = \\frac{2K_1K_2}{K_1+K_2}$."
  },
  {
    id: 48,
    subject: "physics",
    category: 1,
    text: "In an isobaric process for a monoatomic ideal gas, the ratio of work done ($W$) to the heat absorbed ($Q$) is:",
    options: [
      "2/5",
      "3/5",
      "2/3",
      "1"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Thermodynamics heat and work ratios (2022 Q55).",
    solution: "$\\frac{W}{Q} = \\frac{nR\\Delta T}{n C_p \\Delta T} = \\frac{R}{\\frac{5}{2}R} = \\frac{2}{5}$."
  },
  {
    id: 49,
    subject: "physics",
    category: 1,
    text: "The slope of an adiabatic curve on a P-V diagram compared to an isothermal curve is:",
    options: [
      "$\\gamma$ times steeper",
      "Same slope",
      "$\\gamma$ times flatter",
      "1/$\\gamma$ times steeper"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Thermodynamics gas processes (2025 Q58).",
    solution: "Isothermal slope $\\frac{dP}{dV} = -\\frac{P}{V}$. Adiabatic slope $\\frac{dP}{dV} = -\\gamma \\frac{P}{V}$. Thus, the adiabatic slope is $\\gamma$ times steeper."
  },
  {
    id: 50,
    subject: "physics",
    category: 1,
    text: "A vessel is filled with water (refractive index 4/3) to a depth of 12 cm. The apparent depth of the vessel bottom is:",
    options: [
      "9 cm",
      "16 cm",
      "8 cm",
      "10 cm"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Refraction and apparent depth (2022 Q57, 2025 Q50).",
    solution: "$d_{apparent} = \\frac{d_{real}}{\\mu} = \\frac{12}{4/3} = 9\\text{ cm}$."
  },
  {
    id: 51,
    subject: "physics",
    category: 1,
    text: "Two thin lenses of focal lengths $f_1 = 20\\text{ cm}$ and $f_2 = -40\\text{ cm}$ are placed in contact. The focal length of the combination is:",
    options: [
      "40 cm",
      "-40 cm",
      "20 cm",
      "13.3 cm"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Equivalent focal lengths of lens combinations (2022 Q59, 2024 Q52, 2025 Q60).",
    solution: "$\\frac{1}{f_e} = \\frac{1}{f_1} + \\frac{1}{f_2} = \\frac{1}{20} - \\frac{1}{40} = \\frac{1}{40} \\implies f_e = 40\\text{ cm}$."
  },
  {
    id: 52,
    subject: "physics",
    category: 1,
    text: "When light is incident on a transparent surface at Brewster's angle, the angle between the reflected and refracted rays is:",
    options: [
      "$90^\\circ$",
      "$0^\\circ$",
      "$45^\\circ$",
      "$180^\\circ$"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Wave optics and polarization conditions (2023 Q53).",
    solution: "At Brewster's angle of incidence, the reflected and refracted rays are perpendicular, making the angle between them $90^\\circ$."
  },
  {
    id: 53,
    subject: "physics",
    category: 1,
    text: "When light of wavelength $\\lambda$ is incident on a metal, the stopping potential is $V_0$. If light of wavelength $2\\lambda$ is incident, the stopping potential is $V'$. Then:",
    options: [
      "V' < V_0 / 2",
      "V' = V_0 / 2",
      "V' > V_0 / 2",
      "V' = 2V_0"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Photoelectric effect Einstein equation relations (2022 Q60, 2025 Q64).",
    solution: "$eV' = \\frac{hc}{2\\lambda} - \\phi = \\frac{1}{2}(eV_0+\\phi)-\\phi = \\frac{eV_0}{2} - \\frac{\\phi}{2} < \\frac{eV_0}{2}$ since $\\phi > 0$."
  },
  {
    id: 54,
    subject: "physics",
    category: 1,
    text: "In a photoelectric effect experiment, if the intensity of incident light is doubled, which of the following is doubled?",
    options: [
      "Photoelectric current",
      "Stopping potential",
      "Maximum kinetic energy of photoelectrons",
      "Threshold frequency"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Intensity vs frequency behavior in photoemission.",
    solution: "Intensity determines the number of photons, which is proportional to the number of emitted electrons and thus the photoelectric current. Kinetic energy and stopping potential depend on frequency, not intensity."
  },
  {
    id: 55,
    subject: "physics",
    category: 1,
    text: "A particle executes SHM with amplitude $A$. At what displacement from the mean position is its kinetic energy equal to its potential energy?",
    options: [
      "$A / \\sqrt{2}$",
      "A / 2",
      "$A / \\sqrt{3}$",
      "$\\sqrt{3}A / 2$"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Energy distributions in Simple Harmonic Motion (2023 Q41, 2025 Q59).",
    solution: "$KE = PE \\implies \\frac{1}{2}m\\omega^2(A^2-x^2) = \\frac{1}{2}m\\omega^2 x^2 \\implies A^2 - x^2 = x^2 \\implies 2x^2 = A^2 \\implies x = A/\\sqrt{2}$."
  },

  // --- CHEMISTRY CATEGORY 1 (56-70) ---
  {
    id: 56,
    subject: "chemistry",
    category: 1,
    text: "The maximum number of electrons in a subshell with orbital quantum number $l = 3$ is:",
    options: [
      "14",
      "10",
      "6",
      "2"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Orbital quantum capacities (2025 Q71).",
    solution: "$l=3$ is the $f$ subshell. Capacity $= 2(2l+1) = 2(7) = 14$."
  },
  {
    id: 57,
    subject: "chemistry",
    category: 1,
    text: "The radius of the second Bohr orbit of hydrogen atom is $r_2$. The radius of the third Bohr orbit is:",
    options: [
      "9/4 r_2",
      "3/2 r_2",
      "3 r_2",
      "4/9 r_2"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Bohr orbit calculations (2023 Q72, 2025 Q73).",
    solution: "$r_n \\propto n^2 \\implies r_3 = (3^2/2^2)r_2 = \\frac{9}{4}r_2$."
  },
  {
    id: 58,
    subject: "chemistry",
    category: 1,
    text: "According to VSEPR theory, the shape of the $SF_4$ molecule is:",
    options: [
      "See-saw",
      "Tetrahedral",
      "Square planar",
      "Trigonal bipyramidal"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Symmetric shapes of binary halides (2024 Q82, 2025 Q72).",
    solution: "$SF_4$ has 4 bond pairs and 1 lone pair, leading to a see-saw shape."
  },
  {
    id: 59,
    subject: "chemistry",
    category: 1,
    text: "The hybridization of Carbon in the carbanion ($:\\bar{C}H_3$) is:",
    options: [
      "sp^3",
      "sp^2",
      "sp",
      "dsp^2"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Hybridization of organic reaction intermediates (2025 Q84).",
    solution: "Carbanion has 3 bond pairs and 1 lone pair, giving a steric number of 4 $\\implies sp^3$."
  },
  {
    id: 60,
    subject: "chemistry",
    category: 1,
    text: "How many grams of $NaOH$ are present in $250\\text{ mL}$ of a $0.1\\text{ M}$ solution?",
    options: [
      "1.0 g",
      "4.0 g",
      "2.0 g",
      "0.5 g"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Basic concentration equations (2023 Q79, 2024 Q72).",
    solution: "Moles $= M \\times V = 0.1 \\times 0.25 = 0.025\\text{ mol}$. Mass $= 0.025 \\times 40 = 1.0\\text{ g}$."
  },
  {
    id: 61,
    subject: "chemistry",
    category: 1,
    text: "The solubility of $BaSO_4$ in water is $2.33 \\times 10^{-3}\\text{ g/L}$ (molar mass $= 233\\text{ g/mol}$). The solubility product constant $K_{sp}$ is:",
    options: [
      "$1.0 \\times 10^{-10}$",
      "$1.0 \\times 10^{-5}$",
      "$2.33 \\times 10^{-5}$",
      "$1.0 \\times 10^{-8}$"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Solubility product calculations (2024 Q81).",
    solution: "Solubility $S = \\frac{2.33 \\times 10^{-3}}{233} = 10^{-5}\\text{ mol/L}$. $K_{sp} = S^2 = (10^{-5})^2 = 10^{-10}$."
  },
  {
    id: 62,
    subject: "chemistry",
    category: 1,
    text: "In the conversion of $K_2Cr_2O_7$ to $Cr^{3+}$, the change in oxidation number of chromium is:",
    options: [
      "3",
      "6",
      "2",
      "1"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Oxidation numbers and redox concepts (2024 Q87).",
    solution: "In $Cr_2O_7^{2-}$, Cr oxidation state is +6. In $Cr^{3+}$, it is +3. Change $= 6 - 3 = 3$ per Cr atom."
  },
  {
    id: 63,
    subject: "chemistry",
    category: 1,
    text: "A current of 1 A passes through a copper sulphate solution for 10 minutes. The number of electrons delivered is:",
    options: [
      "$3.74 \\times 10^{21}$",
      "$6.02 \\times 10^{23}$",
      "$6.02 \\times 10^{20}$",
      "$3.74 \\times 10^{20}$"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Faraday's Law calculations (2023 Q74, 2024 Q75).",
    solution: "Charge $Q = I \\times t = 1 \\times 600 = 600\\text{ C}$. Number of electrons $= \\frac{Q}{e} = \\frac{600}{1.6 \\times 10^{-19}} = 3.75 \\times 10^{21}$."
  },
  {
    id: 64,
    subject: "chemistry",
    category: 1,
    text: "For the reversible reaction $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$ with $\\Delta H < 0$, the yield of ammonia increases with:",
    options: [
      "Increase in pressure and decrease in temperature",
      "Decrease in pressure and increase in temperature",
      "Increase in both pressure and temperature",
      "Decrease in both pressure and temperature"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Le Chatelier's equilibrium yield shifts (2022 Q89, 2025 Q77).",
    solution: "Forward direction has fewer gas moles (4 to 2) $\\implies$ high pressure favors products. Exothermic reaction $\\implies$ low temperature favors products."
  },
  {
    id: 65,
    subject: "chemistry",
    category: 1,
    text: "Which of the following alloys contains copper and zinc as major components?",
    options: [
      "Brass",
      "Bronze",
      "Stainless Steel",
      "Nichrome"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Alloy compositions list from metallurgy syllabus.",
    solution: "Brass is an alloy of Copper and Zinc. Bronze contains Copper and Tin."
  },
  {
    id: 66,
    subject: "chemistry",
    category: 1,
    text: "Water hardness is estimated by titration with EDTA using which indicator?",
    options: [
      "Eriochrome Black T (EBT)",
      "Phenolphthalein",
      "Methyl Orange",
      "Starch"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Water analysis EDTA titration (2022 Q66).",
    solution: "EBT is the standard indicator used in complexometric titration of water with EDTA to determine total hardness."
  },
  {
    id: 67,
    subject: "chemistry",
    category: 1,
    text: "The IUPAC name of the compound $CH_3-CH(CH_3)-CH_2-C\\equiv CH$ is:",
    options: [
      "4-methylpent-1-yne",
      "2-methylpent-4-yne",
      "4-methylpent-2-yne",
      "2-methylpent-3-yne"
    ],
    correct: [0],
    confidence: "High",
    rationale: "IUPAC naming rules for branched alkynes (2025 Q81).",
    solution: "Numbering starts at the triple bond: C1 $\\equiv$ C2 - C3 - C4(methyl) - C5. Thus, it is 4-methylpent-1-yne."
  },
  {
    id: 68,
    subject: "chemistry",
    category: 1,
    text: "Which of the following compounds displays optical isomerism?",
    options: [
      "Butan-2-ol",
      "Butan-1-ol",
      "Propan-2-ol",
      "Ethanol"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Identifying chiral carbons in organic nomenclature (2025 Q90).",
    solution: "Butan-2-ol ($CH_3-CH(OH)-CH_2-CH_3$) contains a chiral carbon (bonded to H, OH, methyl, and ethyl groups), making it optically active."
  },
  {
    id: 69,
    subject: "chemistry",
    category: 1,
    text: "The reaction of methyl chloride with magnesium in dry ether, followed by reaction with acetic acid, yields:",
    options: [
      "Methane",
      "Ethane",
      "Methanol",
      "Methyl acetate"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Grignard reagent synthesis and reactions with active hydrogen (2025 Q83).",
    solution: "$CH_3Cl + Mg \\to CH_3MgCl$ (Grignard). Reaction with acetic acid ($CH_3COOH$, containing an active acidic hydrogen) protonates the Grignard: $CH_3MgCl + CH_3COOH \\to CH_4 + CH_3COOMgCl$. Output is methane."
  },
  {
    id: 70,
    subject: "chemistry",
    category: 1,
    text: "Which of the following compounds gives a white precipitate with Tollens' reagent?",
    options: [
      "Propyne",
      "Propene",
      "Propane",
      "But-2-yne"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Chemical tests for terminal alkynes (2024 Q79).",
    solution: "Propyne ($CH_3-C\\equiv CH$) is a terminal alkyne with an acidic hydrogen that reacts with Tollens' reagent to form a white silver acetylide precipitate."
  },

  // --- ELECTRICAL & ELECTRONICS CATEGORY 1 (71-80) ---
  {
    id: 71,
    subject: "electrical",
    category: 1,
    text: "A Permanent Magnet Moving Coil (PMMC) instrument responds to which component of current?",
    options: [
      "Average value",
      "RMS value",
      "Peak value",
      "Peak-to-peak value"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Electrical measurement instruments and responses (2022 Q91, 2025 Q91).",
    solution: "PMMC instruments react to the steady-state torque, which is proportional to the average (DC) value of the current."
  },
  {
    id: 72,
    subject: "electrical",
    category: 1,
    text: "If a transformer has a transformation ratio of $1:10$ (primary to secondary turns), and the primary is connected to a $230\\text{ V}$ AC supply, the secondary open-circuit voltage is:",
    options: [
      "2300 V",
      "23 V",
      "230 V",
      "0 V"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Transformer basic turn ratios (2022 Q92, 2025 Q92).",
    solution: "$V_2 = V_1 \\frac{N_2}{N_1} = 230 \\times 10 = 2300\\text{ V}$."
  },
  {
    id: 73,
    subject: "electrical",
    category: 1,
    text: "A $230/115\\text{ V}$ transformer has a primary resistance of $0.5\\ \\Omega$ and secondary resistance of $0.1\\ \\Omega$. The equivalent resistance referred to the primary side is:",
    options: [
      "0.9 $\\Omega$",
      "0.6 $\\Omega$",
      "0.7 $\\Omega$",
      "0.125 $\\Omega$"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Equivalent referred impedance calculations (2022 Q92, 2024 Q100).",
    solution: "$a = V_1/V_2 = 2$. Equivalent resistance referred to primary $R_{e1} = R_1 + a^2 R_2 = 0.5 + (4 \\times 0.1) = 0.9\\ \\Omega$."
  },
  {
    id: 74,
    subject: "electrical",
    category: 1,
    text: "If the supply frequency of a 3-phase induction motor is $50\\text{ Hz}$ and it runs at a slip of $4\\%$, the frequency of rotor currents is:",
    options: [
      "2 Hz",
      "50 Hz",
      "48 Hz",
      "0 Hz"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Induction motor slip-frequency relations (2022 Q93).",
    solution: "$f_r = s \\times f_s = 0.04 \\times 50 = 2\\text{ Hz}$."
  },
  {
    id: 75,
    subject: "electrical",
    category: 1,
    text: "In the circuit containing a node $V_a$ connected to a $12\\text{ V}$ source via a $2\\ \\Omega$ resistor, to a $2\\text{ V}$ source via a $1\\ \\Omega$ resistor, and to ground via a $2\\ \\Omega$ resistor, the node voltage $V_a$ is:",
    options: [
      "6 V",
      "8 V",
      "4 V",
      "5 V"
    ],
    correct: [2],
    confidence: "High",
    rationale: "DC network branch analysis using KCL/Nodal equations (2023 Q94, 2024 Q94).",
    solution: "Apply KCL at node $V_a$: $\\frac{V_a-12}{2} + \\frac{V_a-2}{1} + \\frac{V_a}{2} = 0 \\implies V_a - 12 + 2V_a - 4 + V_a = 0 \\implies 4V_a = 16 \\implies V_a = 4\\text{ V}$."
  },
  {
    id: 76,
    subject: "electrical",
    category: 1,
    text: "The RMS value of the voltage signal $v(t) = 6 + 8\\sin(100\\pi t)\\text{ V}$ is:",
    options: [
      "10 V",
      "$\\sqrt{68}$ V",
      "14 V",
      "8 V"
    ],
    correct: [1],
    confidence: "High",
    rationale: "RMS calculations of composite wave signals (2023 Q93).",
    solution: "$V_{rms} = \\sqrt{V_{dc}^2 + V_m^2/2} = \\sqrt{6^2 + 8^2/2} = \\sqrt{36+32} = \\sqrt{68}\\text{ V}$."
  },
  {
    id: 77,
    subject: "electrical",
    category: 1,
    text: "In an ideal diode circuit, if the anode is connected to $+5\\text{ V}$ through a $1\\text{ k}\\Omega$ resistor and the cathode is connected to $+2\\text{ V}$, the current through the diode is:",
    options: [
      "3 mA",
      "5 mA",
      "0 mA",
      "2 mA"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Diode conduction states (2022 Q96, 2025 Q96).",
    solution: "Diode is forward biased since $V_A > V_C$. behaves as a short. Current $I = \\frac{5-2}{1000} = 3\\text{ mA}$."
  },
  {
    id: 78,
    subject: "electrical",
    category: 1,
    text: "In an ideal operational amplifier non-inverting circuit, if $R_f = 9\\text{ k}\\Omega$ and $R_1 = 1\\text{ k}\\Omega$, and the input voltage $V_{in} = 0.5\\text{ V}$, the output voltage $V_o$ is:",
    options: [
      "5.0 V",
      "4.5 V",
      "-4.5 V",
      "0.5 V"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Non-inverting Op-Amp gains (2022 Q97, 2025 Q98).",
    solution: "$A_v = 1 + R_f/R_1 = 1 + 9/1 = 10$. $V_o = A_v \\times V_{in} = 10 \\times 0.5 = 5.0\\text{ V}$."
  },
  {
    id: 79,
    subject: "electrical",
    category: 1,
    text: "The simplified Boolean expression for $Y = AB + A(B + C) + B(B + C)$ is:",
    options: [
      "B + AC",
      "A + B",
      "AB + C",
      "B"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Digital electronics boolean logic simplifications (2022 Q98, 2025 Q99).",
    solution: "$Y = AB + AB + AC + B + BC = AB + AC + B(1+C) = AB + AC + B = B(A+1) + AC = B + AC$."
  },
  {
    id: 80,
    subject: "electrical",
    category: 1,
    text: "The output of a 2-input NAND gate is $0$ if:",
    options: [
      "Both inputs are 1",
      "Both inputs are 0",
      "One input is 1 and the other is 0",
      "At least one input is 0"
    ],
    correct: [0],
    confidence: "High",
    rationale: "Basic combinational logic truth tables (2025 Q100).",
    solution: "A NAND gate outputs 0 only when both inputs are 1 (high)."
  },

  // --- MATHEMATICS CATEGORY 2 (81-90) ---
  {
    id: 81,
    subject: "mathematics",
    category: 2,
    text: "Let $A$ be a $3\\times3$ non-singular matrix. Which of the following statements is/are correct?",
    options: [
      "$|adj(A)| = |A|^2$",
      "$adj(adj(A)) = |A| A$",
      "$(adj(A))^{-1} = adj(A^{-1})$",
      "$|adj(A)| = |A|^3$"
    ],
    correct: [0, 1, 2],
    confidence: "High",
    rationale: "Adjoint properties of 3x3 matrices in Category-II (2025 Q31).",
    solution: "$|adj(A)| = |A|^{n-1} = |A|^2$ (for $n=3$). $adj(adj(A)) = |A|^{n-2} A = |A|A$ (for $n=3$). $(adj(A))^{-1} = adj(A^{-1})$ is a standard identity. (A, B, C correct)."
  },
  {
    id: 82,
    subject: "mathematics",
    category: 2,
    text: "For the system of homogeneous equations: $x + y + z = 0$, $2x + 3y + z = 0$, and $x + 2y = 0$, which of the following statement(s) is/are true?",
    options: [
      "The system has only the trivial solution (0, 0, 0)",
      "The system has infinite solutions",
      "The determinant of the coefficient matrix is zero",
      "The rank of the coefficient matrix is 2"
    ],
    correct: [1, 2, 3],
    confidence: "High",
    rationale: "Symmetric and parameter consistency in Category-II matrices (2022 Q32, 2025 Q39).",
    solution: "Determinant of coefficients $\\Delta = 1(0-2) - 1(0-1) + 1(4-3) = 0$. Since $\\Delta = 0$, homogeneous system has infinite non-trivial solutions. Minor $\\begin{vmatrix}1&1\\\\2&3\\end{vmatrix}=1\\neq0 \\implies$ rank is 2. (B, C, D correct)."
  },
  {
    id: 83,
    subject: "mathematics",
    category: 2,
    text: "Let $z_1, z_2$ be two complex numbers such that $|z_1 + z_2| = |z_1| + |z_2|$. Which of the following statements is/are correct?",
    options: [
      "$arg(z_1) - arg(z_2) = 0$",
      "The origin, $z_1$, and $z_2$ are collinear",
      "$z_1 \\bar{z}_2$ is a positive real number",
      "$arg(z_1) - arg(z_2) = \\pi$"
    ],
    correct: [0, 1, 2],
    confidence: "Medium",
    rationale: "Geometric complex numbers identities in Category-II.",
    solution: "The condition $|z_1+z_2| = |z_1|+|z_2|$ implies $z_1$ and $z_2$ have the same direction/angle, meaning $arg(z_1) - arg(z_2) = 0$ (A correct), collinearity with origin (B correct), and $z_1 \\bar{z}_2 = |z_1|e^{i\\theta}|z_2|e^{-i\\theta} = |z_1||z_2| > 0$ (C correct)."
  },
  {
    id: 84,
    subject: "mathematics",
    category: 2,
    text: "For a rectangular hyperbola $x^2 - y^2 = a^2$, which of the following statements is/are correct?",
    options: [
      "The eccentricity is always $\\sqrt{2}$",
      "The asymptotes are perpendicular to each other",
      "The eccentricity is $2$",
      "The asymptotes are inclined at $45^\\circ$ to the axes"
    ],
    correct: [0, 1, 3],
    confidence: "High",
    rationale: "Syllabus properties of rectangular hyperbolas (2024 Q34).",
    solution: "For rectangular hyperbola, $a=b \\implies e = \\sqrt{1+b^2/a^2} = \\sqrt{2}$. Asymptotes are $y = \\pm x$ which are perpendicular (inclined at $45^\\circ$). (A, B, D correct)."
  },
  {
    id: 85,
    subject: "mathematics",
    category: 2,
    text: "Which of the following vector identities is/are correct?",
    options: [
      "$\\vec{a} \\times (\\vec{b} \\times \\vec{c}) = (\\vec{a} \\cdot \\vec{c})\\vec{b} - (\\vec{a} \\cdot \\vec{b})\\vec{c}$",
      "$[\\vec{a}+\\vec{b} \\quad \\vec{b}+\\vec{c} \\quad \\vec{c}+\\vec{a}] = 2[\\vec{a} \\quad \\vec{b} \\quad \\vec{c}]$",
      "$\\vec{a} \\cdot (\\vec{b} \\times \\vec{c}) = \\vec{b} \\cdot (\\vec{c} \\times \\vec{a})$",
      "$\\vec{a} \\times (\\vec{b} \\times \\vec{c}) = (\\vec{a} \\cdot \\vec{b})\\vec{c} - (\\vec{a} \\cdot \\vec{c})\\vec{b}$"
    ],
    correct: [0, 1, 2],
    confidence: "High",
    rationale: "Vector products and scalar triple product cyclic identities (2022 Q35, 2024 Q35).",
    solution: "A is the standard vector triple product expansion. B is a standard identity. C shows the cyclic property of scalar triple products. (A, B, C correct)."
  },
  {
    id: 86,
    subject: "mathematics",
    category: 2,
    text: "Let $f(x) = |x - 1| + |x - 2|$. Which of the following statements is/are true?",
    options: [
      "$f(x)$ is continuous at $x = 1$ and $x = 2$",
      "$f(x)$ is differentiable at $x = 1.5$",
      "$f(x)$ is not differentiable at $x = 1$ and $x = 2$",
      "$f(x)$ is differentiable everywhere"
    ],
    correct: [0, 1, 2],
    confidence: "High",
    rationale: "Continuity and differentiability of piecewise modulus functions (2024 Q36).",
    solution: "$f(x)$ is continuous everywhere (sum of continuous functions). It is non-differentiable at the sharp corners $x=1$ and $x=2$. It is differentiable at $x=1.5$ with value 0. (A, B, C correct)."
  },
  {
    id: 87,
    subject: "mathematics",
    category: 2,
    text: "Let $f(x) = x^3 - 3x^2 - 9x + 5$. Which of the following statements is/are correct?",
    options: [
      "$f(x)$ has a local maximum at $x = -1$",
      "$f(x)$ has a local minimum at $x = 3$",
      "$f(x)$ is increasing in the interval $(-\\infty, -1)$",
      "$f(x)$ is decreasing in $(3, \\infty)$"
    ],
    correct: [0, 1, 2],
    confidence: "High",
    rationale: "Monotonicity and local extrema values of cubic curves (2024 Q37).",
    solution: "$f'(x) = 3x^2 - 6x - 9 = 3(x-3)(x+1) = 0 \\implies x=3, -1$. $f''(x) = 6x-6$. $f''(-1) = -12 < 0 \\implies$ max at $x=-1$. $f''(3) = 12 > 0 \\implies$ min at $x=3$. $f'(x) > 0$ for $x < -1$ (increasing). (A, B, C correct)."
  },
  {
    id: 88,
    subject: "mathematics",
    category: 2,
    text: "For the definite integral $I = \\int_{-a}^{a} f(x) dx$, which of the following is/are correct?",
    options: [
      "$I = 2\\int_{0}^{a} f(x) dx$ if $f(x)$ is an even function",
      "$I = 0$ if $f(x)$ is an odd function",
      "$I = \\int_{0}^{a} [f(x) + f(-x)] dx$",
      "$I = 2\\int_{0}^{a} f(x) dx$ if $f(x)$ is an odd function"
    ],
    correct: [0, 1, 2],
    confidence: "High",
    rationale: "Properties of definite integrals with symmetric limits (2025 Q40).",
    solution: "A, B, and C are standard definite integral properties. D is incorrect. (A, B, C correct)."
  },
  {
    id: 89,
    subject: "mathematics",
    category: 2,
    text: "The complementary function (C.F.) of the second-order differential equation $\\frac{d^2y}{dx^2} - 4\\frac{dy}{dx} + 4y = e^{2x}$ contains terms of the form:",
    options: [
      "$e^{2x}$",
      "$xe^{2x}$",
      "$e^{-2x}$",
      "$\\cos 2x$"
    ],
    correct: [0, 1],
    confidence: "High",
    rationale: "Complementary function roots of second-order linear ODEs (2022 Q28, 2024 Q39).",
    solution: "Auxiliary equation $m^2 - 4m + 4 = 0 \\implies m = 2, 2$. Complementary function is $y_c = (c_1 + c_2 x)e^{2x}$. Contains $e^{2x}$ and $xe^{2x}$. (A, B correct)."
  },
  {
    id: 90,
    subject: "mathematics",
    category: 2,
    text: "For two independent events $A$ and $B$ with non-zero probabilities, which of the following is/are correct?",
    options: [
      "$P(A \\cap B) = P(A) \\cdot P(B)$",
      "$P(A | B) = P(A)$",
      "$P(A' \\cap B') = P(A') \\cdot P(B')$",
      "$P(A \\cup B) = P(A) + P(B)$"
    ],
    correct: [0, 1, 2],
    confidence: "High",
    rationale: "Set rules and independence definitions in Category-II probability (2024 Q40, 2025 Q37).",
    solution: "Independent events mean $P(A \\cap B) = P(A)P(B)$ and $P(A|B)=P(A)$. Complements are also independent, so $P(A' \\cap B') = P(A')P(B')$. $P(A \\cup B) = P(A)+P(B)$ only holds for mutually exclusive events. (A, B, C correct)."
  },

  // --- PHYSICS CATEGORY 2 (91-95) ---
  {
    id: 91,
    subject: "physics",
    category: 2,
    text: "In a 1D elastic collision between two identical spheres $A$ (moving with velocity $u$) and $B$ (at rest), which of the following is/are correct after collision?",
    options: [
      "Sphere A comes to rest",
      "Sphere B moves with velocity u",
      "The total kinetic energy is conserved",
      "The spheres stick together and move with velocity u/2"
    ],
    correct: [0, 1, 2],
    confidence: "High",
    rationale: "Conservation of energy and momentum in elastic collisions (2022 Q61, 2025 Q52, Q91).",
    solution: "In 1D elastic collision of identical masses, velocities swap: $v_A = 0$ and $v_B = u$. Energy is conserved. (A, B, C correct)."
  },
  {
    id: 92,
    subject: "physics",
    category: 2,
    text: "A block is attached to a vertical spring and released from rest when the spring is unstretched. As the block falls down:",
    options: [
      "The mechanical energy of the block-spring-Earth system is conserved",
      "The acceleration of the block is zero at the equilibrium position",
      "The maximum speed occurs when the spring force equals the weight of the block",
      "The block moves with constant acceleration"
    ],
    correct: [0, 1, 2],
    confidence: "Medium",
    rationale: "Dynamics of spring-mass systems and potential energy curves (2022 Q66, 2025 Q67).",
    solution: "Since forces are conservative, total system mechanical energy is conserved. Equilibrium position means net force is 0 $\\implies$ acceleration is 0, which is also the point of maximum velocity (where weight = spring force). Acceleration varies with displacement. (A, B, C correct)."
  },
  {
    id: 93,
    subject: "physics",
    category: 2,
    text: "For an ideal gas, which of the following thermodynamic relations is/are correct?",
    options: [
      "$C_p - C_v = R$",
      "$\\gamma = C_p / C_v$",
      "$C_v = R / (\\gamma - 1)$",
      "$C_p = \\gamma R / (\\gamma - 1)$"
    ],
    correct: [0, 1, 2, 3],
    confidence: "High",
    rationale: "Ideal gas specific heat relations (2022 Q66, 2025 Q93).",
    solution: "These are all fundamental, correct equations linking $C_p, C_v, \\gamma,$ and $R$ for an ideal gas. (All options correct)."
  },
  {
    id: 94,
    subject: "physics",
    category: 2,
    text: "An object is placed in front of a thin convex lens. Which of the following is/are correct regarding the image formed?",
    options: [
      "The image can be real and magnified",
      "The image can be virtual and magnified",
      "The image can be real and diminished",
      "The image can be virtual and diminished"
    ],
    correct: [0, 1, 2],
    confidence: "High",
    rationale: "Optics image formations by convex lenses (2022 Q69).",
    solution: "Convex lenses can form real magnified/diminished images and virtual magnified images (when object is inside focus). They cannot form virtual diminished images (which are formed by concave lenses). (A, B, C correct)."
  },
  {
    id: 95,
    subject: "physics",
    category: 2,
    text: "Which of the following is/are correct regarding the photoelectric effect?",
    options: [
      "No photoemission occurs if frequency is below threshold frequency",
      "Stopping potential increases linearly with the frequency of incident light",
      "Photoelectric current is independent of the stopping potential",
      "There is no time lag between incidence of light and emission of electrons"
    ],
    correct: [0, 1, 3],
    confidence: "High",
    rationale: "Principles of photoelectricity in Category-II questions (2022 Q70, 2024 Q70, 2025 Q95).",
    solution: "A, B, and D are standard observed characteristics of photoemission. Photoelectric current decreases to 0 as potential reaches the negative stopping potential, so it is dependent. (A, B, D correct)."
  },

  // --- CHEMISTRY CATEGORY 2 (96-100) ---
  {
    id: 96,
    subject: "chemistry",
    category: 2,
    text: "Which of the following expressions is/are correct regarding the de Broglie wavelength ($\\lambda$) of an electron accelerated through potential $V$ volts?",
    options: [
      "$\\lambda \\approx 12.27 / \\sqrt{V}\\text{ \\AA}$",
      "$\\lambda \\propto 1 / \\sqrt{V}$",
      "$\\lambda \\propto 1 / V$",
      "$\\lambda \\approx 1.227 / \\sqrt{V}\\text{ nm}$"
    ],
    correct: [0, 1, 3],
    confidence: "High",
    rationale: "de Broglie wavelength formulas and voltage relations (2022 Q73, 2025 Q96).",
    solution: "$\\lambda = \\frac{h}{p} = \\frac{1.227}{\\sqrt{V}}\\text{ nm} = \\frac{12.27}{\\sqrt{V}}\\text{ \\AA}$. Thus, $\\lambda \\propto \\frac{1}{\\sqrt{V}}$. (A, B, D correct)."
  },
  {
    id: 97,
    subject: "chemistry",
    category: 2,
    text: "For the electrochemical cell representation $Zn(s) | Zn^{2+}(aq) || Cu^{2+}(aq) | Cu(s)$, which of the following will increase the cell EMF?",
    options: [
      "Increasing the concentration of $Cu^{2+}$ ions",
      "Decreasing the concentration of $Zn^{2+}$ ions",
      "Increasing the concentration of $Zn^{2+}$ ions",
      "Decreasing the concentration of $Cu^{2+}$ ions"
    ],
    correct: [0, 1],
    confidence: "High",
    rationale: "Nernst equation application in Category-II (2025 Q76, Q97).",
    solution: "By Nernst Equation: $E_{cell} = E^0 - \\frac{RT}{2F}\\ln\\frac{[Zn^{2+}]}{[Cu^{2+}]}$. To increase $E_{cell}$, we must minimize the log ratio, meaning we should decrease $[Zn^{2+}]$ or increase $[Cu^{2+}]$. (A, B correct)."
  },
  {
    id: 98,
    subject: "chemistry",
    category: 2,
    text: "For a reversible gas phase reaction, the equilibrium constants are related by $K_p = K_c(RT)^{\\Delta n_g}$. In which of the following reactions is $K_p = K_c$?",
    options: [
      "$H_2(g) + I_2(g) \\rightleftharpoons 2HI(g)$",
      "$N_2(g) + O_2(g) \\rightleftharpoons 2NO(g)$",
      "$PCl_5(g) \\rightleftharpoons PCl_3(g) + Cl_2(g)$",
      "$N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$"
    ],
    correct: [0, 1],
    confidence: "High",
    rationale: "$K_p$ and $K_c$ equilibrium relations (2023 Q82, 2025 Q89).",
    solution: "$K_p = K_c$ when $\\Delta n_g = 0$. In reactions A and B, reactant and product gas moles are equal ($\\Delta n_g = 0$). (A, B correct)."
  },
  {
    id: 99,
    subject: "chemistry",
    category: 2,
    text: "The addition of $HBr$ to 3-methylbut-1-ene yields which of the following products?",
    options: [
      "2-bromo-2-methylbutane as major product",
      "2-bromo-3-methylbutane as minor product",
      "1-bromo-3-methylbutane",
      "2,2-dibromobutane"
    ],
    correct: [0, 1],
    confidence: "High",
    rationale: "Carbocation rearrangements in electrophilic additions (2025 Q88).",
    solution: "Addition of $H^+$ to 3-methylbut-1-ene ($CH_3-CH(CH_3)-CH=CH_2$) forms a secondary carbocation ($CH_3-CH(CH_3)-\\bar{C}H-CH_3$). A 1,2-hydride shift occurs to form the more stable tertiary carbocation ($CH_3-\\bar{C}(CH_3)-CH_2-CH_3$). Attack by $Br^-$ on this gives 2-bromo-2-methylbutane (major). Direct attack on the secondary carbocation gives 2-bromo-3-methylbutane (minor). (A, B correct)."
  },
  {
    id: 100,
    subject: "chemistry",
    category: 2,
    text: "Which of the following orders of acidic strength is/are correct?",
    options: [
      "$HClO_4 > HClO_3 > HClO_2 > HClO$",
      "$HNO_3 > HNO_2$",
      "$H_2SO_4 > H_2SO_3$",
      "$HClO < HClO_2 < HClO_3 < HClO_4$"
    ],
    correct: [0, 1, 2, 3],
    confidence: "High",
    rationale: "Oxyacid strength trends of non-metals (2022 Q80, 2025 Q100).",
    solution: "Acidic strength of oxyacids increases with higher oxidation state of the central atom. All options represent correct relative comparisons. (All options correct)."
  }
];

// Export for usage in app.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = questions;
}
