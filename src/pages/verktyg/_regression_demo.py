# Hej! Det här är ett Python-skript för att visa hur enkel linjär regression fungerar.
# Du kan ändra värdena i avsnittet "ÄNDRA HÄR" för att se hur grafen förändras.
# För att köra skriptet, klistra in all kod i en online Python-miljö som https://www.online-python.com/ och klicka på "Run".

# --- BIBLIOTEK ---
# Vi importerar de bibliotek vi behöver.
# numpy för att hantera våra numeriska data.
# matplotlib.pyplot för att rita grafer.
# sklearn.linear_model för att skapa vår regressionsmodell.
# Om du kör detta lokalt och inte i en online-miljö, kan du behöva installera dessa:
# pip install numpy matplotlib scikit-learn

import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

# --- ÄNDRA HÄR ---
# Prova att ändra, lägga till eller ta bort siffror i listorna nedan.
# Se bara till att 'x_data' och 'y_data' har lika många siffror.

# Förklarande text för datan
x_label = "Antal timmar plugg"
y_label = "Poäng på prov (0-100)"
plot_title = "Sambandet mellan pluggtimmar och provpoäng"

# Vår data. x_data är den oberoende variabeln, y_data är den beroende variabeln.
# Exempel: Första studenten pluggade 1 timme (x) och fick 30 poäng (y).
x_data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
y_data = [30, 35, 50, 60, 70, 75, 80, 85, 90, 98]

# --- KODEN ---
# (Du behöver inte ändra något här nere)

# 1. Förbered data
# Modellen behöver datan i ett specifikt format, så vi omvandlar den.
x = np.array(x_data).reshape((-1, 1))
y = np.array(y_data)

# 2. Skapa och träna modellen
# Vi skapar en instans av en linjär regressionsmodell.
model = LinearRegression()

# Vi "tränar" modellen med vår data. Modellen lär sig det bästa linjära sambandet mellan x och y.
model.fit(x, y)

# 3. Rita grafen
# Skapa en scatter plot (prickdiagram) av vår ursprungliga data.
plt.scatter(x, y, color='blue', label='Faktiska datapunkter')

# Rita ut regressionslinjen som modellen har lärt sig.
plt.plot(x, model.predict(x), color='red', linewidth=2, label='Regressionslinje')

# Lägg till titlar och etiketter för att göra grafen lätt att förstå.
plt.title(plot_title)
plt.xlabel(x_label)
plt.ylabel(y_label)
plt.legend() # Visar förklaringen för 'Faktiska datapunkter' och 'Regressionslinje'
plt.grid(True) # Lägger till ett rutnät för enklare avläsning

# Visa den färdiga grafen.
plt.show()

# 4. (Frivilligt) Gör en förutsägelse
# Nu kan vi använda vår tränade modell för att göra en förutsägelse.
# Vilket provresultat kan vi förvänta oss om en student pluggar 5.5 timmar?
timmar_att_forutsaga = 5.5
forutspadd_poang = model.predict([[timmar_att_forutsaga]])

print(f"Modellen förutspår att {timmar_att_forutsaga} timmars plugg ger ungefär {forutspadd_poang[0]:.1f} poäng på provet.")
