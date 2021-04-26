# Auswahl Client Aufbau/Sprache

* Status: [accepted] <!-- optional -->
* Deciders: [Tim Loges] <!-- optional -->
* Date: [26.04.2021] <!-- optional -->

<!-- Technical Story: [description | ticket/issue URL] optional -->

## Context and Problem Statement

Der Aufbau des Clients muss festgelegt werden.

## Decision Drivers <!-- optional -->

* Client muss unabhängig vom Server agieren können
* Erweiterbarkeit muss unkompliziert sein (Anforderungen werden sich unvorhergesehen ändern)


## Considered Options

* Vue(3)
* HTML mit AlpineJS
* Serverseitige Templating Engine

## Decision Outcome

Entscheidung: "Vue3". Dadurch werden Client als auch Server in der gleichen Sprache aufgebaut, was den Aufwand vorraussichtlich verringert. Der Client wird unabhängig vom Server aufgebaut und die Erweiterbarkeit ist bei Vue gegeben 
