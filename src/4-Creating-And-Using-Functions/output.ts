import { create } from 'domain';
import { stringify } from 'querystring';
import { productsURL } from '../lib';

const prefix = '🐉 ';

type ProductType = {
  id: number,
  name: string,
  icon?: string
}

export default async function updateOutput(id: string = 'output') {
  const products = await getProducts();
  const output = document.querySelector(`#${id}`);
  const html = layoutProducts(products);

  if(output && html) {
    output.innerHTML = html;
  }
}


function layoutProducts(products: ProductType[]) {
  const items = products.map(({ id, name, icon }) => {
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

async function getProducts() : Promise<ProductType[]> {
  const response: Response = await fetch(productsURL);
  const products: ProductType[] = await response.json();
  return products;
}

runTheLearningSamples();

function runTheLearningSamples(){
  // hoisted 
  function displayProductInfo(id: number, name: string){
    console.log(`${prefix} typed parameters`);
    console.log(`product id=${id} and name=${name}`);
  }

  displayProductInfo(100, 'Pizza');

  console.log(`${prefix} typed parameters`);
  console.log(addNumbersDeclaration(7, 11));

  function addNumbersDeclaration(x: number, y: number) {
    const sum = x + y;
    return sum;
  }


  const addNumbersExpression = function(x: number, y: number) {
    const sum = x + y;
    return sum;
  }

  console.log(`${prefix} function expression`);
  console.log(addNumbersExpression(1, 11));

  const sampleProducts =
  [
    {
      id: 10,
      name: 'Pizza slice',
      icon: 'fas fa-pizza-slice',
    },
    {
      id: 20,
      name: 'Ice cream',
      icon: 'fas fa-ice-cream',
    },
    {
      id: 30,
      name: 'Chesse',
      icon: 'fas fa-cheese',
    },
  ];

  function getProductNames(): string[] {
    return sampleProducts.map(p=> p.name);
  }

  console.log(`${prefix} return array`);
  console.log(getProductNames());

  function getProductById(id: number) : ProductType | undefined {
    return sampleProducts.find(p => p.id === id)
  }

  console.log(`${prefix} return ProductType`);
  console.log(getProductById(30));

  function displayProducts(products: ProductType[]) : void {
    const productNames = products.map(p => {
      return p.name.toLowerCase();
    });

    const msg = `Sample products includes: ${productNames.join(', ')}`;

    console.log(`${prefix} return void`);
    console.log(msg);
  }

  displayProducts(sampleProducts);

  const getRandomInt = (max: number) => Math.floor(Math.random() * max);

  function createProduct(name: string, icon?: string){
    const id = getRandomInt(1000);
    return {id,
      name, 
      icon,}
  }

  console.log(`${prefix} create product`);
  let pinapple = createProduct('pineapple', 'pine-apple.jpg');

  let mango = createProduct('mango');
  console.log(pinapple, mango);

}