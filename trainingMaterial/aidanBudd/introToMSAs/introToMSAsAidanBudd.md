---
title: Intro to multiple sequences alignments
layout: page
author: Aidan Budd
---

### [Presentation](./presentations/introToMSAs.pdf)

### Making an MSA is Easy?!

The act of taking a set of sequences, inputting them to an automatic MSA
tool, and obtaining a result is usually trivial.

#### Demonstration

- Download [this set of proteins](../commonFiles/sequences/src_human_ncbiBlastpDefaultsTop50Seqs.fasta) in FASTA format that are very similar to the human src (UniProt:SRC_HUMAN, [P12931](http://www.uniprot.org/uniprot/P12931)) protein
- Copy them into the [EBI MUSCLE web server](http://www.ebi.ac.uk/Tools/msa/muscle/)
- Press submit
- Enjoy the resulting MSA

#### Exercise

To see how easy it is to do this, try the demonstration above, trying to carry it out as quickly as possible.

### "Manual" Pairwise Sequence Alignments using JalView - All Files Containing only 2 Sequences

#### Demonstration

We will demonstrate aligning these [two tublin sequences](../commonFiles/sequences/TBA1A_HUMAN_vs_TBA_ENCCU.fasta) to each other [using JalView](./usingJalview.html). The demonstration will involve

- Loading the sequences into JalView using both
    - File-&gt;Input Alignment-&gt;from File
    - File-&gt;Input Alignment-&gt;from Textbox
- Changing the residue colouring scheme to:
    - Percentage Identity
    - Clustalx
- Inserting gaps into a sequence using the mouse
- Saving your work

Note that choosing/building an alignment is "simply" about deciding where gaps belong and where they do not belong.

We will also automatically build pairwise alignments of the sequences using three different approaches:

- [Smith-Waterman at the EBI (using Water from the EMBOSS package)](http://www.ebi.ac.uk/Tools/psa/) - [this link is to the protein implementation of this tool](http://www.ebi.ac.uk/Tools/psa/emboss_water/)
- [Needleman-Wunsch at the EBI (using Needle from the EMBOSS package)](http://www.ebi.ac.uk/Tools/psa/) - [this link is to the protein implementation of this tool](http://www.ebi.ac.uk/Tools/psa/emboss_needle/index.html)
- [BLAST2Sequences at the NCBI](http://blast.ncbi.nlm.nih.gov/Blast.cgi) - [this link is to the protein implementation of the tool](http://blast.ncbi.nlm.nih.gov/Blast.cgi?PROGRAM=blastp&BLAST_PROGRAMS=blastp&PAGE_TYPE=BlastSearch&SHOW_DEFAULTS=on&LINK_LOC=blasthome)

and compare the results of these approaches to the alignment we bulit "manually".

#### Exercises

Try building pairwise alignments yourself using JalView in a similar way with the pairs of sequences found in the following files.

Try also one (or more) of the automatic pairwise alignment tools listed
above.

Compare your "manual" alignment with the automatic alignments and:

- identify any differences between them
- try to decide which (the manual or one of the automatic alignments) you think is better

While carrying out the manual alignments, write down:

1. Features that describe a relatively "good" alignment, thinking in
    terms of
    - sizes of gaps
    - numbers of gaps
    - properties of residues in the same column (the same as each other? different?)
2.  Instructions on how to change a "bad" alignment into a better one
3.  Characteristics of sequences that are more difficult/take more time to align than others

Below are the sequences - if possible, try all of them, as they have been chosen to illustrate a range of different issues/points, and it will hopefully be useful for you to have encountered all of these.

- The same [two tubulin sequences](../commonFiles/sequences/TBA1A_HUMAN_vs_TBA_ENCCU.fasta) used in the demonstration above
- the [coding regions of the cDNA for the same two tubulin sequences](../commonFiles/sequences/TBA_ENCCU_vs_TBA1A_HUMAN_nucleotideSeqs.fasta) - note that to do the automatic alignments here you'll need to choose the nucleotide implementations of the tools
- [fragments of mouse and rat collagen 18s](../commonFiles/sequences/rat_mouse_collagen18_fragments_1.fasta)
- [ACTB\_CERPY and ACTB\_TRIVU](../commonFiles/sequences/ACTB_CERPY_vs_ACTB_TRIVU_fullLength.fasta)
- [SRC\_HUMAN and SRK3\_SPOLA](../commonFiles/sequences/SRC_HUMAN_vs_SRK3_SPOLA_55id_1gap.fasta)[ kinase domains](../commonFiles/sequences/SRC_HUMAN_vs_SRK3_SPOLA_55id_1gap.fasta)
- [ARPM1\_MOUSE and ACTB\_TRIVU](../commonFiles/sequences/ACTB_TRIVU_vs_ARPM1_MOUSE_id47_6gaps.fasta)
- [SRC-like Kinases SRC\_MOUSE and STK\_HYDAT](../commonFiles/sequences/SRC_MOUSE_vs_STK_HYDAT_SH3.fasta)
- [full length mouse and rat collagen 18s (for those who fancy a challenge)](../commonFiles/sequences/rat_mouse_collagen18_fullLength.fasta)