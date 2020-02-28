var tape = require("tape");
var jsdom = require("./jsdom");
var deepEqualData = require("./deepEqualData");
var d3 = require("d3-selection");
var d3_graphviz = require("../");
var stringify = require('json-stringify-safe');

tape("data extraction", function(test) {
    var window = global.window = jsdom('<div id="graph"></div>');
    var document = global.document = window.document;
    var graphviz = d3_graphviz.graphviz("#graph")
        .on('initEnd', () => {
            graphviz
                .zoom(false)
                .dot('digraph {a -> b;}');

            delete graphviz._data.parent;

            var actualData = graphviz._data;
            var expectedData = JSON.parse(JSON.stringify(basic_data))

            deepEqualData(test, actualData, expectedData, "Extracted data equals predefined data");

            graphviz.render();
            var svg = d3.select('svg');
            actualData = graphviz._extractData(svg, 0, null);
            var expectedData = JSON.parse(JSON.stringify(basic_data));
            deepEqualData(test, actualData, expectedData, "Explicitly extracted data equals predefined data");

            test.end();
        });
});

var basic_data = {
    "tag": "svg",
    "attributes": {
        "width": "62pt",
        "height": "116pt",
        "viewBox": "0.00 0.00 62.00 116.00",
        "xmlns": "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink"
    },
    "children": [
        {
            "tag": "#text",
            "text": "\n",
            "attributes": {},
            "parent": "[Circular ~]",
            "children": [],
            "key": "#text-0",
            "id": "svg-0.#text-0"
        },
        {
            "tag": "g",
            "attributes": {
                "id": "graph0",
                "class": "graph",
                "transform": "scale(1 1) rotate(0) translate(4 112)"
            },
            "translation": {
                "x": 4,
                "y": 112
            },
            "scale": 1,
            "parent": "[Circular ~]",
            "children": [
                {
                    "tag": "#text",
                    "text": "\n",
                    "attributes": {},
                    "parent": "[Circular ~.children.1]",
                    "children": [],
                    "key": "#text-0",
                    "id": "svg-0.%200176.#text-0"
                },
                {
                    "tag": "title",
                    "attributes": {},
                    "parent": "[Circular ~.children.1]",
                    "children": [
                        {
                            "tag": "#text",
                            "text": "%200176",
                            "attributes": {},
                            "parent": "[Circular ~.children.1.children.1]",
                            "children": [],
                            "key": "#text-0",
                            "id": "svg-0.%200176.title-0.#text-0"
                        }
                    ],
                    "key": "title-0",
                    "id": "svg-0.%200176.title-0"
                },
                {
                    "tag": "#text",
                    "text": "\n",
                    "attributes": {},
                    "parent": "[Circular ~.children.1]",
                    "children": [],
                    "key": "#text-1",
                    "id": "svg-0.%200176.#text-1"
                },
                {
                    "tag": "polygon",
                    "attributes": {
                        "fill": "white",
                        "stroke": "transparent",
                        "points": "-4,4 -4,-112 58,-112 58,4 -4,4"
                    },
                    "bbox": {
                        "x": -4,
                        "y": -112,
                        "width": 62,
                        "height": 116
                    },
                    "center": {
                        "x": 27,
                        "y": -54
                    },
                    "parent": "[Circular ~.children.1]",
                    "children": [],
                    "key": "path-0",
                    "id": "svg-0.%200176.path-0"
                },
                {
                    "tag": "#text",
                    "text": "\n",
                    "attributes": {},
                    "parent": "[Circular ~.children.1]",
                    "children": [],
                    "key": "#text-2",
                    "id": "svg-0.%200176.#text-2"
                },
                {
                    "tag": "#comment",
                    "comment": " a ",
                    "attributes": {},
                    "parent": "[Circular ~.children.1]",
                    "children": [],
                    "key": "#comment-0",
                    "id": "svg-0.%200176.#comment-0"
                },
                {
                    "tag": "#text",
                    "text": "\n",
                    "attributes": {},
                    "parent": "[Circular ~.children.1]",
                    "children": [],
                    "key": "#text-3",
                    "id": "svg-0.%200176.#text-3"
                },
                {
                    "tag": "g",
                    "attributes": {
                        "id": "node1",
                        "class": "node"
                    },
                    "parent": "[Circular ~.children.1]",
                    "children": [
                        {
                            "tag": "#text",
                            "text": "\n",
                            "attributes": {},
                            "parent": "[Circular ~.children.1.children.7]",
                            "children": [],
                            "key": "#text-0",
                            "id": "svg-0.%200176.a.#text-0"
                        },
                        {
                            "tag": "title",
                            "attributes": {},
                            "parent": "[Circular ~.children.1.children.7]",
                            "children": [
                                {
                                    "tag": "#text",
                                    "text": "a",
                                    "attributes": {},
                                    "parent": "[Circular ~.children.1.children.7.children.1]",
                                    "children": [],
                                    "key": "#text-0",
                                    "id": "svg-0.%200176.a.title-0.#text-0"
                                }
                            ],
                            "key": "title-0",
                            "id": "svg-0.%200176.a.title-0"
                        },
                        {
                            "tag": "#text",
                            "text": "\n",
                            "attributes": {},
                            "parent": "[Circular ~.children.1.children.7]",
                            "children": [],
                            "key": "#text-1",
                            "id": "svg-0.%200176.a.#text-1"
                        },
                        {
                            "tag": "ellipse",
                            "attributes": {
                                "fill": "none",
                                "stroke": "black",
                                "cx": "27",
                                "cy": "-90",
                                "rx": "27",
                                "ry": "18"
                            },
                            "center": {
                                "x": "27",
                                "y": "-90"
                            },
                            "parent": "[Circular ~.children.1.children.7]",
                            "children": [],
                            "key": "path-0",
                            "id": "svg-0.%200176.a.path-0"
                        },
                        {
                            "tag": "#text",
                            "text": "\n",
                            "attributes": {},
                            "parent": "[Circular ~.children.1.children.7]",
                            "children": [],
                            "key": "#text-2",
                            "id": "svg-0.%200176.a.#text-2"
                        },
                        {
                            "tag": "text",
                            "attributes": {
                                "text-anchor": "middle",
                                "x": "27",
                                "y": "-85.8",
                                "font-family": "Times,serif",
                                "font-size": "14.00"
                            },
                            "center": {
                                "x": "27",
                                "y": "-85.8",
                            },
                            "parent": "[Circular ~.children.1.children.7]",
                            "children": [
                                {
                                    "tag": "#text",
                                    "text": "a",
                                    "attributes": {},
                                    "parent": "[Circular ~.children.1.children.7.children.5]",
                                    "children": [],
                                    "key": "#text-0",
                                    "id": "svg-0.%200176.a.text-0.#text-0"
                                }
                            ],
                            "key": "text-0",
                            "id": "svg-0.%200176.a.text-0"
                        },
                        {
                            "tag": "#text",
                            "text": "\n",
                            "attributes": {},
                            "parent": "[Circular ~.children.1.children.7]",
                            "children": [],
                            "key": "#text-3",
                            "id": "svg-0.%200176.a.#text-3"
                        }
                    ],
                    "key": "a",
                    "id": "svg-0.%200176.a"
                },
                {
                    "tag": "#text",
                    "text": "\n",
                    "attributes": {},
                    "parent": "[Circular ~.children.1]",
                    "children": [],
                    "key": "#text-4",
                    "id": "svg-0.%200176.#text-4"
                },
                {
                    "tag": "#comment",
                    "comment": " b ",
                    "attributes": {},
                    "parent": "[Circular ~.children.1]",
                    "children": [],
                    "key": "#comment-1",
                    "id": "svg-0.%200176.#comment-1"
                },
                {
                    "tag": "#text",
                    "text": "\n",
                    "attributes": {},
                    "parent": "[Circular ~.children.1]",
                    "children": [],
                    "key": "#text-5",
                    "id": "svg-0.%200176.#text-5"
                },
                {
                    "tag": "g",
                    "attributes": {
                        "id": "node2",
                        "class": "node"
                    },
                    "parent": "[Circular ~.children.1]",
                    "children": [
                        {
                            "tag": "#text",
                            "text": "\n",
                            "attributes": {},
                            "parent": "[Circular ~.children.1.children.11]",
                            "children": [],
                            "key": "#text-0",
                            "id": "svg-0.%200176.b.#text-0"
                        },
                        {
                            "tag": "title",
                            "attributes": {},
                            "parent": "[Circular ~.children.1.children.11]",
                            "children": [
                                {
                                    "tag": "#text",
                                    "text": "b",
                                    "attributes": {},
                                    "parent": "[Circular ~.children.1.children.11.children.1]",
                                    "children": [],
                                    "key": "#text-0",
                                    "id": "svg-0.%200176.b.title-0.#text-0"
                                }
                            ],
                            "key": "title-0",
                            "id": "svg-0.%200176.b.title-0"
                        },
                        {
                            "tag": "#text",
                            "text": "\n",
                            "attributes": {},
                            "parent": "[Circular ~.children.1.children.11]",
                            "children": [],
                            "key": "#text-1",
                            "id": "svg-0.%200176.b.#text-1"
                        },
                        {
                            "tag": "ellipse",
                            "attributes": {
                                "fill": "none",
                                "stroke": "black",
                                "cx": "27",
                                "cy": "-18",
                                "rx": "27",
                                "ry": "18"
                            },
                            "center": {
                                "x": "27",
                                "y": "-18"
                            },
                            "parent": "[Circular ~.children.1.children.11]",
                            "children": [],
                            "key": "path-0",
                            "id": "svg-0.%200176.b.path-0"
                        },
                        {
                            "tag": "#text",
                            "text": "\n",
                            "attributes": {},
                            "parent": "[Circular ~.children.1.children.11]",
                            "children": [],
                            "key": "#text-2",
                            "id": "svg-0.%200176.b.#text-2"
                        },
                        {
                            "tag": "text",
                            "attributes": {
                                "text-anchor": "middle",
                                "x": "27",
                                "y": "-13.8",
                                "font-family": "Times,serif",
                                "font-size": "14.00"
                            },
                            "center": {
                                "x": "27",
                                "y": "-13.8",
                            },
                            "parent": "[Circular ~.children.1.children.11]",
                            "children": [
                                {
                                    "tag": "#text",
                                    "text": "b",
                                    "attributes": {},
                                    "parent": "[Circular ~.children.1.children.11.children.5]",
                                    "children": [],
                                    "key": "#text-0",
                                    "id": "svg-0.%200176.b.text-0.#text-0"
                                }
                            ],
                            "key": "text-0",
                            "id": "svg-0.%200176.b.text-0"
                        },
                        {
                            "tag": "#text",
                            "text": "\n",
                            "attributes": {},
                            "parent": "[Circular ~.children.1.children.11]",
                            "children": [],
                            "key": "#text-3",
                            "id": "svg-0.%200176.b.#text-3"
                        }
                    ],
                    "key": "b",
                    "id": "svg-0.%200176.b"
                },
                {
                    "tag": "#text",
                    "text": "\n",
                    "attributes": {},
                    "parent": "[Circular ~.children.1]",
                    "children": [],
                    "key": "#text-6",
                    "id": "svg-0.%200176.#text-6"
                },
                {
                    "tag": "#comment",
                    "comment": " a&#45;&gt;b ",
                    "attributes": {},
                    "parent": "[Circular ~.children.1]",
                    "children": [],
                    "key": "#comment-2",
                    "id": "svg-0.%200176.#comment-2"
                },
                {
                    "tag": "#text",
                    "text": "\n",
                    "attributes": {},
                    "parent": "[Circular ~.children.1]",
                    "children": [],
                    "key": "#text-7",
                    "id": "svg-0.%200176.#text-7"
                },
                {
                    "tag": "g",
                    "attributes": {
                        "id": "edge1",
                        "class": "edge"
                    },
                    "parent": "[Circular ~.children.1]",
                    "children": [
                        {
                            "tag": "#text",
                            "text": "\n",
                            "attributes": {},
                            "parent": "[Circular ~.children.1.children.15]",
                            "children": [],
                            "key": "#text-0",
                            "id": "svg-0.%200176.a->b.#text-0"
                        },
                        {
                            "tag": "title",
                            "attributes": {},
                            "parent": "[Circular ~.children.1.children.15]",
                            "children": [
                                {
                                    "tag": "#text",
                                    "text": "a->b",
                                    "attributes": {},
                                    "parent": "[Circular ~.children.1.children.15.children.1]",
                                    "children": [],
                                    "key": "#text-0",
                                    "id": "svg-0.%200176.a->b.title-0.#text-0"
                                }
                            ],
                            "key": "title-0",
                            "id": "svg-0.%200176.a->b.title-0"
                        },
                        {
                            "tag": "#text",
                            "text": "\n",
                            "attributes": {},
                            "parent": "[Circular ~.children.1.children.15]",
                            "children": [],
                            "key": "#text-1",
                            "id": "svg-0.%200176.a->b.#text-1"
                        },
                        {
                            "tag": "path",
                            "attributes": {
                                "fill": "none",
                                "stroke": "black",
                                "d": "M27,-71.7C27,-63.98 27,-54.71 27,-46.11"
                            },
                            "bbox": {
                                "x": 27,
                                "y": -71.7,
                                "width": 0,
                                "height": 25.590000000000003
                            },
                            "center": {
                                "x": 27,
                                "y": -58.905
                            },
                            "totalLength": 100,
                            "parent": "[Circular ~.children.1.children.15]",
                            "children": [],
                            "key": "path-0",
                            "id": "svg-0.%200176.a->b.path-0"
                        },
                        {
                            "tag": "#text",
                            "text": "\n",
                            "attributes": {},
                            "parent": "[Circular ~.children.1.children.15]",
                            "children": [],
                            "key": "#text-2",
                            "id": "svg-0.%200176.a->b.#text-2"
                        },
                        {
                            "tag": "polygon",
                            "attributes": {
                                "fill": "black",
                                "stroke": "black",
                                "points": "30.5,-46.1 27,-36.1 23.5,-46.1 30.5,-46.1"
                            },
                            "bbox": {
                                "x": 23.5,
                                "y": -46.1,
                                "width": 7,
                                "height": 10
                            },
                            "center": {
                                "x": 27,
                                "y": -41.1
                            },
                            "parent": "[Circular ~.children.1.children.15]",
                            "children": [],
                            "key": "path-1",
                            "id": "svg-0.%200176.a->b.path-1",
                            "totalLength": 100
                        },
                        {
                            "tag": "#text",
                            "text": "\n",
                            "attributes": {},
                            "parent": "[Circular ~.children.1.children.15]",
                            "children": [],
                            "key": "#text-3",
                            "id": "svg-0.%200176.a->b.#text-3"
                        }
                    ],
                    "key": "a->b",
                    "id": "svg-0.%200176.a->b"
                },
                {
                    "tag": "#text",
                    "text": "\n",
                    "attributes": {},
                    "parent": "[Circular ~.children.1]",
                    "children": [],
                    "key": "#text-8",
                    "id": "svg-0.%200176.#text-8"
                }
            ],
            "key": "%200176",
            "id": "svg-0.%200176"
        },
        {
            "tag": "#text",
            "text": "\n",
            "attributes": {},
            "parent": "[Circular ~]",
            "children": [],
            "key": "#text-1",
            "id": "svg-0.#text-1"
        }
    ],
    "key": "svg-0",
    "id": "svg-0"
}
