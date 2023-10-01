// import Gallery from '@/components/gallery';
// import Navbar from '@/components/Store/product-nav';
// import Container from '@/components/ui/container';
// import Info from '@/components/ui/info';
// import ToastProvider from '@/providers/toast-provider';
import prisma from '@/lib/prismadb';

const ProductPage = async ({ params }: any) => {


  const blend = await prisma.product.findUnique({
    where: {
      id: params.id,
    },
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
      <ToastProvider />
      <Navbar />

      <div className='bg-white'>
        <Container>
          <div className='px-4 py-10 sm:px-6 lg:px-8'>
            <div className='mx-auto max-w-5xl lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
              {blend?.productImages?.length === 0 ? (
                <div></div>
              ) : (
                <Gallery images={blend?.productImages} />
              )}

              <div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
                {/* <Info
                  data={blend?.products}
                  bagDetails={noOfBags}
                  images={blend?.productImages}
                  description={blend?.description}
                  ingredients={blend?.ingredients}
                /> */}
              </div>
            </div>
            <hr className='my-10' />
            {/* <ProductList title="Related Items" items={suggestedProducts} />  */}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ProductPage;