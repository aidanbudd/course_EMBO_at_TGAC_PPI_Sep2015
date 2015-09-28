---
title: Software notes
layout: page
author: Aidan Budd
---

Notes on using VMs during the course

## Ubuntu VM

### List of shortcuts

On my (Aidan's) MacBook Pro, I get the list of shortcuts for the Ubuntu VM using leftclick-leftcommand

### Moving desktop windows from fullscreen

If you maximise a window on the desktop, just click on the top bar of the window, and drag down, to stop it filling the screen.

### Copy and paste

Highlight the text you want to with your pointer, then right-click and choose **copy**. To paste, left-click to place the cursor, then right-click and choose **paste**. We did find yet a key shortcut to do this.

Note - it's not possible to copy and paste text between the VM and the rest of your laptop!

### Opening a new window of an application (Firefox, Terminal, etc.)

Right-click on the icon for the application in the left icon bar, and then choose "Open a new window".

### Running Jalview

Navigate using the "Files" file browser (icon bar, second from top left) to the "Downloads" directory.

Double-click on the "jalview.jnlp" icon

### Simple text editor

Search (icon bar, top left) for 'gedit' and click the gedit/text editor icon.

OR

Use the Terminal to type

     $ gedit &

## NoMachine graphics

To edit how the NoMachine remote desktop shows the desktop from my Ubuntu VM, I go to the top right corner of the remote destop, the top of the page peels back, I can click on there, and specify e.g. "Full screen" and lots of other options.

## Updating training repo

Open a terminal, and move to the git repo directory (on the Desktop) - probably:

    $ cd Desktop
    $ cd course_EMBO_at_TGAC_PPI_Sep2015

Pull any changes

    $ git pull