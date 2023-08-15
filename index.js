import puppeteer from "puppeteer";

(async () => {
    const browser = await puppeteer.launch({headless: "new"});
    const page = await browser.newPage();
    await page.goto("https://www.xn--tiendamipaal-jhb.com.ar/ofertas/");
    const resultado = await page.evaluate(() => {
        let productos = [];
        let items = document.querySelectorAll('.item-info-container');
        for(let item of items){
            let producto = {}
            producto.nombre = item.childNodes[1].innerText;
            producto.precio = item.childNodes[3].childNodes[3].innerText;
            productos.push(producto);
        }
        return productos;
    })
    console.log(resultado);;
    browser.close();
})();