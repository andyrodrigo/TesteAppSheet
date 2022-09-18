function test(){

    const url = "https://script.googleusercontent.com/macros/echo?user_content_key=zcqhMQv7MkxfmZ8L8daPl2fxLi7wlSDjRFHKNVcUPeL5AdM4LxguVd5UEzQk1W1xrwcy2rRRx2qGLMPOV7xXNI9a4PyW-1z_m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnE5uNC60IuojsVfj0cx1GHwZrCElKNIYn-XeVe7fWMJv_Itwg3-o0OPQ5v1iCsq0xIPWaifCIRLu2Qc9bo8O-KjcYZ0_bPEzatz9Jw9Md8uu&lib=MrXvo5UBjmhZctIwbbiQ2Ld8KCN6_uD6b"

    fetch( url ).then( d => d.json() ).then(
        d => {
            document.getElementById( "app" ).textContent = d[0].status;
        });
}

const btn = document.getElementById( "btn" );
btn.addEventListener( "click" , test );