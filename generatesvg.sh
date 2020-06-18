#!/bin/bash

# find the mission directories
find src/sequences -maxdepth 1 -type d | while read -r dname; do
if [ "$dname" != "src/sequences" ]; then
    echo "Processing mission:" "$dname"
    #Generate sequence diagrams for mission
    find "$dname"/uml -type f -name '*.uml'|while read -r fname; do
        echo "Generating SVG for sequence:" "$fname"
        # convert each sequence in each mission from UML to SVG
        iname="$dname"/images/$(basename "${fname##*/}" .uml).svg
        #echo $iname
        < "$fname" docker run --rm -i think/plantuml > "$iname"
    done
    # to enable sequence to sequence linking make a copy of SVGs
    find "$dname"/images -type f -name '*.svg'|while read -r fname; do
        # copy each generated SVG file to a SaC hashed file outside react's span of control
        cp "$fname" ./images/"$(basename """$dname""")"."${fname##*/}"
    done
fi
done
