# README.md

The following instructions describe how to perform common tasks related to Sequences as Code.

## Creating Sequences

Using SaC sequences are created as UML and grouped together as Missions.

Details on how to create the missions and sequences can be found in the SaC [Help](https://github.com/pages/dxc-technology/Sequences-as-Code/#/sachelp) mission and associated sequences.

### Creating Sequences - Automatically

The option to convert the UML files to SVG is offered on every code commit from the continuous integration GitHub Action.

### Creating Sequences - Manually

Additionally the UML files can be converted to SVG manually in a local copy of a [Sequences as Code](https://github.com/dxc-technology/Sequences-as-Code) repository.

To generate the SVG files for a repository created from a release on the [Sequences as Code](https://github.com/dxc-technology/Sequences-as-Code), clone the repository then open a terminal session and run

```bash
./generatesvg.sh
```

The `./generatesvg.sh` script uses PlantUML a dockerized command line utility to convert UML files to SVG files. The script requires docker to be installed and running locally.

**Tip 1** `./generatesvg.sh` will generate SVG files for all the UML files it finds in the mission subfolders of the folder `src/sequences`. This may take some and should not be necessary for the SaC [Help](https://github.com/pages/dxc-technology/Sequences-as-Code/#/sachelp) mission. Prior to running `./generatesvg.sh` you can adjust the script to ensure it only finds and processes the UML files you need processed.

**Tip 2** When running the `./generatesvg.sh` script you can ignore any WARNINGS reported. In the event of an ERROR unfortunately no details are provided by `think/plantuml`, so to view the specific error details you can use [PlantText](https://www.planttext.com/).

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

The contents and changes in each release are documented in the [CHANGELOG.md](https://github.com/dxc-technology/Sequences-as-Code/blob/master/CHANGELOG.md).

## Stand up a new Instance of SaC

To stand up a new instance of SaC follow the instructions in the *Create new dedicated instance of SaC* sequence in the SaC [Help](https://github.com/pages/dxc-technology/Sequences-as-Code/#/sachelp) mission.

## Update an Instance of SaC

To update an instance of SaC follow the instructions in the *Update an instance of SaC with a new release* sequence in the SaC [Help](https://github.com/pages/dxc-technology/Sequences-as-Code/#/sachelp) mission.
