# Changelog

V tomto souboru jsou zaznamenávány všechny významné změny projektu.

Formát vychází z **Keep a Changelog**.

---

## [Unreleased]

### Added

* nová komponenta **Teaser** na úvodní stránce pro zvýraznění nejbližší akce
* responzivní rozložení teaseru pro desktop i mobilní zařízení
* dynamické zobrazování odpočtu do začátku akce a jejího aktuálního stavu
* automatické skrytí teaseru po skončení akce
* parametry `title`, `url`, `date` a `duration` pro snadnou konfiguraci komponenty

### Improved

### Fixed

---

## [1.0.1] - 2026-07-20

### Added

* univerzální komponenta Lightbox pro zobrazení galerií
* možnost vložit více galerií na jednu stránku pomocí include
* podpora ovládání klávesnicí a dotykovými gesty

### Improved

* chování mobilní navigace
* sjednocen vzhled tlačítek pomocí komponenty `.button`
* interní cesty používají `relative_url` pro správnou funkci na GitHub Pages i vlastní doméně

### Fixed

* přepínání ikony mobilní navigace mezi ☰ a ✕
* formátování patičky
* opraveno načítání obrázků v galerii při použití `baseurl`

---

## [1.0.0] - 2026-07-05

### Added

* první veřejná verze webu spolku
* responzivní vzhled
* domovská stránka
* stránka Spolek
* stránka Kontakt
* stránka Akce
* stránka Projekty
* detail akcí
* detail projektů
* kontaktní formulář
* generování údajů spolku z `organization.yml`
* generování členů výboru z `team.yml`
* podpora publikování pomocí `published: false`
* sjednocené komponenty karet
* zvýrazněné a prázdné karty
* vlastní stránka 404
* podpora vlastní domény
* nasazení na GitHub Pages
