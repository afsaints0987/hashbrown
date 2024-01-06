
$(document).ready(function(){

    let date = new Date()
    let year = date.getFullYear()
    $("#date").text(year)

    //Disabled inspect element
    $(document).bind('contextmenu', function(e){
        e.preventDefault();
    })

    $(document).keydown(function(e){
        if(e.which === 123){
           return false;
        }
    });

    // Clear input value

    $('#hashkey').val("");

    // Generate Hash Key
    $('#generate').click(function(){
        $('#hashkey').val(function(){
            let result = [];
            let randomKeys = Math.random().toString(32).substring(2, 15);
            let randomKeyslength = randomKeys.length;
            for (let i = 0; i <= 4; i++) {
                result.push(randomKeys.charAt(Math.floor(Math.random() * randomKeyslength)));
            }
            return result.join(randomKeys.toUpperCase());
        });
    });

    // Copy Hash Key
    $('#copy').click(function(){
        let hashkey = $('#hashkey').get(0);
        hashkey.focus();
        try {
            // let success = document.execCommand('copy');
            navigator.clipboard.writeText(hashkey.value)
            $('#copy').attr('title', 'Copied!').tooltip('show')
        } catch(err){
            $('#copy').attr('title', 'Unable to copy').tooltip('show');
        }
    });
});