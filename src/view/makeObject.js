import * as d3 from "d3";

import { addNode } from "../controller/nodeController";
import { addEdge } from "../controller/edgeController";
import drawObject from "./drawObject";


async function makeNode(){
    const nodeType = d3.select(this).attr("id");
    const result = addNode(nodeType);
    if (result == 0){
        d3.select("#nodeNumberAlert").attr("class", "notcell alert alert-danger");
        await new Promise((r) => setTimeout(r, 3000));
        d3.select("#nodeNumberAlert").attr("class", "notcell alert alert-danger visually-hidden");

    }
    drawObject();
}

function makeEdge(sourceNode, targetNode){
    addEdge(sourceNode, targetNode);
    drawObject();
}

export {makeNode, makeEdge}