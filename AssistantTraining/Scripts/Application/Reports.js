﻿jQuery(document).ready(function () {
    var dataObject = {
        columns: [{
            title: "NAME"
        }, {
            title: "COUNTY"
        }],
        data: [
          ["John Doe", "Fresno"],
          ["Billy", "Fresno"],
          ["Tom", "Kern"],
          ["King Smith", "Kings"]
        ]
    };
    var columns = [];


    $("#SelectedId").change(function () {
        var selectedElement = $(this).val();
        $.ajax({
         cache: false,
         url: "/Reports/JsonAction",
         type: "GET",
         data: { 'q': selectedElement },
         contentType: "application/json; charset=utf-8",
         dataType: "json",
         error: function (response) {
            alert(response.responseText);
        },
         success: function (response) {

             $('#example').dataTable({
                 destroy: true,
                "data": response.data,
                "columns": response.columns
                

             });

             //$('#example tbody').on('click', 'tr', function () {
             //    $(this).addClass('active').siblings().removeClass('active');
             //});
        }
        });

        //$.ajax({
        //    cache: false,
        //    type: "GET",
        //    contentType: "application/json; charset=utf-8",
        //    dataType: 'json',
        //    url: "/Reports/GetFooString",
        //    data: {},
        //    success: function (data) {
        //        alert(data);
        //    },
        //    error: function (xhr, ajaxOptions, thrownError) {
        //        alert("Ajax Failed!!!");
        //    }
        //});
    });

});

MVCDataTableJqueryBootStrap = {

    init: function () {
        this.initDataTable();
    },

    initDataTable: function () {
        var table = $('#tableContract').DataTable({
            "language": {
                "sProcessing": "Przetwarzanie...",
                "sLengthMenu": "Pokaż _MENU_ pozycji",
                "sZeroRecords": "Nie znaleziono pasujących pozycji",
                "sInfoThousands": " ",
                "sInfo": "Pozycje od _START_ do _END_ z _TOTAL_ łącznie",
                "sInfoEmpty": "Pozycji 0 z 0 dostępnych",
                "sInfoFiltered": "(filtrowanie spośród _MAX_ dostępnych pozycji)",
                "sInfoPostFix": "",
                "sSearch": "Szukaj:",
                "sUrl": "",
                "oPaginate": {
                    "sFirst": "Pierwsza",
                    "sPrevious": "Poprzednia",
                    "sNext": "Następna",
                    "sLast": "Ostatnia"
                }
            }
        });

        MVCDataTableJqueryBootStrap.returnDataTable = function () {
            return table;
        }
    },
};

$(function () {
    MVCDataTableJqueryBootStrap.init();
});