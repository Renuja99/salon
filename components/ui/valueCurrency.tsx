const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'LKR',
  });
  
  interface CurrencyProps {
    minPrice?: string | number;
  }
  
  const ValueCurrency: React.FC<CurrencyProps> = ({
    minPrice,
  }: any) => {
    return (
      <div className='font-semibold'>
        {formatter.format(Number(minPrice))} 
      </div>
    );
  };
  
  export default ValueCurrency;