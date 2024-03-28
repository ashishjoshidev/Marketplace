import { getProperties } from '@/app/utils/fetchProperties';
import PropertyCard from '@/components/shared/PropertyCard';

const page = async () => {
  const properties = await getProperties();
  return (
    <div className="p-5 grid grid-cols-1 min-[575px]:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-full">
      {properties &&
        properties.map((property: any) => {
          return <PropertyCard property={property} key={property.id} />;
        })}
    </div>
  );
};

export default page;
