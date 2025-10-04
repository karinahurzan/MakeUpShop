import CustomLink from "./common/CustomLink";

export default function OneProduct({
  brand,
  type,
  name,
  price_sign,
  price,
  product_link,
  image,
  id,
}) {
  return (
    <li
      key={id}
      className="basis-[calc((100%-32px)/1)] md:basis-[calc((100%-32px)/2)] xl:basis-[calc((100%-64px)/3)] bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col justify-between h-[420px]"
    >
      {/* Image */}
      <div className="rounded-xl overflow-hidden mb-3 h-66 flex items-center justify-center">
        <img
          className="rounded-xl h-full w-full object-cover hover:scale-105 transition-transform duration-300"
          src={image}
          alt={`${brand} ${name}`}
        />
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 mb-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-1">
          {brand} <span className="text-button font-medium">{type}</span>
        </h2>
        <p className="text-sm text-gray-600 line-clamp-2 mb-2">{name}</p>
        <p className="text-base font-bold text-gray-900 mb-4">
          {`${price} ${price_sign}`}
        </p>
      </div>

      {/* Link */}
      <CustomLink name="Read more" href={product_link} />
    </li>
  );
}
