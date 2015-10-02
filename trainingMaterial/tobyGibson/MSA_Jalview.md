---
title: MSA & Jalview
author: Toby Gibson
---

[Presentation Slides](./Norwich-EMBO_PPI-Cell-Reg_Toby_9-15.pdf)

In these exercises, we will introduce and work with Jalview, the JAVA Alignment Viewer. Jalview is powerful visualisation software that can allow alignments to be generated, manipulated, edited and annotated. It interfaces remotely with tools such as multiple sequence alignment programs and secondary structure predictors. We will visualise alignments of modular proteins with Jalview, discussing sequence features such as folded protein domains, short functional peptide motifs and natively disordered polypeptide. These structure-function modules will reappear regularly during the course.

The JalView developers have prepared training videos for YouTube. You can access these at the [JalView Youtube channel](https://www.youtube.com/channel/UCIjpnvZB770yz7ftbrJ0tfw).


## Part 1. Using Jalview with Epsins

-   Go to the Jalview [downloads page](http://www.jalview.org/download.html) and choose “Launch Jalview Desktop”
-   Load a set of sequences by cut and paste into Jalview using:
-   File-\>Input Alignment-\> from Text Box
-   Cut the sequences from [this page of Epsin Sequences](epsins.fasta) in FASTA format
-   Remotely align sequences via the Web Service-\>Alignment-\> options (Choose a service and run with defaults)
-   Different participants can do the alignment using different MSA tools so we can compare the results afterwards
-   Examine the alignment, identify possible regions of misalignment, and try correcting these by moving bits of sequence as described in the [Jalview documentation](http://www.jalview.org/examples/editing.html); remember to Select-\>Deselect All if you are unable to make the edits you want
-   Get a remote secondary structure prediction by the JNet surver using the Web Service link
-   Select the Epn1_Human sequence. Get a remote natively disordered structure prediction from one of the Protein Disorder Web Service links
-   Look at the conservation of some short motifs from the ELM Server, [DPW](http://elm.eu.org/elms/elmPages/LIG_AP2alpha_2.html), [NPF](http://elm.eu.org/elms/elmPages/LIG_EH_1.html), and [clathrin boxes](http://elm.eu.org/elms/elmPages/LIG_Clathr_ClatBox_1.html) using JalView Select-\>Find…-\> and copying over the appropriate motif text pattern, and then clicking Find All
-   Follow this up by creating and naming a New Feature from the pattern matches
-   Save the annotated alignment data in a file in Jalview format – this allows you to examine in the future these and other features/annotations you may add to your alignment File-\>Save As-\>FileFormat Jalview (.jar)
-   Sort the order of sequences in the alignment, clustering by pairwise identity Calculate-\>Sort-\>By Pairwise Identity

### Questions:

1. What is the basis for the “ClustalX” colouring scheme provided by Jalview?
-   which residues are assigned similar colours?
-   which residues are assigned different colours?
-   in which situations are residues left uncoloured?
-   are there residues that are always coloured? Why is that useful?
-   try some other colouring schemes.
2. Are matches to the linear motif regular expressions more likely to be conserved in regions known/predicted to be globular or in IUP regions? Does the JNet 2D structure predictor suggest large numbers of alpha helices and beta strands throughout the alignment?
3. What are the characteristics of regions of the MSA that you expect to be well aligned? Consider:
-   residue identity/property conservation
-   number and size of gaps
4. Would you expect the affinity of a domain – linear motif interaction to be higher or lower than one between two domains? Why? What assumptions are you making about the nature of these different kinds of interactions?

## Part 2. Using Jalview with p53s

Try a similar exercise yourself using p53 sequences (perhaps using this linked set of [unaligned p53 sequences](p53.fasta)). Search in the sequences and make new features with different colours and names for the following motifs:
-   [Cyclin box](http://elm.eu.org/elms/elmPages/DOC_CYCLIN_1.html)
-   [SUMO modification site](http://elm.eu.org/elmPages/MOD_SUMO.html)
-   [SUMO reversed site](http://elm.eu.org/elms/MOD_SUMO_rev_2.html)
-   [MDM2-interaction motif](http://elm.eu.org/elms/DEG_MDM2_SWIB_1)
-   Also put in this long version of the CDK phosphosite [ST]P..[RK] which is not yet in ELM.

### Questions:

5. Some of the sequences included in the MSA are shorter than others. Why might this be? Do all sequences begin with a Met residue? If you want a high quality alignment, will you keep these sequences or discard them?
6. Do all p53 sequences have MDM2 interaction motifs? Are they all the same length? How can an alpha helical sequence vary in length?
7. Do all p53 sequences have cyclin box candidates? Are they all in the same place in the sequences?
8. Do all p53 sequences have CDK sites? CDK sites require cyclin boxes to function? Is there any correlation between the presence or absence of cyclin and CDK sites?
9. Do all P53 sequences have SUMO sites? Can they all be aligned? If not, is there an evolutionary process that can account for their change in position?
9. Do all P53 sequences have revertsed SUMO sites? Can they all be aligned? 
-   If some SUMO sites cannot be aligned, is there an evolutionary process that can account for their change in position?

## Part 3. Using Jalview with TIR protein isolates from pathogenic E. coli

TIR proteins are secreted by pathogenic E. coli. They attach to targeted mammalian cells and both the N- and C- termini enter through the membrane, taking over the local cell regulation and, with other inserted proteins, induce the actin pedestal. The central portion of TIR remains extracellular and is bound by the bacterium. Many TIR isolates have been sequenced and are in Uniprot. Load by cut and paste this [already aligned set of TIR proteins](tir.fasta) into Jalview. Go to the ELM server that you have just been using and find the Cyclin and CDK motif entries and use the regular expressions to create new features in all sequences. Do all sequences have both motifs? Are they all alignable, or can they move around? Some are juxtaposed – can they both be functional at the same time? Note that as far as we know in creating this exercise, these motifs have not been studied, but there is some evidence that cell cycle is disrupted by pathogenic E. coli (e.g. [PMID: 11598051](http://www.ncbi.nlm.nih.gov/pubmed/11598051)). Proteins that are natively disordered, and contain linear motifs to control cell regulation, might commonly be secreted by pathogens into the cells that they take over.

## Publications

- *Jalview Version 2–a multiple sequence alignment editor and analysis workbench.*
 Waterhouse AM, Procter JB, Martin DM, Clamp M, Barton GJ. Bioinformatics. 2009 May 1;25(9):1189-91.
 [PMID: 19151095](http://www.ncbi.nlm.nih.gov/pubmed/19151095)

- *Fast, scalable generation of high-quality protein multiple sequence alignments using Clustal Omega.*
 Sievers F, Wilm A, Dineen D, Gibson TJ, Karplus K, Li W, Lopez R, McWilliam H, Remmert M, Söding J, Thompson JD, Higgins DG. Mol Syst Biol. 2011 Oct 11;7:539.
 [PMID: 21988835](http://www.ncbi.nlm.nih.gov/pubmed/21988835)

