
document.body.innerHTML = `<h2 class='msg'>10</h2>`
let val = document.querySelector('.msg');

setTimeout(() => {
    val.innerText = 9;
    setTimeout(() => {
        val.innerText = 8;
        setTimeout(() => {
            val.innerText = 7;
            setTimeout(() => {
                val.innerText = 6;
                setTimeout(() => {
                    val.innerText = 5;
                    setTimeout(() => {
                        val.innerText = 4;
                        setTimeout(() => {
                            val.innerText = 3;
                            setTimeout(() => {
                                val.innerText = 2;
                                setTimeout(() => {
                                    val.innerText = 1;
                                    setTimeout(() => {
                                        val.innerText = 'Happy Independence Day!!'
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)






























