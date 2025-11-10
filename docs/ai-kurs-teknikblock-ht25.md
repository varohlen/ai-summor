# Teknikblock HT fram till jul

## Övergripande mål
- Konsolidera teoretiska kunskaper från modul 1 inom neuronnät, backpropagation och LLM.
- Bredda den tekniska repertoaren med regression, beslutsträd och sök/agentmetoder.
- Ge eleverna praktisk erfarenhet av hela ML-pipelinen (data → modell → utvärdering).
- Leverera ett summativt teknikprojekt + individuellt kunskapsprov före jul.

## Vecka-för-vecka-plan
| Vecka | Fokus | Måndag (synk) | Fredag (flex/asynk) | Leverans |
| --- | --- | --- | --- | --- |
| v45 | Datacykel & regression på riktigt | Intro: datakvalitet, bias, träning/validering. Labba med "smutsigt" dataset i Sheets/Python. | Fortsatt datastädning & dokumentation av problem/åtgärder. | Laborationslogg (dataanalys + första modellresultat). |
| v46 | Beslutsträd & regelbaserad AI | Demo av beslutsträd, jämförelse med neuronnät. Bygg eget träd i verktyg. | Mikro-uppgift: regelbaserad chatbot/klassificerare. | Rapport som jämför träd vs neuron (styrkor/svagheter). |
| v47 | Sökalgoritmer & agenter | Genomgång BFS/DFS/heuristik, test i maze-/spelmiljö. | Optimera heuristiken, logga resultat hemma. | "Sökjournal" med tabell över metod → resultat → reflektion. |
| v48–49 | Mini-projekt ML | Kickoff, projektval (bild/text/tabell). Planera dataset, riskanalys, starta träning. | Självständigt arbete: datainsamling, modellträning, feature-design, loggning av experiment. | Projektplan (v48) + mittavstämning/testlogg (v49). |
| v50 | Fördjupning & pre-flight | Workshop: resultatvisualisering, felanalys, bias/variance. | Peer review av annan grupps modell & dokumentation. | Rapportutkast + peer feedback. |
| v51 | Slutpresentation & teknikprov | Tech Expo med gruppredovisningar. Individuellt teknikprov/quiz. | Valfri individuell reflektion över teknikblocket. | Slutrapport (grupp) + provresultat + reflektionslogg. |

## Bedömning
- **Formativt**: Laborationsloggar, rapporter, journaler och peer feedback varje vecka.
- **Summativt**: Gruppens ML-projektrapport + presentation, samt individuellt teknikprov i v51.
- Matris kopplas till GY25-betygskraven (kunskaper om tekniker, förmåga att använda AI för problemlösning, jämförelser människa/AI).

## Resurser att förbereda
- Dataset (tabulär regression, klassificeringsexempel, sökproblem). 
- Verktyg: regression i Excel/Sheets eller Jupyter, beslutsträd-visualiserare, maze/pathfinding-simulator.
- Mallar: projektplan, loggbok, riskanalys, rapport, peer-review-formulär, teknikprov.

## Täckning mot GY25 ARTI1000X (teknikblock)
| Centralt innehåll | Redan täckt (modul 1) | Kommande aktiviteter | Kommentar |
| --- | --- | --- | --- |
| Definition av AI och centrala begrepp | Ja – neuronnät, perceptron, LLM.@src/content/ai-kurs/1/0.mdx#15-215@src/content/ai-kurs/1/3.mdx#22-198@src/content/ai-kurs/1/6.mdx#12-272 | Repetition kopplat till beslutsträd/sök. | Begrepp breddas med nya modeller. |
| Drivkrafter bakom AI-utvecklingen | Ja – historik, Nobelpris, AI-vintrar.@src/content/ai-kurs/1/0.mdx#101-198@src/content/ai-kurs/1/3.mdx#50-176 | Koppla till moderna ML-case vid projektstart. | Underlag finns, knyts till praktiken. |
| Översikt av användning (prediktion, vision, generativ AI) | Ja – CNN, GAN, LLM.@src/content/ai-kurs/1/5.mdx#20-118@src/content/ai-kurs/1/6.mdx#12-272 | Projekten kan välja vision/text. | Praktiskt fokus först efter jullov. |
| Tekniker/metoder (sök, klassificering, objektigenkänning) | Delvis – neuronnät/klassificering.@src/content/ai-kurs/1/4.mdx#13-175 | v45 regression, v46 beslutsträd, v47 sök/agent. | Blocket fyller luckorna (sök, träd). |
| Metoder/algoritmer inkl. beslutsträd, regression, över-/oövervakad ML | Delvis – övervakad, LLM nämns.@src/content/ai-kurs/1/6.mdx#170-256 | v45 regression, v46 beslutsträd, projekt: övervakad träning. | Oövervakat kan nämnas under projekt (t.ex. clustering). |
| Praktisk problemlösning med AI | Delvis – Smilis-klassificerare.@src/content/ai-kurs/1/4.mdx#87-155 | Alla veckor inkluderar labb/projekt. | Ger tydlig progression mot kunskapskraven. |
| Metoder för enklare träning av AI | Ja – introducerat via neuronnät.@src/content/ai-kurs/1/2.mdx#12-268 | Projekt (v48–51) tränar egna modeller. | Praktisk förstärkning. |
| Förhållningssätt till AI (lagar, etik, samhälle) | Delvis – begränsat hittills.@src/content/ai-kurs/1/6.mdx#136-256 | Planeras som nytt block efter jul. | Markeras som kommande modul. |

## Nästa steg efter jul
- Etik- och juridikmodul (AI Act, GDPR, Skolverket, transparens, risker) inkl. rollspel.
- Avslutande helhetsprojekt där elever väljer teknisk fördjupning + etisk analys.




I den här modulen arbetar du praktiskt med maskininlärning. Du lär dig hantera riktiga (och stökiga) dataset, provar alternativa modeller som regression och beslutsträd, testar sökalgoritmer och planerar ett eget miniprojekt som avslutas med en teknikdemo.

Modulen är uppdelad i fyra fokusområden:

1. **Data och regression** – hur datakvalitet påverkar resultatet och hur du tränar enkla modeller.
2. **Alternativa modeller** – beslutsträd och regelbaserade system som kontrast till neuronnät.
3. **Sök och agenter** – strategier för att lösa problem utan att träna modeller.
4. **Projektarbete** – planera, genomför och presentera en komplett ML-lösning.

> [!INFO] Förberedelser
> Varje del innehåller både teori och praktiska uppgifter. Ta med dator, verktyg för kalkylark eller Python samt loggbok för att dokumentera dina steg. 