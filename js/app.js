let cards = document.querySelector(".cards")
let cards2 = document.querySelector(".cards2")
let allproducts = []
let allproducts2 = []
function getdata() {
    fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => {
            allproducts = data
            showcards()
        })
}
getdata()

function showcards() {
    allproducts.map((item) => {
        cards.innerHTML += `
        <div class="bg-white shadow-sm border border-gray-200 rounded-lg p-3">
              <a href="javascript:void(0)" class="block">
                <div class="aspect-[12/11] bg-gray-100 rounded-lg p-4">
                  <img src="${item.image}" alt="Product 1"
                    class="w-full h-full object-contain" />
                </div>
                <div class="flex gap-2 mt-4">
                  <h5 class="text-base font-semibold text-slate-900">${item.title}</h5>
                  <h6 class="text-base text-slate-900 font-bold ml-auto">$ ${item.price}</h6>
                </div>
                <p class="text-slate-600 text-[13px] mt-2">${item.title}</p>
              </a>
              <div class="flex items-center gap-2 mt-6">
                <div
                  class="bg-pink-200 hover:bg-pink-300 w-12 h-9 flex items-center justify-center rounded-lg cursor-pointer" title="Wishlist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-pink-600 inline-block" viewBox="0 0 64 64">
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"></path>
                  </svg>
                </div>
                <button type="button" class="text-sm px-2 py-2 font-medium cursor-pointer w-full bg-indigo-600 hover:bg-indigo-700 text-white tracking-wide ml-auto outline-none border-none rounded-lg">Add to cart</button>
              </div>
            </div>
        `
    })
}
showcards()
function getdata2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => {
            allproducts2 = data
            showcards2()
        })
}
getdata2()
function showcards2() {
    allproducts2.map((item) => {
        cards2.innerHTML += `
  <div class="border border-gray-300 rounded-md overflow-hidden">
            <div class="w-full aspect-square bg-gray-50">
              <img src="https://readymadeui.com/team-1.webp" class="w-full h-full object-cover object-top" />
            </div>

            <div class="p-4">
              <h4 class="text-slate-900 text-base font-semibold">${item.name}</h4>
              <p class="text-slate-600 text-xs mt-1">${item.username}</p>

              <div class="mt-4">
                <p class="text-slate-600 text-sm leading-relaxed">${item.address.street},${item.address.city}</p>
              </div>
            </div>
          </div>
        `
    })
}
showcards2()