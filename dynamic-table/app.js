let dynamicTable = (x,y) => {

    let arr = x; // arr lama length = 10

    let num = []; // arr panjang data arr
    let b = [];  // arr panjang bintang

    let s = [];  // arr sama dengan satu (=)

    let ss = [];  // arr sama dengan banyak 1 baris (= ada 10)
    let sss = []; // arr sama dengan banyak baris 2D (border) (= ada 10:4)

    let newarr = []; // arr baru (yg udh ada *)
    let arr2d = []; // arr 2d (yg udh ada * di buat 2D)

    // PANJANG PER DATA DLM ARRAY

    for (let i = 0; i < arr.length; i++)        // memasukkan panjang arr tiap data 
    {
        num.push(arr[i].toString().length);
    }

    let max = Math.max.apply(null, num);        // mendeklarasikan data terpanjang (dpt 6 dari index 4 = 667543)

    // SAMA DENGAN

    for (let n = 0; n < max; n++)    //  satu sama dengan (=)
    {
        s.push("=");
    }

    let simb = s.join("");    // buang koma di antara 1 sama dengan 

    for (let n = 0; n < arr.length; n++)    //  banyak sama dengan (= ada 10)
    {
        ss.push(simb);
    }

    while (ss.length>0)   // potong sama dengan  (= ada 10:4)
    {
        sss.push(ss.splice(0,y));
    }

    // BINTANG

    for (let k = 0; k < max; k++)               // bintang berdasarkan data max (dpt 6 dari index 4 = 667543)
    {
        b.push("*");
    }

    let bintang= b.join("");       // buang koma pada arr bintang

    // let y = "***";              // contoh untuk potong bintang
    // let cut = y.slice(1);
    // console.log(cut);

    // EKSEKUSI BINTANG

    for (let j = 0; j < arr.length; j++)      
    {
        newarr.push(bintang.slice(num[j].toString()) + arr[j]);    // potong bintang dengan (panjang data per item di arr) + arr tadi
    }

    // EKSEKUSI ARRAY 2D

    while (newarr.length>0)   //  potong array 1d jadi 2d
    {
        // console.log(newarr);
        arr2d.push(newarr.splice(0,y)); // index[0], banyaknya 4 item
    }

    // SLICE BORDER ATAS
    let sssa= sss.slice(0,1); // clone sss (border) (= ada 4)

    // TAMPILAN

    for (let k = 0 ; k < sssa.length; k++) 
    {     
        console.log(` +${sssa[k].join(`+`)}+`);   // border atas (1d)
    }

    for (let z = 0 ; z < arr2d.length; z++) 
    {  
        console.log(` |${arr2d[z].join(`|`)}|`);    // array 2d baru (yang sudah ada koma)
        console.log(` +${sss[z].join(`+`)}+`);  // border bawah (2d)
    }
}

dynamicTable([12,444,54643,3155,667543,8637,0,369,7516,335], 4);