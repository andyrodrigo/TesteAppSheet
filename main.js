//const url = "https://script.googleusercontent.com/macros/echo?user_content_key=zcqhMQv7MkxfmZ8L8daPl2fxLi7wlSDjRFHKNVcUPeL5AdM4LxguVd5UEzQk1W1xrwcy2rRRx2qGLMPOV7xXNI9a4PyW-1z_m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnE5uNC60IuojsVfj0cx1GHwZrCElKNIYn-XeVe7fWMJv_Itwg3-o0OPQ5v1iCsq0xIPWaifCIRLu2Qc9bo8O-KjcYZ0_bPEzatz9Jw9Md8uu&lib=MrXvo5UBjmhZctIwbbiQ2Ld8KCN6_uD6b";
const url = "https://script.google.com/macros/s/AKfycbwRDyafG73ztgFgO-GvRU5nz9JvVoYp8ye1TW6c1L4tNNzExsWL2WQNRGcNDbyLIqT7Rg/exec";

function test(){

    fetch( url ).then( d => d.json() ).then(
        d => {
            document.getElementById( "app" ).textContent = d[0].status;
        });
}

function test2(){

    console.log("ok")

    fetch(url ,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        //credentials: 'omit',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        //referrerPolicy: 'no-referrer',
        body: JSON.stringify( {name:"andy"} )
    });

}

const btn = document.getElementById( "btn" );
btn.addEventListener( "click" , test );
const btn2 = document.getElementById( "btn2" );
btn2.addEventListener( "click" , test2 );