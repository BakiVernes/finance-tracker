var init_friend_lookup;
init_friend_lookup = function(){
    $('#friend-lookup-form').on('ajax:before', function(evenr, data, status){
        show_spinner();
    });
    
    $('#friend-lookup-form').on('ajax:after', function(evenr, data, status){
        hide_spinner();
    });
    
    $('#friend-lookup-form').on('ajax:success', function(evenr, data, status){
        $('#friend-lookup').replaceWith(data);
        init_friend_lookup();
    });
    
    $('#friend-lookup-form').on('ajax:error', function(event, xhr, status, error){
        hide_spinner();
        $('#friend-lookup-results').replaceWith(' ');
        $('#friend-lookup-errors').replaceWith('person was not found.');
    });
}

$(document).ready(function(){
    init_friend_lookup();
});