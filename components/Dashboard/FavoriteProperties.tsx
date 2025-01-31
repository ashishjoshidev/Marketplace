'use client';
import { useLayoutEffect, useState } from 'react';
import PropertyCard from '../shared/PropertyCard';
import { useAddress } from '@thirdweb-dev/react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '../ui/card';

const FavoriteProperties = () => {
  const [isLoading, setLoading] = useState(true);
  const [properties, setProperties] = useState<any>([]);
  const address = useAddress();

  const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;

  const requestOptions = {
    method: 'GET',
    headers: {
      authorization: `Bearer ${secretKey}`,
    },
  };

  const fetchProperties = async () => {
    setLoading(true);
    const data = await fetch(
      `https://libertum--marketplace.azurewebsites.net/users/${address}`,
      requestOptions
    );
    const info = await data.json();

    setProperties(info.favoriteProperties);
    setLoading(false);
  };
  useLayoutEffect(() => {
    fetchProperties();
  }, []);
  return (
    <>
      {properties.length > 0 ? (
        <div className="p-5 grid grid-cols-1 min-[575px]:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-full">
          {properties.map((property: any) => {
            return <PropertyCard property={property} key={property.id} />;
          })}
        </div>
      ) : isLoading ? (
        <div className="p-5 grid grid-cols-1 min-[575px]:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-full">
          <Card>
            <CardContent className="h-480 p-0">
              <div className="flex flex-col space-y-3 w-full">
                <Skeleton className="h-[255px] bg-black bg-opacity-5 w-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px] bg-black bg-opacity-5" />
                  <Skeleton className="h-4 w-[200px] bg-black bg-opacity-5" />
                  <Skeleton className="h-4 w-[250px] bg-black bg-opacity-5" />
                  <Skeleton className="h-4 w-[200px] bg-black bg-opacity-5" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="h-480 p-0">
              <div className="flex flex-col space-y-3 w-full">
                <Skeleton className="h-[255px] bg-black bg-opacity-5 w-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px] bg-black bg-opacity-5" />
                  <Skeleton className="h-4 w-[200px] bg-black bg-opacity-5" />
                  <Skeleton className="h-4 w-[250px] bg-black bg-opacity-5" />
                  <Skeleton className="h-4 w-[200px] bg-black bg-opacity-5" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="h-480 p-0">
              <div className="flex flex-col space-y-3 w-full">
                <Skeleton className="h-[255px] bg-black bg-opacity-5 w-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px] bg-black bg-opacity-5" />
                  <Skeleton className="h-4 w-[200px] bg-black bg-opacity-5" />
                  <Skeleton className="h-4 w-[250px] bg-black bg-opacity-5" />
                  <Skeleton className="h-4 w-[200px] bg-black bg-opacity-5" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-2 justify-center items-center min-h-screen">
          <h3 className="text-lg font-bold">There are no saved properties</h3>

          <Link href="/">
            <Button className="bg-teal-500 rounded-[5px] text-white text-center hover:bg-teal-500 min-w-[164px] max-sm:w-full">
              Return to marketplace
            </Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default FavoriteProperties;
