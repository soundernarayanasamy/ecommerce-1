export function generateWhatsAppLink(productName: string): string {
  const phoneNumber = "8675956472"
  const message = encodeURIComponent(`I'm interested in buying: ${productName}`)
  return `https://wa.me/${phoneNumber}?text=${message}`
}

