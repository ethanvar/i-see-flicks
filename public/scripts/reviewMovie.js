function render(data){
    var html = data.name + data.date + data.body;
    $('#commentContainer').append(html);
}

$(document).ready(function(){
    var comment =[];
    for (let i = 0; i<comment.length;i++) {
        render(comment[i]);
    }
    
    $('#addComment').click(function(){
        var addObj = {
            "name": $('#nameR').val(),
            "date": $('#date').val(),
            "body": $('#bodyText').val()
        };
        console.log(addObj);
        comment.push(addObj);
        render(addObj);
    });
});
