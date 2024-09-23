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
                shortcut: "CTRL+N"
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
                bottomSeparator: true,
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
                label: "Export",
                labelCallback: exampleItemCallback,
                bottomSeparator: true,
                shortcut: "CTRL+E"
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
                label: "Paste On New Layer",
                labelCallback: exampleItemCallback,
                shortcut: "CTRL+ALT+Z",
                bottomSeparator: true
            },
            {
                label: "Clear Canvas",
                labelCallback: exampleItemCallback,
                shortcut: "CTRL+ALT+X"
            },
        ]
    },
    {
        label: "Document",
        labelCallback: exampleLabelCallback,
        submenus: [
            {
                label: "Resize Document",
                labelCallback: exampleItemCallback,
            },
            {
                label: "Canvas Size",
                labelCallback: exampleItemCallback,
            },
            {
                label: "Image Size",
                labelCallback: exampleItemCallback,
            },
            {
                label: "Size To Selection",
                labelCallback: exampleItemCallback,
                bottomSeparator: true
            },
            {
                label: "Export Snap",
                labelCallback: exampleItemCallback,
                shortcut: "CTRL+ALT+E"
            },
            
        ]
    },
    {
        label: "Layer",
        labelCallback: exampleLabelCallback,
        submenus: [
            {
                label: "New Layer",
                labelCallback: exampleItemCallback,
                shortcut: "CTRL+L"
            },
            {
                label: "Delete Layer",
                labelCallback: exampleItemCallback,
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
                label: "Filter",
                labelCallback: exampleItemCallback,
            },
            {
                label: "Clear Filters",
                labelCallback: exampleItemCallback,
            },
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
        label: "Preferences",
        labelCallback: exampleLabelCallback,
        submenus: [
            {
                label: "Themes",
                labelCallback: exampleItemCallback,
            },
            {
                label: "Settings",
                labelCallback: exampleItemCallback,
                shortcut: "CTRL+ALT+S"
            }
        ]
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