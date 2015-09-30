---
title: STRING exercises - Diabetes
author: Lars Juhl Jensen
---

# STRING exercises: Diabetes


## Query STRING for a single protein

Go to http://string-db.org/ and query for human insulin receptor (INSR) using the search by name functionality.


## Change between visual representations.

The buttons below the network view allows you to change between different visual representations of the same network. Try changing between the confidence and evidence views.

Which information is shown for the edges in each representation?

Why are there sometimes multiple lines connecting the same two proteins in the evidence representation?


## Inspect the evidence for interactions

One should not rely purely on the confidence scores; it is important to inspect the actual evidence underlying an interaction before relying on it, for example, for designing experiments.

Which types of evidence support the interaction between insulin receptor (INSR) and insulin receptor substrate 1 (IRS1)?

Further detail on the evidence of an interaction can be seen in a popup by clicking on the corresponding edge in the network. Click on the edge between INSR and IRS1 to view its popup; you may need to move the nodes to make this easier. Which type of evidence gives the largest contribution to the confidence score?

Click on the show button to view the experimental evidence for the interaction. Which types of experiments support this interaction?

Go back to the network and similarly inspect the text-mining evidence for the same interaction.


## Modify the query parameters

Near the bottom of the network page you can find detailed parameters for the search, such as the types of evidence to use (active prediction methods), the required confidence score, and the number of interactions shown.

Change the required confidence to highest confidence (0.900). Does this change the set of proteins shown? Does it change the interactions shown? Why?

Turn off all evidence types except experiments. Does this change the set of proteins shown in the network? Why?

Increase the number of interactors shown to 50. How many INSR interaction partners do you get in the network? Why?

Turn all evidence types back on. How many INSR interactors do you find? Why?


## Query STRING for multiple proteins

In addition to providing interaction partners for a protein of interest, STRING is also commonly used to obtain a network for a set of proteins of interest. In this question, we will generate a diabetes protein network, which will also be used in the subsequent Cytoscape exercise. To this end we provide you with [this file](./diabetes_proteins.txt) with 287 proteins associated with diabetes mellitus according to the [DISEASES databas](http://diseases.jensenlab.org).

Return to the front page of STRING and go to the multiple names tab. Either paste in the list of identifiers of diabetes proteins, or upload the file via the web interface. To speed up the query for this many proteins, you may want to specify that these are human proteins instead of relying on the species to be automatically detected.

The network obtained with default parameters contains a large central component with very high connectivity (colloquially referred to as a "hairball"). This is primarily because many of the proteins have been studied extensively, in part due to their role in diabetes. To produce a less highly connected network, restrict it to consider only high confidence (0.700) interactions.

The network contains some proteins with no interactions (singletons). Why do you see singletons when querying for multiple proteins and not when querying for only one protein?


## The advanced network viewer of STRING

Beneath the network there is a button that allows you to enable the advanced network viewer, which provides additional functionality such as clustering and enrichment analysis.

Perform enrichment analyses for GO terms and KEGG pathways on the network. Do the enriched terms relate to diabetes? Do the identified terms depend on the confidence cutoff chosen? Why?

To make the network look nicer, remove the singletons from the visualization by selecting Hide disconnected nodes from the Options menu.

Perform MCL clustering of the network via the _Clustering_ menu. The slider allows you to chance the _inflation factor_, which is the key parameter influencing the number of clusters in MCL.


## Explore the STITCH sister database

[STITCH](http://stitch-db.org) is a sister database of STRING that contains also small molecule compounds.

Search the STITCH database for the drug metformin. What are some of the roles of the proteins in the network?
