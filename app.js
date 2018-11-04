
$(document).ready(function(){

    let searchPics = function () {
        let logKey = $('#mainSearch').val();
        
        $.ajax({
            url: "https://api.unsplash.com/photos?query="+logKey,
            method: "GET",
            headers: {
                Authorization: '4c4019678551a84b883de0ce7e990415fa3e3ed376fecc197de3615d6e9a4a3d',
            },
            data: {
                client_id: '4c4019678551a84b883de0ce7e990415fa3e3ed376fecc197de3615d6e9a4a3d',
                client_secret: 'db842b287819be9bb885e2cbe187fe408deb37ba049f82a7868bac7991ced502' ,
            }
        }).done(function( data ) {
            for(i = 0; i < data.length; i++){
                $('#populate').append(`
                <br>
               <a href="${data[i].urls.full}"> <img src="${data[i].urls.regular}"> </a>
                <br>
                `);
            }
           

            // Data is returning, add dynamic render for cards with :
            // Title, image, description, link .. data.url etc. 
          });
    
    }
    $('#mainSearch').on('keypress',searchPics);


});

