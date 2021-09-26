# Bilddaten müssen verändert werden

* Status: [accepted] <!-- optional -->
* Deciders: [Tim Loges] <!-- optional -->
* Date: [20.09.2021] <!-- optional -->


## Context and Problem Statement

Für die vorliegenden Bilder müssen die IPTC Tags verändert werden. Diese liegen sowohl in Deutsch als auch Englisch vor.

## Decision Drivers <!-- optional -->

* Unterstützung von Exif & IPTC
* Multilinguale Tags

## Considered Options

* node-exiftool

## Decision Outcome

Entscheidung: "node-exiftool". Dieses nutzt im Hintergrund das Tool "ExifTool by Phil Harvey", welches für verschiedene Plattformen und Technologien zur Verfügung steht. Ebenfalls unterstüztt es eine Reihe von weiteren Features, wie Lesen, Schreiben und Bearbeiten von Image Tags.  

Da es kein (mir) bekanntes Konzept für das speichern von Multilingualen Tags gibt, werden innerhalb der IPTC Tags Stringified JSON Arrays gespeichert. An erster Stelle Deutsch, an zweiter Englisch. Dadurch wird die Nutzung bzw. das Auslesen der Tags durch andere Anwendungen zwar erschwert, dies wird für das erfüllen der Anforderungen aber in Kauf genommen.

## Links <!-- optional -->

* [node-exiftool](https://www.npmjs.com/package/node-exiftool)
* [exiftool](https://exiftool.org/)
