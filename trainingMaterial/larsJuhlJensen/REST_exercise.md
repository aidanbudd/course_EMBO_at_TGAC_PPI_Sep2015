---
title: STRING exercises - REST services
author: Lars Juhl Jensen
---

### 

The exercises below will illustrate only some aspects of its functionality; for full details please refer to the [API documentation](http://string-db.org/help/index.jsp?topic=/org.string-db.docs/api.html).


### Integrating a STRING network in a web page

The network shown below does not reside in Git. Instead it is fetched by your web browser when viewing this page. This implies that when we update STRING, the network image may change, without this page being changed.

<img src="http://string-db.org/api/image/network?identifier=9606.ENSP00000303830&required_score=900&limit=10&network_flavor=confidence" />

    http://string-db.org/api/image/network?identifier=9606.ENSP00000303830&required_score=900&limit=10&network_flavor=confidence


### Retriving a network in tab-delimited format

An image is nice to look at but not useful for computational analysis. The REST API allows you to retrieve the same network in the PSI-MI tab-delimited format using the following URL:

    http://string-db.org/api/psi-mi-tab/interactions?identifier=9606.ENSP00000303830&required_score=900&limit=10



