
document.addEventListener('alpine:init', function() {
    Alpine.data('product', () => ({ //funsi call back ini akan mengembalikan object
        items : [ // data object berbentuk aray
            {id: 1, name: 'espresso', img: 'gambar-1.jpg', price: 50000},
            {id: 2, name: 'cappuchino', img: 'gambar-2.jpg', price: 75500},        
            {id: 3, name: 'latte', img: 'gambar-3.jpg', price: 55000},        
            {id: 4, name: 'Arabica', img: 'gambar-4.jpg', price: 80000},        
            {id: 5, name: 'robusta', img: 'gambar-5.jpg', price: 100000},        
            {id: 6, name: 'Kapal api', img: 'gambar-6.jpg', price: 14500}        
        ],

    
    }))
    // menghubungkan product ke shoppinf cart ================================================================================

    Alpine.store('shoppingCart',{
        items: [],
        total: 0,
        quantity: 0,
        add(newItem){
            // cek apakah array items ada isisya dan id nya sama dengan newItem
            const cartItem = this.items.find((barang) => barang.id === newItem.id);
            // arraynya kosong 
            if(!cartItem){
                // maka push objeck berikut
                this.items.push({...newItem, quantity: 1, total: newItem.price}); 
                this.quantity++;
                this.total += newItem.price;
                //jika ada isisnya dan item duplicate
            }else{
            //maka pecah items menjadi array baru
                this.items = this.items.map((barang) => {
                    // jika id nya tidak sama 
                    if (barang.id !== newItem.id){
                        //maka keluar dari fuction dan return item
                        return barang;
                    }else{
                        // jika id nya sama maka lakukan program berikut
                        barang.quantity++;
                        barang.total = barang.price * barang.quantity;
                        this.quantity++;
                        this.total += barang.price;
                        return barang;
                    }
                })
            }
        },
        remove(id){
            const cartItem = this.items.find((barang) => barang.id === id);
            if(cartItem.quantity > 1){
                this.items = this.items.map((barang) => {
                    if(barang.id !== id){
                        return barang;
                    }else{
                        barang.quantity--;
                        barang.total = barang.price * barang.quantity;
                        this.quantity--;
                        this.total -= barang.price;
                        return barang;
                    } 
                })
            }else if(cartItem.quantity === 1){
                this.items = this.items.filter((barang) => barang.id !== id)
                this.quantity--;
                this.total -= cartItem.price;

            }
        },
    });
})


// buat format number ubah angka manjadi pecahan rupiah ==================================================================


//  form validasi


const checkoutButton = document.querySelector('.checkout-button');
checkoutButton.disabled = true;


const form = document.querySelector('#checkoutForm');

form.addEventListener('keyup', function() {
    for(let i = 0; i < form.elements.length; i++ ){
        if(form.elements[i].value.length !== 0){
            checkoutButton.classList.remove('disabled');
            checkoutButton.classList.add('disabled');
        }else{
            return false;

        }

    }
    checkoutButton.disabled = false;
    checkoutButton.classList.remove('disabled');
   
})



//  konversi rupiah ===============================================================================================

const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',  //mata uang
        currency: 'IDR', //tentukan mata uang negara nama (IDR) akan meng-konversi ke Rp
        minimumFractionDigits:0,  //supa ya ditak menampilkan nol (0) di belakang koma
    }).format(number);
};






