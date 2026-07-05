# Trut

Webové stránky spolku **Trut, z. s.**, vytvořené pomocí **Jekyll** a publikované prostřednictvím **GitHub Pages**.

## Požadavky

* Jekyll
* Ruby
* Bundler

## Lokální spuštění

```bash
bundle install
bundle exec jekyll serve
```

Web bude dostupný na:

```
http://localhost:4000
```

## Struktura projektu

```
_data/
    organization.yml
    team.yml

_events/
    jednotlivé akce

_projects/
    jednotlivé projekty

_includes/
    znovupoužitelné komponenty

_layouts/
    rozvržení stránek

assets/
    css
    images
```

## Přidání nové akce

1. Vytvořit nový soubor v `_events/`.
2. Vyplnit front matter.
3. Doplnit obsah v Markdownu.
4. Nastavit `published: true`.

## Přidání nového projektu

1. Vytvořit nový soubor v `_projects/`.
2. Vyplnit front matter.
3. Doplnit obsah v Markdownu.
4. Nastavit `published: true`.

## Organizace

Základní údaje spolku jsou uloženy v:

```
_data/organization.yml
```

Členové výboru:

```
_data/team.yml
```

## Publikování

Projekt je určen pro GitHub Pages.

Po odeslání změn do hlavní větve proběhne automatické sestavení a publikování webu.

## Licence

Viz soubor `LICENSE`.
