function update() {
    $.getJSON('/cron/status.json').done(function(res) {
        $('#strong-ppemerintah').html(res.kota.state);
        $('#strong-pems').html(res.kota.ems);
        $('#strong-pmekanik').html(res.kota.mekanik);
        $('#strong-ppedagang').html(res.kota.pedagang);   
        $('#strong-ptotl').html(res.kota.players);    
        $('#progress-ppemerintah').attr('aria-valuenow', res.website.state).css('width', res.website.state + '%');
        $('#progress-pems').attr('aria-valuenow', res.website.ems).css('width', res.website.ems + '%');
        $('#progress-pmekanik').attr('aria-valuenow', res.website.mekanik).css('width', res.website.mekanik + '%');
        $('#progress-ppedagang').attr('aria-valuenow', res.website.pedagang).css('width', res.website.pedagang + '%');
        $('#progress-ptotl').attr('aria-valuenow', res.website.ptotl).css('width', res.website.ptotl + '%');
    });
}


update();
var interval = window.setInterval(update, 30000);