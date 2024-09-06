import React, { useState } from "react"
import { useRouter } from "next/navigation"

interface ModalProps {
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const router = useRouter()

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white relative rounded-lg shadow-xl max-w-2xl w-full overflow-hidden">
        {children}
        <button
          className="absolute bottom-4 right-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => router.back()}
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default Modal
