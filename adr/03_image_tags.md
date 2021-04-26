# Bilddaten müssen ausgelesen werden

* Status: [accepted] <!-- optional -->
* Deciders: [Tim Loges] <!-- optional -->
* Date: [26.04.2021] <!-- optional -->

<!-- Technical Story: [description | ticket/issue URL] optional -->

## Context and Problem Statement

Für die vorliegenden Bilder müssen Informationen ausgelesen werden.

## Decision Drivers <!-- optional -->

* Unterstützung von Exif & IPTC


## Considered Options

* exifr
* JavaScript Load Image
* exif-reader


## Decision Outcome

Entscheidung: "exifr". Unterstützt die erforderlichen Image Tags. Kann sowohl Clientseitig als auch Serverseitig eingesetzt werden. Keine Abhängigkeiten.

## Links <!-- optional -->

* [exifr](https://github.com/MikeKovarik/exifr)
* [JavaScript Load Image](https://github.com/blueimp/JavaScript-Load-Image#metadata-parsing) 
* [exif-reader](https://github.com/devongovett/exif-reader) 
