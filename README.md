# Web Technologien // begleitendes Projekt Sommersemester 2021

Zum Modul Web Technologien gibt es ein begleitendes Projekt. Im Rahmen dieses Projekts werden wir von Veranstaltung zu Veranstaltung ein Projekt sukzessive weiter entwickeln und uns im Rahmen der Veranstaltung den Fortschritt anschauen, Code Reviews machen und Entwicklungsschritte vorstellen und diskutieren.

Als organisatorischen Rahmen für das Projekt nutzen wir GitHub Classroom. Inhaltlich befassen wir uns mit der Entwicklung einer kleinen Web-Anwendung für die Bearbeitung von Bildern. Hierbei steht weniger ein professioneller Konzeptions-, Entwurfs- und Entwicklungsprozess im Vordergrund, sondern vielmehr die sukzessive Weiterentwicklung einer Anwendung, das Ausprobieren, Vergleichen, Refactoren und die Freude an lauffähigem Code.

## Installation & Benutzung

Empfohlene Benutzung über Docker [Compose](https://docs.docker.com/compose/reference/).

>Über die `.env`-Datei können individuelle Werte für den Server gesetzt werden. Näheres im [README](server/README.md) für den Server. Dafür kann die Beispieldaten [.example.env](server/example.env) in `.env` umbennant werden. Ohne diese wird auf die Standardparameter zurückgegriffen.

Starten der Container:
```bash
docker compose up
```

Der Einstiegspunkt für den Client liegt unter [http://localhost:5000](http://localhost:5000)

### Manuelle Installation ist in den jeweiligen README's aufgeschlüsselt
- [Manuelle Installation Client](client/README.md)
- [Manuelle Installation Server](server/README.md)



## Timetracker

- Issue 1: 10h
- Issue 2: 5h
- Issue 2: 20h
