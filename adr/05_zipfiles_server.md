# Zippen von Artefakten

* Status: [accepted]
* Deciders: [Tim Loges]
* Date: [07.09.2021] <!-- optional -->

## Context and Problem Statement

"Als Bildredakteur möchte ich ein Artefakt mit allen Daten als Zipfile herunterlagen, um sie lokal nutzen zu können."

## Considered Options

* zip a folder
* express easy zip
* node tar

## Decision Outcome

Entscheidung: `express easy zip `
Die beiden anderen Packete bieten zwar mehr Möglichkeiten zur Konfiguration, da aber aktuell nur gefordert ist einen Ordner zu zippen ist `express easy zip` die schnellste Lösung im aktuellen Kontext.

Für die Frage wie lange Archive im Backend "leben" wird an dieser Stelle entschieden, das diese für jede Anfrage neu Erstellt werden. Daher werden Archive nicht im Backend gespeichert.


## Links <!-- optional -->

* [zip a folder](https://github.com/maugenst/zip-a-folder)
* [express easy zip](https://www.npmjs.com/package/express-easy-zip)
* [node tar](https://github.com/npm/node-tar)
