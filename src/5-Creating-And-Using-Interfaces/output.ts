import { getProducts, Product, Product2 } from '../lib';

export default async function updateOutput(id: string) {
  const products = await getProducts();
  const output = document.querySelector(`#${id}`);
  const html = layoutProducts(products);

  if (output && html) {
    output.innerHTML = html;
  }
}

function layoutProducts(products: Product[]) {
  const items = products.map((product) => {
    const { id, name, icon } = product;
    const productHtml = `
    <span class="card-id">#${id}</span>
      <i class="card-icon ${icon} fa-lg"></i>
    <span class="card-name">${name}</span>
    `;
    const cardHtml = `
    <li>
        <div class="card">
            <div class="card-content">
                <div class="content">
                ${productHtml}
                </div>
            </div>
        </div>
    </li>
    `;
    return cardHtml;
  });
  let productsHtml = `<ul>${items.join('')}</ul>`;
  return productsHtml;
}


let ProductAlex = {
  id: 1,
  name: 'name',
  icon: 'icon.jpg',
  description: 'description',
}

function consumeProduct(product: Product2) : void{
  console.log(product);
}

console.log('####### spread product #######');
consumeProduct({...ProductAlex, description: 'description2'});
