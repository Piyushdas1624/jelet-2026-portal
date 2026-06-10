// JELET 2026 High-Yield Concept Database
// Contains exactly 40 core question-type solving recipes
// Mathematics: 1-14 | Physics: 15-24 | Chemistry: 25-33 | Electrical & Electronics: 34-40

const concepts = [
  // ================= MATHEMATICS RECIPES (1 to 14) =================
  {
    id: 1,
    subject: "mathematics",
    title: "Linear Systems Parameter Solutions (Cramer's Rule)",
    youtubeQuery: "cramer+rule+system+of+equations+linear+algebra",
    desc: "Finding parameters (like $k$, $\\lambda$, $a$) that determine if a system of 3 linear equations has no solution, unique solutions, or infinite solutions.",
    formulas: [
      "System: $a_1x + b_1y + c_1z = d_1$; $a_2x + b_2y + c_2z = d_2$; $a_3x + b_3y + c_3z = d_3$",
      "Coefficient Determinant: $\\Delta = \\begin{vmatrix} a_1 & b_1 & c_1 \\\\ a_2 & b_2 & c_2 \\\\ a_3 & b_3 & c_3 \\end{vmatrix}$",
      "Unique Solution: $\\Delta \\neq 0$",
      "No Solution (Inconsistent): $\\Delta = 0$ and at least one $\\Delta_x, \\Delta_y, \\Delta_z \\neq 0$",
      "Infinite Solutions (Consistent Dependent): $\\Delta = 0$ and $\\Delta_x = \\Delta_y = \\Delta_z = 0$ (for non-parallel planes)"
    ],
    steps: [
      "Write down the coefficient matrix and compute its determinant $\\Delta$. Use row operations to simplify before expanding.",
      "Set $\\Delta = 0$ and solve the resulting quadratic/linear equation for the unknown parameter.",
      "Substitute each solved parameter value back into the original equations.",
      "Compare the equations. If two equations become parallel but have different constants (e.g. $2x+3y+2z=5$ and $2x+3y+2z=3$), the system is inconsistent (No Solution).",
      "If the equations are compatible and merge, the system has Infinite Solutions."
    ],
    example: {
      text: "Find the value of $k$ for which the system has no solution:\n$$x + y + z = 2$$\n$$2x + 3y + 2z = 5$$\n$$2x + 3y + (k^2 - 1)z = k + 3$$",
      solution: "Step 1: Compute $\\Delta = \\begin{vmatrix} 1 & 1 & 1 \\\\ 2 & 3 & 2 \\\\ 2 & 3 & k^2-1 \\end{vmatrix}$. Row operation $R_3 \\to R_3 - R_2$ yields $\\begin{vmatrix} 1 & 1 & 1 \\\\ 2 & 3 & 2 \\\\ 0 & 0 & k^2-3 \\end{vmatrix} = (k^2-3)(3-2) = k^2-3$.\n\nStep 2: Set $\\Delta = 0 \\implies k^2-3 = 0 \\implies k = \\pm\\sqrt{3}$.\n\nStep 3: Substitute $k = \\pm\\sqrt{3}$ into eq 3 $\implies 2x+3y+2z = \\pm\\sqrt{3}+3$.\n\nStep 4: Compare eq 2 ($2x+3y+2z=5$) and eq 3 ($2x+3y+2z = \\pm\\sqrt{3}+3$). Since $\\pm\\sqrt{3}+3 \\neq 5$, the planes are parallel and distinct, meaning there is no solution."
    },
    proTip: "Row operations are your best friend! Always look to make row elements zero to compute determinants easily. Most questions are designed so that a row subtraction (like $R_3 - R_2$) instantly isolates the parameter."
  },
  {
    id: 2,
    subject: "mathematics",
    title: "Rank of a Parameter-Dependent 3x3 Matrix",
    youtubeQuery: "rank+of+3x3+matrix+linear+algebra",
    desc: "Finding the rank of a $3\\times3$ matrix when some elements depend on an algebraic variable $x$ or $\\lambda$.",
    formulas: [
      "Rank = 3: Determinant $|A| \\neq 0$",
      "Rank = 2: $|A| = 0$ and at least one $2 \\times 2$ minor is non-zero (determinant of any $2 \\times 2$ submatrix $\\neq 0$)",
      "Rank = 1: All $2 \\times 2$ minors are 0, but at least one element is non-zero"
    ],
    steps: [
      "Set the determinant of the $3\\times3$ matrix $|A| = 0$ and solve for the parameter.",
      "For each solution, construct the matrix by substituting the value.",
      "Check if any $2\\times2$ submatrix has a non-zero determinant. If yes, the rank is 2.",
      "If all $2\\times2$ submatrices are zero, check if there is at least one non-zero element. If yes, the rank is 1."
    ],
    example: {
      text: "Find $x$ such that the matrix $A = \\begin{pmatrix} 1 & 1 & 1 \\\\ 1 & x & 1 \\\\ 1 & 1 & x^2 \\end{pmatrix}$ has rank 2.",
      solution: "Step 1: Set $|A| = 0 \\implies (x-1)^2(x+1) = 0 \\implies x=1$ or $x=-1$.\n\nStep 2: If $x=1$, $A = \\begin{pmatrix} 1&1&1 \\\\ 1&1&1 \\\\ 1&1&1 \\end{pmatrix}$. All rows are identical. Every $2\\times2$ minor is 0. The rank is 1.\n\nStep 3: If $x=-1$, $A = \\begin{pmatrix} 1&1&1 \\\\ 1&-1&1 \\\\ 1&1&1 \\end{pmatrix}$. The minor $\\begin{vmatrix}1&1 \\\\ 1&-1\\end{vmatrix} = -2 \\neq 0$. Thus, a $2\\times2$ minor is non-zero, so the rank is 2. The required value is $x=-1$."
    },
    proTip: "Do not just solve $|A| = 0$ and pick all roots! You must check each root individually. Often one of the roots collapses the rank to 1, while the other gives rank 2."
  },
  {
    id: 3,
    subject: "mathematics",
    title: "Euler's Theorem on Homogeneous Functions",
    youtubeQuery: "eulers+theorem+on+homogeneous+functions+partial+differentiation",
    desc: "Solving partial differential equations of the form $x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y}$ when $u$ is linked to a homogeneous function.",
    formulas: [
      "Homogeneous function $f(x,y)$ of degree $n$: $f(tx, ty) = t^n f(x, y)$",
      "Euler's Theorem: $x \\frac{\\partial f}{\\partial x} + y \\frac{\\partial f}{\\partial y} = n f(x, y)$",
      "Trigonometric/Logarithmic extension: If $g(u) = f(x, y)$, then $x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y} = n \\frac{g(u)}{g'(u)}$"
    ],
    steps: [
      "Identify the function and isolate the homogeneous algebraic expression. Let it be $z = g(u)$.",
      "Determine the degree $n$ of the homogeneous function $z$ by checking the powers of the numerator and denominator: $n = \\text{degree}(num) - \\text{degree}(den)$.",
      "Apply the extended Euler formula: $x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y} = n \\frac{g(u)}{g'(u)}$.",
      "Simplify the trigonometric or exponential ratio $\\frac{g(u)}{g'(u)}$."
    ],
    example: {
      text: "If $u = \\sin^{-1}\\left(\frac{x^2 + y^2}{x + y}\\right)$, find the value of $x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y}$.",
      solution: "Step 1: Write $g(u) = \\sin u = \\frac{x^2+y^2}{x+y}$.\n\nStep 2: The numerator has degree 2, denominator has degree 1. So degree of the homogeneous function is $n = 2 - 1 = 1$.\n\nStep 3: Apply the extended formula: $x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y} = n \\frac{g(u)}{g'(u)} = 1 \\cdot \\frac{\\sin u}{\\cos u} = \\tan u$."
    },
    proTip: "Memorize the direct shortcut results for common functions:\n- If $u = \\sin^{-1}(z)$ or $\\tan^{-1}(z)$, the result is $n\\tan u$ or $n\\sin(2u)/2$.\n- If $u = \\ln(z)$, the result is simply $n$ (since $g(u)=e^u \\implies g/g' = 1$)."
  },
  {
    id: 4,
    subject: "mathematics",
    title: "First-Order Linear Differential Equations (Integrating Factor)",
    youtubeQuery: "integrating+factor+first+order+linear+differential+equations",
    desc: "Solving first-order differential equations that can be written in the standard linear form.",
    formulas: [
      "Standard Linear Form: $\\frac{dy}{dx} + P(x)y = Q(x)$",
      "Integrating Factor: $I.F. = e^{\\int P(x) dx}$",
      "General Solution: $y \\cdot (I.F.) = \\int Q(x) \\cdot (I.F.) dx + c$"
    ],
    steps: [
      "Convert the given equation to the standard form: make the coefficient of $\\frac{dy}{dx}$ equal to 1 by division.",
      "Identify the functions $P(x)$ and $Q(x)$.",
      "Compute the Integrating Factor: $I.F. = e^{\\int P(x) dx}$. (Note: $e^{\\ln f(x)} = f(x)$).",
      "Multiply the equation by $I.F.$ and integrate the right-hand side: $\\int Q(x) I.F. dx$.",
      "Use any initial conditions to solve for the constant $c$."
    ],
    example: {
      text: "Solve $x\\frac{dy}{dx} + y = x^3$ given $y(1) = 0$.",
      solution: "Step 1: Divide by $x \\implies \\frac{dy}{dx} + \\frac{1}{x}y = x^2$. \n\nStep 2: $P(x) = 1/x$, $Q(x) = x^2$.\n\nStep 3: $I.F. = e^{\\int (1/x) dx} = e^{\\ln x} = x$.\n\nStep 4: Solution is $y \\cdot x = \\int x^2 \\cdot x dx = \\int x^3 dx = \\frac{x^4}{4} + c$.\n\nStep 5: Apply $y(1)=0 \\implies 0(1) = 1/4 + c \\implies c = -1/4$. Thus, $yx = \\frac{x^4-1}{4}$."
    },
    proTip: "Always check if the equation is already a product rule in disguise! For example, $x\\frac{dy}{dx} + y$ is simply the derivative of $xy$: $\\frac{d}{dx}(xy) = x^3 \\implies xy = \\int x^3 dx = \\frac{x^4}{4} + c$. This bypasses the need for the Integrating Factor entirely!"
  },
  {
    id: 5,
    subject: "mathematics",
    title: "Matrix Powers and Cyclic Patterns ($A^k$)",
    youtubeQuery: "diagonalization+matrix+powers+similar+matrices",
    desc: "Finding high powers of matrices using similarity transformations, eigenvalue properties, or periodic cycles.",
    formulas: [
      "Similarity Diagonalization: If $Q = PAP^T$ and $P^T = P^{-1}$, then $Q^k = P A^k P^T$",
      "Cyclic properties: Check if $A^2 = -I$, $A^3 = I$, or $A^4 = I$"
    ],
    steps: [
      "Check if $A^2, A^3,$ or $A^4$ equals $\\pm I$ or $\\pm A$ to find a cyclic recurrence.",
      "If the question involves a similarity transformation like $Q = PAP^T$, express $Q^k$ as $P A^k P^T$.",
      "Note that intermediate $P^T P$ terms multiply to $I$ since $P^T = P^{-1}$.",
      "Evaluate $A^k$ using the cyclic property and substitute back into the equation."
    ],
    example: {
      text: "Let $P = \\begin{pmatrix} \\sqrt{3}/2 & 1/2 \\\\ -1/2 & \\sqrt{3}/2 \\end{pmatrix}$ and $Q = PAP^T$ (where $A$ is any $2 \\times 2$ matrix). Find $P^T Q^{99} P$.",
      solution: "Step 1: Write $Q = PAP^T \\implies Q^2 = (PAP^T)(PAP^T) = PA(P^T P)AP^T$. Since $P$ is orthogonal ($P^T = P^{-1}$), $P^T P = I$. So $Q^2 = P A^2 P^T$.\n\nStep 2: By induction, $Q^{99} = P A^{99} P^T$.\n\nStep 3: Multiply by $P^T$ on left and $P$ on right: $P^T Q^{99} P = P^T (P A^{99} P^T) P = (P^T P) A^{99} (P^T P) = I A^{99} I = A^{99}$."
    },
    proTip: "Whenever you see $P^T Q^k P$ or similar formats, immediately simplify the intermediate $P^T P$ terms to $I$. The entire expression collapses down to $A^k$."
  },
  {
    id: 6,
    subject: "mathematics",
    title: "Limits of $1^\\infty$ Indeterminate Form",
    youtubeQuery: "limits+1+to+power+infinity+indeterminate+forms",
    desc: "Evaluating limits of the form $\\lim_{x\\to a} [f(x)]^{g(x)}$ where $f(x) \\to 1$ and $g(x) \\to \\infty$.",
    formulas: [
      "Theorem: If $\\lim_{x\\to a} f(x) = 1$ and $\\lim_{x\\to a} g(x) = \\infty$, then:",
      "$\\lim_{x\\to a} [f(x)]^{g(x)} = e^{\\lim_{x\\to a} g(x)[f(x) - 1]}$"
    ],
    steps: [
      "Verify the indeterminate form by substituting $x = a$ into $f(x)$ and $g(x)$.",
      "Apply the shortcut formula: rewrite the limit as $e^L$ where $L = \\lim_{x\\to a} g(x)[f(x) - 1]$.",
      "Simplify the expression $g(x)[f(x) - 1]$. Use algebraic manipulations or L'Hopital's rule to resolve the resulting $0 \\times \\infty$ or $0/0$ limit.",
      "Calculate $L$ and write the final limit as $e^L$."
    ],
    example: {
      text: "Evaluate the limit: $\\lim_{x\\to 0} (\\cos x)^{1/x^2}$.",
      solution: "Step 1: As $x \\to 0$, $\\cos x \\to 1$ and $1/x^2 \\to \\infty$. This is a $1^\\infty$ form.\n\nStep 2: Let $L = \\lim_{x\\to 0} \\frac{1}{x^2}(\\cos x - 1) = \\lim_{x\\to 0} \\frac{\\cos x - 1}{x^2}$.\n\nStep 3: Apply L'Hopital's rule twice (0/0 form): $\\lim_{x\\to 0} \\frac{-\\sin x}{2x} = \\lim_{x\\to 0} \\frac{-\\cos x}{2} = -1/2$.\n\nStep 4: The limit is $e^L = e^{-1/2} = 1/\\sqrt{e}$."
    },
    proTip: "Always remember to write the final answer with base $e$. Many candidates solve for $L$ and select the option $-1/2$ instead of $e^{-1/2}$."
  },
  {
    id: 7,
    subject: "mathematics",
    title: "Solving Rolle's / Lagrange's Mean Value Theorem",
    youtubeQuery: "rolles+theorem+lagranges+mean+value+theorem",
    desc: "Finding the value of the intermediate point $c$ that satisfies the differentiability theorems.",
    formulas: [
      "Rolle's Theorem: If $f(x)$ is continuous on $[a,b]$ and differentiable on $(a,b)$ with $f(a)=f(b)$, then $f'(c) = 0$ for some $c \\in (a,b)$.",
      "Lagrange's MVT: If $f(x)$ is continuous on $[a,b]$ and differentiable on $(a,b)$, then $f'(c) = \\frac{f(b) - f(a)}{b - a}$ for some $c \\in (a,b)$."
    ],
    steps: [
      "Check the continuity and differentiability conditions of the function $f(x)$ on the given interval.",
      "Verify the boundary values: for Rolle's, check if $f(a) = f(b)$.",
      "Differentiate $f(x)$ to find $f'(x)$.",
      "Set up the theorem equation: $f'(c) = 0$ (Rolle's) or $f'(c) = \\frac{f(b)-f(a)}{b-a}$ (LMVT).",
      "Solve for $c$ and verify that the solution lies inside the open interval $(a, b)$."
    ],
    example: {
      text: "Find $c$ satisfying Lagrange's MVT for $f(x) = x^2 - 4x + 3$ on the interval $[1, 3]$.",
      solution: "Step 1: $f(x)$ is a polynomial, so it is continuous and differentiable.\n\nStep 2: $f(1) = 1 - 4 + 3 = 0$, $f(3) = 9 - 12 + 3 = 0$. (Rolle's also applies here since $f(1)=f(3)$).\n\nStep 3: $f'(x) = 2x - 4$.\n\nStep 4: Set $f'(c) = \\frac{f(3)-f(1)}{3-1} = \\frac{0 - 0}{2} = 0$.\n\nStep 5: $2c - 4 = 0 \\implies c = 2 \\in (1, 3)$."
    },
    proTip: "The derivative $f'(c)$ represents the slope of the tangent. Lagrange's theorem states that at some point $c$, the tangent is parallel to the secant line joining the endpoints."
  },
  {
    id: 8,
    subject: "mathematics",
    title: "Definite Integrals of Modulus (Absolute Value) Functions",
    youtubeQuery: "integration+of+modulus+absolute+value+functions",
    desc: "Evaluating definite integrals where the integrand contains absolute value terms $|f(x)|$.",
    formulas: [
      "Definition: $|x| = x$ if $x \\ge 0$, and $|x| = -x$ if $x < 0$",
      "Limit Splitting Property: $\\int_a^b f(x) dx = \\int_a^c f(x) dx + \\int_c^b f(x) dx$"
    ],
    steps: [
      "Find the critical points where the expression inside the absolute value changes sign (set $f(x) = 0$).",
      "Determine which critical points fall inside the limits of integration $[a, b]$.",
      "Split the integral at these critical points.",
      "For each sub-interval, remove the absolute value bars and replace them with a positive or negative sign depending on the sign of $f(x)$ in that interval.",
      "Integrate each part separately and sum the results."
    ],
    example: {
      text: "Evaluate: $\\int_0^3 |x^2 - 3x + 2| dx$.",
      solution: "Step 1: Set $x^2 - 3x + 2 = (x-1)(x-2) = 0 \\implies x=1, 2$.\n\nStep 2: Both critical points $1$ and $2$ lie within the integration limits $[0, 3]$.\n\nStep 3: Split the integral: $\\int_0^1 |(x-1)(x-2)| dx + \\int_1^2 |(x-1)(x-2)| dx + \\int_2^3 |(x-1)(x-2)| dx$.\n\nStep 4: Determine signs:\n- In $[0, 1]$, $(x-1)(x-2) > 0 \\implies |(x-1)(x-2)| = x^2 - 3x + 2$.\n- In $[1, 2]$, $(x-1)(x-2) < 0 \\implies |(x-1)(x-2)| = -(x^2 - 3x + 2)$.\n- In $[2, 3]$, $(x-1)(x-2) > 0 \\implies |(x-1)(x-2)| = x^2 - 3x + 2$.\n\nStep 5: Integrate: $\\int_0^1 (x^2-3x+2)dx = 5/6$. $\\int_1^2 -(x^2-3x+2)dx = 1/6$. $\\int_2^3 (x^2-3x+2)dx = 5/6$. Sum $= 5/6 + 1/6 + 5/6 = 11/6$."
    },
    proTip: "Draw a simple sign scheme line to identify positive and negative regions. A single sign error during the splitting phase will lead to an incorrect result."
  },
  {
    id: 9,
    subject: "mathematics",
    title: "Symmetric Definite Integrals ($f(a+b-x)$ property)",
    youtubeQuery: "integration+properties+f%28a%2Bb-x%29",
    desc: "Evaluating complex trigonometric/algebraic definite integrals using symmetry properties.",
    formulas: [
      "Property 1: $\\int_0^a f(x) dx = \\int_0^a f(a - x) dx$",
      "Property 2: $\\int_a^b f(x) dx = \\int_a^b f(a + b - x) dx$"
    ],
    steps: [
      "Let the original integral be $I$.",
      "Apply the property: replace every $x$ in the integrand with $(a - x)$ or $(a + b - x)$. Let this new integral be $I'$.",
      "Simplify the new integrand. Often, trigonometric identities like $\\sin(\\pi/2 - x) = \\cos x$ are useful.",
      "Add the two integrals: $2I = I + I'$.",
      "Simplify the combined integrand (which usually simplifies to $1$ or a constant), integrate, and divide by 2 to find $I$."
    ],
    example: {
      text: "Evaluate: $\\int_0^{\\pi/2} \\frac{\\sin^n x}{\\sin^n x + \\cos^n x} dx$.",
      solution: "Step 1: Let $I = \\int_0^{\\pi/2} \\frac{\\sin^n x}{\\sin^n x + \\cos^n x} dx$.\n\nStep 2: Replace $x$ with $(\\pi/2 - x) \\implies I = \\int_0^{\\pi/2} \\frac{\\sin^n(\\pi/2-x)}{\\sin^n(\\pi/2-x) + \\cos^n(\\pi/2-x)} dx$.\n\nStep 3: Simplify: $I = \\int_0^{\\pi/2} \\frac{\\cos^n x}{\\cos^n x + \\sin^n x} dx$.\n\nStep 4: Add the two equations: $2I = \\int_0^{\\pi/2} \\frac{\\sin^n x + \\cos^n x}{\\sin^n x + \\cos^n x} dx = \\int_0^{\\pi/2} 1 dx = \\frac{\\pi}{2}$.\n\nStep 5: Solve for $I$: $I = \\frac{\\pi}{4}$."
    },
    proTip: "This property is extremely powerful for integrals that look impossible to integrate directly (e.g. $\\int \\ln(1+\\tan x) dx$). Whenever you see limits like $0$ to $\\pi/2$ or $0$ to $\\pi$, think of this property first."
  },
  {
    id: 10,
    subject: "mathematics",
    title: "Locus of Complex Equations",
    youtubeQuery: "locus+of+complex+numbers+jee+maths",
    desc: "Determining the geometric shape represented by equations involving complex numbers.",
    formulas: [
      "Distance Formula: $|z - z_0| = r$ represents a circle centered at $z_0$ with radius $r$.",
      "Perpendicular Bisector: $|z - z_1| = |z - z_2|$ represents the perpendicular bisector of the line joining $z_1$ and $z_2$."
    ],
    steps: [
      "Substitute $z = x + iy$ and $\\bar{z} = x - iy$ into the given equation.",
      "Separate the expression into real and imaginary parts.",
      "Apply the modulus definition if $|f(z)|$ is present: $|u + iv| = \\sqrt{u^2 + v^2}$. Square both sides to eliminate the square root.",
      "Simplify the resulting equation in terms of $x$ and $y$.",
      "Identify the standard conic equation (e.g., $x^2+y^2=r^2$ is a circle, $Ax+By+C=0$ is a straight line)."
    ],
    example: {
      text: "Identify the locus of $z$ if $|z - 3i| = |z - 3|$.",
      solution: "Step 1: Substitute $z = x+iy \\implies |x + i(y-3)| = |(x-3) + iy|$.\n\nStep 2: Apply modulus definition: $\\sqrt{x^2 + (y-3)^2} = \\sqrt{(x-3)^2 + y^2}$.\n\nStep 3: Square both sides: $x^2 + y^2 - 6y + 9 = x^2 - 6x + 9 + y^2$.\n\nStep 4: Cancel terms: $-6y = -6x \\implies y = x$.\n\nStep 5: The locus is a straight line passing through the origin at $45^\\circ$."
    },
    proTip: "You can solve this geometrically! $|z - 3i| = |z - 3|$ states that the distance from $z$ to $3i$ equals the distance from $z$ to $3$. This is the perpendicular bisector of the segment connecting $(0,3)$ and $(3,0)$, which is the line $y = x$."
  },
  {
    id: 11,
    subject: "mathematics",
    title: "Bayes' Theorem & Conditional Probability",
    youtubeQuery: "bayes+theorem+probability",
    desc: "Calculating the probability of an event based on prior knowledge of conditions related to the event.",
    formulas: [
      "Conditional Probability: $P(A | B) = \\frac{P(A \\cap B)}{P(B)}$",
      "Bayes' Theorem: $P(E_i | A) = \\frac{P(E_i) P(A | E_i)}{\\sum P(E_j) P(A | E_j)}$"
    ],
    steps: [
      "Define the partition events $E_1, E_2, \\dots, E_n$ (e.g., choosing Box 1, Box 2). Ensure they are mutually exclusive and exhaustive.",
      "Define the common event $A$ (e.g., drawing a red ball).",
      "Write down the prior probabilities $P(E_i)$ and the conditional probabilities $P(A | E_i)$.",
      "Apply Bayes' Theorem formula: place the probability of the path of interest in the numerator, and the sum of all paths in the denominator.",
      "Calculate and simplify the fraction."
    ],
    example: {
      text: "Bag A contains 3 red and 2 black balls. Bag B contains 2 red and 4 black balls. A bag is chosen at random and a ball is drawn. If the drawn ball is red, find the probability that it came from Bag A.",
      solution: "Step 1: Let $E_1 = \\text{choose Bag A}$, $E_2 = \\text{choose Bag B}$. $P(E_1) = P(E_2) = 1/2$.\n\nStep 2: Let $A = \\text{drawing a red ball}$.\n\nStep 3: Conditional probabilities: $P(A|E_1) = 3/5$ (3 red out of 5), $P(A|E_2) = 2/6 = 1/3$ (2 red out of 6).\n\nStep 4: Bayes' Formula: $P(E_1|A) = \\frac{P(E_1)P(A|E_1)}{P(E_1)P(A|E_1) + P(E_2)P(A|E_2)} = \\frac{1/2 \\times 3/5}{1/2 \\times 3/5 + 1/2 \\times 1/3}$.\n\nStep 5: Simplify: $\\frac{3/5}{3/5 + 1/3} = \\frac{3/5}{14/15} = \\frac{3}{5} \\times \\frac{15}{14} = \\frac{9}{14}$."
    },
    proTip: "Draw a tree diagram! It is the easiest way to visualize the paths and avoid calculation errors. The numerator is the product of branches along the path of interest, and the denominator is the sum of products of all branches."
  },
  {
    id: 12,
    subject: "mathematics",
    title: "Area of Bounded Regions (Integration)",
    youtubeQuery: "area+under+curves+definite+integration",
    desc: "Finding the area enclosed between two intersecting curves or a curve and a line.",
    formulas: [
      "Area between curves $y_1(x)$ and $y_2(x)$: $Area = \\int_a^b |y_1(x) - y_2(x)| dx$"
    ],
    steps: [
      "Find the points of intersection of the curves by setting $y_1(x) = y_2(x)$. These solve for the integration limits $a$ and $b$.",
      "Sketch a rough diagram to determine which curve lies above the other in the interval $[a, b]$.",
      "Set up the integral: $\\int_a^b (y_{top} - y_{bottom}) dx$.",
      "Perform the integration.",
      "Substitute the limits and compute the absolute area value."
    ],
    example: {
      text: "Find the area bounded by the curves $y^2 = 4x$ and $x^2 = 4y$.",
      solution: "Step 1: Intersection: $y = x^2/4 \\implies (x^2/4)^2 = 4x \\implies x^4 - 64x = 0 \\implies x(x^3 - 64) = 0 \\implies x=0, 4$. Limits are $0$ and $4$.\n\nStep 2: In $[0, 4]$, the curve $y^2=4x \\implies y=\\sqrt{4x}$ is above $x^2=4y \\implies y=x^2/4$.\n\nStep 3: Integral: $Area = \\int_0^4 (2\\sqrt{x} - x^2/4) dx$.\n\nStep 4: Integrate: $\\left[\\frac{4}{3}x^{3/2} - \\frac{x^3}{12}\\right]_0^4$.\n\nStep 5: Substitute: $\\left(\\frac{4}{3}(8) - \\frac{64}{12}\\right) = \\frac{32}{3} - \\frac{16}{3} = \\frac{16}{3}$."
    },
    proTip: "Use standard shortcut formulas for common shapes:\n- Area between $y^2 = 4ax$ and $x^2 = 4by$ is always $\\frac{16ab}{3}$. In the example, $a=1, b=1 \\implies Area = 16/3$."
  },
  {
    id: 13,
    subject: "mathematics",
    title: "Vector Products & Coplanarity",
    youtubeQuery: "vector+triple+product+scalar+triple+product",
    desc: "Simplifying vector triple products and checking linear dependence (coplanarity) of vectors.",
    formulas: [
      "Vector Triple Product: $\\vec{a} \\times (\\vec{b} \\times \\vec{c}) = (\\vec{a} \\cdot \\vec{c})\\vec{b} - (\\vec{a} \\cdot \\vec{b})\\vec{c}$ ('BAC - CAB')",
      "Coplanarity Condition: three vectors are coplanar if their scalar triple product $[\\vec{a} \\quad \\vec{b} \\quad \\vec{c}] = 0$"
    ],
    steps: [
      "For vector triple products, write down the vectors and apply the 'BAC - CAB' expansion identity.",
      "For coplanarity, construct a $3\\times3$ matrix where the rows are the coefficients of the three vectors.",
      "Compute the determinant of this matrix.",
      "Set the determinant to 0 to find any unknown parameters that make the vectors coplanar."
    ],
    example: {
      text: "Determine the value of $\\lambda$ for which the vectors $\\vec{u} = \\hat{i} - 2\\hat{j} + \\hat{k}$, $\\vec{v} = 2\\hat{i} - 5\\hat{j} + 3\\hat{k}$ and $\\vec{w} = 5\\hat{i} + \\lambda\\hat{j} + 6\\hat{k}$ are coplanar.",
      solution: "Step 1: Construct the coefficient determinant: $\\Delta = \\begin{vmatrix} 1 & -2 & 1 \\\\ 2 & -5 & 3 \\\\ 5 & \\lambda & 6 \\end{vmatrix}$.\n\nStep 2: Expand the determinant: $1(-30 - 3\\lambda) - (-2)(12 - 15) + 1(2\\lambda - (-25)) = -30 - 3\\lambda + 2(-3) + 2\\lambda + 25$.\n\nStep 3: Simplify: $-\\lambda - 11$.\n\nStep 4: For coplanarity, set $\\Delta = 0 \\implies -\\lambda - 11 = 0 \\implies \\lambda = -11$."
    },
    proTip: "Remember the order of operations in triple products. A vector cross product yields a vector perpendicular to the plane of the constituents, while a dot product yields a scalar."
  },
  {
    id: 14,
    subject: "mathematics",
    title: "Conic Tangents & Normals",
    youtubeQuery: "tangents+and+normals+conic+sections+jee",
    desc: "Finding equations of tangents and normals to conics (ellipses, parabolas, hyperbolas) at a point or with a given slope.",
    formulas: [
      "Parabola $y^2 = 4x$ tangent of slope $m$: $y = mx + 1/m$",
      "Ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ tangent of slope $m$: $y = mx \\pm \\sqrt{a^2m^2 + b^2}$",
      "Hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ tangent of slope $m$: $y = mx \\pm \\sqrt{a^2m^2 - b^2}$"
    ],
    steps: [
      "Identify the conic type and find its parameters $a^2$ and $b^2$.",
      "Find the slope $m$ of the required tangent (if perpendicular to $y=kx+c$, then $m = -1/k$; if parallel, $m = k$).",
      "Substitute $m$ and parameters into the corresponding standard condition for tangency ($c$ value).",
      "Write down the final line equation: $y = mx + c$."
    ],
    example: {
      text: "Find the equations of the tangents to the ellipse $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$ that are parallel to the line $y = x$.",
      solution: "Step 1: Conic is ellipse with $a^2=25, b^2=16$. Parallel to $y = x \\implies$ slope $m = 1$.\n\nStep 2: Condition of tangency: $c = \\pm\\sqrt{a^2m^2 + b^2}$.\n\nStep 3: Substitute values: $c = \\pm\\sqrt{25(1)^2 + 16} = \\pm\\sqrt{41}$.\n\nStep 4: Tangent equations are $y = x \\pm \\sqrt{41}$."
    },
    proTip: "The equation of tangent at a point $(x_1, y_1)$ on a conic can be written instantly by replacement:\n- Replace $x^2 \\to x x_1$, $y^2 \\to y y_1$, $2x \\to x + x_1$, $2y \\to y + y_1$."
  },

  // ================= PHYSICS RECIPES (15 to 24) =================
  {
    id: 15,
    subject: "physics",
    title: "Terminal Velocity & Heat Production in Viscous Fluids",
    youtubeQuery: "terminal+velocity+stokes+law+fluid+mechanics",
    desc: "Solving for terminal velocity ($v_t$) of a spherical body falling through a viscous fluid and calculating the resulting rate of heat generation.",
    formulas: [
      "Stokes' Law: $F_v = 6\\pi\\eta r v$",
      "Terminal Velocity: $v_t = \\frac{2r^2(\\rho - \\sigma)g}{9\\eta} \\implies v_t \\propto r^2$",
      "Rate of Heat Production (Power): $P = F_v \\cdot v_t = 6\\pi\\eta r v_t^2 \\implies P \\propto r^5$"
    ],
    steps: [
      "Identify the radius $r$ and write the proportionality relation for terminal velocity: $v_t \\propto r^2$.",
      "If comparing two spheres, use $\\frac{v_{t1}}{v_{t2}} = \\left(\\frac{r_1}{r_2}\\right)^2$.",
      "Write the rate of heat production (viscous dissipation power) relation: $P = F_v \\cdot v_t$.",
      "Substitute Stokes' force into power equation to get $P \\propto r v_t^2$.",
      "Substitute $v_t \\propto r^2$ into power equation to deduce the final radius dependency: $P \\propto r(r^2)^2 \\implies P \\propto r^5$."
    ],
    example: {
      text: "Eight identical liquid drops, each falling with terminal velocity $v$, merge to form a single large drop. Find the terminal velocity of the new drop and the ratio of heat generation rate.",
      solution: "Step 1: Vol of 8 drops = Vol of large drop $\\implies 8 \\times \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi R^3 \\implies R = 2r$.\n\nStep 2: Terminal velocity $v_t \\propto r^2$. So $V_{new} = v \\left(\\frac{R}{r}\\right)^2 = v(2)^2 = 4v$.\n\nStep 3: Heat generation rate $P \\propto r^5$. The ratio is $\\frac{P_{new}}{P_{old}} = \\left(\\frac{R}{r}\\right)^5 = 2^5 = 32$. The total heat rate of 8 separate drops was $8P_{old}$, so the new merged drop produces $32P_{old}$ (4 times the sum of individual rates)."
    },
    proTip: "Remember the power dependencies! Many candidates confuse rate of heat production with force and answer $P \\propto r^3$. Power is $Force \\times Velocity$, which multiplies the radius terms, yielding $r^5$."
  },
  {
    id: 16,
    subject: "physics",
    title: "Photoelectric Work Function & Wavelength Scaling",
    youtubeQuery: "photoelectric+effect+einsteins+equation+stopping+potential",
    desc: "Finding stopping potentials, threshold frequencies, or work functions when the wavelength of incident radiation changes.",
    formulas: [
      "Einstein's Photoelectric Equation: $eV_0 = h\\nu - \\phi = \\frac{hc}{\\lambda} - \\phi$",
      "Wavelength relation: $eV_0 = \\frac{hc}{\\lambda} - \\phi$ and $eV' = \\frac{hc}{\\lambda'} - \\phi$"
    ],
    steps: [
      "Write Einstein's equation for the first case: $eV_0 = \\frac{hc}{\\lambda} - \\phi$.",
      "Write the equation for the second case with new wavelength $\\lambda'$: $eV' = \\frac{hc}{\\lambda'} - \\phi$.",
      "Substitute the value of $\\frac{hc}{\\lambda}$ from the first equation into the second equation.",
      "Simplify to find the inequality or value of $V'$ in terms of $V_0$."
    ],
    example: {
      text: "When light of wavelength $\\lambda$ is incident on a metal, the stopping potential is $V_0$. If the wavelength is doubled to $2\\lambda$, the new stopping potential $V'$ satisfies which relation?",
      solution: "Step 1: $eV_0 = \\frac{hc}{\\lambda} - \\phi \\implies \\frac{hc}{\\lambda} = eV_0 + \\phi$.\n\nStep 2: For $2\\lambda$: $eV' = \\frac{hc}{2\\lambda} - \\phi$.\n\nStep 3: Substitute $\\frac{hc}{\\lambda}$ from Step 1: $eV' = \\frac{1}{2}(eV_0 + \\phi) - \\phi = \\frac{eV_0}{2} - \\frac{\\phi}{2}$.\n\nStep 4: Since work function $\\phi > 0$, the term $-\\frac{\\phi}{2}$ is negative. Therefore, $eV' < \\frac{eV_0}{2} \\implies V' < \\frac{V_0}{2}$."
    },
    proTip: "If options contain numbers, remember that $\\frac{hc}{e} \\approx 1240\\text{ eV}\\cdot\\text{nm}$. This constant allows you to quickly calculate wavelengths in nanometers directly into electron-volts!"
  },
  {
    id: 17,
    subject: "physics",
    title: "Kinematics Graph Translations ($a-t$ to $v-t$)",
    youtubeQuery: "kinematics+graphs+position+velocity+acceleration+time",
    desc: "Deducing velocity-time graphs or calculating maximum velocity from acceleration-time ($a-t$) graphs.",
    formulas: [
      "Acceleration: $a = \\frac{dv}{dt} \\implies$ slope of $v-t$ graph",
      "Velocity change: $\\Delta v = v_f - v_i = \\int a dt \\implies$ Area under $a-t$ graph"
    ],
    steps: [
      "Identify the relationship: acceleration is the derivative of velocity, and velocity is the integral of acceleration.",
      "Write the equation for the acceleration line (e.g. $a = kt$).",
      "Integrate the acceleration equation: $v(t) = \\int a(t) dt$. The degree of the polynomial increases by 1 (e.g., constant $a \\to$ linear $v$; linear $a \\to$ quadratic $v$).",
      "To find the change in velocity, compute the area under the acceleration curve (triangle, rectangle, or trapezoid)."
    ],
    example: {
      text: "A particle starts from rest. Its acceleration increases linearly with time, starting from 0 to $6\\text{ m/s}^2$ in 4 seconds. Find the maximum velocity of the particle.",
      solution: "Step 1: The $a-t$ graph is a triangle starting at $(0,0)$ and ending at $(4,6)$.\n\nStep 2: The change in velocity is equal to the area under this triangle.\n\nStep 3: Area $= \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 4 \\times 6 = 12\\text{ m/s}$.\n\nStep 4: Since it starts from rest ($v_i = 0$), $v_{max} = v_f = 12\\text{ m/s}$."
    },
    proTip: "If acceleration changes sign (crosses the time axis), the area below the axis represents a decrease in velocity. Keep track of positive and negative areas when calculating net velocity."
  },
  {
    id: 18,
    subject: "physics",
    title: "Work-Energy Theorem with Variable Force",
    youtubeQuery: "work+done+by+variable+force+integration",
    desc: "Calculating the work done or changes in kinetic energy when the force acting on a body is a function of position $F(x)$.",
    formulas: [
      "Work Done: $W = \\int_{x_i}^{x_f} F(x) dx$",
      "Work-Energy Theorem: $W = \\Delta KE = \\frac{1}{2}m(v_f^2 - v_i^2)$"
    ],
    steps: [
      "Write down the equation for the variable force $F(x)$.",
      "Set up the integral of the force over the specified limits of position: $\\int_{x_i}^{x_f} F(x) dx$.",
      "Evaluate the integral to find the work done $W$.",
      "Equate this work to the change in kinetic energy: $W = \\frac{1}{2}m v_f^2 - \\frac{1}{2}m v_i^2$.",
      "Solve for the final velocity or energy of the particle."
    ],
    example: {
      text: "A force $F = (3x^2 - 2x)\\text{ N}$ acts on a $2\\text{ kg}$ mass. Find the work done in displacing it from $x=0$ to $x=2\\text{ m}$.",
      solution: "Step 1: Force function is $F = 3x^2 - 2x$.\n\nStep 2: $W = \\int_0^2 (3x^2 - 2x) dx$.\n\nStep 3: Integrate: $\\left[x^3 - x^2\\right]_0^2 = (8 - 4) - 0 = 4\\text{ J}$.\n\nStep 4: Work done is $4\\text{ J}$."
    },
    proTip: "If the force is conservative, you can link it to potential energy: $F = -\\frac{dU}{dx} \\implies W = -\\Delta U = U_i - U_f$."
  },
  {
    id: 19,
    subject: "physics",
    title: "Pulley-Mass Dynamics and Tension",
    youtubeQuery: "pulley+mass+system+tension+and+acceleration",
    desc: "Calculating acceleration and string tension in connected pulley-mass systems.",
    formulas: [
      "Newton's Second Law: $\\sum F = m a$",
      "Acceleration of simple Atwood machine: $a = \\frac{m_1 - m_2}{m_1 + m_2} g$",
      "Tension in simple Atwood machine: $T = \\frac{2m_1m_2}{m_1+m_2} g$"
    ],
    steps: [
      "Draw a free-body diagram (FBD) for each mass, identifying forces (gravity downwards, tension upwards).",
      "Assume a direction of acceleration for the system.",
      "Write Newton's equations for each body: e.g., $m_1g - T = m_1a$ (for descending body) and $T - m_2g = m_2a$ (for ascending body).",
      "Add the equations to eliminate tension $T$ and solve for acceleration $a$.",
      "Substitute $a$ back into one of the FBD equations to find the tension $T$."
    ],
    example: {
      text: "Two masses $4\\text{ kg}$ and $1\\text{ kg}$ are connected by a light string over a frictionless pulley. Find the tension in the string ($g=10\\text{ m/s}^2$).",
      solution: "Step 1: Acceleration $a = \\frac{m_1-m_2}{m_1+m_2}g = \\frac{4-1}{4+1}(10) = 6\\text{ m/s}^2$.\n\nStep 2: Write equation for $1\\text{ kg}$ mass: $T - m_2g = m_2a \\implies T - 1(10) = 1(6)$.\n\nStep 3: Solve for $T$: $T = 10 + 6 = 16\\text{ N}$."
    },
    proTip: "Always check if the pulley itself has mass (rotational inertia). If yes, the tensions on the two sides of the pulley will be different ($T_1 \\neq T_2$), requiring torque equations ($T_1 - T_2)R = I\\alpha$."
  },
  {
    id: 20,
    subject: "physics",
    title: "Thermodynamic Process Slopes (Isothermal vs. Adiabatic)",
    youtubeQuery: "isothermal+vs+adiabatic+slope+p-v+diagram",
    desc: "Comparing the slopes of isothermal and adiabatic curves on a pressure-volume (P-V) indicator diagram.",
    formulas: [
      "Isothermal Process: $PV = \\text{constant} \\implies$ slope $\\frac{dP}{dV} = -\\frac{P}{V}$",
      "Adiabatic Process: $PV^\\gamma = \\text{constant} \\implies$ slope $\\frac{dP}{dV} = -\\gamma \\frac{P}{V}$",
      "Specific Heat Ratio: $\\gamma = \\frac{C_p}{C_v} > 1$"
    ],
    steps: [
      "Differentiate the isothermal equation $PV = C$ with respect to $V$: $P + V\\frac{dP}{dV} = 0 \\implies \\left(\\frac{dP}{dV}\\right)_{iso} = -\\frac{P}{V}$.",
      "Differentiate the adiabatic equation $PV^\\gamma = C$: $P(\\gamma V^{\\gamma-1}) + V^\\gamma \\frac{dP}{dV} = 0 \\implies \\left(\\frac{dP}{dV}\\right)_{adia} = -\\gamma \\frac{P}{V}$.",
      "Compare the two slopes: since $\\gamma > 1$, the adiabatic slope is steeper by a factor of $\\gamma$.",
      "Use this slope relationship to identify process curves on P-V diagrams."
    ],
    example: {
      text: "An ideal gas is expanded to double its volume through two processes: (1) isothermal, and (2) adiabatic. In which process is the final pressure lower?",
      solution: "Step 1: On a P-V diagram starting from the same initial state $(P_i, V_i)$, the adiabatic curve falls more steeply than the isothermal curve because of the factor $\\gamma$.\n\nStep 2: Since the adiabatic curve is steeper, it lies below the isothermal curve during expansion.\n\nStep 3: At the final volume $2V_i$, the pressure on the adiabatic curve will be lower than that on the isothermal curve."
    },
    proTip: "For compression, the steeper curve rises faster, meaning the adiabatic curve will lie *above* the isothermal curve. Be careful about the direction of the process (expansion vs. compression)!"
  },
  {
    id: 21,
    subject: "physics",
    title: "Variation of Gravity with Height and Depth",
    youtubeQuery: "variation+of+gravity+with+height+and+depth",
    desc: "Calculating the value of acceleration due to gravity ($g$) above and below the Earth's surface.",
    formulas: [
      "Height variation (Exact): $g_h = g \\left(\\frac{R_e}{R_e + h}\\right)^2$",
      "Height variation (Approximation for $h \\ll R_e$): $g_h \\approx g \\left(1 - \\frac{2h}{R_e}\\right)$",
      "Depth variation: $g_d = g \\left(1 - \\frac{d}{R_e}\\right)$"
    ],
    steps: [
      "Determine if the problem specifies a small altitude ($h \\ll R_e$) or a large altitude. If small, use the linear approximation.",
      "Write down the formula for height: $g_h = g(1 - 2h/R_e)$.",
      "Write down the formula for depth: $g_d = g(1 - d/R_e)$.",
      "Equate the two formulas or solve for the ratio of $h$ and $d$."
    ],
    example: {
      text: "Find the depth below the Earth's surface where the acceleration due to gravity is the same as that at a height $h = 32\\text{ km}$ above the surface ($R_e = 6400\\text{ km}$).",
      solution: "Step 1: Since $h = 32\\text{ km} \\ll 6400\\text{ km}$, we can use the linear height approximation.\n\nStep 2: $g_h = g(1 - 2h/R_e)$ and $g_d = g(1 - d/R_e)$.\n\nStep 3: Equating both: $1 - 2h/R_e = 1 - d/R_e \\implies d = 2h$.\n\nStep 4: Substitute $h = 32\\text{ km} \\implies d = 2 \\times 32 = 64\\text{ km}$."
    },
    proTip: "If the height $h$ is comparable to the Earth's radius (e.g. $h = R_e$), the approximation $g(1-2h/R_e)$ will fail and give negative values! Always use the exact formula $g_h = g \\frac{R_e^2}{(R_e+h)^2}$ in such cases."
  },
  {
    id: 22,
    subject: "physics",
    title: "Simple Harmonic Motion Energy Positions",
    youtubeQuery: "simple+harmonic+motion+kinetic+and+potential+energy",
    desc: "Finding positions where kinetic energy and potential energy of an oscillating mass satisfy specific ratios.",
    formulas: [
      "Potential Energy: $U = \\frac{1}{2} k x^2 = \\frac{1}{2} m \\omega^2 x^2$",
      "Kinetic Energy: $K = \\frac{1}{2} k (A^2 - x^2) = \\frac{1}{2} m \\omega^2 (A^2 - x^2)$",
      "Total Energy: $E = K + U = \\frac{1}{2} k A^2$"
    ],
    steps: [
      "Write down the expressions for Potential Energy $U$ and Kinetic Energy $K$.",
      "Set up the given condition (e.g., $K = n U$).",
      "Substitute the energy formulas into the condition: $\\frac{1}{2} k (A^2 - x^2) = n \\left(\\frac{1}{2} k x^2\\right)$.",
      "Simplify to eliminate constants: $A^2 - x^2 = n x^2 \\implies A^2 = (n+1)x^2$.",
      "Solve for the displacement $x = \\pm \\frac{A}{\\sqrt{n+1}}$."
    ],
    example: {
      text: "At what displacement from the mean position is the kinetic energy of a simple harmonic oscillator equal to 3 times its potential energy?",
      solution: "Step 1: Condition: $K = 3 U$.\n\nStep 2: Substitute: $A^2 - x^2 = 3 x^2$.\n\nStep 3: Simplify: $A^2 = 4x^2 \\implies x^2 = A^2/4$.\n\nStep 4: Solve: $x = \\pm A/2$."
    },
    proTip: "If the question asks for velocity at a specific displacement, use the energy equation: $v = \\omega \\sqrt{A^2 - x^2}$."
  },
  {
    id: 23,
    subject: "physics",
    title: "Equivalent Focal Length of Lens Combinations",
    youtubeQuery: "focal+length+of+lens+combination+in+contact",
    desc: "Calculating the equivalent focal length and power of two thin lenses placed in contact.",
    formulas: [
      "Power: $P = \\frac{1}{f}$ ($f$ in meters) or $P = \\frac{100}{f}$ ($f$ in cm)",
      "Equivalent Focal Length in Contact: $\\frac{1}{f_{eq}} = \\frac{1}{f_1} + \\frac{1}{f_2}$",
      "Equivalent Power: $P_{eq} = P_1 + P_2$"
    ],
    steps: [
      "Identify the focal lengths of the two lenses. Remember the sign convention: convex lens focal length is positive ($+$), concave lens is negative ($-$).",
      "Set up the equivalent focal length equation: $\\frac{1}{f_{eq}} = \\frac{1}{f_1} + \\frac{1}{f_2}$.",
      "Substitute values, keeping track of signs.",
      "Solve for $f_{eq}$. If $f_{eq} > 0$, the combination behaves as a converging lens (convex). If $f_{eq} < 0$, it behaves as a diverging lens (concave)."
    ],
    example: {
      text: "A convex lens of focal length $20\\text{ cm}$ is placed in contact with a concave lens of focal length $40\\text{ cm}$. Find the equivalent focal length of the combination.",
      solution: "Step 1: Convex lens: $f_1 = +20\\text{ cm}$. Concave lens: $f_2 = -40\\text{ cm}$.\n\nStep 2: $\\frac{1}{f_{eq}} = \\frac{1}{20} + \\frac{1}{-40} = \\frac{1}{20} - \\frac{1}{40}$.\n\nStep 3: $\\frac{1}{f_{eq}} = \\frac{2 - 1}{40} = \\frac{1}{40}$.\n\nStep 4: $f_{eq} = +40\\text{ cm}$ (converging behavior)."
    },
    proTip: "If the lenses are separated by a distance $d$, the formula changes to:\n$$\\frac{1}{f_{eq}} = \\frac{1}{f_1} + \\frac{1}{f_2} - \\frac{d}{f_1 f_2}$$"
  },
  {
    id: 24,
    subject: "physics",
    title: "Buoyancy & Floatation in Multilayer Fluids",
    youtubeQuery: "buoyancy+and+floatation+immiscible+liquids",
    desc: "Calculating the equilibrium position or density of a body floating at the interface of two immiscible liquids.",
    formulas: [
      "Archimedes' Principle: $Buoyant\\ Force = Weight\\ of\\ displaced\\ fluid = V_{displaced} \\cdot \\rho_{fluid} \\cdot g$",
      "Floatation Condition: $Weight\\ of\\ body = Total\\ Buoyant\\ Force$",
      "$$V_{body} \\cdot \\rho_{body} \\cdot g = V_1 \\cdot \\rho_1 \\cdot g + V_2 \\cdot \\rho_2 \\cdot g$$"
    ],
    steps: [
      "Let the total volume of the body be $V$, and its density be $\\rho$.",
      "Let the volume immersed in the lower liquid (density $\\rho_1$) be $V_1$ and in the upper liquid (density $\\rho_2$) be $V_2$. Note that $V = V_1 + V_2$.",
      "Write down the weight of the body: $W = V \\rho g$.",
      "Write down the sum of the buoyant forces from both liquids: $F_B = V_1 \\rho_1 g + V_2 \\rho_2 g$.",
      "Equate $W = F_B$ and simplify to solve for the ratios of volumes or densities."
    ],
    example: {
      text: "A homogeneous solid cylinder of length $L$ floats vertically at the interface of petrol (density $0.8\\text{ g/cm}^3$) and water (density $1.0\\text{ g/cm}^3$) such that $1/4$ of its length is in petrol and $3/4$ is in water. Find the density of the cylinder.",
      solution: "Step 1: Let the cross-sectional area of the cylinder be $A$. Total volume $V = A L$.\n\nStep 2: Vol in petrol $V_1 = A (L/4) = V/4$. Vol in water $V_2 = A (3L/4) = 3V/4$.\n\nStep 3: Weight $= V \\rho g$. Buoyant force $= V_1 \\rho_1 g + V_2 \\rho_2 g = \\frac{V}{4}(0.8)g + \\frac{3V}{4}(1.0)g$.\n\nStep 4: Equating both: $V \\rho g = V g [0.2 + 0.75] \\implies \\rho = 0.95\\text{ g/cm}^3$."
    },
    proTip: "Density of the floating body must be intermediate between the densities of the two liquids. If $\\rho_{body}$ is not between $\\rho_1$ and $\\rho_2$, the body will either sink to the bottom or float completely to the top."
  },

  // ================= CHEMISTRY RECIPES (25 to 33) =================
  {
    id: 25,
    subject: "chemistry",
    title: "Bohr Orbit Radii and Energy Ratios",
    youtubeQuery: "bohr+model+radius+and+energy+ratios",
    desc: "Calculating the orbit radius or energy transition values for Hydrogen and hydrogen-like single-electron ions ($He^+, Li^{2+}$).",
    formulas: [
      "Bohr Radius: $r_n = 0.529 \\times \\frac{n^2}{Z}\\text{ \\AA} \\implies r_n \\propto \\frac{n^2}{Z}$",
      "Bohr Energy: $E_n = -13.6 \\times \\frac{Z^2}{n^2}\\text{ eV} \\implies E_n \\propto \\frac{Z^2}{n^2}$",
      "Hydrogen ($Z=1$), Helium ion ($Z=2$), Lithium ion ($Z=3$)"
    ],
    steps: [
      "Identify the element (determines atomic number $Z$) and the orbits $n$ involved.",
      "Write the proportionality formula based on what is asked (radius or energy).",
      "Set up ratios: e.g., $\\frac{r_A}{r_B} = \\frac{n_A^2}{Z_A} \\times \\frac{Z_B}{n_B^2}$.",
      "Substitute values and solve for the unknown parameter."
    ],
    example: {
      text: "If the radius of the 2nd Bohr orbit of Hydrogen ($Z=1$) is $r_2$, find the radius of the 3rd Bohr orbit of Hydrogen.",
      solution: "Step 1: Element is Hydrogen $\implies Z_1=Z_2=1$. Orbits are $n_1=2$, $n_2=3$.\n\nStep 2: $r_n \\propto n^2$.\n\nStep 3: $\\frac{r_3}{r_2} = \\frac{3^2}{2^2} = \\frac{9}{4}$.\n\nStep 4: $r_3 = \\frac{9}{4}r_2$."
    },
    proTip: "Always double check the atomic number $Z$! Questions often mix orbits of Hydrogen with Helium or Lithium to trick students who only memorize $n^2$ ratios."
  },
  {
    id: 26,
    subject: "chemistry",
    title: "de Broglie Wavelength of Accelerated Electrons",
    youtubeQuery: "de+broglie+wavelength+accelerated+electron",
    desc: "Calculating the wave properties (wavelength $\\lambda$) of an electron accelerated through a voltage potential.",
    formulas: [
      "de Broglie relation: $\\lambda = \\frac{h}{p} = \\frac{h}{\\sqrt{2m_e E}}$",
      "For electron accelerated by voltage $V$: $E = eV$",
      "Simplified Formula: $\\lambda \\approx \\sqrt{\\frac{150}{V}}\\text{ \\AA} = \\frac{12.27}{\\sqrt{V}}\\text{ \\AA} = \\frac{1.227}{\\sqrt{V}}\\text{ nm}$"
    ],
    steps: [
      "Identify the accelerating voltage potential $V$ from the problem.",
      "Recall the simplified relation: $\\lambda = \\frac{12.27}{\\sqrt{V}}\ \text{Å}$.",
      "Compute the square root of the voltage: $\\sqrt{V}$.",
      "Divide 12.27 by $\\sqrt{V}$ to find the wavelength in Angstroms."
    ],
    example: {
      text: "Calculate the de Broglie wavelength of an electron accelerated by a potential difference of $100\\text{ V}$.",
      solution: "Step 1: Given voltage $V = 100\\text{ V}$.\n\nStep 2: Use formula $\\lambda = \\frac{12.27}{\\sqrt{V}}\ \text{Å}$.\n\nStep 3: $\\sqrt{100} = 10$.\n\nStep 4: $\\lambda = \\frac{12.27}{10} = 1.227\\text{ \\AA}$."
    },
    proTip: "Double check the units of the options! The formula $\\frac{12.27}{\\sqrt{V}}$ yields wavelength in Angstroms ($\\text{Å} = 10^{-10}\\text{ m}$). If options are in nanometers, divide the result by 10 (e.g. $1.227\\text{ Å} = 0.1227\\text{ nm}$)."
  },
  {
    id: 27,
    subject: "chemistry",
    title: "VSEPR Molecular Geometry & Hybridization",
    youtubeQuery: "vsepr+theory+hybridization+and+molecular+shapes",
    desc: "Determining the hybridization state of a central atom and the resulting molecular shape.",
    formulas: [
      "Steric Number (SN): $SN = \\frac{1}{2} [V + M - C + A]$",
      "$V$: valence electrons on central atom; $M$: monovalent atoms bonded; $C$: positive charge; $A$: negative charge",
      "SN = 2 ($sp$ - Linear); SN = 3 ($sp^2$ - Trigonal Planar); SN = 4 ($sp^3$ - Tetrahedral); SN = 5 ($sp^3d$ - Trigonal Bipyramidal)"
    ],
    steps: [
      "Identify the central atom and its number of valence electrons $V$ (e.g., $S=6, P=5, Xe=8$).",
      "Count the number of monovalent atoms $M$ (H, F, Cl, Br, I). Divalent atoms like Oxygen are ignored in the $M$ count.",
      "Add/subtract charges to find Steric Number (SN).",
      "Determine hybridization from SN. The number of lone pairs on the central atom is $LP = SN - \\text{number of surrounding atoms}$.",
      "Apply VSEPR to find the shape (e.g., SN = 4, 1 lone pair $\implies$ pyramidal; SN = 5, 1 lone pair $\implies$ see-saw)."
    ],
    example: {
      text: "Determine the hybridization and shape of the $SF_4$ molecule.",
      solution: "Step 1: Central atom is Sulfur ($V=6$). Monovalent atoms $M = 4$ (Fluorine). No charge $\implies SN = \\frac{1}{2}(6 + 4) = 5$.\n\nStep 2: SN = 5 corresponds to $sp^3d$ hybridization.\n\nStep 3: Number of surrounding atoms is 4. Lone pairs $LP = 5 - 4 = 1$.\n\nStep 4: A trigonal bipyramidal geometry with 1 lone pair (in the equatorial position) gives a see-saw shape."
    },
    proTip: "Memorize the shape table for SN = 5:\n- 0 lone pairs: Trigonal Bipyramidal ($PCl_5$)\n- 1 lone pair: See-saw ($SF_4$)\n- 2 lone pairs: T-shape ($ClF_3$)\n- 3 lone pairs: Linear ($XeF_2$)"
  },
  {
    id: 28,
    subject: "chemistry",
    title: "Le Chatelier's Principle & Equilibrium Shifts",
    youtubeQuery: "le+chateliers+principle+chemical+equilibrium",
    desc: "Predicting the shift in direction of a chemical equilibrium under changes in pressure, volume, temperature, or concentration.",
    formulas: [
      "Vant Hoff Equation: endothermic reactions favor products at high temperature; exothermic reactions favor products at low temperature.",
      "Pressure rule: increasing pressure shifts equilibrium towards the side with fewer gas moles (lower $\\Delta n_g$)."
    ],
    steps: [
      "Write down the balanced chemical equation and calculate $\\Delta n_g = \\sum n_{g,products} - \\sum n_{g,reactants}$.",
      "Check the sign of enthalpy change $\\Delta H$ (exothermic if $<0$, endothermic if $>0$).",
      "If pressure increases (or volume decreases), shift the reaction towards the side with fewer gas molecules.",
      "If temperature increases, shift the reaction in the endothermic direction (which absorbs heat)."
    ],
    example: {
      text: "Predict the effect of increasing pressure on the equilibrium: $PCl_5(g) \\rightleftharpoons PCl_3(g) + Cl_2(g)$.",
      solution: "Step 1: Reactant gas moles $= 1$, product gas moles $= 1 + 1 = 2 \\implies \\Delta n_g = 2 - 1 = +1$.\n\nStep 2: Increasing pressure shifts the equilibrium to the side with fewer gas moles.\n\nStep 3: The reactant side ($PCl_5$) has 1 mole, while the product side has 2 moles.\n\nStep 4: The equilibrium will shift to the left (backward direction), decreasing the dissociation of $PCl_5$."
    },
    proTip: "Adding an inert gas at constant volume has no effect on the equilibrium. Adding it at constant pressure behaves like increasing the volume, shifting the reaction to the side with more gas moles."
  },
  {
    id: 29,
    subject: "chemistry",
    title: "Solubility Product ($K_{sp}$) & Molarity",
    youtubeQuery: "solubility+product+ksp+calculations",
    desc: "Calculating the solubility product constant ($K_{sp}$) of a sparingly soluble salt from its solubility (and vice-versa).",
    formulas: [
      "Binary Salt $AB \\rightleftharpoons A^+ + B^- \\implies K_{sp} = S^2$",
      "Ternary Salt $AB_2 \\rightleftharpoons A^{2+} + 2B^- \\implies K_{sp} = S(2S)^2 = 4S^3$",
      "Salt $A_x B_y \\rightleftharpoons xA^{y+} + yB^{x-} \\implies K_{sp} = (xS)^x (yS)^y = x^x y^y S^{x+y}$"
    ],
    steps: [
      "Identify the type of salt and write its dissociation equation.",
      "Express the ionic concentrations in terms of the solubility $S$ (in mol/L).",
      "If the solubility is given in g/L, convert it to mol/L: $S(\\text{mol/L}) = \\frac{S(\\text{g/L})}{\\text{Molar Mass}}$.",
      "Substitute $S$ into the corresponding $K_{sp}$ equation."
    ],
    example: {
      text: "The solubility of $PbI_2$ in water is $0.461\\text{ g/L}$ (molar mass $= 461\\text{ g/mol}$). Find its $K_{sp}$.",
      solution: "Step 1: Convert solubility to mol/L: $S = \\frac{0.461}{461} = 10^{-3}\\text{ mol/L}$.\n\nStep 2: Dissociation: $PbI_2 \\rightleftharpoons Pb^{2+} + 2I^- \\implies [Pb^{2+}]=S$, $[I^-]=2S$.\n\nStep 3: $K_{sp} = [Pb^{2+}][I^-]^2 = S(2S)^2 = 4S^3$.\n\nStep 4: Substitute $S = 10^{-3} \\implies K_{sp} = 4(10^{-3})^3 = 4 \\times 10^{-9}$."
    },
    proTip: "Make sure to convert solubility to moles/liter before calculating $K_{sp}$. Exam papers frequently give the solubility in g/L or mg/L as a trap."
  },
  {
    id: 30,
    subject: "chemistry",
    title: "Qualitative Organic Tests (Tollens' and Iodoform)",
    youtubeQuery: "tollens+test+alkynes+iodoform+test",
    desc: "Identifying organic functional groups (terminal alkynes, methyl ketones, alcohols) using specific chemical reagents.",
    formulas: [
      "Tollens' Test: terminal alkynes ($R-C\\equiv CH$) react with $[Ag(NH_3)_2]^+OH^-$ to give a white precipitate.",
      "Iodoform Test: compounds containing $CH_3-CO-$ or $CH_3-CH(OH)-$ groups react with $I_2 + NaOH$ to give a yellow precipitate of $CHI_3$."
    ],
    steps: [
      "Identify the functional groups present in the given options.",
      "Check for Tollens' active groups: only terminal alkynes (e.g. propyne) or aldehydes contain the active hydrogen required for Tollens' reaction.",
      "Check for Iodoform active groups: look for methyl ketones ($CH_3-CO-R$) or secondary methyl alcohols ($CH_3-CH(OH)-R$).",
      "Correlate the observed reactions to identify the correct compound."
    ],
    example: {
      text: "Which of the following compounds will give a positive iodoform test?",
      options: [
        "Pentan-2-one",
        "Pentan-3-one",
        "Methanol",
        "Benzaldehyde"
      ],
      solution: "Step 1: Pentan-2-one is $CH_3-CO-CH_2-CH_2-CH_3$. It contains the methyl ketone group ($CH_3-CO-$).\n\nStep 2: Pentan-3-one is $CH_3-CH_2-CO-CH_2-CH_3$ (no methyl ketone group).\n\nStep 3: Methanol is $CH_3-OH$ (no active methyl group next to OH).\n\nStep 4: Pentan-2-one will react with $I_2/NaOH$ to give a yellow precipitate of iodoform ($CHI_3$)."
    },
    proTip: "The iodoform test is also positive for ethanol ($CH_3CH_2OH$) and acetaldehyde ($CH_3CHO$) because they are easily oxidized in-situ by the basic iodine solution to form the active methyl carbonyl intermediate."
  },
  {
    id: 31,
    subject: "chemistry",
    title: "Electrochemical Cell Potential (Nernst Equation)",
    youtubeQuery: "nernst+equation+cell+potential+electrochemistry",
    desc: "Calculating the EMF of a chemical cell under non-standard ion concentrations.",
    formulas: [
      "Nernst Equation: $E_{cell} = E^0_{cell} - \\frac{0.0591}{n}\\log_{10} Q$",
      "Reaction Quotient: $Q = \\frac{[Products]^{coefficients}}{[Reactants]^{coefficients}}$"
    ],
    steps: [
      "Write down the balanced redox cell reaction and determine the number of transferred electrons $n$.",
      "Calculate the standard cell potential: $E^0_{cell} = E^0_{cathode} - E^0_{anode}$ (using standard reduction potentials).",
      "Express the reaction quotient $Q$ in terms of the concentration of active ions.",
      "Substitute $n$, $E^0_{cell}$, and $Q$ into the Nernst equation to compute the final EMF."
    ],
    example: {
      text: "For the cell $Zn | Zn^{2+}(0.1M) || Cu^{2+}(1.0M) | Cu$, find the cell potential at $298\\text{ K}$ ($E^0_{cell} = 1.10\\text{ V}$).",
      solution: "Step 1: Cell reaction: $Zn(s) + Cu^{2+}(aq) \\rightleftharpoons Zn^{2+}(aq) + Cu(s)$. Number of electrons $n = 2$.\n\nStep 2: $Q = \\frac{[Zn^{2+}]}{[Cu^{2+}]} = \\frac{0.1}{1.0} = 0.1 = 10^{-1}$.\n\nStep 3: Nernst: $E = 1.10 - \\frac{0.059}{2}\\log_{10}(10^{-1}) = 1.10 - (0.0295)(-1)$.\n\nStep 4: $E = 1.10 + 0.0295 = 1.1295\\text{ V}$."
    },
    proTip: "To increase cell potential, you must reduce the reaction quotient $Q$. Thus, increasing the reactant concentration ($Cu^{2+}$) or decreasing the product concentration ($Zn^{2+}$) will increase the EMF."
  },
  {
    id: 32,
    subject: "chemistry",
    title: "Acidic Strength of Chlorine Oxyacids",
    youtubeQuery: "acidic+strength+order+of+chlorine+oxyacids",
    desc: "Comparing the relative acidic strengths of a series of oxyacids of the same non-metal.",
    formulas: [
      "Rule: Acidic strength of oxyacids increases with the oxidation state of the central atom.",
      "Oxyacids of Chlorine: $HClO_4 > HClO_3 > HClO_2 > HClO$"
    ],
    steps: [
      "Identify the central atom and calculate its oxidation state in each oxyacid.",
      "Alternatively, count the number of oxygen atoms bonded to the central atom: more oxygen atoms lead to greater electron-withdrawing effect, stabilizing the conjugate base anion.",
      "Arrange the acids in increasing order of oxidation states to determine the acidic strength."
    ],
    example: {
      text: "Explain the order of acidic strength: $HClO_4 > HClO_3 > HClO_2 > HClO$.",
      solution: "Step 1: Calculate oxidation states of Chlorine:\n- In $HClO$: $+1$\n- In $HClO_2$: $+3$\n- In $HClO_3$: $+5$\n- In $HClO_4$: $+7$\n\nStep 2: Higher oxidation state increases the electron density withdrawal from the $O-H$ bond, making it easier to release the $H^+$ proton.\n\nStep 3: The conjugate base $ClO_4^-$ is highly stabilized by resonance of negative charge over four oxygen atoms compared to $ClO^-$."
    },
    proTip: "For oxyacids of different elements in the same group with the same oxidation state (e.g. $HClO_4, HBrO_4, HIO_4$), the acidic strength increases with the electronegativity of the central atom: $HClO_4 > HBrO_4 > HIO_4$."
  },
  {
    id: 33,
    subject: "chemistry",
    title: "Stoichiometry & Mole Concept Calculations",
    youtubeQuery: "stoichiometry+and+mole+concept+calculations",
    desc: "Calculating masses or volumes of reactants and products in chemical reactions using the mole concept.",
    formulas: [
      "Moles: $n = \\frac{\\text{Mass (g)}}{\\text{Molar Mass}}$",
      "Gas Moles at STP: $n = \\frac{\\text{Volume (L)}}{22.4}$",
      "Molarity: $M = \\frac{\\text{Moles}}{\\text{Volume of solution (L)}}$"
    ],
    steps: [
      "Write down the balanced chemical equation representing the reaction.",
      "Convert the given quantity of reactant/product into moles.",
      "Use the stoichiometric coefficients of the balanced equation to find the required moles of the target substance.",
      "Convert these target moles back into the requested unit (mass, volume at STP, or concentration)."
    ],
    example: {
      text: "How many grams of $CaCO_3$ are required to produce $5.6\\text{ L}$ of $CO_2$ gas at STP upon thermal decomposition?",
      solution: "Step 1: Balanced reaction: $CaCO_3(s) \\xrightarrow{\\Delta} CaO(s) + CO_2(g)$.\n\nStep 2: Moles of $CO_2$ produced $= \\frac{5.6}{22.4} = 0.25\\text{ mol}$.\n\nStep 3: From stoichiometry, 1 mole of $CaCO_3$ yields 1 mole of $CO_2$. So moles of $CaCO_3$ required $= 0.25\\text{ mol}$.\n\nStep 4: Molar mass of $CaCO_3 = 40 + 12 + 48 = 100\\text{ g/mol}$. Mass required $= 0.25 \\times 100 = 25\\text{ g}$."
    },
    proTip: "Always check if the reaction is balanced! Unbalanced equations are the most common source of errors in stoichiometry questions."
  },

  // ================= ELECTRICAL & ELECTRONICS RECIPES (34 to 40) =================
  {
    id: 34,
    subject: "electrical",
    title: "Node Voltage Analysis (Nodal Network Equations)",
    youtubeQuery: "nodal+analysis+dc+circuits+kcl",
    desc: "Solving for unknown node voltages and branch currents in a multi-source DC network using Kirchhoff's Current Law (KCL).",
    formulas: [
      "Kirchhoff's Current Law (KCL): $\\sum I_{outgoing} = 0$",
      "Branch Current (Ohm's Law): $I = \\frac{V_{node} - V_{source}}{R}$"
    ],
    steps: [
      "Identify all essential nodes in the circuit and choose one as the reference node (Ground $= 0\\text{ V}$).",
      "Assign variable names (like $V_a$, $V_b$) to the remaining non-reference nodes.",
      "Write a KCL equation for each node: sum the currents leaving the node through all connected branches.",
      "Express branch currents using voltages: $I = \\frac{V_{node} - V_{connected}}{R}$. Ensure signs of sources are correct (subtract positive terminals, add negative terminals).",
      "Solve the linear system of equations for the node voltages."
    ],
    example: {
      text: "A node $V_a$ is connected to a $12\\text{ V}$ battery via a $2\\ \\Omega$ resistor, to a $2\\text{ V}$ battery via a $1\\ \\Omega$ resistor, and to ground via a $2\\ \\Omega$ resistor. Find $V_a$.",
      solution: "Step 1: Reference ground is $0\\text{ V}$. Node of interest is $V_a$.\n\nStep 2: Write KCL at node $V_a$: $I_1 + I_2 + I_3 = 0$.\n\nStep 3: Express currents: $\\frac{V_a - 12}{2} + \\frac{V_a - 2}{1} + \\frac{V_a - 0}{2} = 0$.\n\nStep 4: Multiply by 2: $(V_a - 12) + 2(V_a - 2) + V_a = 0$.\n\nStep 5: Simplify: $V_a - 12 + 2V_a - 4 + V_a = 0 \\implies 4V_a = 16 \\implies V_a = 4\\text{ V}$."
    },
    proTip: "When writing KCL equations, always assume the node you are at is at the highest potential. This ensures all currents are written as outgoing (e.g. $V_a - V_{other}$), which reduces sign errors."
  },
  {
    id: 35,
    subject: "electrical",
    title: "Equivalent Referred Impedance in Transformers",
    youtubeQuery: "transformer+referred+resistance+and+impedance",
    desc: "Reflecting resistances, reactances, or impedances from the secondary winding to the primary winding (or vice-versa) in a transformer.",
    formulas: [
      "Transformation Ratio: $a = \\frac{N_1}{N_2} = \\frac{V_1}{V_2}$",
      "Referred Resistance: $R'_2 = a^2 R_2$",
      "Referred Reactance: $X'_2 = a^2 X_2$",
      "Equivalent Resistance referred to Primary: $R_{e1} = R_1 + R'_2 = R_1 + a^2 R_2$"
    ],
    steps: [
      "Find the transformation ratio $a = V_1/V_2$ or $N_1/N_2$. Ensure it is primary turns divided by secondary turns if referring to primary.",
      "Identify the secondary resistance $R_2$ or reactance $X_2$.",
      "Reflect the secondary value to the primary side by multiplying by $a^2$: $R'_2 = a^2 R_2$.",
      "Add the primary winding resistance $R_1$ to find the total equivalent resistance: $R_{e1} = R_1 + R'_2$."
    ],
    example: {
      text: "A $230/115\\text{ V}$ single-phase transformer has $R_1 = 0.5\\ \\Omega$ and $R_2 = 0.1\\ \\Omega$. Find the equivalent resistance referred to the primary side.",
      solution: "Step 1: Calculate $a = \\frac{230}{115} = 2$.\n\nStep 2: Secondary resistance $R_2 = 0.1\\ \\Omega$, primary resistance $R_1 = 0.5\\ \\Omega$.\n\nStep 3: Reflect secondary resistance: $R'_2 = a^2 R_2 = 2^2 \\times 0.1 = 0.4\\ \\Omega$.\n\nStep 4: Sum equivalent primary resistance: $R_{e1} = R_1 + R'_2 = 0.5 + 0.4 = 0.9\\ \\Omega$."
    },
    proTip: "Remember the golden rule of impedance reflection: 'High-voltage side has higher impedance.' If you refer impedance from low-voltage side to high-voltage side, the value must increase (multiply by $a^2$). If going from high to low, it must decrease (divide by $a^2$)."
  },
  {
    id: 36,
    subject: "electrical",
    title: "Boolean Gate Logic Simplification",
    youtubeQuery: "boolean+algebra+simplification+logic+gates",
    desc: "Simplifying digital circuits or expressions using Boolean laws to find the minimum equivalent gate implementation.",
    formulas: [
      "De Morgan's Laws: $\\overline{A + B} = \\bar{A} \\cdot \\bar{B}$ and $\\overline{A \\cdot B} = \\bar{A} + \\bar{B}$",
      "Absorption Laws: $A + AB = A$, and $A + \\bar{A}B = A + B$",
      "Identity / Redundancy: $A + 1 = 1$, $A \\cdot 0 = 0$, $A + \\bar{A} = 1$, $A \\cdot \\bar{A} = 0$"
    ],
    steps: [
      "Write down the Boolean expression represented by the gate outputs or circuit path.",
      "Apply distributive law to expand brackets: $A(B+C) = AB + AC$.",
      "Look for terms containing the same variables to apply absorption laws ($A + AB = A$).",
      "Use De Morgan's laws to break large inversion bars.",
      "Simplify terms to find the final reduced expression, and map it to its standard gate symbol."
    ],
    example: {
      text: "Simplify the Boolean logic expression: $Y = AB + A(B + C) + B(B + C)$.",
      solution: "Step 1: Expand brackets $\implies Y = AB + AB + AC + BB + BC$.\n\nStep 2: Apply redundancy ($AB + AB = AB$, $BB = B$) $\implies Y = AB + AC + B + BC$.\n\nStep 3: Group terms containing $B$ $\implies Y = B(A + 1 + C) + AC$.\n\nStep 4: Apply identity ($A + 1 + C = 1$) $\implies Y = B(1) + AC = B + AC$."
    },
    proTip: "Always watch out for $A + \\bar{A}B$. It simplifies instantly to $A + B$. This is the single most common boolean simplification trick used in competitive exams to test alert candidates."
  },
  {
    id: 37,
    subject: "electrical",
    title: "RMS Value of Composite AC/DC Wave Signals",
    youtubeQuery: "rms+value+of+composite+ac+dc+signal",
    desc: "Calculating the root-mean-square value of a periodic voltage or current signal containing a DC offset and AC harmonics.",
    formulas: [
      "Composite Signal: $v(t) = V_0 + V_1\\sin(\\omega t + \\phi_1) + V_2\\sin(2\\omega t + \\phi_2) + \\dots$",
      "RMS value: $V_{rms} = \\sqrt{V_0^2 + \\frac{V_1^2 + V_2^2 + \\dots}{2}}$"
    ],
    steps: [
      "Identify the DC component (constant offset term $V_0$) from the signal expression.",
      "Identify the peak amplitudes of the AC sinusoidal components ($V_1, V_2$, etc.).",
      "Write down the composite RMS formula.",
      "Square the DC term: $V_0^2$.",
      "Square the AC peak values, divide by 2, and add to the squared DC term.",
      "Compute the square root of the final sum."
    ],
    example: {
      text: "Find the RMS value of the current: $i(t) = 5 + 10\\sin(314t)\\text{ A}$.",
      solution: "Step 1: DC component $I_0 = 5\\text{ A}$. AC component peak $I_m = 10\\text{ A}$.\n\nStep 2: Apply formula: $I_{rms} = \\sqrt{I_0^2 + \\frac{I_m^2}{2}}$.\n\nStep 3: Calculate values: $I_{rms} = \\sqrt{5^2 + \\frac{10^2}{2}} = \\sqrt{25 + \\frac{100}{2}} = \\sqrt{25 + 50} = \\sqrt{75}$.\n\nStep 4: Simplify: $I_{rms} = 5\\sqrt{3} \\approx 8.66\\text{ A}$."
    },
    proTip: "This formula only applies if the AC components are orthogonal (different frequencies). If you have two sine waves of the *same* frequency, you must first combine them using phasor addition before finding the RMS value."
  },
  {
    id: 38,
    subject: "electrical",
    title: "Operational Amplifier Output Calculations",
    youtubeQuery: "operational+amplifier+inverting+and+non+inverting+gain",
    desc: "Finding the output voltage ($V_0$) of an ideal Op-Amp under inverting or non-inverting configurations.",
    formulas: [
      "Inverting Configuration: $V_0 = -\\frac{R_f}{R_1} V_{in}$",
      "Non-Inverting Configuration: $V_0 = \\left(1 + \\frac{R_f}{R_1}\\right) V_{in}$",
      "Virtual Ground Concept: $V_+ = V_-$ for negative feedback systems"
    ],
    steps: [
      "Identify if the input signal $V_{in}$ is connected to the inverting input ($-$) or non-inverting input ($+$).",
      "Identify the feedback resistor $R_f$ and the input resistor $R_1$.",
      "Apply the corresponding gain equation.",
      "For complex circuits, apply the Virtual Ground concept: $V_- = V_+$, then write nodal KCL at the inverting node ($-$) to solve for $V_0$."
    ],
    example: {
      text: "An ideal Op-Amp has $R_f = 100\\text{ k}\\Omega$, $R_1 = 10\\text{ k}\\Omega$. If $V_{in} = -0.25\text{ V}$ is connected to the inverting input terminal, find the output voltage $V_0$.",
      solution: "Step 1: Configuration is inverting since input is at the ($-$) terminal.\n\nStep 2: $R_f = 100\\text{ k}\\Omega$, $R_1 = 10\\text{ k}\\Omega$.\n\nStep 3: Gain $A_v = -\\frac{R_f}{R_1} = -\\frac{100}{10} = -10$.\n\nStep 4: Output $V_0 = A_v \\times V_{in} = -10 \\times (-0.25) = +2.5\\text{ V}$."
    },
    proTip: "Always check the power supply saturation limits ($V_{cc}$ and $-V_{ee}$) if given! An Op-Amp output cannot exceed its supply voltages. If the calculated $V_0$ is $+15\text{ V}$ but $V_{cc}$ is $+12\text{ V}$, the actual output will clip at $+12\text{ V}$."
  },
  {
    id: 39,
    subject: "electrical",
    title: "Diode Conduction States & Logic Levels",
    youtubeQuery: "diode+circuit+conduction+states+rectifier",
    desc: "Determining whether diodes in a circuit are forward-biased (conducting) or reverse-biased (blocking) and calculating output voltages.",
    formulas: [
      "Ideal Diode: behaves as a short circuit (ON) if forward-biased ($V_A > V_C$), and open circuit (OFF) if reverse-biased ($V_A < V_C$)."
    ],
    steps: [
      "Assume a conduction state for the diode (e.g., ON or OFF).",
      "If you assume the diode is ON, replace it with a short circuit (or a $0.7\text{ V}$ drop for Silicon).",
      "Calculate the current flowing from anode to cathode ($I_{AK}$). If $I_{AK} > 0$, your assumption is correct. If $I_{AK} < 0$, the diode is actually OFF.",
      "If you assume the diode is OFF, replace it with an open circuit.",
      "Calculate the voltage across the open terminals ($V_{AK}$). If $V_{AK} < 0.7\text{ V}$, your assumption is correct. If $V_{AK} \\ge 0.7\text{ V}$, the diode is actually ON."
    ],
    example: {
      text: "A diode anode is connected to a $+5\\text{ V}$ source through a $1\\text{ k}\\Omega$ resistor. The cathode is connected directly to $+2\\text{ V}$. Find the current flowing through the ideal diode.",
      solution: "Step 1: Assume diode is ON (since anode is connected to higher $+5\text{ V}$ than cathode $+2\text{ V}$).\n\nStep 2: Replace diode with short circuit. Anode voltage $V_A = V_C = +2\\text{ V}$.\n\nStep 3: Calculate current through the $1\\text{ k}\\Omega$ resistor: $I = \\frac{5 - V_A}{R} = \\frac{5 - 2}{1000} = 3\\text{ mA}$.\n\nStep 4: Since $I > 0$ flows from anode to cathode, the ON assumption is correct. Current is $3\\text{ mA}$."
    },
    proTip: "In multi-diode circuits (like OR/AND gates), assume only one diode conducts (the one with the largest forward bias potential) and solve. Then verify that the other diode stays reverse-biased under the resulting node voltages."
  },
  {
    id: 40,
    subject: "electrical",
    title: "DC Motor Speed and Torque Relations",
    youtubeQuery: "dc+motor+speed+and+torque+equations",
    desc: "Calculating the variations in torque or speed of DC motors under changes in armature currents or load.",
    formulas: [
      "Armature Back EMF: $E_b = V - I_a R_a = \\frac{\\Phi Z N P}{60 A} \\implies N \\propto \\frac{E_b}{\\Phi}$",
      "Electromagnetic Torque: $T = \\frac{\\Phi Z I_a P}{2\\pi A} \\implies T \\propto \\Phi I_a$"
    ],
    steps: [
      "Identify the type of DC motor: shunt motor (constant flux $\\Phi$) or series motor (flux proportional to current $\\Phi \\propto I_a$).",
      "Write down the torque relation: $T \\propto I_a$ (shunt) or $T \\propto I_a^2$ (series).",
      "Write down the speed relation: $N \\propto E_b$ (shunt).",
      "If load changes, set up ratios to compute the new current or torque values: e.g. $\\frac{T_1}{T_2} = \\frac{I_{a1}}{I_{a2}}$."
    ],
    example: {
      text: "A DC shunt motor develops a torque of $120\\text{ Nm}$ at a speed of $20\\text{ rps}$. If it is connected to a load requiring constant power, find the torque developed at a speed of $30\\text{ rps}$.",
      solution: "Step 1: Power $P = T \\cdot \\omega = 2\\pi N T$. For constant power, $T_1 N_1 = T_2 N_2$.\n\nStep 2: Given $T_1 = 120\\text{ Nm}$, $N_1 = 20\\text{ rps}$ and $N_2 = 30\\text{ rps}$.\n\nStep 3: $120 \\times 20 = T_2 \\times 30$.\n\nStep 4: $T_2 = \\frac{2400}{30} = 80\\text{ Nm}$."
    },
    proTip: "Shunt motors are constant-speed motors. Series motors are variable-speed motors. Never start a DC series motor on no-load, as the low armature current makes flux $\\Phi \\to 0$, causing speed $N \\propto 1/\\Phi$ to run away to dangerous values!"
  },
  {
    id: 41,
    subject: "mathematics",
    title: "Internal and External Section Formula",
    youtubeQuery: "section+formula+internal+and+external+division+coordinate+geometry",
    desc: "Finding coordinates of a point that divides the line segment joining two given points in a specified ratio $m:n$ internally or externally.",
    formulas: [
      "Internal Division: $P(x, y) = \\left( \\frac{mx_2 + nx_1}{m+n}, \\frac{my_2 + ny_1}{m+n} \\right)$",
      "External Division: $P(x, y) = \\left( \\frac{mx_2 - nx_1}{m-n}, \\frac{my_2 - ny_1}{m-n} \\right)$",
      "Midpoint: $M = \\left( \\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2} \\right)$"
    ],
    steps: [
      "Identify the coordinates of the endpoints $(x_1, y_1)$ and $(x_2, y_2)$.",
      "Determine the division ratio $m:n$ and whether it is internal or external.",
      "Substitute coordinates and ratios into the appropriate division formula.",
      "Simplify the arithmetic expressions to obtain the final coordinate pair $(x, y)$."
    ],
    example: {
      text: "Find the coordinates of the point that divides the line segment joining $A(1, -2)$ and $B(4, 7)$ externally in the ratio $2:1$.",
      solution: "Step 1: Coordinates are $(x_1, y_1) = (1, -2)$ and $(x_2, y_2) = (4, 7)$. Ratio $m=2, n=1$.\n\nStep 2: External division formula: $x = \\frac{mx_2 - nx_1}{m-n}$ and $y = \\frac{my_2 - ny_1}{m-n}$.\n\nStep 3: Calculate $x = \\frac{2(4) - 1(1)}{2-1} = \\frac{8-1}{1} = 7$.\n\nStep 4: Calculate $y = \\frac{2(7) - 1(-2)}{2-1} = \\frac{14+2}{1} = 16$.\n\nThe coordinates are $(7, 16)$."
    },
    proTip: "If a question asks for the ratio in which a line or axis divides a segment, assume the ratio is $k:1$. Solve for $k$ using the coordinate that must be zero (e.g. $y=0$ for X-axis, $x=0$ for Y-axis). If $k > 0$, the division is internal; if $k < 0$, it is external."
  },
  {
    id: 42,
    subject: "mathematics",
    title: "Perpendicular Distance and Parallel Lines",
    youtubeQuery: "perpendicular+distance+from+point+to+line+slope+intercept+form",
    desc: "Calculating the perpendicular distance from a point $(x_1, y_1)$ to a line $Ax+By+C=0$ and finding the distance between two parallel lines.",
    formulas: [
      "Perpendicular distance: $d = \\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}}$",
      "Distance between parallel lines $Ax+By+C_1=0$ and $Ax+By+C_2=0$: $d = \\frac{|C_1 - C_2|}{\\sqrt{A^2 + B^2}}$",
      "Angle between lines: $\\tan\\theta = \\left|\\frac{m_1 - m_2}{1 + m_1m_2}\\right|$"
    ],
    steps: [
      "For a point to a line: rearrange the line equation into standard form $Ax + By + C = 0$.",
      "Substitute the point $(x_1, y_1)$ into the expression $|Ax_1 + By_1 + C|$ in the numerator.",
      "Divide by $\\sqrt{A^2 + B^2}$ to find the distance.",
      "For parallel lines: ensure both line equations have identical coefficients for $x$ and $y$ (multiply or divide one equation if necessary) before using the $|C_1 - C_2|$ formula."
    ],
    example: {
      text: "Find the distance between the parallel lines $3x - 4y + 7 = 0$ and $6x - 8y + 4 = 0$.",
      solution: "Step 1: Make $x$ and $y$ coefficients identical. Divide the second equation by 2 $\\implies 3x - 4y + 2 = 0$.\n\nStep 2: Identify $A=3, B=-4, C_1=7, C_2=2$.\n\nStep 3: Distance formula: $d = \\frac{|C_1 - C_2|}{\\sqrt{A^2 + B^2}} = \\frac{|7 - 2|}{\\sqrt{3^2 + (-4)^2}} = \\frac{5}{\\sqrt{9+16}} = \\frac{5}{5} = 1$.\n\nThe distance is 1 unit."
    },
    proTip: "Parallel lines always have identical slopes ($m_1 = m_2$). Perpendicular lines have slopes satisfying $m_1 \\cdot m_2 = -1$. Use this relationship to instantly find the slope of a line perpendicular to a given line."
  },
  {
    id: 43,
    subject: "physics",
    title: "First Law and Thermodynamic Work",
    youtubeQuery: "first+law+of+thermodynamics+work+done+isothermal+adiabatic+isobaric",
    desc: "Calculating heat ($\\Delta Q$), work ($W$), and internal energy change ($\\Delta U$) using the First Law of Thermodynamics for different processes.",
    formulas: [
      "First Law: $\\Delta Q = \\Delta U + W$",
      "Change in Internal Energy: $\\Delta U = n C_v \\Delta T$ (process-independent, depending only on temperature change)",
      "Isobaric Work ($P=\\text{const}$): $W = P(V_f - V_i) = nR\\Delta T$",
      "Isochoric Work ($V=\\text{const}$): $W = 0 \\implies \\Delta Q = \\Delta U$",
      "Isothermal Work ($T=\\text{const}$): $W = nRT \\ln(V_f/V_i) = nRT \\ln(P_i/P_f)$",
      "Adiabatic Work ($\\Delta Q=0$): $W = -\\Delta U = \\frac{nR(T_i - T_f)}{\\gamma - 1} = \\frac{P_i V_i - P_f V_f}{\\gamma - 1}$"
    ],
    steps: [
      "Identify the thermodynamic process type (isothermal, isobaric, isochoric, or adiabatic).",
      "Determine which quantities ($\\Delta Q$, $W$, or temperature change) are given.",
      "Calculate the work done $W$ using the process-specific formula.",
      "Apply the First Law of Thermodynamics equation: $\\Delta Q = \\Delta U + W$.",
      "Solve for the remaining unknown parameter."
    ],
    example: {
      text: "An ideal gas absorbs $500\\text{ J}$ of heat and expands doing $200\\text{ J}$ of work. Find the change in its internal energy.",
      solution: "Step 1: Given heat added $\\Delta Q = +500\\text{ J}$ and work done by the gas $W = +200\\text{ J}$.\n\nStep 2: Apply the First Law: $\\Delta Q = \\Delta U + W$.\n\nStep 3: Rearrange: $\\Delta U = \\Delta Q - W = 500\\text{ J} - 200\\text{ J} = 300\\text{ J}$.\n\nThe internal energy increases by $300\\text{ J}$."
    },
    proTip: "Keep strict track of signs! Heat absorbed is $+Q$, heat released is $-Q$. Work done by the gas (expansion) is $+W$, work done on the gas (compression) is $-W$."
  },
  {
    id: 44,
    subject: "chemistry",
    title: "Boiling Point Elevation & Freezing Point Depression",
    youtubeQuery: "elevation+in+boiling+point+depression+in+freezing+point+colligative+properties",
    desc: "Calculating the boiling point elevation ($\\Delta T_b$) and freezing point depression ($\\Delta T_f$) of solutions including electrolyte dissociation using the van 't Hoff factor ($i$).",
    formulas: [
      "Boiling Point Elevation: $\\Delta T_b = i \\cdot K_b \\cdot m$",
      "Freezing Point Depression: $\\Delta T_f = i \\cdot K_f \\cdot m$",
      "Molality ($m$): $m = \\frac{\\text{moles of solute}}{\\text{mass of solvent in kg}}$",
      "van 't Hoff factor ($i$): $i = 1 + (n-1)\\alpha$ (where $n$ is number of ions per formula unit, and $\\alpha$ is degree of dissociation)"
    ],
    steps: [
      "Identify the solute. Determine if it is a non-electrolyte ($i=1$) or an electrolyte ($i > 1$, e.g. $NaCl \\to n=2$, $BaCl_2 \\to n=3$).",
      "Compute the van 't Hoff factor $i$ using $i = 1 + (n-1)\\alpha$. For complete dissociation, $\\alpha = 1 \\implies i = n$.",
      "Calculate the molality $m$ of the solution: $\\text{moles of solute}/\\text{kg of solvent}$.",
      "Calculate $\\Delta T_b$ or $\\Delta T_f$ by multiplying $i \\cdot K \\cdot m$.",
      "Obtain final values: new boiling point $= T_{pure} + \\Delta T_b$; new freezing point $= T_{pure} - \\Delta T_f$."
    ],
    example: {
      text: "Calculate the freezing point of a $0.1\\text{ m}$ aqueous solution of $NaCl$ assuming complete dissociation ($K_f = 1.86\\text{ K}\\cdot\\text{kg/mol}$, pure water freezing point is $0^\\circ\\text{C}$).",
      solution: "Step 1: $NaCl$ dissociates into $Na^+$ and $Cl^-$, so $n = 2$. For complete dissociation, $\\alpha = 1 \\implies i = 2$.\n\nStep 2: Molality $m = 0.1\\text{ mol/kg}$.\n\nStep 3: $\\Delta T_f = i \\cdot K_f \\cdot m = 2 \\times 1.86 \\times 0.1 = 0.372^\\circ\\text{C}$.\n\nStep 4: Freezing point of solution $= T_{pure} - \\Delta T_f = 0^\\circ\\text{C} - 0.372^\\circ\\text{C} = -0.372^\\circ\\text{C}$."
    },
    proTip: "High concentration of ions (high value of $i \\cdot m$) causes the lowest freezing point and highest boiling point. When comparing different solutions, always multiply the molality by the van 't Hoff factor $i$. The solution with the largest $i \\cdot m$ value has the lowest freezing point and highest boiling point."
  },
  {
    id: 45,
    subject: "electrical",
    title: "Parallel RLC Circuit Resonance",
    youtubeQuery: "parallel+rlc+resonance+bandwidth+quality+factor",
    desc: "Determining resonant frequency, quality factor ($Q$), bandwidth ($BW$), and impedance characteristics of a parallel RLC resonant circuit.",
    formulas: [
      "Resonant Frequency: $f_r = \\frac{1}{2\\pi\\sqrt{LC}}$",
      "Quality Factor (Parallel): $Q = R \\sqrt{\\frac{C}{L}} = \\frac{R}{X_L} = \\omega_r R C$ (note that this is the reciprocal of series RLC Quality Factor!)",
      "Bandwidth ($BW$): $BW = \\frac{f_r}{Q} = \\frac{1}{2\\pi R C}$",
      "Resonant Impedance: $Z_{max} = R$ (circuit behaves purely resistively, line current is minimum and impedance is maximum at resonance)"
    ],
    steps: [
      "Identify the values of resistance $R$, inductance $L$, and capacitance $C$.",
      "Compute the resonant frequency $f_r$ (or angular frequency $\\omega_r = 1/\\sqrt{LC}$).",
      "Calculate the Quality Factor using $Q = R\\sqrt{C/L}$.",
      "Calculate the Bandwidth: $BW = f_r / Q$.",
      "Verify impedance behavior: at resonance, impedance is maximum ($Z = R$) and phase angle is zero."
    ],
    example: {
      text: "A parallel RLC circuit has $R = 10\\text{ k}\\Omega$, $L = 1\\text{ mH}$, and $C = 10\\text{ nF}$. Find its Quality Factor.",
      solution: "Step 1: Given $R = 10000\\ \\Omega$, $L = 10^{-3}\\text{ H}$, and $C = 10 \\times 10^{-9}\\text{ F} = 10^{-8}\\text{ F}$.\n\nStep 2: Quality Factor formula: $Q = R \\sqrt{\\frac{C}{L}}$.\n\nStep 3: Substitute values: $Q = 10000 \\times \\sqrt{\\frac{10^{-8}}{10^{-3}}} = 10000 \\times \\sqrt{10^{-5}} = 10000 \\times 0.003162 = 31.62$.\n\nThe Quality Factor is $31.62$."
    },
    proTip: "Parallel RLC resonance is a 'rejector circuit' (minimum line current at resonance), whereas series RLC resonance is an 'acceptor circuit' (maximum line current at resonance). Remember that parallel $Q$ is proportional to resistance $R$, while series $Q$ is inversely proportional to $R$."
  }
];

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = concepts;
}
