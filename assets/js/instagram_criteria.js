$(document).ready(function(){    
    
    jQuery.fn.spectragram.accessData = {
            accessToken: '26989784.b654ce8.ff196bec2d904204933e04133319e6ea',
            clientID: 'b654ce8fe6834775a9f68f653e0c707b'        
    };

    $('.arranmore_test').spectragram('getRecentTagged',{
        query: 'arranmore',
        max: 12,
        size: 'medium',
        wrapEachWith: '<span class="insta_photo";"></span>'
    });
    
});



// CLIENT ID
// b654ce8fe6834775a9f68f653e0c707b

// REDIRECT URI:
// http://matloughnane.github.io/webPlayground/subprojects/instagram_trial/instagram.html


// https://api.instagram.com/oauth/authorize/?client_id=[clientID]&redirect_uri=[redirectURI]&response_type=code

// https://api.instagram.com/oauth/authorize/?client_id=b654ce8fe6834775a9f68f653e0c707b&redirect_uri=http://matloughnane.github.io/webPlayground/subprojects/instagram_trial/instagram.html&response_type=code


// RECEIVED OUTPUT:

// http://matloughnane.github.io/webPlayground/subprojects/instagram_trial/instagram.html?code=1ef6cc1c8695402fad7543efdb661999

// CODE: 1ef6cc1c8695402fad7543efdb661999

// curl -F 'client_id=b654ce8fe6834775a9f68f653e0c707b' -F 'client_secret=6503c043c5b24c799d25263019f8bbf1' -F 'grant_type=authorization_code' -F 'redirect_uri=http://matloughnane.github.io/webPlayground/subprojects/instagram_trial/instagram.html' -F 'code=1ef6cc1c8695402fad7543efdb661999' https://api.instagram.com/oauth/access_token

