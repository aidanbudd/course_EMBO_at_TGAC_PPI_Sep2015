Version Control
***************

.. figure:: phd052810s.png

The Benefits of Version Control
*******************************

Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later.
The benefits are at hand:

- Track incremental backups and recover:
      Every document can be backed up automatically and restored at a second's notice.
- Track every change:
      Every infinitesimal change can be recorded and can be used to revert a file to an earlier state.
- Track writing experiments:
      Writing experiments can be sandboxed to copies while keeping the main file intact.
- Track co-authoring and collaboration:
      Teams can work independently on their own files, but merge them into a latest common revision.
- Track individual contributions: 
      Good VCS systems tag changes with authors who make them.

Single Repository
*****************

.. figure:: repo_single.png

    Files are `added` from the `working directory`, which always holds the
    current version of your files, to the `staging area`. `Staged` files will be stored into the repository in the next `commit`. 
    The repository itself contains all previous versions of all files ever committed.

Distributed Repository
**********************

.. figure:: repo_distributed.png

    Distributed Workflow using a centralized repository. Here, three local copies of one central repository allow you, 
    Jon and Matt to work on the same files and sync files between each other using the central server.


git at a Glance
***************


The git tool has many subcommands that can be invoked like `git <subcommand>` for instance `git status` to get the status of a repository.

The most important ones (and hence the ones we'll be focusing on) are:

init:
  initialize a repository
clone:
  clone a repository
status:
  get information about a repository
log:
  view the history and commit messages of the repository
add:
  add a file to the staging area
commit:
  commit your changes to your **local** repository
push:
  push changes to a **remote** repository
pull:
  pull changes from a **remote** repository
checkout:
  retrieve a specific version of a file

you can read more about each command by invoking the help: ::

 $ git commit --help
 $ git help commit



git Settings
************

setting your identity
=====================

Before we start, we should set the user name and e-mail address.
This is important because every git commit uses this information 
and it's also incredibly useful when looking at the history and commit log: ::

 $ git config --global user.name "John Doe"
 $ git config --global user.email johndoe@embl.de


Other useful settings include your favorite editor as well as difftool: ::

 $ git config --global core.editor vim
 $ git config --global merge.tool meld



Checking Your Settings
----------------------

You can use the `git config --list` command to list all your settings: ::

 $ git config --list
 user.name="John Doe"
 user.email=johndoe@embl.de
 core.editor=vim
 merge.tool=meld
 color.status=auto
 color.branch=auto
 color.interactive=auto
 color.diff=auto
 ...



A Typical git Workflow
**********************

Creating a git Repository
*************************

Turning an existing directory into a git repository is as simple as changing into that directory and :index:`invoking <init>`  `git init`. 
Here we first create an empty directory called `new_repository` and create a repository in there: ::

 $ mkdir new_repository
 $ cd new_repository
 $ git init

.. note:: As a result, there should be a directory called `.git` in this directory...


Cloning a git Repository
************************
Instead of creating a new directory, we can :index:`clone` a repository. That `origin` repository can reside in a different folder on our computer, on a
remote machine, or on a dedicated git server:

Local directory::

 $ git clone ../other_directory

Remote directory::

 $ git clone ssh://user@server/project.git

Remote git server::

 $ git clone git@server:user/project
 $ git clone git@git.embl.de:dinkel/linuxcommandline



Checking the Status
*******************

If you don't know in which state the current repository is in, it's always a good idea to check: ::

 $ git status

 # On branch master
 #
 # Initial commit
 #
 nothing to commit (create/copy files and use "git add" to track)


Adding files
************

First, we'll create a new file: ::

 $ echo "First entry in first file!" > file1.txt

 $ git status

 # On branch master
 #
 # Initial commit
 #
 # Untracked files:
 #   (use "git add <file>..." to include in what will be committed)
 #
 #       file1.txt
 nothing added to commit but untracked files present (use "git add" to track)

Now we'll add this file to the so called `staging area`: ::

 $ git add file1.txt

 $ git status

 # On branch master
 #
 # Initial commit
 #
 # Changes to be committed:
 #   (use "git rm --cached <file>..." to unstage)
 #
 #       new file:   file1.txt
 #

This tells us that the `file1.txt` has been added and can be committed to the repository.


Committing changes
******************

It might be a bit confusing at first to find out that `git add` does **not** add a file to the repository.
You need to `commit` the file/changes to do that: ::

 $ git commit -m "message describing the changes you made"

.. note:: You **MUST** provide a commit message! git will ignore your attempt to commit if the message is empty. 
 If you do not provide the `-m` parameter, git will open an editor in which you should write your commit message (can be multiple lines of text). 
 Once you save/quit your editor, git will continue to commit...

After succesfully committing, we can check the status again: ::
 
 $ git status

 # On branch master
 nothing to commit, working directory clean


Viewing the History
*******************

You can use `git log` to view the history of a repository. All previous commits including details such as 
Name & Email-address of the committer, Date & Time of the commit as well as the actual commit message are shown: ::

 $ git log

 commit  <some hash value identifying this commit>
 Author: <your name and email address>
 Date:   <the actual date of the commit>

 message describing the changes you made


Pushing changes
***************

If we had cloned this repository from a remote location, we probably want our changes to be propagated to that repository as well.
To push all committed changes, simply type: ::

 $ git push

.. note:: git "knows" from which location you had cloned this repository and will try to 
 push to exactly that location (using the protocol you used to clone: ssh, git, etc)...

.. warning:: If you get a warning message, you probably 'just' need to pull others changes before you are allowed to push your own...

Pulling changes
***************

To update your local repository with changes from others, you need to `pull` these changes.
In a centralized workflow you actually **must** pull changes that other people have contributed, before you can submit your own. ::

 $ git pull

.. warning:: Ideally, changes from others don't conflict with yours, but whenever someone else has edited the same lines in the same files as you, 
 you will receive an error message about a **merge conflict**. You will need to resolve this conflict manually, then add each resolved file (`git add`) and commit.

.. echo "And another entry in a second file." > file2.txt
.. git add file2.txt


Undo local changes
***************

One of the great features of using version control is that you can revert (undo) changes easily.
If you want to undo all changes in a local file, you simply checkout the latest version of this file: ::

 $ git checkout -- <filename>

.. warning:: You will loose all changes you made since the last commit!



Using centralized workflow
***************************

When you want to use one central repository, to which everybody can push/pull, 
you should initialize this repo like so::

 $  git init --bare

Basically what this does is create a repository which all the files from the `.git` directory in the working directory.
This also means that you should never add/edit/delete files in this directory. Rather clone this directory in another folder/computer,
edit files there and commit/push...

.. figure:: repo_distributed.png

.. EMBL git server
.. ***************
.. 
.. As part of the Bio-IT initiative, EMBL provides a central git server which can be used as a centralized resource to share and exchange data/code with collaborators:
.. 
.. http://git.embl.de/
.. 
.. The following rules apply:
.. 
.. - Repositories on the EMBL Git server are only granted to EMBL staff members.
.. - External users can be added as cooperators on a project, but the projects themselves have to be lead by someone with an active EMBL contract.
.. - Should the project leader leave EMBL, then the project has to be transferred to someone else or the complete repository will be removed.
.. - Repositories are always installed as sub-repositories of the project leader/repository responsible.
.. - By default, repositories are installed with only basic access permissions for the repository owner. He/she is then in charge of setting appropriate access permissions as 
..   described on the `Howto <http://git.embl.de/howto.html>`_ page.
.. 
.. Basically, to use this server, you need to provide your full name, your EMBL
.. email address and username, the name and a short description of the
.. repository/project, along with your SSH public key to the admin and he will set
.. things up so you are able to access your repository: ::
.. 
..  $ git clone git@git.embl.de:your_username/your_repository
.. 
.. .. note:: It's important to mention that the username for accessing the git.embl.de server is always **git**, not **your** username!
.. 
.. An SSH key can be generated using the command `ssh-keygen` (Windows users might want to use `putty <http://the.earth.li/~sgtatham/putty/latest/x86/putty.exe>`_) like so: ::
.. 
..  ssh-keygen 
.. 
..  Generating public/private rsa key pair. 
..  Enter file in which to save the key (/home/username/.ssh/id_rsa): 
..  Created directory '/home/username/.ssh'. 
..  Enter passphrase (empty for no passphrase): 
..  Enter same passphrase again: 
..  Your identification has been saved in /home/username/.ssh/id_rsa. 
..  Your public key has been saved in /home/username/.ssh/id_rsa.pub. 
..  The key fingerprint is: 2d:14:f5:d8:... username@hostname 
..  
.. This creates two files, in this case `/home/username/.ssh/id_rsa` and
.. `/home/username/.ssh/id_rsa.pub`. The former is your **private** key and should
.. **never** be handed out to anybody, while the latter one (ending in `.pub`)
.. should be distributed to any server on which you intend to use it...
.. 
.. 
