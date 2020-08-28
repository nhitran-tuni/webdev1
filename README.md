# This is your repository for WebDev1 exercises
TODO: GENERAL INSTRUCTIONS 

## Using Docker to create and run a development environment on your machine
TODO

## Using Vagrant to create and run a development environment on your machine
From [Vagrants Introduction](https://www.vagrantup.com/intro):
>Vagrant is a tool for building and managing virtual machine environments in a single workflow. With an easy-to-use workflow and focus on automation, Vagrant lowers development environment setup time, increases production parity, and makes the "works on my machine" excuse a relic of the past.

To start using Vagrant on your machine, first install the needed softwares

- install VirtualBox, which is used by Vagrant. [Virtualbox downloads](https://www.virtualbox.org/wiki/Downloads)
- install Vagrant. [Vagrant downloads](https://www.vagrantup.com/downloads)

After you have successfully installed both VirtualBox and Vagrant, you get to setup and access the virtual environment by using files in this repository. This repository has a _Vagrantfile_ file in its root folder, and _/vagrant_ folder, which holds _provision.sh_ file which is called from the _Vagrantfile_. You should read through these files, but you don't (and shouldn't) edit them.

In the root directory of this repository where the _Vagrantfile_ is, first run this command:

`vagrant help`

This will list the available Vagrant commands. We will only be using a few of them in the following steps and this course.

Next start the configuration and setting up of the virtual environment with this command

`vagrant up`

This will take a looong time to complete, as it fetches a image of Ubuntu for the virtual machine, and runs all the installation steps defined in _provision.sh_.

After the vagrant up command has completed, you can connect to the running virtual environment with this command:

`vagrant ssh`

Now you should in your virtual environment. All the files in repository are linked in the directory _/webdev1_ of your virtaul environment. You can access this folder with the command 
    _cd /webdev1_

Ports 3000 for Node and 27017 for MongoDB are open from the virtual environment to the same port numbers of the host system (your computers operating system). So, if you run a Node server in your virtual environment on the port 3000, you can access it from the host system with your browser using the address _localhost:3000_.

Use command `vagrant halt` to shut down the machine (when not logged in with ssh)

Use command `vagrant destroy` to delete the whole virtual machine   

If you get an error: symlink error, error -71, etc. with vagrant, use the parameter --no-bin-links.
Check https://github.com/npm/npm/issues/7308 and http://perrymitchell.net/article/npm-symlinks-through-vagrant-windows/
 
