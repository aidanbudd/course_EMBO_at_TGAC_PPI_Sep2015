---
title: Biology and prediction of intrinsically unstructured peptide regions
author: Zsuzsanna Dosztanyi
---

# PART 1

# Prediction of protein disorder

## Exercise 1

### DISPROT database and analyzing calcineurin A

1.  Find calcineurin A (PP2BA\_HUMAN) in DISPROT
    [www.disprot.org](http://www.disprot.org/)
    
    You can start from UNIPROT, it has a link to DISPROT 
    or search DISPROT directly by keyword (sequence search does not work).

    1. What kind of information can you find on this page?
    2. Which regions are marked as disordered in DISPROT?
    3. Which regions are marked as ordered DISPROT?
    4. By what experimental techniques?
    5. What is the role of the disordered segments?


>> (DP00092)

##  Exercise 2 

### Disorder prediction methods 

1.  Collect prediction outputs for calcineurin A using various methods


The input can be:

- the amino acid sequence in FASTA format
- amino acid sequence in raw format (without header)
- UNIPROT ID or accession number

>Please note, some methods are sensitive to line breaks.
>Minimum and maximum length of sequence 

Some disorder prediction methods:

- IUPred [http://iupred.enzim.hu](http://iupred.enzim.hu/)
- Globplot [http://globplot.embl.de/](http://globplot.embl.de/)
- PONDR-FIT
[http://www.disprot.org/pondr-fit.php](http://www.disprot.org/pondr-fit.php)
- PredictProtein
[http://ppopen.informatik.tu-muenchen.de/](http://ppopen.informatik.tu-muenchen.de/)
(MD, UCON, Norsp, Profbval)
- DISOPRED3 [http://bioinf.cs.ucl.ac.uk/psipred/](http://bioinf.cs.ucl.ac.uk/psipred/)
      (choose Disopred2 and 3 option!!!)
- or any other method you like.



2. Do the predictions agree with the experimental characterization of disorder?
3. Do the predictions agree with each other?
4. Which method predicts the most disorder?
5. Note the differences in the running time of the methods.



## Exercise 3 

### MobiDB database

1. Find calcineurin in MOBIDB
 [http://mobidb.bio.unipd.it/entries/Q08209](http://mobidb.bio.unipd.it/entries/Q08209)

You can find the output of several other methods there.

1. Which regions are predicted as disordered by the majority of methods?
2. Which regions have matching PDB structure?
3. Can you find regions that cannot be unambigiously assigned? 
    What could be the reason for that?    



## Exercise 4

### Analyze DISPROT DP00039 : a highly disordered protein 
   
1. Predict protein disorder for DISPROT DP00039
2. Count number of positively charged amino acids
3. Count number of negatively charged amino acids
4.  Calculate net charge 
    (or use the [protparam](http://web.expasy.org/protparam/) server)
5. Check low complexity segments (you can take these from PFAM through
    uniprot)
6. Check PFAM domains

Is there a contradiction between PFAM domain assignments and predicted disorder?


## Exercise 5

### Finding suitable targets for structure determination.

One of the main applications of disorder prediction methods is to find regions that are suitable for structure determination


1. Which region of this protein would you try to crytallize?

   \>mystery protein
   MMQDLRLILIIVGAIAIIALLVHGFWTSRKERSSMFRDRPLKRMKSKRDDDSYDEDVEDD
   EGVGEVRVHRVNHAPANAQEHEAARPSPQHQYQPPYASAQPRQPVQQPPEAQVPPQHAPH
   PAQPVQQPAYQPQPEQPLQQPVSPQVAPAPQPVHSAPQPAQQAFQPAEPVAAPQPEPVAE
   PAPVMDKPKRKEAVIIMNVAAHHGSELNGELLLNSIQQAGFIFGDMNIYHRHLSPDGSGP
   ALFSLANMVKPGTFDPEMKDFTTPGVTIFMQVPSYGDELQNFKLMLQSAQHIADEVGGVV
   LDDQRRMMTPQKLREYQDIIREVKDANA

 [DisMeta](http://www-nmr.cabm.rutgers.edu/bioinformatics/disorder/) is another disorder prediction server that was developed specifically for construct desing for X-ray crystallography. 
 It is a slow method, so the precomputed prediction result can be found here:
 [DisMeta results](http://www-nmr.cabm.rutgers.edu/bioinformatics/disorder/dismeta_results/test-YSlZ/test-YSlZ_predictResults.html)

2. Check, which region has a structure?

> Blast the sequence against Uniprot or PDB, or do a Blast against the PDB.


## Excercise 6

### Characterize human N-WASP ([O00401](http://www.uniprot.org/uniprot/O00401)) protein from the viewpoint of order and disorder

1. You can check PDB structures for this protein here:
    [http://www.rcsb.org/pdb/protein/O00401](http://www.rcsb.org/pdb/protein/O00401)
2. Find PFAM families
    check what is type of the PFAM entry
    1. Click on the domain
    2. Click on "Curation and model"
    3. Check type: 
    
-domain 
-family
-motif

3. Find low complexity regions. Which amino acids dominate in the low complexity region?
4. Predict disorder (e.g. with IUPred)
5. Which regions would you call disordered?



# PART 2

#Finding functional regions within IDPs 


## Exercise 7        

### Disordered binding regions for N-WASP

1. Using the accession number for human N-WASP, find the data for this protein in the IDEAL database
IDEAL [http://www.ideal.force.cs.is.nagoya-u.ac.jp/IDEAL/](http://www.ideal.force.cs.is.nagoya-u.ac.jp/IDEAL/)
2. Can you find regions for this proteins that are annotated as disordered binding regions (called **ProS** in this database) ?
3. Predict disordered binding regions using ANCHOR [http://anchor.enzim.hu](http://anchor.enzim.hu/)
Can you find predicted binding regions for this protein?

> From what you know about this protein, does the prediction is supported by experimental data?


## Exercise 8        

## Disordered binding regions for human p53
      

1. Predict disordered binding regions for p53
Use ANCHOR [http://anchor.enzim.hu](http://anchor.enzim.hu/) 
The DISOPRED results can be found here :
[DISORPED](http://bioinf.cs.ucl.ac.uk/psipred/result/4f7b2286-6766-11e5-8c47-00163e110593)
2. Check IDEAL to find regions that are involved in forming complexes  
   Focus on the C-terminal region

    1. How many different binding partners can you see there?
    2. What type of secondary structures they adopt in the complex
    check PDB 
- 1ma3
- 1h26
- 1jsp
- 1dt7  
    
3. How well predictions agree with known binding region?
4. Check the predicted secondary structure for this protein (using PSIPRed that comes with DISOPRED)
What is the predicted secondary structure for the C-terminal region?


## Exercise 9

###    

> Dynein light chain protein binds to disordered segments that have a TQT binding motifs. One of its known interaction partner is FA83D ( Q9H4H8 ) with the region VGTQTS.
> We found  the same sequence in the protein ASNSD1.

 
1. Do you think it can be a valid binding partner?

> Hint: Predict disordered binding regions (e.g. with ANCHOR)

> You can add the VGTQTS motif to the search too in the motif window

> Is the matching region predicted to have a disordered binding region?


## Exercise 10

### PED database

1. In the PED database find the enrty corresponding to Sic1 PED5AAC
This entry contains the ensemble of the fuzzy complex between Sic1 and CDC4.
2. How many conformers are in ensemble 3?
3. What is the largest and smallest radius of gyration in ensemble 3?



## Exercise 11

### Prediction binding sites based on patterns of conservation

1. Collect the sequence for uniprot entry Q9UK97
2. Predict disordered binding regions using ANCHOR
3. Run the prediction for this entry using the SlimPrints server
    [http://bioware.ucd.ie/~compass/biowareweb/Server\_pages/slimprints.php](http://bioware.ucd.ie/~compass/biowareweb/Server_pages/slimprints.php)
4. Which is the most significant hit?
    Look at the alignment. Which positions are the most conserved in this region?



