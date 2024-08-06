import Image from "next/image";
import { getCars } from "../supabase";

export const revalidate = 2;

const page = async () => {
  const { cars } = await getCars();
  return (
    <div>
      <h2>The list of our cars</h2>

      {cars.length &&
        cars.map((car) => (
          <div key={car.id}>
            <h2>{car.model}</h2>
            <Image alt="car image" width={50} height={50} src={car.imageUrl} />
          </div>
        ))}
    </div>
  );
};

export default page;
