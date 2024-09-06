"use client"

import Image from "next/image"

import Modal from "@/components/modal"
import { products } from "@/app/data/products"

export default function ProductModal({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === parseInt(params.id))

  if (!product) {
    return null
  }

  return (
    <Modal>
      <div className="flex">
        <div className="w-1/2 relative h-96">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-1/2 p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {product.name}
          </h2>
        </div>
      </div>
    </Modal>
  )
}
