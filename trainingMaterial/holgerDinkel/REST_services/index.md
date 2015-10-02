---
title: REST services
layout: page
author: Holger Dinkel
---

# Representational State Transfer (REST)

**Presentation Slides**:

- [Exploring_Biological_Databases.pdf](Exploring_Biological_Databases.pdf)

## Introduction

There are many different biological / bioinformatic resources out there waiting to be queried and most of them have simple to use HTTP interfaces.
However when one needs to retrieve more complex or greater amounts of information, scientist often download the whole database content and write scripts to weed out the information needed.

Web-Services have been developed to bridge this gap by allowing programmatic access to a resource.
Here, we want to investigate existing REST interfaces and using examples to show their usefulness.

These exercises are meant to show unskilled (non-bioinformaticians) first steps toward programmatically accessing databases and to show experienced bioinformaticians possibly new ways in which to more efficiently use these resources.

## Technical definition of REST

A **RESTful** application is an application that exposes its state and functionality as a set of resources that the clients can manipulate and conforms to a certain set of principles:

* All resources are uniquely addressable, usually through URIs; other addressing can also be used, though.
* All resources can be manipulated through a constrained set of well-known actions, usually CRUD (create, read, update, delete), represented most often through the HTTP's POST, GET, PUT and DELETE; it can be a different set or a subset though - for example, some implementations limit that set to read and modify only (GET and PUT) for example
* The data for all resources is transferred through any of a constrained number of well-known representations, usually HTML, XML or JSON; The communication between the client and the application is performed over a *stateless* protocol that allows for multiple layered intermediaries that can reroute and cache the requests and response packets transparently for the client and the application.

**Remember**:

A **URL** defines a path to a resource
Parameters provide additional arguments etc. usually in the form parameter=value;
(Note: the first parameter is separated from the url by '**?**' while subsequent ones use '**&**'.

**Example**:

<https://startpage.com/do/search?query=EMBO&with_language=lang_de>

Here, two arguments are given, the first *query* with the value *EMBO* and the second *with_language* with the value *lang_de*


## Querying Resources

We'll use resources that you've seen earlier today (phospho.elm) as a starter and then focus mainly on the uniprot database as it has an extensive repertoire of features to query and will be of most use to everybody involved in protein sequence analysis. At the end you'll find an outlook to other resources which you might find interesting to query.

Note: for all these examples, any common browser can be used, however for proper 'programmatic' access tools such as 'curl' or 'wget' on the Linux/Mac commandline are much more efficient and can easily be incorporated into little scripts...

## Websites providing REST interfaces

### Phospho.ELM

- Website: <http://phospho.elm.eu.org>
- REST help: <http://phospho.elm.eu.org/help.html>

Phospho.ELM is a database of experimentally verified phosphorylation sites in eukaryotic proteins containing almost 9.000 substrate proteins from different species covering more than 40.000 instances with literature references.

Earlier today you've accessed Phospho.ELM using HTML as response. Now we would like to retrieve results in text format which is much easier to parse.
The Phospho.ELM help page describes some examples how you can access this resource

* Repeat the search for 'CASP9_HUMAN' (<http://phospho.elm.eu.org/byAccession/CASP9_HUMAN.html>), this time retrieve the results as csv
* Limit this search to position 125 (as html or csv format)
* Get all substrates of the kinase 'Abl2' as csv format.
* Get all instances which are annotated as being recognized/binding to 'GRB2_SH2'
* You've retrieved from Uniprot (see section on Uniprot below) a list of protein IDs of the protein 'abl1' in different organisms (P03949, P00519, P00520, P00522). Try to get in one query all annotated phosphorylation sites for these.


### ELM

- Website: <http://elm.eu.org>
- REST help: <http://elm.eu.org/downloads.html>

ELM is a repository of functional linear motif sites in eukarytic proteins as well as a prediction tool to detect novel linear motif instances.
Similar to Phospho.ELM, the Eukaryotic Linear Motif Resource can be queried via a REST-like interface (see the Downloads page for details)

1. Get all instance sequences annotated for protein acc 'TAU_HUMAN' as FASTA format using the [web form](http://elm.eu.org/instances/).
1. Try to construct the URL by hand which you need to download ELM instances for the protein id ``EPN1_HUMAN``
<!--- (OPTIONAL) Inspect these sequences and pay attention to the protein id / primary acc. -->

### Uniprot

- Website: <http://www.uniprot.org>
- REST help: [FAQ on Programmatic access](http://www.uniprot.org/help/programmatic_access).

The Universal Protein Resource ([UniProt](http://www.uniprot.org)) is a comprehensive resource for protein sequence and annotation data consisting of the UniProt Knowledgebase (UniProtKB), the UniProt Reference Clusters (UniRef), and the UniProt Archive (UniParc) and more.


To access a full Uniprot entry by its unique id (as HTML), you would type <http://www.uniprot.org/uniprot/P12931>
The same data is available in different formats:

- <http://www.uniprot.org/uniprot/P12931.txt> Text only
- <http://www.uniprot.org/uniprot/P12931.xml> XML format
- <http://www.uniprot.org/uniprot/P12931.rdf> Special form of XML (Resource Description Framework)
- <http://www.uniprot.org/uniprot/P12931.fasta> only the sequence in FASTA format
- <http://www.uniprot.org/uniprot/P12931.gff> only the protein features in GFF (General Feature Format)

#### Exercise:

1. Try these links to get a feeling for the different formats.
1. Substitute the id (P12931) with the name or id of a protein of interest ('ABL1_HUMAN', 'Epsin'). Which of these works, which doesn't?


#### Performing queries

While the FASTA and GFF format only show a limited set of data of any protein dataset, the HTML and TEXT representations demonstrate the large amount of data that is annotated at Uniprot.
Chances are not everybody needs all the data all the time. Therefore Uniprot allows to specify which fields to query and to return only selected fields.
Use the Uniprot help page and in particular pay attention to the list of possible query fields for the following exercises!

In order to get yourself acquainted with the Uniprot syntax, please use the button 'Advanced Search' at the uniprot homepage to construct your uniprot queries (yielding HTML results).



1. Search for all proteins with the name ``GRB2`` which have the status ``reviewed``
1. Next, copy this: ``name:GRB2 AND reviewed:yes`` from the search field into the url: 
`http://www.uniprot.org/uniprot/?query=` so that your URL looks like this: 
`http://www.uniprot.org/uniprot/?query=name:GRB2 AND reviewed:yes`
1. Add the following to your query to turn the output format from HTML to TAB: `&format=tab`:
`http://www.uniprot.org/uniprot/?query=name:GRB2 AND reviewed:yes&format=tab`
1. Repeat this query with protein name ``ABL1``. How many resulting lines do you get?

   **Different formats**
   
   The uniprot output format can be one of:
   
   - html
   - tab
   - xls
   - fasta
   - gff
   - txt
   - xml
   - rdf
   - list
   - rss

1. Try the previous exercises (eg. searching for GRB2 or ABL1) with at least three different output formats. 
1. (OPTIONAL) Instead of GRB2 or ABL1, try your favorite protein of interest.


**Limiting results**

While testing your queries, it's a good idea to limit the number of results (in order not to stress the server or block your browser) `&limit=10`.

#### Example: 

Retrieving the first ten human sequences as fasta:

<http://www.uniprot.org/uniprot/?query=reviewed:yes+AND+organism:9606&limit=10&format=fasta>

You can 'walk' along a set of results by using limit and offset, eg to retrieve the next 10 results of previous query:

<http://www.uniprot.org/uniprot/?query=reviewed:yes+AND+organism:9606&limit=10&offset=10&format=fasta>



1. Try to get all proteins which have 'ABL2' in their name in tab format.
1. How many are there?
1. Try to 'walk' along these results by using a limit of 3 and an appropriate offset until you've seen all results.


**Selecting columns**

1. Read the [FAQ](http://www.uniprot.org/help/programmatic_access#retrieving_entries_via_queries) (table in section 'Retrieving entries via queries') and find out which columns can be selected as returnvalues.
1. Using the tab format, retrieve all proteins named 'Proepiregulin' and select 'id', 'entry name', and 'genes' as output columns.
1. Using the same format and protein name, try at least three different column types as return (first indivdually, then all three at once)
1. Get all 'ABL1' proteins and use 'entry name' and 'interactor' as output.
1. Which of these proteins have interactors annotated?
1. Use the additional column 'taxon'

**Length**

Now, we want to restrict our search by sequence length:

1. First, retrieve (as tabular format) proteins which have the gene name 'ABL1' and the 'reviewed' status.
1. How many sequences are retrieved?
1. Next, limit the results by setting the sequence length to between 1000 and 1200 using the following parameter format: `length:[1000 TO 1200]` (Note: the 'TO' needs to be uppercase)
1. How many sequences are now retrieved?

**Searching for annotations**

1. Search for all proteins which have the domain 'CAP_GLY' annotated.
1. Use 'id' and 'domain' as output column (tabbed format) to see the overall domain architecture of these proteins.
1. List the first 10 human proteins which are annotated as transmembrane by adjusting the following query: `annotation: (type:transmem count:[5 TO \*])`


**Database crosslinks**

1. (Optional) Search for entries which have a link to the PDB entry '1NW9'.
1. How many/which entries do you find?


## More public bioinformatics databases with REST interfaces

### RSCB PDB

- Website: <http://www.rcsb.org/pdb/home/home.do>
- REST help: <http://www.rcsb.org/pdb/software/rest.do>

The Research Collaboratory for Structural Bioinformatics (RCSB) is hosting the Protein Data Bank (PDB) archive, which is the single worldwide repository of information about the 3D structures of large biological molecules, including proteins and nucleic acids.

#### Examples:

1. Get status of Structure 1HHB:
<http://www.rcsb.org/pdb/rest/idStatus?structureId=1HHB>

1. Try to receive the following PDB files (as text): 1NW9, 2H63



### Ensembl

- Website: <http://www.ensembl.org>
- REST help: <http://beta.rest.ensembl.org/>

Ensembl is a joint scientific project between the European Bioinformatics Institute (EBI) and the Wellcome Trust Sanger Institute, which was launched in 1999 in response to the imminent completion of the Human Genome Project. After 10 years in existence, Ensembl's aim remains to provide a centralized resource for geneticists, molecular biologists and other researchers studying the genomes of our own species and other vertebrates and model organisms. Ensembl is one of several well known genome browsers for the retrieval of genomic information.

The Ensembl REST web-service is a convenient way to access some of our popular datatypes such as the VEP, Sequence retrieval, assembly coordinate transformations, gene homologies and cross-references. The data can be requested with simple HTTP requests and returned in a variety of programatic and bioinformatical relevant formats such as JSON, XML, YAML and FASTA.

#### Examples:

1. Retrieving a single DNA sequence: <http://beta.rest.ensembl.org/sequence/id/ENSG00000157764>
1. multiple sequences translated to protein: <http://beta.rest.ensembl.org/sequence/id/ENSG00000157764?multiple_sequences=1;type=protein>


        curl 'http://beta.rest.ensembl.org/sequence/id/ENSG00000157764?multiple_sequences=1;type=protein' -H 'Content-type:text/x-fasta'



### String

- Website: <http://string.embl.de>
- REST help: <http://string-db.org/help/index.jsp?topic=/org.string-db.docs/api.html>

STRING is a database of known and predicted protein interactions including direct (physical) and indirect (functional) associations, derived from different sources.
The STRING resource has an application programming interface (API) which enables users to get data without using the graphical user interface of the web page.

#### Examples:

1. Retrieve all STRING interactions for id 'ABL1_HUMAN' as psi-mi-tab format
<http://string-db.org/api/psi-mi-tab/interactionsList?identifiers=ABL1_HUMAN>

1. Download the network image of interactions of protein id P12931, limit the number of nodes to 20
<http://string-db.org/api/image/network?identifier=P12931&required_score=950&limit=20&network_flavor=evidence>

1. Get a list of items (resolve) using the query term 'ABL1' and species 9606. Why do you get so many results?
<http://string-db.org/api/tsv/resolve?identifier=ABL1&species=9606>

1. Get a list of all STRING ids (format=only-ids) for the protein 'ABL1_HUMAN' (use 'tsv-no-header')
<http://string-db.org/api/tsv-no-header/resolve?identifier=ABL1_HUMAN&format=only-ids>



### Pfam

- Website: <http://pfam.sanger.ac.uk>
- REST help: <http://pfam.sanger.ac.uk/help#tabview=tab10>

The Pfam database is a large collection of protein domain families. Each family is represented by multiple sequence alignments and hidden Markov models (HMMs).

Currently, Pfam provides only XML as output format, however a list of all families can be retrieved as simple list:

<http://pfam.sanger.ac.uk/families?output=text>

#### Examples:

1. Getting information about a domain family:
<http://pfam.sanger.ac.uk/family/CAP_GLY?output=xml>

1. Retrieving information about domains within a given protein id:
<http://pfam.sanger.ac.uk/protein/P00789?output=xml>



### Reflect

- Website: <http://www.reflect.ws/>
- REST help: <http://www.reflect.ws/REST_API.html>

Reflect is a free service that tags gene, protein, and small molecule names in any web page within a few seconds. Clicking on a tagged term opens a small popup showing summary information.
Reflect can be installed as a plugin to Firefox or Internet Explorer, or can used by entering a URL in the field above.

The Reflect REST API is geared towards resource developers who wish to use the Reflect tagging service in their own domain.
<http://www.reflect.ws/REST_API.html>



### OMIM

- Website: <http://www.omim.org>
- REST help: <http://omim.org/help/api>

Online Mendelian Inheritance in Man (OMIM) is a comprehensive, authoritative compendium of human genes and genetic phenotypes that is freely available and updated daily.
The full-text, referenced overviews in OMIM contain information on all known mendelian disorders and over 12,000 genes.
OMIM focuses on the relationship between phenotype and genotype.

Accessing OMIM via API is a bit more complicated as it requires registration and the registration key has to be used in every query.

## References

* <http://en.wikipedia.org/wiki/Representational_State_Transfer>
* [Programmable web registry](http://www.programmableweb.com/apis/directory/1?protocol=rest)
* [Using the Tools and Resources of the RCSB Protein Data Bank](http://onlinelibrary.wiley.com/doi/10.1002/0471250953.bi0109s20/full)
* [Firefox Plugin to debug REST queries](http://restclient.net/)

<!-- ## Advanced applications -->
<!--  -->
<!-- Using Phospho.ELM REST interface, find out which residues are preferentially phosphorylated by AuroraA kinase: -->
<!--  -->
<!--     curl -s "http://phospho.elm.eu.org/byKinase/Aurora%20A.csv" | grep -v Accession | cut -d';' -f2 | sort | uniq -c -->
<!--         24  S -->
<!--          6  T -->
<!--  -->
<!-- In contrast, which residues are preferentially phosphorylated by Abl kinase: -->
<!--  -->
<!--     curl -s "http://phospho.elm.eu.org/byKinase/Abl.csv" | grep -v Accession | cut -d';' -f2 | sort | uniq -c -->
<!--         55  Y -->
<!--  -->
<!-- Retrieving all proteins which contain at least one SH3 domain and at least three domains in total and are between 200 and 500 amino acids in length: -->
<!--  -->
<!--     wget -q "http://www.uniprot.org/uniprot/&format=tab&query=domain:SH3 AND annotation:(type:domain count:[3 TO *]) AND length:[200 TO 500]" -->
<!--  -->
<!-- First, query Uniprot for reviewed protein ID P46844 and retrieve only the column `database(pdb)`. Use these PDB ids to get MolecularDescriptions of the corresponding PDB structures from RCSB: -->
<!--  -->
<!--     wget -q "http://www.uniprot.org/uniprot/?query=P46844 AND database:(type:pdb)&format=tab&columns=database(pdb)" -O - | grep -v 'cross' | tr ';' ',' | xargs -I '{}' curl "http://www.rcsb.org/pdb/rest/describeMol?structureId={}" -->
<!--  -->
<!-- Get all cross-references to PDB from Uniprot querying for Caspases: -->
<!--  -->
<!--     for i in $(wget -q "http://www.uniprot.org/uniprot/?query=caspase AND reviewed:yes AND database:(type:pdb)&format=tab&columns=database(pdb)" -O - | grep -v 'cross' | tr ';' ' '); do echo $i; done -->
<!--  -->
