/// <reference path="../typings/index.d.ts" />

import "../Less/site.less";

class Main {
    constructor() {   
        $.get("/home/persona", (persons) => {
            const options: DevExpress.ui.dxDataGridOptions = {
                dataSource: persons,
                paging: {
                    enabled: false,
                },
                showBorders: true,
                editing: {
                    mode: "batch",
                    allowUpdating: true
                },
                filterRow: {
                    visible: true,
                    applyFilter: "auto"
                },
                searchPanel: {
                    visible: true,
                    width: 240,
                    placeholder: "Search..."
                },
                headerFilter: {
                    visible: true
                },
                onEditingStart: function (e) {
                    console.log("EditingStart");
                },
                columns: [
                    {
                        dataField: "id",
                        width: 50
                    },
                    {
                        dataField: "type",
                        width: 50
                    },
                    "name", "email"]
            }
            $("#gridContainer").dxDataGrid(options);
        });     
    }
} 

$(document).ready(() => {
    new Main();
});
