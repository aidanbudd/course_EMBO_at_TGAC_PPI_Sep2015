Using RAxML\
============

------------------------------------------------------------------------

-   [Getting RAxML](#Getting_RAxML_)
-   [Tree and Alignment Input Format](#Tree_and_Alignment_Input_Format)
-   [Estimating a Single Maximum-Likelihood Tree from Protein
    Sequences](#Estimating_a_Single_Maximum-Likelihood)
-   [Estimating a Set of Non-Parametric Bootstrap
    Trees](#Estimating_a_Set_of_Non-Parametric_)
-   [Projecting Bootstrap Confidence Values onto ML
    Tree](#Projecting_Bootstrap_Confidence_Values)
-   [List of Relevant Command-Line
    Parameters](#List_of_Relevant_Command-Line_Parameters)
-   [Specifying the Amino-Acid Substitution
    Model](#Specifying_the_Amino-Acid_Substitution)
-   [List of Amino-Acid Matrices](#List_of_Amino-Acid_Matrices)

------------------------------------------------------------------------

### Getting RAxML\

RAxML is a fast implementation of maximum-likelihood (ML) phylogeny
estimation that operates on both nucleotide and protein sequence
alignments.\
\
 You can download the latest version of RAxML from [this
website](http://icwww.epfl.ch/%7Estamatak/index-Dateien/Page443.htm).
After downloading and installing the software, it can be executed from
the command line\
\
 It can also be used remotely from the webserver [hosted at
CIPRES](http://8ball.sdsc.edu:8889/cipres-web/Bootstrap.do).\
\
 However, as these ML analyses can be rather time-consuming,
particularly when teaching we would prefer not to overload a webserver
with too many jobs. Thus, the instructions below describe using a local
command-line installation of RAxML.\
\
 Note, also, that the instructions below describe only a very limited
subset of the functionality of RAxML, focused on obtaining a
non-parametric bootstrapped analysis based on a protein sequence
alignment.\
\
 [This link is to a
PDF](http://icwww.epfl.ch/%7Estamatak/index-Dateien/software/RAxML-Manual.7.0.4.pdf)
of the documentation for RAxML version 7.0.4\

### Tree and Alignment Input Format

RAxML accepts both trees and alignments in PHYLIP format.\

### Estimating a Single Maximum-Likelihood Tree from Protein Sequences

An example of a command-line string used to estimate such a tree:\

> **raxmlHPC -s TF105399.phy -n TF105399.raxml.singleTree -c 4 -f d -m
> PROTGAMMAJTT**\

-   Uses the "raxmlHPC" program\
-   Processes sequence alignment stored in the file TF105399.phy
    ("-s TF105399.phy")
-   Stores results in files whose names begin
    "TF105399.raxml.singleTree" ("-n TF105399.raxml.singleTree")
-   Alignment contains amino acid sequences ("-m PROT....")
-   Substitution model based on the JTT substitution matrix
    ("-m ....JTT...")
-   Substitution model uses the default set of amino acid frequencies
    (no "F" at end of "-m" string) used to calculate the JTT matrix
-   Uses the default estimation algorithm ("-f d")

### Estimating a Set of Non-Parametric Bootstrap Trees\

An example of a command-line string used to estimate a set of such
trees:\

> **raxmlHPC -s TF105399.phy -n TF105399.raxml -c 4 -f d -m PROTGAMMAJTT
> -b 234534251 -N 10**\

-   Uses the "raxmlHPC" program\
-   Processes sequence alignment stored in the file TF105399.phy
    ("-s TF105399.phy")
-   Stores results in files whose names begin "TF105399.raxml"
    ("-n TF105399.raxml")
-   Alignment contains amino acid sequences ("-m PROT....")
-   Substitution model based on the JTT substitution matrix
    ("-m ....JTT...")
-   Substitution model uses the default set of amino acid frequencies
    (no "F" at end of "-m" string) used to calculate the JTT matrix
-   Uses the default estimation algorithm ("-f d")
-   Analyses 10 alignments calculated obtained from the input alignment
    by random sampling with replacement ("-N 10"), with the randomiser
    using 234534251 as a seed ("-b 234534251")

### Projecting Bootstrap Confidence Values onto ML Tree

The command-line string below operates on\

-   a set of non-parametrically bootstrapped tree topologies
-   a single tree (typically the ML tree)
-   an alignment

and integrates this information to output the ML tree with both ML
branch lengths and the frequencies with which the splits in this tree
are observed in the bootstrapped dataset (i.e. the "bootstrap confidence
values")\

> **raxmlHPC -f b -m PROTGAMMAJTT -c 4 -s TF105399.phy -z
> RAxML\_bootstrap.TF105399.raxml -t
> RAxML\_result.TF105399.raxml\_singleTree -n BS\_TREE**\

-   Uses the "raxmlHPC" program
-   Calculates output tree branch lengths using the alignment in file
    TF105399.phy ("-s TF105399.phy")
-   Uses the set of splits found in a (usually bootstrapped) set of tree
    topologies (filename containing these trees specified using -z
    "-z RAxML\_bootstrap.TF105399.raxml") to label the branches of
    another tree (filename containing this tree specified using -t
    "-t RAxML\_result.TF105399.raxml\_singleTree") ("-f b")
-   Alignment contains amino acid sequences ("-m PROT....")
-   Substitution model based on the JTT substitution matrix
    ("-m ....JTT...")
-   Substitution model uses the default set of amino acid frequencies
    (no "F" at end of "-m" string) used to calculate the JTT matrix
-   Writes the results to files with a basename "BS\_TREE" (-n
    BS\_TREE)\

### List of Relevant Command-Line Parameters

**-m**\

-   description of the substitution model used in calculating trees
-   explained below under "Specifying the Amino-Acid Substitution Model"
-   example: -m PROTWAGF

**-c**\

-   number of categories used in the discrete approximation of the gamma
    distribution
-   explained below under "Specifying the Amino-Acid Substitution Model"
-   example: -c 4

**-N**\

-   number of bootstrapped datasets to be processed
-   example: -N 100

**-f**\

-   specifies the algorithm to be used in calculations
-   we will use either
-   "-f d" - the default setting
-   "-f b" - labels the branches on a single tree with the frequencies
    with which they appear in a set of other trees\

**-s**\

-   name of input file
-   example: -s infile.phy

**-n**\

-   basename of output files
-   example: -n infile\_RAxML

**-b**\

-   a random seed used for providing bootstrap datasets
-   example: -b 3566122

**-z**\

-   specifies the name of a file containing multiple NEWICK/PHYLIP
    format trees
-   example: -z multipleBootstrappedTrees.phy

**-t**\

-   specifies the name of a file containing a user-specified tree in
    Newick format. Branch lengths supplied in this file will be ignored.
-   example: -t userTree.phy

### Specifying the Amino-Acid Substitution Model

The model is specified by supplying\

-   an appropriate string to the -m command-line option
-   if a discrete-gamma distribution is used to describe between-site
    rate variation, the number of discrete categories to be used is
    specified using the -c command-line option

The string supplied to the -m option (as we will be using it - there are
additional options, but we will be ignoring them) is made up of several
components, which must be concatenated in this order\

1.  "PROT" to indicate that a protein/amino acid model is being
    specified
2.  "GAMMA" if a discrete-gamma distribution is being used to account
    for between-site rate variation
3.  the name of one of the amino-acid matrices e.g. "JTT"
4.  "F" if amino-acid frequencies should be estimated from the input
    alignment

For example, this string "**PROTGAMMAJTT"** specifies\

-   an amino acid substitution model (PROT)
-   with gamma-distributed rate variation (GAMMA)
-   using the distribution of amino acid frequencies found in the
    matrices used to estimate the JTT matrix (as there is no
    "F" specified)

Note that while RAxML allows rate variation to be modeled using a
discrete-gamma distribution combined with an estimate of a proportion of
invariant sites (using GAMMAI instead of just GAMMA), models are not
provided that estimate only a proportion of invariant sites\

#### List of Amino-Acid Matrices

There are 10 different matrices that can be used with this option, which
were estimated from different alignments. The names of the different
matrices are given below - the RAxML manual provides more information
about them\

-   DAYHOFF
-   DCMUT
-   JTT
-   MTREV
-   WAG
-   RTREV
-   CPREV
-   VT
-   BLOSUM62
-   MTMAM

------------------------------------------------------------------------

Author: [Aidan
Budd](http://www-db.embl.de/jss/EmblGroupsHD/per_1807.html)\
 [Back To Gibson Team Training
Pages](http://www.embl-heidelberg.de/%7Eseqanal/courses/student.html)\

------------------------------------------------------------------------
