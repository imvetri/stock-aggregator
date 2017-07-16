var list = (function(){
    //dom
    var template = $('#analystTemplate').html(),
        app = $('#app');

    function renderTemplate(data){
        return template.replace('expertPictureURL', data.expertPictureURL)
                .replace('analystName', data.analystName)
                .replace('firmName', data.firmName)
                .replace('successRate', data.successRate)
                .replace('url', data.url);
    }

    function init( dataArray ){
        dataArray.sort( (pre,next)=>{
            if(pre.analystName > next.analystName){
                return 1;
            }
            if(pre.analystName < next.analystName){
                return -1;
            }
            return 0;
        })
        var templateRendered = dataArray.map( renderTemplate ).join('');
        app.html(templateRendered);
    }
    return {
        init: init
    }
})();


//fetch data and init list
(function(){

var dataSource = 'https://api.tipranks.com/api/analysts/aapl?num=15&X-APIKey=TR_Interview4&X-APIToken=TR_Interview';

fetch(dataSource)
    .then(response => response.json())
    .then(list.init)
    .catch(e => console.log(e))
})();





