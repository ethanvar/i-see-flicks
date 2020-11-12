function render(data){
    var html = data.name + data.date + data.body;
    $('#container').append(html);
}

$(document).ready(function() {
    var comment =[{"name":"David", "date":"10 Apr, 2020", "body":"Great Movie"}];
    for (let i = 0; i<comment.length;i++) {
        render(comment[i]);
    }
    
    $('#addComment').click(function(){
        var addObj = {
            "name": $('#name').val(),
            "date": $('#date').val(),
            "body": $('#bodyText').val()
        };
        comment.push(addObj);
        render(addObj);
    });
});
