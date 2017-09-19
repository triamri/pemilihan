
var jumlahPemilih = 0;

var pilih_singa = 0;

var pilih_george = 0;

var pilih_ape = 0;

var programPilihan = ['program si SINGA ingin membuat food court gratis untuk para binatang yang terdaftar dalam program ingin makan', 'program si GEORGE ingin para penghuni hutan selalu menjaga kelestarian','program si APE ingin membuat perpustakaan dan sekolah gratis']

function dataPemilih(){
    jumlahPemilih = prompt('Isi Jumlah Pemilih :');
    return jumlahPemilih;
}

function cekCalon(cek){
    if ( cek === 1 ) {
        
        alert(programPilihan[0]);

    } else if ( cek === 2 ){
        
        alert(programPilihan[1]);

    } else {

        alert(programPilihan[2]);

    }

    return;
}

function pilihCalon(pilih){

    var hasil = pilih_singa + pilih_george + pilih_ape; 

if (jumlahPemilih>0) {

    if ( hasil === Number(jumlahPemilih) ){

        alert('maaf, Data pemilih sudah '+ hasil);

    }else{
    
        if ( pilih === 1 ) {

            pilih_singa +=1;
            
        } else if ( pilih === 2 ) {

            pilih_george += 1;

        } else {

            pilih_ape += 1;

        }
    }

} else {

    alert('maaf, isi dulu jumlah pemilih');

}

    return;

}

function hasilAkhir(){
    
    var hasil = pilih_singa + pilih_george + pilih_ape;

    if ( hasil > 0 ) {
    
        var persen_singa = (pilih_singa / hasil) * 100;
        var persen_george = (pilih_george / hasil) * 100;
        var persen_ape = (pilih_ape / hasil) * 100;

        document.writeln('Total Data Pemilih : ' + hasil +' Dari Data Pemilih Yang Terdaftar ' + jumlahPemilih + '<br />');
        document.writeln('Si Singa Mendapat Suara Sebesar : ' + persen_singa + '% <br />');
        document.writeln('Si George Mendapat Suara Sebesar : ' + persen_george + '% <br />');
        document.writeln('Si Ape Mendapat Suara Sebesar : ' + persen_ape + '% <br />');

    } else {

        alert('maaf, pemilih calon raja hutan');
    
    }
    
    return;
}