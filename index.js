var prodAPI = 'http://localhost:1111/prod';

function start() {
    getProd(function(prod) {
        renderProd(prod);
    });  
}// hàm bất đầu
start();

function getProd(callBack) {// tạo một hàm get các khóa học từ api
    fetch(prodAPI)
        .then(function (response) {
            return response.json();
        })
        .then(callBack);
}

function renderProd(prod) {// tạo một hàm renderProd để render dữ liệu của api ra html 
    var listProdBlock  = document.querySelector('#list-product');
    console.log(listProdBlock);
    var htmls = prod.map(function (prod) {
        return `
                <div class="grid__col-2-4">
                <div class="home-product-item">
                    <div class="home-product-item-img" style="background-image:url(https://cf.shopee.vn/file/9e34ef6f26bd5cb3aef3e8fbb2bb3890_tn);"></div>
                    <h4 class="home-product-item-name">【VaeGa】Tai Nghe Bluetooth Chụp Tai Không Dây - Âm Thanh Sống Động Chất Lượng Cao - Subwoofer</h4>
                    <div class="home-product-item-price">
                        <span class="home-product-item-price-old">1.200.00đ</span>
                        <span class="home-product-item-price-new">999.000.000.000.000đ</span>
                    </div>
                    <div class="home-product-item-action">
                        <span class="action-like action-like-liked">
                            <i class="like-icon-empty far fa-heart"></i>
                            <i class="like-icon-fill fas fa-heart"></i>
                            
                        </span>
                        
                            <div class="home-product-item-rating"> 
                                <i class="home-product-item-rating-gold fas fa-star"></i>
                                <i class="home-product-item-rating-gold fas fa-star"></i>
                                <i class="home-product-item-rating-gold fas fa-star"></i>
                                <i class="home-product-item-rating-gold fas fa-star"></i>
                                <i class="home-product-item-rating-gold fas fa-star"></i>
                            </div>
                            <span class="home-product-item-sold">Đã bán 88</span>
                        
                    </div>
                    <div class="home-product-item-origin">
                        <span class="home-product-item-origin-brand">Whood</span>
                        <span class="home-product-item-oriagin-name">Nhật bản</span>
                    </div>
                    <div class="home-product-item-favourite">
                        <i class="fas fa-check"></i>
                        <span>Yêu thích </span>
                    </div>
                    <div class="home-product-item-sale-off">
                        <span class="home-product-item-sale-off-percent">10%</span>
                        <span class="home-product-item-sale-off-label">GIẢM</span>
                    </div>
                </div>
            </div>
        `;    
    });
    listProdBlock.innerHTML=htmls.join('');// xuất ra htmls
}