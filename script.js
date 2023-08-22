$(document).data('enc1', 'U2FsdGVkX1/1lWegi1ckQfABTsV8AWNl8z8KfIQm7xa53VnD0PeBu3/bIS2oLA7TwINvkdTsszKfX12g9f0tyA==');
$(document).data('enc2', 'U2FsdGVkX1+0CU0HGAebVgW5MaV05vfMrq83WlfCeyYarTkVCwZWNez65BLR5doYB+gTaxBqGNXMi0yKAliIIs7IkSdEXGSW65QXSq2+9NdX3wQaN2W9G6atg8hu9Pbj+s4SBFtIAO9Z/1CiyrTwQ==');
function dec(encrypted){
  // get password when function activates
  var pass = $('#cake').val();  
  var decrypted = CryptoJS.AES.decrypt(encrypted, pass).toString(CryptoJS.enc.Utf8);
  return decrypted;
}
//var whisper = ;
//var enc = CryptoJS.AES.encrypt("www.google.com", "secret").toString();

$('#whisper').on( "click", function() {   
   var url = dec($(document).data('enc1'));
   console.log(url);
   window.open(`https://${url}`, '_blank');
});
$('#roar').on( "click", function() {   
   var url = dec($(document).data('enc2'));
   console.log(url);
   window.open(`https://${url}`, '_blank');
});