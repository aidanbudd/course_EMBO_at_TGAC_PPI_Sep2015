---
title: STRING exercises - REST services
author: Lars Juhl Jensen
---

### Background

STRING is available to users in several ways. One is the web interface, which you have already seen. Another, is the ability to download the complete network as text files, which is useful for large-scale analyses. The REST API serve as a middle ground, allowing software to fetch information from STRING in a computer-readable form.

The exercises below will illustrate only some aspects of its functionality; for full details please refer to the [API documentation](http://string-db.org/help/index.jsp?topic=/org.string-db.docs/api.html).


### Integrating a STRING network in a web page

The network shown below does not reside in Git. Instead it is fetched by your web browser when viewing this page. This implies that when we update STRING, the network image may change, without this page being changed.

<img src="http://string-db.org/api/image/network?identifier=9606.ENSP00000303830&required_score=900&limit=10&network_flavor=confidence" />

This is done by including the following URL as an image in the HTML / Markdown page:

    http://string-db.org/api/image/network?identifier=9606.ENSP00000303830&required_score=900&limit=10&network_flavor=confidence

Try opening the URL in your web browser and changing the different parameters to lower the confidence cutoff, increase the number of proteins shown, and changing the network mode from _confidence_ to _evidence_.


### Retriving a network in tab-delimited format

An image is nice to look at, but it is not useful for computational analysis. The REST API allows you to retrieve the same network in the PSI-MI tab-delimited format using the following URL:

    http://string-db.org/api/psi-mi-tab/interactions?identifier=9606.ENSP00000303830&required_score=900&limit=10

Retrieve this interaction network from the command line (optionally using different parameters). Look at the file to understand the format.


### Resolving names to identifiers

In both of the exercises above, you need to specify human INSR as ``9606.ENSP00000303830``, which is the STRING identifier of the protein. The following URL allows you to resolve, for example, the UniProt identifier ``INSR_HUMAN`` to what the protein is called in STRING.

    http://string-db.org/api/tsv/resolve?identifier=INSR_HUMAN

Retrieve this information from the command line and take a look at it.


### Identifying names in text

The named entity recognition engine (tagger) used by STRING and STITCH is also available via a REST API. This allows you to submit your own texts, in which names should be identified.

To inspect the results of doing this, the tagger can visualize them using this URL:

    http://tagger.jensenlab.org/Extract?document=Insulin%20is%20secreted%20by%20pancreatic%20beta%20cells,%20which%20are%20destroyed%20in%20type-1%20diabetes%20mellitus.&entity_types=9606+-22+-25+-26

However, if you want to use the tagger from a script, you will more likely want the tab-delimited results:

    http://tagger.jensenlab.org/GetEntities?document=Insulin%20is%20secreted%20by%20pancreatic%20beta%20cells,%20which%20are%20destroyed%20in%20type-1%20diabetes%20mellitus.&entity_types=9606+-22+-25+-26&format=tsv

For details on all the parameters please refer to [the documentation](https://extract.hcmr.gr/).
