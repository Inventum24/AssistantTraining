﻿(function () {
    var gridName = 'TrainingGrid';
    var pagingUrl = 'Training/GridPager';

    $('.grid-mvc').gridmvc();
    pageGrids[gridName].ajaxify({
        getData: pagingUrl,
        getPagedData: pagingUrl
    });

    var gridName = 'TrainingWorkersGrid';
    var pagingUrl = 'Training/GridWorkerPager';

    //$('.grid-mvc').gridmvc();
    pageGrids[gridName].ajaxify({
        getData: pagingUrl,
        getPagedData: pagingUrl
    });

}())

$('#srch-term-instruction').typeahead(
    {
    source: function (query, process) {
        return $.get('/Training/GetInstructionsByQuery', { query: query }, function (data) {
            console.log(data);
            return process(data);
        });
    }
    });

$('#srch-term-training').typeahead(
    {
        source: function (query, process) {
            return $.get('/Training/GetTrainingNamesByQuery', { query: query }, function (data) {
                console.log(data);
                return process(data);
            });
        }
    });

$(document).ready(function () {

    $("#idInstructionForm").submit(function (e) {
       
        var val = $('#srch-term-instruction').val();
        $.ajax({
            url: "Training/GetGrid",
            type: "POST",
            data: { term: val }
        })
        .done(function (partialViewResult) {
            $("#refGrid").html(partialViewResult);
        });
        e.preventDefault(); //STOP default action

    });

    $('a').click(function (event) {
        event.preventDefault();
        var value = $(this).attr("href");
        var id = $(this).attr("id");
        if (id == 'untrained')
        {
            $.ajax({
                url: "Training/GetWorkerGrid",
                type: "POST",
                data: { term: value }
            })
            .done(function (partialViewResult) {
                $("#refWorkerGrid").html(partialViewResult);
            });
            //return false; //for good measure
        }
        else if (id == 'trained')
        {
            $.ajax({
                url: "Training/GetWorkerGrid",
                type: "POST",
                data: { term: value }
            })
            .done(function (partialViewResult) {
                $("#refWorkerGrid").html(partialViewResult);
            });
            //return false; //for good measure
        }
        
        
    });
});

