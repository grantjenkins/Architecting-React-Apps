import Image from "next/image";
import AddToCartButton from "@/ui/components/Button/AddToCartButton";

export const revalidate = 300;

export default async function Seasonal() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/pies?category=seasonal`
  );
  const pies = await res.json();

  return (
    <>
      <section className="main-content">
        <h2>
          Seasonal Pies
          <hr />
        </h2>

        <div className="gallery-wrapper">
          {pies.map((pie: any) => (
            <>
              <div key={pie.id} className="pie-item">
                <Image
                  src={pie.imageUrl}
                  alt={pie.name}
                  width={400}
                  height={200}
                />
                <AddToCartButton
                  id={pie.id}
                  name={pie.name}
                  price={pie.price}
                  imageUrl={pie.imageUrl}
                />
                <div className="pie-info">
                  <h4>{pie.name}</h4>
                  <p>${pie.price}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
}
