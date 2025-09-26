import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { Glow } from "@/components/ui/glow";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 z-50 w-full">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-serif italic text-foreground">
              Touringengine
            </Link>
            <Link 
              href="/" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md mx-auto">
          <Mail className="h-12 w-12 text-muted-foreground mx-auto mb-6" />
          
          <h1 className="text-xl font-bold text-foreground mb-4">
            Contact Us
          </h1>
          
          <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
            Have questions about Touringengine? Get in touch with us.
          </p>

          <div className="bg-muted/20 rounded-lg p-6 border border-muted">
            <p className="text-muted-foreground text-sm mb-4">
              For inquiries, please reach out to us at:
            </p>
            <a 
              href="mailto:anna.x@castiglione.com.au" 
              className="inline-flex items-center gap-2 text-base font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
              anna.x@castiglione.com.au
            </a>
          </div>
        </div>
      </main>

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Glow
          variant="above"
          className="animate-appear-zoom opacity-0 [animation-delay:1000ms]"
        />
      </div>
    </div>
  );
}