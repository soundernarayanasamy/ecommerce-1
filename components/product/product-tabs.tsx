"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProductTabsProps {
  product: {
    longDescription: string
    ingredients: string
    howToUse: string
  }
}

export default function ProductTabs({ product }: ProductTabsProps) {
  return (
    <Tabs defaultValue="description">
      <TabsList className="w-full border-b justify-start rounded-none bg-transparent h-auto p-0">
        <TabsTrigger
          value="description"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary bg-transparent px-4 py-2"
          suppressHydrationWarning
        >
          Description
        </TabsTrigger>
        <TabsTrigger
          value="ingredients"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary bg-transparent px-4 py-2"
          suppressHydrationWarning
        >
          Ingredients
        </TabsTrigger>
        <TabsTrigger
          value="how-to-use"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary bg-transparent px-4 py-2"
          suppressHydrationWarning
        >
          How to Use
        </TabsTrigger>
      </TabsList>
      <TabsContent value="description" className="pt-6">
        <p className="text-gray-600 leading-relaxed">{product.longDescription}</p>
      </TabsContent>
      <TabsContent value="ingredients" className="pt-6">
        <p className="text-gray-600 leading-relaxed">{product.ingredients}</p>
      </TabsContent>
      <TabsContent value="how-to-use" className="pt-6">
        <p className="text-gray-600 leading-relaxed">{product.howToUse}</p>
      </TabsContent>
    </Tabs>
  )
}

