import re

with open('index.html', 'r', encoding='utf-8') as f:
    c = f.read()

# Fix typo double div
c = c.replace('</div>\n              </div>\n              </div>\n\n              <h4 style="color: var(--warning);', 
              '</div>\n              </div>\n\n              <h4 style="color: var(--warning);')

# Strip inline styles
c = re.sub(r'<div class="blueprint-summary-box" style="[^"]+">', '<div class="blueprint-summary-box">', c)
c = re.sub(r'<div class="sample-q-card" style="[^"]+">', '<div class="sample-q-card">', c)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(c)
