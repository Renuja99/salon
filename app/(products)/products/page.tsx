import prisma from '@/lib/prismadb';
import ProductCard from '@/components/ui/product-card';


export default async function Store() {
  const products = await prisma.product.findMany({
    select: {
      id: true,
      blendName: true,
      description: true,
      price: true,
      productImages: {
        select: {
          imageUrl: true,
        },
      },
    },
  });

  return (
    <div>
      <div className='mx-auto max-w-7xl'>
        <div className='px-4 sm:px-6 lg:px-8 pb-24'>
          <div className='lg:grid lg:grid-cols-6 lg:gap-x-8'>
 
            <div className='mt-6 lg:col-span-6 lg:mt-6'>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2'>
                {products.map((item: any) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}