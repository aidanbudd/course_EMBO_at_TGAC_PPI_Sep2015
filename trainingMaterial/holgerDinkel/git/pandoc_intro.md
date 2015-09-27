---
title: Pandoc
layout: page
author: Holger Dinkel
---

Introduction
=============

**pandoc** is a commandline tool for converting from one markup format to another.

It can **read** 

- **Markdown**
- CommonMark
- Textile
- reStructuredText
- **HTML**
- LaTeX
- MediaWiki
- TWiki
- Haddock
- OPML
- Emacs Org-mode
- DocBook
- txt2tags
- EPUB
- **Word docx**; 

and it can **write** 

- plain text
- Markdown
- reStructuredText
- XHTML
- **HTML 5**
- LaTeX
- ConTeXt
- RTF
- OPML
- DocBook
- Open-Document
- ODT
- **Word docx**
- GNU Texinfo
- MediaWiki markup
- DokuWiki markup
- Haddock markup
- EPUB 
- FictionBook2
- Textile
- groff man pages
- Emacs Org-Mode
- AsciiDoc
- InDesign ICML
- and Slidy
- Slideous
- DZSlides
- reveal.js 
- **S5 HTML slide shows**.

Command line syntax:

  pandoc [OPTIONS] [FILES]


Most common options:

     Options:
       -f FORMAT, -r FORMAT  --from=FORMAT, --read=FORMAT
       -t FORMAT, -w FORMAT  --to=FORMAT, --write=FORMAT
       -o FILENAME           --output=FILENAME
       -s                    --standalone
       -c URL                --css=URL


Examples
========

Simple call to convert the text file ``input.txt`` into html:

     pandoc -o output.html input.txt

By default, pandoc produces a document fragment, not a standalone document with
a proper header and footer. To produce a standalone document, use the ``-s`` or ``--standalone`` flag:

     pandoc -s -o output.html input.txt



