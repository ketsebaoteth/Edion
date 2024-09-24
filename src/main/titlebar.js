function exampleLabelCallback() {
    console.log("label pressed");
}

function exampleItemCallback() {
    console.log("item pressed");
}

export const menu_tree = [
    {
        label: "File",
        labelCallback: exampleLabelCallback,
        submenus: [
            {
                label: "New",
                labelCallback: exampleItemCallback,
                bottomSeparator: true,
                shortcut: "CTRL+N",
                
            },
            {
                label: "Open",
                labelCallback: exampleItemCallback,
                shortcut: "CTRL+O"
            },
            {
                label: "Open from dropbox",
                labelCallback: exampleItemCallback,
            },
            {
                label: "Open from drive",
                labelCallback: exampleItemCallback,
            },
            {
                label: "Open from Other source",
                labelCallback: exampleItemCallback,
                bottomSeparator: true,
                subsubmenus: [
                    {
                        label: "Online Sources",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "Local Sources",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "Image Url",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "Templates",
                        labelCallback: exampleItemCallback,
                    }
                ]
            },
            {
                label: "Save",
                labelCallback: exampleItemCallback,
                shortcut: "CTRL+S"
            },
            {
                label: "Save As",
                labelCallback: exampleItemCallback,
                shortcut: "CTRL+SHIFT+N"
            },
            {
                label: "Save As PSD",
                labelCallback: exampleItemCallback,
            },
            {
                label: "Export Quick",
                labelCallback: exampleItemCallback,
                shortcut: "CTRL+E"
            },
            {
                label: "Export As",
                labelCallback: exampleItemCallback,
                bottomSeparator: true,
                subsubmenus: [
                    {
                        label: "Png",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "JPG",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "WEBP",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "PDF",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "SVG",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "GIF",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "MP4",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "Explore More",
                        labelCallback: exampleItemCallback,
                    }
                ]
            },
            {
                label: "Print",
                labelCallback: exampleItemCallback,
                shortcut: "CTRL+P"
            },
            {
                label: "Close",
                labelCallback: exampleItemCallback,
                shortcut: "CTRL+Q"
            }
        ]
    },
    {
        label: "Edit",
        labelCallback: exampleLabelCallback,
        submenus: [
            {
                label: "Undo",
                labelCallback: exampleItemCallback,
                shortcut: "CTRL+Z"
            },
            {
                label: "Redo",
                labelCallback: exampleItemCallback,
                shortcut: "CTRL+SHIFT+Z",
                bottomSeparator: true,
            },
            {
                label: "Bring To Front",
                labelCallback: exampleItemCallback,
                shortcut: "]"
            },
            {
                label: "Send To Back",
                labelCallback: exampleItemCallback,
                shortcut: "[",
                bottomSeparator: true,
            },
            {
                label: "Cut",
                labelCallback: exampleItemCallback,
                shortcut: "CTRL+X"
            },
            {
                label: "Copy",
                labelCallback: exampleItemCallback,
                shortcut: "CTRL+C"
            },
            {
                label: "Paste",
                labelCallback: exampleItemCallback,
                shortcut: "CTRL+V"
            },
            {
                label: "Paste New Layer",
                labelCallback: exampleItemCallback,
                shortcut: "CTRL+ALT+v",
            },
            {
                label: "clear",
                labelCallback: exampleItemCallback,
            },
            {
                label: "Clear Canvas",
                labelCallback: exampleItemCallback,
                shortcut: "CTRL+ALT+X",
                bottomSeparator: true
            },
            {
                label: "Fill",
                labelCallback: exampleItemCallback,
            },
            {
                label: "Stroke",
                labelCallback: exampleItemCallback,
                bottomSeparator: true
            },
            {
                label: "Content Aware Scale",
                labelCallback: exampleItemCallback,
            },
            {
                label:"Puppet Wrap",
                labelCallback: exampleItemCallback,
            },
            {
                label: "Transform",
                labelCallback: exampleItemCallback
            },
            {
                label: "Free Transform",
                labelCallback: exampleItemCallback,
                subsubmenus: [
                    {
                        label: "Repeat",
                        labelCallback: exampleItemCallback,
                        bottomSeparator: true,
                        icon: "../../src/components/icons/titlebar/repeat.svg"
                    },
                    {
                        label: "Scale",
                        labelCallback: exampleItemCallback,
                        icon: "../../src/components/icons/titlebar/scale.svg"
                    },
                    {
                        label: "Rotate",
                        labelCallback: exampleItemCallback,
                        icon: "../../src/components/icons/titlebar/rotate_tool.svg"
                    },
                    {
                        label: "Skew",
                        labelCallback: exampleItemCallback,
                        icon: "../../src/components/icons/titlebar/skew.svg"
                    },
                    {
                        label: "Distort",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "Perspective",
                        labelCallback: exampleItemCallback,
                        bottomSeparator: true,
                        icon: "../../src/components/icons/titlebar/perspective.svg"
                    },
                    {
                        label: "Roatate 90 Left",
                        icon: "../../src/components/icons/titlebar/rotate_left.svg",
                    },
                    {
                        label: "Rotate 90 Right",
                        icon: "../../src/components/icons/titlebar/rotate_right.svg",
                    }
                ],
                bottomSeparator: true
            },
            {
                label: "wrap",
                labelCallback: exampleItemCallback,
            }
        ]
    },
    {
        label: "Images",
        labelCallback: exampleLabelCallback,
        submenus: [
            {
                label: "Mode",
                labelCallback: exampleItemCallback,
                subsubmenus: [
                    {
                        label: "RGB",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "CMYK",
                        labelCallback: exampleItemCallback,
                        bottomSeparator: true
                    },
                    {
                        label: "8 bit channel",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "16 bit channel",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "32 bit channel",
                        labelCallback: exampleItemCallback,
                    }
                ]
            },
            {
                label: "Adjustments",
                labelCallback: exampleItemCallback,
                bottomSeparator: true,
                subsubmenus: [
                    {
                        label: "Brightness/Contrast",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "Levels",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "Curves",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "Exposure",
                        labelCallback: exampleItemCallback,
                        bottomSeparator: true
                    },
                    {
                        label: "Vibrance",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "Hue/Saturation",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "Color Balance",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "Black & White",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "Photo Filter",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "Channel Mixer",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "Color Lookup",
                        labelCallback: exampleItemCallback,
                        bottomSeparator: true,
                    },
                    {
                        label: "Invert",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "Posterize",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "Threshold",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "Gradient Map",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "Selective Color",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "Shadow/Highlight",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "Match Color",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "HDR Toning",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "Equalize",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "Replace Color",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "Adjustments",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "Desaturate",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "Invert",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "Threshold",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "Posterize",
                        labelCallback: exampleItemCallback,
                    }
                ]
            },
            {
                label: "Auto Tone",
                labelCallback: exampleItemCallback,
            },
            {
                label: "Auto Contrast",
                labelCallback: exampleItemCallback,
            },
            {
                label: "Auto Color",
                labelCallback: exampleItemCallback,
                bottomSeparator: true
            },
            {
                label: "Reduce Color",
                labelCallback: exampleItemCallback,
            },
            {
                label: "Vectorize Bitmap",
                labelCallback: exampleItemCallback,
            },
            {
                label: "Wavelet decompose",
                labelCallback: exampleItemCallback,
                bottomSeparator: true
            },
            {
                label: "Canvas Size",
                labelCallback: exampleItemCallback,
                shortcut: "CTRL+ALT+C"

            },
            {
                label: "Image Size",
                labelCallback: exampleItemCallback,
                shortcut: "CTRL+ALT+I"
            },
            {
                label: "Crop",
                labelCallback: exampleItemCallback,

            },
            {
                label: "Trim",
                labelCallback: exampleItemCallback,
                shortcut: "CTRL+."
            },
            {
                label: "Reveal All",
                labelCallback: exampleItemCallback,
                bottomSeparator: true
            },
            {
                label: "Apply Image",
                labelCallback: exampleItemCallback,
            },
            {
                label: "Flatten Layer to Image"
            },
            {
                label: "variables",
                labelCallback: exampleItemCallback,
            }
        ]
    },
    
    {
        label: "Layer",
        labelCallback: exampleLabelCallback,
        submenus: [
            {
                label: "New",
                labelCallback: exampleItemCallback,
                subsubmenus: [
                    {
                        label: "New Layer",
                        shortcut: "CTRL+SHIFT+N",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "New Folder",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "Artboard",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "Artboard From Layer",
                        labelCallback: exampleItemCallback,
                        bottomSeparator: true,
                    },
                    {
                        label: "Layer Via Copy",
                        labelCallback: exampleItemCallback,
                    },
                ]
            },
            {
                label: "Duplicate",
                labelCallback: exampleItemCallback,
            },
            {
                label: "Delete",
                labelCallback: exampleItemCallback,
                bottomSeparator: true
            },
            {
                label: "Text",
                labelCallback: exampleItemCallback,
                subsubmenus: [
                    {
                        label: "Conver To Shape",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "Create Font",
                        labelCallback: exampleItemCallback,
                    }
                ]
            },
            {
                label: "Layer Style",
                labelCallback: exampleItemCallback,
                subsubmenus: [
                    {
                        label: "Blending Options",
                        labelCallback: exampleItemCallback,
                        bottomSeparator: true,
                    },
                    {
                        label: "Advanced Effects",
                        labelCallback: exampleItemCallback,
                        bottomSeparator: true
                    },
                    {
                        label: "Copy Layer Style",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "Paste Layer Style",
                        labelCallback: exampleItemCallback,
                    },
                    {
                        label: "Clear Layer Style",
                        labelCallback: exampleItemCallback,
                        bottomSeparator: true,
                    },
                    {
                        label: "Scale Effect",
                        labelCallback: exampleItemCallback,
                    }
                ],
                bottomSeparator: true,
            },
            {
                label: "New Fill Layer",
                labelCallback: exampleItemCallback,
                subsubmenus: [
                    {
                        label: "Solid Color"
                    },
                    {
                        label: "Gradient Color"
                    },
                    {
                        label: "Pattern Color"
                    }
                ]
            },
            {
                label: "New Adjustment Layer",
                labelCallback: exampleItemCallback,
                subsubmenus: [
                    {
                        label: "Brightness/Contrast"
                      },
                      {
                        label: "Levels"
                      },
                      {
                        label: "Curves"
                      },
                      {
                        label: "Exposure"
                      },
                      {
                        label: "Vibrance"
                      },
                      {
                        label: "Hue/Saturation"
                      },
                      {
                        label: "Color Balance"
                      },
                      {
                        label: "Black & White"
                      },
                      {
                        label: "Photo Filter"
                      },
                      {
                        label: "Channel Mixer"
                      },
                      {
                        label: "Color Lookup"
                      },
                      {
                        label: "Invert"
                      },
                      {
                        label: "Posterize"
                      },
                      {
                        label: "Threshold"
                      },
                      {
                        label: "Gradient Map"
                      },
                      {
                        label: "Selective Color"
                      },
                      {
                        label: "Replace Color"
                      }
                ],
                bottomSeparator: true,
            },
            {
                label: "Raster Mask",
                labelCallback: exampleItemCallback,
                subsubmenus: [
                    {
                        label: "Add (Add Reveal All)"
                    },
                    {
                        label: "Add (Hide All)"
                    },
                    {
                        label: "Reveal Selection"
                    },
                    {
                        label: "Hide Selection"
                    },
                    {
                        label: "From Selection",
                        bottomSeparator: true,
                    },
                    {
                        label: "Delete"
                    },
                    {
                        label: "Apply"
                    },
                    {
                        label:"Disable/Enable"
                    }
                ]
            },
            {
                label: "Vector Mask",
                labelCallback: exampleItemCallback,
                subsubmenus: [
                    {
                        label: "Add (Reveal All)"
                    },
                    {
                        label: "Add (Hide All)"
                    },
                    {
                        label: "Current Path",
                        bottomSeparator: true,
                    },
                    {
                        label: "Delete"
                    },
                    {
                        label: "Enable/Disable"
                    }
                ]
            },
            {
                label: "Cliping Mask",
                labelCallback: exampleItemCallback,
                shortcut: "ALT+CTRL+G",
                bottomSeparator: true,
            },
            {
                label: "Smart Object",
                labelCallback: exampleItemCallback,
                bottomSeparator: true,
                subsubmenus:[
                    {
                        label: "Conver To SmartObject",
                        bottomSeparator: true,
                    },
                    {
                        label: "Open To Edit",
                    },
                    {
                        label: "Replace Content"
                    },
                    {
                        label: "Export Content",
                        bottomSeparator: true
                    },
                    {
                        label: "Convert To Layer",
                        bottomSeparator: true
                    },
                    {
                        label: "Stack Mode"
                    },
                    {
                        label: "Conver To JPG"
                    }
                ]
            },
            {
                label: "Rasterize"
            },
            {
                label: "Rasterize Layer Style",
                bottomSeparator: true
            },
            {
                label: "Group Layers",
                bottomSeparator: true
            },
            {
                label: "Shape Combine",
                subsubmenus: [
                    {
                        label: "Unite",
                        icon: "../../src/components/icons/titlebar/union.svg"
                    },
                    {
                        label: "Subtract",
                        icon: "../../src/components/icons/titlebar/layer_subtract.svg"

                    },
                    {
                        label: "Intersect",
                        icon: "../../src/components/icons/titlebar/layer_intersect.svg"

                    },
                    {
                        label: "Exclude",
                        icon: "../../src/components/icons/titlebar/layer_exclude.svg"

                    }
                ],
                bottomSeparator: true
            },
            {
                label: "Merge Down"
            },
            
            {
                label: "Defring"
            }
        ]
    },
    
    {
        label: "Selection",
        labelCallback: exampleLabelCallback,
        submenus: [
            {
                label: "Select All",
                labelCallback: exampleItemCallback,
                shortcut: "CTRL+A"
            },
            {
                label: "Deselect",
                labelCallback: exampleItemCallback,
                shortcut: "ESC"
            },
            {
                label: "Reselect",
                labelCallback: exampleItemCallback,
                shortcut: "CTRL+SHIFT+A"
            },
            {
                label: "Invert Selection",
                labelCallback: exampleItemCallback,
                shortcut: "CTRL+I"
            },
        ]
    },
    {
        label: "Filter",
        labelCallback: exampleLabelCallback,
    },
    {
        label: "View",
        labelCallback: exampleLabelCallback,
    },
    
    {
        label: "Window",
        labelCallback: exampleLabelCallback,
        submenus: [
            {
                label: "Close All",
                labelCallback: exampleItemCallback,
            },
            {
                label: "Full Screen",
                labelCallback: exampleItemCallback,
                shortcut: "CTRL+ALT+F"
            },
            {
                label: "Layout's",
                labelCallback: exampleItemCallback,
            },
        ]
    },
    {
        label: "Help",
        labelCallback: exampleLabelCallback,
        submenus: [
            {
                label: "Documentation",
                labelCallback: exampleItemCallback,
            },
            {
                label: "Support Creator",
                labelCallback: exampleItemCallback,
            }
        ]
    }
];