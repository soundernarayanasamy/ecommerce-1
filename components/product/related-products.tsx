import Image from "next/image"
import Link from "next/link"

interface RelatedProductsProps {
  currentProductId: number
  products: Array<{
    id: number
    name: string
    price: number
    image: string
  }>
}

export default function RelatedProducts({ currentProductId, products }: RelatedProductsProps) {
  return (
    <div className="mt-20">
      <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products
          .filter((p) => p.id !== currentProductId)
          .slice(0, 4)
          .map((relatedProduct) => (
            <Link key={relatedProduct.id} href={`/product/${relatedProduct.id}`} className="group">
              <div className="bg-white rounded-lg overflow-hidden mb-3">
                <Image
                  src={relatedProduct.image || "/placeholder.svg"}
                  alt={relatedProduct.name}
                  width={300}
                  height={300}
                  className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="font-medium text-sm sm:text-base line-clamp-1">{relatedProduct.name}</h3>
              <p className="font-bold mt-1">${relatedProduct.price.toFixed(2)}</p>
            </Link>
          ))}
      </div>
    </div>
  )
}

