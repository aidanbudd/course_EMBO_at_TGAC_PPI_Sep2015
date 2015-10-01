---
title: STRING exercises - Mycobacterium tuberculosis
author: Lars Juhl Jensen
---

### Query STRING for a single protein

Go to [STRING](http://string-db.org) and query for Query for _M. tuberculosis_ H37Rv adhD (Rv3086).


### Change between visual representations

The buttons below the network view allows you to change between different visual representations of the same network. Try changing between the _confidence_ and _evidence_ views.

Which information is shown for the edges in each representation?

Why are there sometimes multiple lines connecting the same two proteins in the evidence representation?


### Modify the query parameters

Near the bottom of the network page you can find detailed parameters for the search, such as the types of evidence to use (_active prediction methods_), the _required confidence score_, and the number of _interactors shown_.

Change the required confidence to _high confidence_ (0.700). Does this change the set of proteins shown? Does it change the interactions shown? Why?

Turn off all evidence types except _experiments_. Does this change the set of proteins shown in the network? Why?

Increase the number of _interactors shown_ to 20. How many adhD interaction partners do you get in the network? Why?

Turn all evidence types back on.


### Inspect the evidence for interactions

One should not rely purely on the confidence scores; it is important to inspect the actual evidence underlying an interaction before relying on it, for example, for designing experiments.

Which type of evidence supports the interaction between insulin adhD and lipR?

Further detail on the evidence of an interaction can be seen in a popup by clicking on the corresponding edge in the network. Click on the edge between INSR and IRS1 to view its popup; you may need to move the nodes to make this easier.

Click on the show button to view the evidence for the interaction. In which organisms are the two genes observed in a putative operon? Is the operon organization always the same?


### Query for multiple proteins

In addition to providing interaction partners for a protein of interest, STRING is also commonly used to obtain a network for a set of proteins of interest. In this question, we will generate a protein network of the protein identified in a proteomics screen of the _M. tuberculosis_ cell wall.

Go to the paper [PMC2995261](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2995261/) and extract the protein names in Supplementary Table 2. Given up yet? Why do bioinformaticians strongly dislike tables distributed as multi-page PDF files?

You can find the full list of gene names from the table in [this file](./tuberculosis_proteins.txt).

Return to the front page of STRING and go to the _multiple names_ tab. Either paste in the list of protein names, or upload the file via the web interface. To speed up the query for this many proteins, you may want to specify that these are _M. tuberculosis_ proteins instead of relying on the species to be automatically detected.

The network obtained with default parameters contains a large central component with very high connectivity (colloquially referred to as a "hairball"). To produce a less highly connected network, restrict it to consider only high confidence (0.700) interactions.

The network contains some proteins with no interactions (singletons). Why do you see singletons when querying for multiple proteins and not when querying for only one protein?


### The advanced network viewer

Beneath the network there is a button that allows you to enable the _advanced_ network viewer, which provides additional functionality such as clustering and enrichment analysis.

Perform enrichment analyses for GO terms on the network. Do the enriched terms relate to the cell wall? Do the identified terms depend on the confidence cutoff chosen? Why?

To make the network look nicer, remove the singletons from the visualization by selecting Hide disconnected nodes from the Options menu.


### Explore the STITCH database

[STITCH](http://stitch-db.org) is a sister database of STRING that contains also small molecule compounds.

Search the STITCH database for _M. tuberculosis_ H37Rv adhD (Rv3086). What are some of the roles of the compounds in the network?
