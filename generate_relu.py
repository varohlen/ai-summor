import matplotlib.pyplot as plt
import numpy as np

# Skapa data för ReLU-funktionen
x = np.linspace(-5, 5, 100)
y = np.maximum(0, x)  # ReLU: max(0, x)

# Skapa figur med vit bakgrund
fig, ax = plt.subplots(figsize=(8, 6), facecolor='white')
ax.set_facecolor('white')

# Plotta ReLU-funktionen
ax.plot(x, y, 'b-', linewidth=3, label='ReLU(x) = max(0, x)')

# Markera övergången vid x=0
ax.plot(0, 0, 'ro', markersize=10, label='Brytpunkt vid x=0')

# Axlar och rutnät
ax.axhline(y=0, color='k', linewidth=0.5)
ax.axvline(x=0, color='k', linewidth=0.5)
ax.grid(True, alpha=0.3)

# Etiketter och titel
ax.set_xlabel('Totalpoäng (x)', fontsize=14, fontweight='bold')
ax.set_ylabel('Aktivering (y)', fontsize=14, fontweight='bold')
ax.set_title('ReLU (Rectified Linear Unit)', fontsize=16, fontweight='bold', pad=20)

# Lägg till förklarande text
ax.text(-4, 4, 'Om x < 0: y = 0', fontsize=12, 
        bbox=dict(boxstyle='round', facecolor='lightcoral', alpha=0.7))
ax.text(1.5, 4, 'Om x ≥ 0: y = x', fontsize=12,
        bbox=dict(boxstyle='round', facecolor='lightgreen', alpha=0.7))

# Legend
ax.legend(loc='upper left', fontsize=12)

# Sätt gränser
ax.set_xlim(-5, 5)
ax.set_ylim(-0.5, 5)

# Spara bilden
plt.tight_layout()
plt.savefig('src/assets/images/relu.png', dpi=150, bbox_inches='tight', facecolor='white')
print("✓ ReLU-bild skapad: src/assets/images/relu.png")
plt.close()
