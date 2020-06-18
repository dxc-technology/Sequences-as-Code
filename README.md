# SaC (Sequences as Code) - README.md

Repository for SaC (Sequences as Code)

## Purpose

The purpose of Sequences As Code (SaC) is to:

- Provide a quick and efficient means of creating guided learning paths in the form of sequences.

- Enable sequences to be created and managed in the form of code in GitHub.

- Give SME's a means of creating interactive, embedded hyperlinks, sequences and thus to take a task / process based approach to training people

- Facilitate the development of training which is, as per the recommendations of the Learning Pyramid, more participatory in nature.

- Enable SME's to encapsulate their knowledge together with information from a wide variety of sources and formats in a manner that is readily consumable.

Potential use cases include:

- Work instructions.

- Troubleshooting guides.

- Onboarding activities.

- Inner sourcing engagement models.

- Documenting workflows or commonly repeated tasks.

These use cases support the concept of the learning pyramid based on work from the [National Training Laboratories Institute](https://www.ntl.org/) which suggests that some forms of learning lead to better learning experiences and thus better retention outcomes than others.

![Learning Pyramid](./images/learningpyramid.png)

## Creating Sequences

Sequences are created using UML and grouped together as Missions.

Details on how to create the missions and sequences can be found in the [Help](https://github.com/pages/dxc-technology/Sequences-as-Code/#/sachelp) guide.

### Creating Sequences - Automatically

The option to convert the UML files to SVG is offered on every code commit from the continuous integration pipeline.

### Creating Sequences - Manually

Additionally the UML files can be converted to SVG manually in a local copy of a [Sequences as Code](https://github.com/dxc-technology/Sequences-as-Code) repository.

To generate the SVG files for a repository created from a release on the [Sequences as Code](https://github.com/dxc-technology/Sequences-as-Code), clone the repository then open a terminal session and run

```bash
./generatesvg.sh
```

The `./generatesvg.sh` script uses PlantUML a dockerized command line utility to convert UML files to SVG files. The script requires docker to be installed and running locally.

**Tip 1** `./generatesvg.sh` will generate SVG files for all the UML files it finds. This can take some and is not necessary for the [Help](https://github.com/pages/dxc-technology/Sequences-as-Code/#/sachelp) files. Prior to running `./generatesvg.sh` you should adjust the

```bash
find ./src/sequences/*/uml -type f -name '*.uml'|while read fname; do
```

to ensure it only finds and processes the UML files you need processed.

**Tip 2** When running the `./generatesvg.sh` script you can ignore any WARNINGS reported. In the event of an ERROR unfortunately no details are provided by `think/plantuml` to view the specific error details you can use [PlantText](https://www.planttext.com/).

## Linking Sequences to Sequences

The create-react-app tool chain was used to create the single paged SaC application. The create-react-app scaffolder ensures each file inside of the build/static directory will have a unique hash appended to the filename. The unique hash is generated based on the contents of the file, this is to avoid browsers needing to re-download your assets if the file contents haven't changed. If the contents of a file changes in a subsequent build, the filename hash that is generated will be different.

For images the filenames when built and deployed, both automatically and manually, are changed from

``
image.svg
``

to

``
image.hash.svg
``

The fact that the sequence file names can change if the SVG files are regenerated prevents sequences from linking to other sequences.

To allow sequences to link to other sequences a set of SaC "hashed" images are available in the `https://github.com/your_organisation/your_repository/images` folder. These images have consistent names as the SaC hash gives the image files the following names

``
sequence.image.svg
``

## React Bootstrapped Readme.md

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The bootstrapped README.md is available at[CRA-README.md](./CRA-README.md).

## Working Locally

When creating sequences you may want to run the application locally to test them.

To do this:

- Open a terminal session and go to your cloned copy of the SaC repository

- Lint to verify react code is syntactically correct - `npm run lint`

- Run unit tests - `npm test`

- Verify test coverage - `npm run coverage`

- Run locally - `npm start` the application should be available at [http://localhost:3000](http://localhost:3000)

## Deploying

### From your local machine

When linting and testing is successful you can deploy the solution from your local environment using following command

- `npm run deploy`

as the solution has been configured to be hosted in a [GitHub pages site](https://github.com/gitname/react-gh-pages) after deployment it will be available at [http://github.com/pages/your_repository].

## Releases

SaC releases are available in GitHub under [Releases]( https://github.com/dxc-technology/Sequences-as-Code/releases).

The contents and changes in each release are documented in the [CHANGELOG.md](https://github.com/dxc-technology/Sequences-as-Code/blob/master/CONTRIBUTING.md).

Note: Releases are created from the Jenkinsfile. When a pull request is being merged to Master the option to create a release is offered via an input dialog.

### Stand up a new Instance of SaC

To stand up a new instance of SaC follow the instructions in the *Create new dedicated instance of SaC* sequence in the SaC [Help](https://github.com/pages/dxc-technology/Sequences-as-Code/#/sachelp) mission.

### Update an Instance of SaC

To update an instance of SaC follow the instructions in the *Update an instance of SaC with a new release* sequence in the SaC [Help](https://github.com/pages/dxc-technology/Sequences-as-Code/#/sachelp) mission.

## Contributing

We welcome all contributions please refer to [CONTRIBUTING.MD](/CONTRIBUTING.md) for details on how to contribute to this repository.
