# Auswahl der Serversprache

* Status: [accepted] <!-- optional -->
* Deciders: [Tim Loges] <!-- optional -->
* Date: [26.04.2021] <!-- optional -->

<!-- Technical Story: [description | ticket/issue URL] optional -->

## Context and Problem Statement

Für den Server muss eine geeignete Sprache gewählt werden. Dieser muss das Routing sowie das bereitstellen der Bilder ermöglichen.

<!-- ## Decision Drivers optional -->

<!-- * [driver 1, e.g., a force, facing concern, …] -->
<!-- * [driver 2, e.g., a force, facing concern, …] -->
<!-- numbers of drivers can vary -->

## Considered Options

* NodeJS
* PHP (Laravell)

## Decision Outcome

Entscheidung: "NodeJS". Im Zusammenhang mit dem Client, der auch in JS aufgebaut ist, kann es zeitlich sinnvoll sein, sich in einem ähnlichen Ökosystem aufzuhalten. Darüber hinaus ist für NodeJS eine kürzere Einarbeitung erforderlich des Betroffenen Entwicklers notwendig.
