import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Check, PhoneCall } from 'lucide-react'

export const FAQ2 = () => {
  const faqs = [
    {
      id: 'faq-1',
      question: 'This is the start of something new',
      answer:
        'Managing a small business today is already tough. Avoid further complications by ditching outdated, tedious trade methods. Our goal is to streamline SMB trade, making it easier and faster than ever.'
    }
    // ... add more FAQ items here
  ]

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex text-center justify-center items-center gap-4 flex-col">
            <Badge variant="outline">FAQ</Badge>
            <div className="flex gap-2 flex-col">
              <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
                This is the start of something new
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
                Managing a small business today is already tough. Avoid further complications by ditching outdated,
                tedious trade methods. Our goal is to streamline SMB trade, making it easier and faster than ever.
              </p>
            </div>
            <div>
              <Button className="gap-4" variant="outline">
                Any questions? Reach out <PhoneCall className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="max-w-3xl w-full mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}
