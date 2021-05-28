# Dateisuche

* Status: [accepted] <!-- optional -->
* Deciders: [Tim Loges] <!-- optional -->
* Date: [20.05.2021] <!-- optional -->


## Context and Problem Statement

«Als Bildredakteur brauche ich eine Suche um Artefakte finden und die korrekte Benamung oder anderes überprüfen zu können.»

Folgende Möglichkeiten sollte die Suche bieten:

- (Text)-Suchschlitz 
- Reguläre Ausdrücke
- Suche bezogen auf Dateinamen als auch auf Ordnernamen
- Suchspektrum für maximal 5000 Artefakte (Performance)

Optionale Erweiterungen:

- Globs
- Suche über Exif Daten

Weiterhin gibt es die Möglichkeit die Suche im **Frontend** als auch im **Backend** zu verarbeiten.

Ebenfalls ist die Frage zu klären wie die Suchergebnisse dargestellt werden.

- Verändern bzw. manipulieren des Dateibaums
- "Neue" Übersicht mit Suchergebnissen darstellen


## Considered Options

* Backend
  * Eigene Implementierung
  * [fast-glob](https://github.com/mrmlnc/fast-glob)
* Frontend
  * [listjs](https://listjs.com/)
  * [fuzzyjs](https://github.com/gjuchault/fuzzyjs)
  * [fusejs](https://fusejs.io/)
  * Eigene Implementierung

## Decision Outcome

Entscheidung: Keine Backendsuche. Dadurch wird eine höhere Flexibilität und Geschwindikeit erwartet. Da nur initial einmal die Dateistruktur angefragt werden muss um dann im Client diese zu durchsuchen und zu manipulieren.

Für die Frontendsuche wird FuseJS genutzt. Größter Vorteil gegenüber den betrachteten Alternativen ist die Möglichkeit verschachtelte Objekte zu durchsuchen. Danaben bietet FuseJS die möglichkeit die Suche über Regex zu verfeinern, siehe [hier](https://fusejs.io/examples.html#weighted-search).

Für die Darstellung der Suchergebnisse wird ein gemischter Ansatz verfolgt. Die Grundlegende Ordnerstruktur wird so manipuliert das nur Ordner angezeigt werden die dem Suchmuster entsprechen. Darunter soll eine Auflistung der Dateien dargestellt werden welche ebenfalls dem Suchmuster entsprechen.
